import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import PurchaseView from '../views/PurchaseView.vue'
import NotFoundView from '../views/NotFoundView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/purchase',
    name: 'purchase',
    component: PurchaseView,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
