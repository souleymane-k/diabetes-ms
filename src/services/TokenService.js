import config from '../config.js'

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.API_KEY)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.API_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.API_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
}

export default TokenService