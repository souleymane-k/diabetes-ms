import React from 'react';

export default React.createContext({
  results:[],
  months:[],
  postLogin: () => {},
  createUser: () => {},
  deleteUser: () => {},
  addMonth:()=>{},
  getResults: () => {},
  addResults: () => {},
  deleteResults: () => {},
  updateResults:()=>{}
})