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
import config  from '../../config.js'
import TokenService from '../../services/TokenService'
import './App.css';
import EditResult from '../EditResult/EditResult';

class App extends Component {
  
  state={
    results:[],
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

  
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/results`,{
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'authorization':`bearer ${TokenService.getAuthToken()}`
    }
  })
    .then((response) => response.json())
    .then((json)=> this.setState({results: json}))
    
 }
 handleDeleteNote = resultId => {
  this.setState({
      results: this.state.results.filter(result => result.id !== resultId)
  });
};
handleAddResult = result => {
  this.setState({
      results: [...this.state.results, result]
  })
}
handleAddMonth = month => {
  this.setState({
      results: [...this.state.results, month]
  })
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
                <Route path={'/home'} component={Result}/>
                <PrivateRoute path={'/AddResult'} component={AddResult}/>
                <PrivateRoute path={'/editresult/:id'} component={EditResult}/>
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
