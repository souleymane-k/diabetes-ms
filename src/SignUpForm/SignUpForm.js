import React, {Component} from 'react';


export default class SignUpForm extends Component {

  render() {
    
    return (
      <form
        className='signUpForm-form'
       
      >
        <fieldset>
          <h2>Create an account</h2>
          <label className='signUpForm-form__user-name-label' htmlFor='signUpForm-form__user-name'>
            Username
          </label>
          <input
            type='text'
            name='user_name'
            id='SignUpForm-form__user-name'
            // value='user_name'
            // placeholder='username'
            required
          />
          <label className='signUpForm-form__email-label' htmlFor='signUpForm-form__email'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='SignUpForm__email'
            value='email'
            required
          />
          <label className='signUpForm-form__password-label' htmlFor='signUpForm-form__password'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='SignUpForm-form__password'
            value='password'
            placeholder='password'
            required
          />
          <label className='SignUpForn-form__password-repeat-label' htmlFor='signUpForm-form__password-repeat'>
            Confirm Password
          </label>
          <input
            type='password'
            name='passwordRepeat'
            id='SignUpForn-form__password-repeat'
            value='passwordRepeat'
            placeholder='password'
            required
          />
          <button>Submit</button>
        </fieldset>
  
      </form>
    );
  }
};