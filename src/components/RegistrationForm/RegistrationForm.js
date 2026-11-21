import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'

export default class RegistrationForm extends Component {
  state = { error: null, submitting: false }

  handleSubmit = async event => {
    event.preventDefault()
    const form = event.currentTarget
    const username = form.username.value.trim()
    const email = form.email.value.trim()
    const password = form.password.value
    const passwordRepeat = form.passwordRepeat.value
    if (password !== passwordRepeat) return this.setState({ error: 'Passwords do not match' })
    if (password.length < 8) return this.setState({ error: 'Password must be at least 8 characters' })
    this.setState({ error: null, submitting: true })
    try {
      await AuthApiService.createUser({ username, email, password })
      this.props.onLoginSuccess()
    } catch (error) { this.setState({ error: error.message, submitting: false }) }
  }

  render() {
    return <form className='signUpForm-form' onSubmit={this.handleSubmit}><fieldset className='registrationForm'><h3>Create an account</h3>{this.state.error && <p role='alert' className='form-error'>{this.state.error}</p>}<div className='form-group'><label htmlFor='register-username'>Username</label><input id='register-username' name='username' required /></div><div className='form-group'><label htmlFor='register-email'>Email</label><input id='register-email' name='email' type='email' required /></div><div className='form-group'><label htmlFor='register-password'>Password</label><input id='register-password' name='password' type='password' minLength='8' required /></div><div className='form-group'><label htmlFor='register-confirm'>Confirm Password</label><input id='register-confirm' name='passwordRepeat' type='password' minLength='8' required /></div><button className='btn' type='submit' disabled={this.state.submitting}>{this.state.submitting ? 'Creating...' : 'Submit'}</button></fieldset></form>
  }
}
