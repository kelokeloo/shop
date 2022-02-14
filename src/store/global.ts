import { defineStore } from "pinia";

export default defineStore('global', {
  state: ()=>{
    return {
      serverUrl: 'http://localhost:3001',
      isLogin: false
    }
  },
  getters: {

  },
  actions: {
    setIsLogin(bool: boolean){
      this.isLogin = bool
    }
  }
  

})