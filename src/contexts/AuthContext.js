// import React, {Component} from 'react'
// import TokenService from '../services/TokenService'
// import AuthApiService from '../services/auth-api-service'

// const AuthContext = React.createContext({
//   logout: () => {},
//   login: () => {},
//   setCurrentUser: () => {},
//   clearError: () => {},
//   hasAuth: false,
//   currentUser: null,
//   error: null
// });

// export default AuthContext

// export class AuthProvider extends Component {
//   state = {
//     hasAuth: TokenService.hasAuthToken(),
//     currentUser: null,
//     error: null
//   }

//   async componentDidMount() {
//    this.getCurrentUser()
//   }

//   async getCurrentUser() {
//     if (TokenService.hasAuthToken()) {
//       try {
//         const user = await AuthApiService.getCurrentUser()
//         this.setState({currentUser: user})
//       } catch(err) {
//         this.setState({error: err.message})
//       }
//     }
//   }
  
//   login = (token) => {
//     TokenService.saveAuthToken(token)
//     this.setState({hasAuth: true})
//   }

//   logout = () => {
//     TokenService.clearAuthToken()
//     this.setState({hasAuth: false})
//   }

//   setCurrentUser = (user) => {
//     this.setState({currentUser: user})
//   }

//   clearError = () => {
//     this.setState({error: null})
//   }

//   render() {
//     return (
//       <AuthContext.Provider value={{
//         ...this.state,
//         login: this.login,
//         logout: this.logout,
//         setCurrentUser: this.setCurrentUser,
//         clearError: this.clearError
//       }}>
//         {this.props.children}
//       </AuthContext.Provider>
//     )
//   }
// }

// export const withAuthContext = Component => (
//   props => (
//     <AuthContext.Consumer>
//       {context => <Component authContext={context} {...props} />}
//     </AuthContext.Consumer>
//   )
// )

import React from 'react';

const AuthContext = React.createContext({
  setSignIn: () => {},
  setSignOut: () => {},
  setUsername: () => {},
  setUserId: () => {},
  setUser: () => {},
  user: {},
  username: '',
  userid: null,
  error: null,
  setError: () => {},
  clearError: () => {},
});

export default AuthContext;

export class AuthProvider extends React.Component {
  state = {
    error: null,
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setSignIn = () => {
    this.setState({ signin: true });
  };

  setSignOut = () => {
    this.setState({ signin: false });
  };

  setUsername = username => {
    this.setState({ username });
  };

  setUserId = userid => {
    this.setState({ userid });
  };

  setUser = (username, userid) => {
    this.setState({ user: { username, userid } });
  };

  render() {
    const value = {
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      signin: this.state.signin,
      setSignIn: this.setSignIn,
      setSignOut: this.setSignOut,
      setUsername: this.setUsername,
      username: this.state.username,
      password:this.state.password,
      setUserId: this.setUserId,
      userid: this.state.userid,
      setUser: this.setUser,
      user: this.state.user,
    };

    return (
      <AuthContext.Provider value={value}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
