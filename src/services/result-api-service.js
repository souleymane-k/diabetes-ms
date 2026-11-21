import config from '../config'
import { parseJson, authHeaders } from './auth-api-service'
import TokenService from './TokenService'

const ResultsApiService = {
  async postResult(result) {
    const res = await fetch(`${config.API_ENDPOINT}/results`, {
      method: 'POST', headers: authHeaders(TokenService.getAuthToken()), body: JSON.stringify(result),
    })
    return parseJson(res)
  },
  async getUserResults() {
    const res = await fetch(`${config.API_ENDPOINT}/results`, { headers: authHeaders(TokenService.getAuthToken()) })
    return parseJson(res)
  },
  async getSummary() {
    const res = await fetch(`${config.API_ENDPOINT}/results/summary`, { headers: authHeaders(TokenService.getAuthToken()) })
    return parseJson(res)
  },
  async deleteResult(resultId) {
    const res = await fetch(`${config.API_ENDPOINT}/results/${resultId}`, {
      method: 'DELETE', headers: authHeaders(TokenService.getAuthToken()),
    })
    if (!res.ok) throw await parseJson(res)
  },
  async getResultById(resultId) {
    const res = await fetch(`${config.API_ENDPOINT}/results/${resultId}`, { headers: authHeaders(TokenService.getAuthToken()) })
    return parseJson(res)
  },
  async patchResult(resultId, data) {
    const res = await fetch(`${config.API_ENDPOINT}/results/${resultId}`, {
      method: 'PATCH', headers: authHeaders(TokenService.getAuthToken()), body: JSON.stringify(data),
    })
    if (!res.ok) await parseJson(res)
  },
}

export default ResultsApiService
