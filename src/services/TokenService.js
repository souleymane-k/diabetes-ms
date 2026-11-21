import config from '../config.js'

const TokenService = {
  saveAuthToken(token) { window.localStorage.setItem(config.API_TOKEN, token) },
  getAuthToken() { return window.localStorage.getItem(config.API_TOKEN) },
  clearAuthToken() { window.localStorage.removeItem(config.API_TOKEN) },
  hasAuthToken() { return !!TokenService.getAuthToken() },
}

export default TokenService
