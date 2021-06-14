import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Main from '../views/pages/Main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Login
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        component: Main
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
