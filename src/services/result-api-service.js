import config from '../config';
import TokenService from './TokenService';

const ResultsApiService = {
  postResult(result) {
    return fetch(`${config.API_ENDPOINT}/results`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(result),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getUserResults(userid) {
    return fetch(`${config.API_ENDPOINT}/results/users/${userid}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  deleteResult(result_id) {
    return fetch(`${config.API_ENDPOINT}/results/${result_id}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : 1
      )
  },
  getResultById(result_id) {
    return fetch(`${config.API_ENDPOINT}/results/${result_id}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  patchResult(result_id, newResultData) {
    return fetch(`${config.API_ENDPOINT}/results/${result_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newResultData)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : 1
      )
  }
}

export default ResultsApiService;