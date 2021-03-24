import React, {Component} from 'react';
import './LogInForm.css'



class LogInForm extends Component {

  render() {
    
    return (
      <form className="logInform">
        <fieldset>
          <h3>Log in</h3>
          <label
            className="login-form__user-name-label"
            htmlFor="login-form__user-name"
          >
            username
          </label>
          <input
            type="text"
            name="user_name"
            id="login-form__user-name"
            placeholder="username"
            required
          />
          <label
            className="login-form__password-label"
            htmlFor="login-form__password"
          >
            password
          </label>
          <input
            type="password"
            name="password"
            id="login-form__password"
            placeholder="password"
            required
          />
          <input type="submit" value="submit" />
        </fieldset>
      </form>
    );
  }
}

export default LogInForm;
