import config from '../config.js'

const parseJson = async response => {
  const body = await response.json().catch(() => ({}))
  if (!response.ok) {
    const error = new Error(body.error?.message || body.message || 'Request failed')
    error.status = response.status
    throw error
  }
  return body
}

const authHeaders = token => ({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Bearer ${token || ''}`,
})

const TokenService = {
  saveAuthToken(token) { window.localStorage.setItem(config.API_TOKEN, token) },
  getAuthToken() { return window.localStorage.getItem(config.API_TOKEN) },
  clearAuthToken() { window.localStorage.removeItem(config.API_TOKEN) },
  hasAuthToken() { return !!TokenService.getAuthToken() },
}

const AuthApiService = {
  async postLogin(usernameOrEmail, password) {
    const res = await fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: usernameOrEmail, username: usernameOrEmail, password }),
    })
    const data = await parseJson(res)
    TokenService.saveAuthToken(data.authToken)
    return data
  },
  async createUser(userData) {
    const res = await fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(userData),
    })
    const data = await parseJson(res)
    return data
  },
}

export { parseJson, authHeaders }
export default AuthApiService
