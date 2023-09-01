import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue'),
    },
    {
      path: '/firebase',
      name: 'firebase',
      component: () => import('../views/FirebaseAuthView.vue'),
    },
    {
      path: '/socials',
      name: 'socials',
      component: () => import('../views/SocialAuthView.vue'),
    },
    {
      path: '/aws',
      name: 'aws',
      component: () => import('../views/AWSAuthView.vue'),
    }
  ]
  
})

export default router
