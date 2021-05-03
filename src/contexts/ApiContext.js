import React from 'react';

export default React.createContext({
  results:[],
  months:[],
  login: () => {},
  createUser: () => {},
  deleteUser: () => {},
  addMonth:()=>{},
  getResults: () => {},
  addResults: () => {},
  deleteResults: () => {},
  updateResults:()=>{}
})