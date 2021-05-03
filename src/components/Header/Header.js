import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
  return (
    <div className='headerContainer'>
      <div className="LogoLink">
        <Link to='/'className='LogoLink'><h2>Diabetes Managing System</h2></Link>
      </div>
      <div className="navButton">
      <div className='LoginPage'>
          <Link to ='/login' className='LoginPage'> Sign In</Link>
      </div>
      <div className='registrationPage'>
          <Link to ='/register' className='registrationPage'>Sign Up</Link>
      </div>
      <div className='result'>
          <Link to ='/AddResult' className='result'>ADD Result</Link>
      </div>
      <div className='month'>
          <Link to ='/AddMonth' className='month'>ADD Month</Link>
      </div>
    </div>
    </div>
  );
}
}
 export default Header;

//  <header>
//   <div class="logo"><h1>Souleymane Kone</h1></div>
//     <nav>
//        <ul class="menu">
//          <li><a href="#home">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#project">Projects</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//    </nav>
// </header>