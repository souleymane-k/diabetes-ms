import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import ApiContext from '../../contexts/ApiContext';
import { Button, Input } from '../Direction/Direction'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }
  static contextType = ApiContext;
  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const {username, password} = ev.target

    AuthApiService.login({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <fieldset>
        <div className='form-group'>
          <label htmlFor='LoginForm__username'>
            Username
          </label>
          <Input
            required
            name='username'
            id='LoginForm__username'>
          </Input>
        </div>
        <div className='form-group'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <Input
            required
            name='password'
            type='password'
            id='LoginForm__password'>
          </Input>
        </div>
        <Button type='submit'>
          Login
        </Button>
        </fieldset>
      </form>
    )
  }
}








// import React, {Component} from 'react';
// import './LoginForm.css';
// import AuthContext from '../../contexts/AuthContext'
// import AuthApiService from '../../services/auth-api-service'
// import { withAppContext } from '../../contexts/AppContext';



// class LoginForm extends Component {
//   static contextType = AuthContext
//   state = {
//     error: null,
//     username: '',
//     password: ''
//   }
//   handleSubmit = async (e) => {
//     e.preventDefault();
//     this.setState({error: null})
//     const {setLoading} = this.props.appContext
//     try {
//       setLoading(true)
//       const {username, password} = this.state;
//       const response = await AuthApiService.login(username, password)
//       setLoading(false)

//       this.context.login(response.authToken)
//       this.context.setCurrentUser(response.user)
//     } catch(err) {
//       this.setState({error: err.message}, setLoading(false))
//     }
//   }

//   componentWillUnmount() {
//     this.setState({error: null})
//   }

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({
//       [name]: value
//     })
//   }

//   render() {
    
//     return (
//       <form className='js-login-form' action='#' onSubmit={(e) => this.handleSubmit(e)}>
//       <div className='error-msg'>{this.state.error}</div>
//       <fieldset>
//       <div className='form-group'>
//         <label htmlFor='username' >Username</label>
//         <input 
//         id='username' 
//         name='username' 
//         type='text' 
//         value={this.state.username} 
//         onChange={this.handleChange}/>
//       </div>

//       <div className='form-group'>
//         <label htmlFor='password'>Password</label>
//         <input 
//         id='password' 
//         name='password' 
//         type='password' 
//         value={this.state.password} 
//         onChange={this.handleChange}/>
//       </div>

//       <div className='form-controls'>
//         <button className='button full outline' type='submit'>Login</button>
//       </div>
//       </fieldset>
//     </form>
//     );
//   }
// }

// export default withAppContext(LoginForm);
