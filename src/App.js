import React, {Component} from 'react';

import {Route} from 'react-router-dom';
import './App.css'
import Option from './Option/Option';
import InputListItem from './InputListItem/InputListItem';
import Header from './Header/Header';
import LogInForm from './LogInForm/LogInForm';
import SignUpForm from './SignUpForm/SignUpForm';
import HomePage from './HomePage/HomePage';
import {API_ENDPOINT} from './config';






class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOption: ''
    }
   }
  
   componentDidMount() {
    fetch(`${API_ENDPOINT}/months`).then((response) => response.json()).then((json)=> this.setState({months: json}))
    
    fetch(`${API_ENDPOINT}/results`).then((response) => response.json()).then((json)=> this.setState({results:  json}))

 }


  updateFilterOption = (event) => {
    this.setState({
      filterOption: event.target.value
    })
  }

  renderMainRoute(){
    const{filterOption} = this.state;
    return(
      <>
      {['/','/months/:month_id'].map(path =>(
        <Route
        exact
        key={path}
        path={path}
        render={routeProps =>(
          <InputListItem 
      months={this.props.months}
      filterOption={filterOption}
      {...routeProps}
      />

        )}
        />
      ))}
<Route path="/results/:result_id" component={InputListItem} />
      </>
    )
  }

  renderOptionRoute(){
    const{filterOption} = this.state;
    return(
      <>
      {['/'].map(path =>(
        <Route
        exact
        key={path}
        path={path}
        render={routeProps =>(
          <Option 
          filterOption={filterOption}
          handleFilterChange={this.updateFilterOption}
      {...routeProps}
      />

        )}
        />
      ))}
      
      </>
    )
  }




  render() {
  return (
    <>
    <header>
      <Header />
    </header>
    <main className='App'>
      <div className ="" >
    <Route exact path='/SignUpForm' component={SignUpForm} />
    <Route exact path='/logInForm' component={LogInForm} /> 
    <Route exact path='/HomePage' component={HomePage}/>
    </div>
   <div>{this.renderOptionRoute()}</div>
   <div>{this.renderMainRoute()}</div>
    </main>

    </>
   
  );
 }
}

export default App;


    