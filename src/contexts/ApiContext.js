import React from 'react';

export default React.createContext({
  results:[],
  months:[],
  setUser: () => {},
  user:{},
  getResults: () => {},
  addResult: () => {},
  deleteResult: () => {},
  updateResult:()=>{}
})