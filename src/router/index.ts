import { createRouter, createWebHistory,
  RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {path: '/', redirect: '/home'},
  {path: '/home', component: ()=>import('@/views/Home.vue')},
  {path: '/category', component: ()=>import('@/views/Category.vue')},
  {path: '/shopcar', component: ()=>import('@/views/ShopCar.vue')},
  {path: '/personal', component: ()=>import('@/views/Personal.vue')},
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router