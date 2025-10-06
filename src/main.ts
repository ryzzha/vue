import { createApp } from 'vue'
import './style.css'
import { router } from './router/index'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'


createApp(App).use(createPinia()).use(VueQueryPlugin).use(router).mount('#app')
