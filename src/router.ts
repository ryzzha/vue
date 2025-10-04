import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
// import About from '../pages/About.vue'

const routes = [
  { path: '/', component: App },
//   { path: '/about', component: About },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
