import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import PublicOnlyRoute from '../Direction/PublicOnlyRoute'
//import PrivateRoute from '../Direction/PrivateRoute'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import AddResult from '../../routes/AddResult/AddResult'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import Header from '../Header/Header'
import AuthContext from '../../contexts/AuthContext'
import { withAppContext } from '../../contexts/AppContext'
import './App.css';

class App extends Component {
  static contextType = AuthContext;

  renderAuthError = () => {
    return (
      <div className='auth-error'>
      
        <h4>Oh no!</h4>
        <p>
          There was an error trying to fetch your user information.
        </p>
        <p>
          Try Again
        </p>
      </div>
    )
  }

  componentWillUnmount() {
    this.context.clearError();
  }

  render() {
    return (
      <div className='app'>
          <Header/>
      
          <div id='page-wrap'>
            <main className='app-main' role='main'>
              {this.context.error ? this.renderAuthError() : undefined}

              <Switch>
                <PublicOnlyRoute exact path={'/'} component={LandingPage}/>
                <PublicOnlyRoute path={'/login'} component={LoginPage}/>
                <PublicOnlyRoute path={'/register'} component={RegistrationPage}/>
                {/* <PrivateRoute path={'/AddResult'} component={AddResult}/> */}
                <Route path={'/AddResult'} component={AddResult}/>
                <Route component={NotFoundPage}/>
              </Switch>
            </main>
          </div>
      </div>
    );
  }
}

export default withAppContext(App);