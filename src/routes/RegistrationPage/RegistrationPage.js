import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

export default class RegistrationPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }
  handleLoginSuccess = () => {
    const {history } = this.props
    history.push('/login')
    console.log('hello')
  }

  render() {
    return (
      <section className='RegistrationPage content'>
        {/* <h2>Create Your Account</h2> */}
        <RegistrationForm onLoginSuccess={this.handleLoginSuccess}/>
      </section>
    )
  }
}