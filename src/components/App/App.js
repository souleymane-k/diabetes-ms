import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
 import PublicOnlyRoute from '../Direction/PublicOnlyRoute'
import PrivateRoute from '../Direction/PrivateRoute'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import AddResult from '../../routes/AddResult/AddResult'
import Result from '../../routes/Result/Result'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import Header from '../Header/Header'
import ApiContext from '../../contexts/ApiContext'
// import AuthContext from '../../contexts/AuthContext'
// import { withAppContext } from '../../contexts/AppContext'
import TokenService from '../../services/TokenService'
import './App.css';

class App extends Component {
  
  state={
    user:TokenService.hasAuthToken()
  }

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
  
  setUser=(user)=>{
    this.setState({user})
  }


  render() {
    const currentValue = {
      user:this.state.user,
      setUser:this.setUser
    }
    return (

      <ApiContext.Provider value={currentValue}>

      <div className='app'>
          <Header/>
      
          <div id='page-wrap'>
            <main className='app-main' role='main'>
              {this.context.error ? this.renderAuthError() : undefined}
              <Switch>
                <PublicOnlyRoute exact path={'/'} component={LandingPage}/>
                <PublicOnlyRoute path={'/login'} component={LoginPage}/>
                <PublicOnlyRoute path={'/register'} component={RegistrationPage}/>
                <PrivateRoute path={'/Result'} component={Result}/>
                <PrivateRoute path={'/AddResult'} component={AddResult}/>
                {/* <Route exact path={'/'} component={LandingPage}/>
                <Route path={'/login'} component={LoginPage}/>
                <Route path={'/register'} component={RegistrationPage}/>
                <Route path={'/AddResult'} component={AddResult}/>  */}
                <Route component={NotFoundPage}/>
              </Switch>
            </main>
          </div>
      </div>
      </ApiContext.Provider>
    );
  }
}
export default App;
// export default withAppContext(App);