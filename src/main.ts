import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'

import './style/global.scss'

// nprogress
import 'nprogress/nprogress.css'

// pinia

import { createPinia } from 'pinia'
const pinia = createPinia()


const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
