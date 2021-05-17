import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/TokenService';
import './Header.css';

import AuthContext from '../../contexts/AuthContext';

export default class Header extends React.Component {

  static contextType = AuthContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.setUsername(null);
    this.context.setUser(null);
    this.context.setUserId(null);
  }


  // to={`/${this.context.usernname}/AddResult`
  renderLogoutLink() {
    return (
      <div className='site-nav__dir--logged-in'>
      
        <Link to={'/AddMonth'} className='addMonthlink'>
          Add Month
          </Link>
          {' '}
        <Link to={'/AddResult'} className='addResultlink'>
          Add Result
          </Link>
          {' '}
          
        <Link onClick={this.handleLogoutClick} to='/' className='logoutlink'>
          Logout
          </Link>
        
          {/* <Link to={'/Result'} className='resultlink'>
             Result
          </Link> */}
  
      </div>
    );
  };

  renderLoginLink() {
    return (
      <div className='site-nav__dir'>
        <Link to='/register' className='addResultlink'> Register</Link>
        <Link to='/login' className='addResultlink'> Login </Link>
      </div>
    );
  };

  render() {
    return (
      <nav className='site-nav'>
        <h1>
          <Link to='/'>
          Diabetes Managing System
          </Link>
        </h1>
        {
          TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()
        }
      </nav>
    );
  };
};





// import React, { Component } from 'react';
// import {Link } from 'react-router-dom';
// import ApiContext from '../../contexts/ApiContext'
// import './Header.css';

// class Header extends Component {

//   static contextType = ApiContext
//   logout=()=>{
//     this.context.setUser(null)
//   }
  
//     render() { 
//   return (
//     <div className='headerContainer'>

//       <div className="LogoLink">
//         <Link to='/'className='LogoLink'><h2>Diabetes Managing System</h2></Link>
//       </div>
//       <div className="navButton">

//         {/* {this.context.user ?(<>
          
//           <div className='result'>
//           <Link to ='/AddResult' className='result'>ADD Result</Link>
//       </div>
//       <div className='logout'>
//           <button onClick={this.logout} className='month'>Logout</button>
//       </div>
//         </>)
//         :
//         (<>
//           <div className='LoginPage'>
//           <Link to ='/login' className='LoginPage'> Sign In</Link>
//       </div>

//       <div className='registrationPage'>
//           <Link to ='/register' className='registrationPage'>Sign Up</Link>
//       </div>
//         </>)} */}
//         {this.context.user ?(<>
          
//           <div className='result'>
//           <Link to ='/AddResult' className='result'>ADD Result</Link>
//       </div>
//       <div className='logout'>
//           <button onClick={this.logout} className='month'>Logout</button>
//       </div>
//         </>)
//         :
//         (<>
//           <div className='LoginPage'>
//           <Link to ='/login' className='LoginPage'> Sign In</Link>
//       </div>

//       <div className='registrationPage'>
//           <Link to ='/register' className='registrationPage'>Sign Up</Link>
//       </div>
//         </>)}

//     </div>
    
//     </div>
//   );
// }
// }
//  export default Header;


