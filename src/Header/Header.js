import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
  return (
    <div className='headerContainer'>
      <div className="">
        <Link to='/'className='headerLink'><h2>Diabetes Managing SYstem</h2></Link>
      </div>
      <div className="navButton">
      <div className='logInForm'>
          <Link to ='/LogInForm' className='logInForm' > Log In</Link>
      </div>
      <div className='signUpForm'>
          <Link to ='/SignUpForm' className='signUpForm' >Register</Link>
      </div>
      <div className='result'>
          <Link to ='/addResult' className='signUpForm' >Add Result</Link>
      </div>
      </div>
    </div>
  );
}
}
 export default Header;