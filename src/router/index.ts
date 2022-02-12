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
  {path: '/shopcar', component: ()=>import('@/views/ShopCar.vue')},
  {path: '/personal', component: ()=>import('@/views/Personal.vue')},
  {path: '/search', name: 'search', component: ()=>import('@/views/search.vue')}
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router