import config from '../config';
import TokenService from '../services/TokenService';

const AuthApiService = {
  async postLogin(username, password) {
    const loginData = {username, password};
    const res = await fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(loginData)
    });
    return await ((!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json().then(res_1 => {
        TokenService.saveAuthToken(res_1.authToken);
        TokenService.saveVisitedObj();
      }));
  },

  // async login(username, password){
  //   const loginData = {username, password};
  //   const res = await fetch(`${config.API_ENDPOINT}/auth/login`, {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
       
  //     },
  //     body: JSON.stringify(loginData)
  //   })

  //   if (!res.ok) {
  //     return res.json().then(e => Promise.reject(e))
  //   }
  //   return res.json();
  // },

  async createUser(userData){
    const res = await fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }

    return res.json();
  },

  async getCurrentUser() {
    const res = await fetch(`${config.API_ENDPOINT}/auth/current-user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })

    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }

    return res.json();
  }
}

export default AuthApiService;






///////////////////////
// import config from '../config';
// import TokenService from '../services/TokenService';

// const AuthApiService = {
//   async login(username, password){
//     const loginData = {username, password};
//     const res = await fetch(`${config.API_ENDPOINT}/auth/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type':'application/json'
//       },
//       body: JSON.stringify(loginData)
//     })
//     .then(res =>
//       (!res.ok)
//         ? res.json().then(e => Promise.reject(e))
//         : res.json()
//     )
//     .then(res => {
//       /*
//         whenever a logint is performed:
//         1. save the token in local storage
//         2. queue auto logout when the user goes idle
//         3. queue a call to the refresh endpoint based on the JWT's exp value
//       */
//       TokenService.saveAuthToken(res.authToken)
//       // IdleService.regiserIdleTimerResets()
//       TokenService.queueCallbackBeforeExpiry(() => {
//         AuthApiService.postRefreshToken()
//       })
//       return res
//     })

//     if (!res.ok) {
//       return res.json().then(e => Promise.reject(e))
//     }
//     return res.json();
//   },

//   async createUser(userData){
//     const res = await fetch(`${config.API_ENDPOINT}/users`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(userData)
//     })

//     if (!res.ok) {
//       return res.json().then(e => Promise.reject(e))
//     }

//     return res.json();
//   },

//   async getCurrentUser() {
//     const res = await fetch(`${config.API_ENDPOINT}/auth/current-user`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${TokenService.getAuthToken()}`
//       }
//     })

//     if (!res.ok) {
//       return res.json().then(e => Promise.reject(e))
//     }

//     return res.json();
//   }
// }

// export default AuthApiService;