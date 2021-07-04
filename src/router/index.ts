import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Main from '../views/pages/Main.vue'
import Customers from "@/views/pages/Customers.vue";
import Stylists from "@/views/pages/Stylists.vue"
import Schedule from "@/views/pages/Schedule.vue"
import Reservations from "@/views/pages/Reservations.vue"
import ConfigSettings from "@/views/pages/ConfigSettings.vue"

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
        redirect: '/dashboard/summary'
      },
      {
        path: 'summary',
        component: Main
      },
      {
        path: 'customers',
        component: Customers
      },
      {
        path: 'stylists',
        component: Stylists
      },
      {
        path: 'reservations',
        component: Reservations
      },
      {
        path: 'schedule',
        component: Schedule
      },
      {
        path: 'settings',
        component: ConfigSettings
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
