import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/herosection',
      name: 'herosection',
      component: () => import('@/views/User/HeroSection/HeroView.vue')
    },
    {
      path: '/dante',
      name: 'dante',
      component: () => import('@/views/User/HeroSection/Characters/DanteView.vue')
    },
    {
      path: '/nero',
      name: 'nero',
      component: () => import('@/views/User/HeroSection/Characters/NeroView.vue')
    },
    {
      path: '/vergil',
      name: 'vergil',
      component: () => import('@/views/User/HeroSection/Characters/VergilView.vue')
    },
    {
      path: '/v',
      name: 'v',
      component: () => import('@/views/User/HeroSection/Characters/VView.vue')
    },
    {
      path: '/trish',
      name: 'trish',
      component: () => import('@/views/User/HeroSection/Characters/TrishView.vue')
    },
    {
      path: '/lady',
      name: 'lady',
      component: () => import('@/views/User/HeroSection/Characters/LadyView.vue')
    },
    {
      path: '/nico',
      name: 'nico',
      component: () => import('@/views/User/HeroSection/Characters/NicoView.vue')
    }
  ]
})

export default router