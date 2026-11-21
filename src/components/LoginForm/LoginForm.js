import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import ApiContext from '../../contexts/ApiContext'
import './LoginForm.css'

export default class LoginForm extends Component {
  static contextType = ApiContext
  state = { error: null, submitting: false }

  handleSubmit = async event => {
    event.preventDefault()
    const email = event.currentTarget.username.value.trim()
    const password = event.currentTarget.password.value
    this.setState({ error: null, submitting: true })
    try {
      await AuthApiService.postLogin(email, password)
      this.context.setUser(true)
      this.props.onLoginSuccess()
    } catch (error) { this.setState({ error: error.message, submitting: false }) }
  }

  render() {
    return <form className='login-form' onSubmit={this.handleSubmit}><fieldset className='loginForm'><div role='alert'>{this.state.error && <p className='form-error'>{this.state.error}</p>}</div><div className='form-group'><label htmlFor='LoginForm__username'>Email or Username</label><input required name='username' type='text' id='LoginForm__username' /></div><div className='form-group'><label htmlFor='LoginForm__password'>Password</label><input required name='password' type='password' id='LoginForm__password' /></div><div className='form-controls'><button className='submitButton' type='submit' disabled={this.state.submitting}>{this.state.submitting ? 'Signing in...' : 'Login'}</button></div></fieldset></form>
  }
}
