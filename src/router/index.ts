import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard/Dashboard.vue'
import Market from '../views/Market/Market.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/market',
      name: 'market',
      component: Market,
    },
  ],
})

export default router
