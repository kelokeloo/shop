import axios from "axios";


const http = axios.create({
  url: 'http://localhost:3000',
  timeout: 10000
})

// 请求拦截器
// http.interceptors.request.use(()=>{

// }, ()=>{

// })

// 响应拦截器
http.interceptors.response.use((res)=>{
  return Promise.resolve(res.data)
})

export default http

