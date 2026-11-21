import React, { Component } from 'react'
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
import TokenService from '../../services/TokenService'
import EditResult from '../EditResult/EditResult'
import './App.css'

class App extends Component {
  state = { results: [], user: TokenService.hasAuthToken(), error: null }
  setUser = user => this.setState({ user })
  handleDeleteNote = id => this.setState({ results: this.state.results.filter(result => result.id !== id) })
  handleAddResult = result => this.setState({ results: [...this.state.results, result] })

  render() {
    const currentValue = { ...this.state, setUser: this.setUser, addResult: this.handleAddResult, deleteResult: this.handleDeleteNote }
    return <ApiContext.Provider value={currentValue}><div className='app'><Header /><div id='page-wrap'><main className='app-main' role='main'><Switch><PublicOnlyRoute exact path='/' component={LandingPage} /><PublicOnlyRoute path='/login' component={LoginPage} /><PublicOnlyRoute path='/register' component={RegistrationPage} /><PrivateRoute path='/home' component={Result} /><PrivateRoute path='/AddResult' component={AddResult} /><PrivateRoute path='/editresult/:id' component={EditResult} /><Route component={NotFoundPage} /></Switch></main></div></div></ApiContext.Provider>
  }
}

export default App
