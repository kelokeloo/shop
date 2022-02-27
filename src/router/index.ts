import path from "path/posix";
import { createRouter, createWebHistory,
  RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {path: '/', redirect: '/home'},
  {
    path: '/home', 
    component: ()=>import('@/views/Home.vue'),
    children: [
      {path: '', redirect: to=>(to.path + '/recommend')},
      {path: 'recommend', component: ()=>import('@/views/home/Recommend.vue')},
      {path: '11', component: ()=>import('@/views/home/doubleEle.vue')},
      {path: 'springfestival', component: ()=>import('@/views/home/springFestival.vue')}
    ]
  },
  {path: '/category', component: ()=>import('@/views/Category.vue')},
  {path: '/shopcar', name: 'shopcar', component: ()=>import('@/views/ShopCar.vue')},
  {path: '/personal', component: ()=>import('@/views/Personal.vue')},
  {path: '/search', name: 'search', component: ()=>import('@/views/search.vue')},
  {path: '/detail/:id', name: 'detail', component: ()=>import('@/views/detail/Detail.vue')},
  {path: '/login', name: 'login', component: ()=>import('@/views/login/login.vue')},
  {path: '/login', name: 'login', component: ()=>import('@/views/login/login.vue')},
  {
    path: '/addr', 
    name: 'addr', 
    component: ()=>import('@/views/address/AddrShow.vue'),
    children: [
      { path: '', redirect: '/addr/addrshow'},
      { path: 'addrshow', name: 'addrshow', component: ()=>import('@/views/address/AddrShow.vue')},
      { path: 'addredit', name: 'addredit', component: ()=>import('@/views/address/AddrEdit.vue.vue')},
    ]
  },
  {
    path: '/pay',
    name: 'pay',
    component: ()=>import('@/views/pay/Pay.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

// 导航守卫

router.beforeEach((to, from, next)=>{
  let AuthRouterName = ['shopcar', 'addrshow', 'addredit']
  
  if(AuthRouterName.includes(to.name as unknown as string)){
    // 判断是否登录
    let token = window.sessionStorage.getItem('token')
    if(token){
      console.log('已经登陆可以继续访问');
      next()
    }
    else{
      console.log('需要登录', to.name);
      next('/login')
    }
  }
  else{
    next()
  }
  
})



export default router