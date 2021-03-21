import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css'
import Option from './Option/Option';
// import AddResults from './AddResults/AddResults';
import InputListItem from './InputListItem/InputListItem';
import Header from './Header/Header';
import LogInForm from './LogInForm/LogInForm';
import SignUpForm from './SignUpForm/SignUpForm';
import HomePage from './HomePage/HomePage';
import AddResults from './AddResults/AddResults'


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      filterOption: ''
    }

  
   }

  updateFilterOption = (event) => {
    this.setState({
      filterOption: event.target.value
    })
  }


  render() {
  return (
    <>
    <header>
      <Header />
    </header>

    <main className='App'>
      <Switch>
    <Route exact path='/SignUpForm' component={SignUpForm} />
    <Route exact path='/logInForm' component={LogInForm} />
    <Route exact path='/' component={HomePage}/>
    <Route exact path={'/InputListItem'} component={InputListItem}/>
    <Route exact path={'/AddResults'} component={AddResults}/>
    </Switch> 
    <Option
       filterOption={this.state.filterOption}
       handleFilterChange={this.updateFilterOption}/>
       
       <InputListItem 
      months={this.props.months}
      filterOption={this.state.filterOption}/> 

    </main>

    </>
   
  );
 }

}

export default App;


    