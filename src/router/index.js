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
      path: '/character',
      component: () => import('@/views/CharacterView.vue'),
      children: [
        {
          path: '/dante',
          name: 'dante',
          component: () => import('@/views/Characters/DanteView.vue')
        },
        {
          path: '/nero',
          name: 'nero',
          component: () => import('@/views/Characters/NeroView.vue')
        },
        {
          path: '/vergil',
          name: 'vergil',
          component: () => import('@/views/Characters/VergilView.vue')
        },
        {
          path: '/v',
          name: 'v',
          component: () => import('@/views/Characters/VView.vue')
        },
        {
          path: '/trish',
          name: 'trish',
          component: () => import('@/views/Characters/TrishView.vue')
        },
        {
          path: '/lady',
          name: 'lady',
          component: () => import('@/views/Characters/LadyView.vue')
        },
        {
          path: '/nico',
          name: 'nico',
          component: () => import('@/views/Characters/NicoView.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.fullPath == from.fullPath) {
      return savedPosition
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ top: 0 })
        }, 500)
      })
    }
  }
})

export default router
