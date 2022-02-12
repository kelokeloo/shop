import axios, {AxiosRequestConfig} from "axios";
import NProgress from 'nprogress'


const http = axios.create({
  url: 'http://localhost:3000',
  timeout: 10000
})

// 请求拦截器
http.interceptors.request.use((config: AxiosRequestConfig)=>{
  NProgress.start();
  
  return config
}, ()=>{

})


// 响应拦截器
http.interceptors.response.use((res)=>{
  NProgress.done();
  return Promise.resolve(res.data)
})

export default http

