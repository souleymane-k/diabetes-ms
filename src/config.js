// let apiPath;
// let tokenKey;
// if (process.env.NODE_ENV === 'production') {
//   apiPath = 'https://shrouded-scrubland-37554.herokuapp.com/api'
//   tokenKey = '0d0e1dbb-8d52-49f0-9dbf-570ec4f5109a'
// } else {
//   apiPath = 'http://localhost:8001/api'
//   tokenKey = '0d0e1dbb-8d52-49f0-9dbf-570ec4f5109a'
// }
// // eslint-disable-next-line 
// export default {
// //   API_ENDPOINT: apiPath,
//   API_ENDPOINT:'https://shrouded-scrubland-37554.herokuapp.com/api',
// //   TOKEN_KEY: tokenKey,
//   TOKEN_KEY: '0d0e1dbb-8d52-49f0-9dbf-570ec4f5109a'
// }


// eslint-disable-next-line 
export default {
    API_ENDPOINT : 'https://shrouded-scrubland-37554.herokuapp.com/api',
    // API_ENDPOINT: 'http://localhost:8001/api',
    API_TOKEN: process.env.NODE_ENV || '0d0e1dbb-8d52-49f0-9dbf-570ec4f5109a',
    // API_TOKEN='0d0e1dbb-8d52-49f0-9dbf-570ec4f5109a'
}