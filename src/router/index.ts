import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/me'
    },
    {
      path: '/me',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/tecnologies',
      name: 'tecnologies',
      component: () => import('../views/TecnologiesView.vue')
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
