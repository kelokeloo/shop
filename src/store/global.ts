import { defineStore } from "pinia";

interface payData {
  goodIds: number,
  count: number, // 商品数量
  imgUrl: string,
  name: string,
  price: number
}

export default defineStore('global', {
  state: ()=>{
    return {
      serverUrl: 'http://localhost:3001',
      isLogin: false,
      payListData: [] as unknown as Array<payData> 
    }
  },
  getters: {

  },
  actions: {
    setIsLogin(bool: boolean){
      this.isLogin = bool
    },
    setPayListData(args: Array<payData>){
      this.payListData.splice(0, this.payListData.length)
      args.forEach(item=>{
        this.payListData.push(item)
      })
    }
  }
  

})