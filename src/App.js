import React, {Component} from 'react';
// import {Route, Switch} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import './App.css'
import Option from './Option/Option';

import dummyStore from './dummy-store'
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
   componentDidMount() {
    setTimeout(()=>this.setState(dummyStore), 3000)

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
      {['/'].map(path =>(
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
       {/* <Route path="/LoginForm" component={LogInForm} /> */}

      </>
    )
  }

  renderRoute(){
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
       {/* <Route path="/LoginForm" component={LogInForm} /> */}

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
       <Switch>
    <Route exact path='/SignUpForm' component={SignUpForm} />
    <Route exact path='/logInForm' component={LogInForm} /> 
    <Route exact path='/HomePage' component={HomePage}/>
     {/* <Route exact path={'/InputListItem'} component={InputListItem}/>  */}
    <Route exact path={'/AddResults'} component={AddResults}/>
    {/* <Route exact path={'/Option'}  component ={Option} />  */}
    {/* <Option
       filterOption={this.state.filterOption}
       handleFilterChange={this.updateFilterOption}/> */}
       
       {/* <InputListItem 
      months={this.props.months}
      filterOption={this.state.filterOption}/>  */}
    </Switch> 

{this.renderRoute()}
{this.renderMainRoute()}

    </main>

    </>
   
  );
 }

}

export default App;


    