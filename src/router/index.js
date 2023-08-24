import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import HomeView from '@/views/HomeView.vue'

const DEFAULT_TITLE = 'Devil May Cry 5'

const scrollBehavior = (to, from, savedPosition) => {
  if (to.fullPath == from.fullPath) {
    return savedPosition
  } else if (to.fullPath == '/' && from.fullPath !== '/') {
    console.log(savedPosition)
  } else {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0 })
      }, 500)
    })
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'Devil May Cry 5' },
      component: HomeView
    },
    {
      path: '/character',
      component: () => import('@/views/CharacterView.vue'),
      children: [
        {
          path: '/dante',
          name: 'dante',
          meta: { title: 'Dante | Character' },
          component: () => import('@/views/Characters/DanteView.vue')
        },
        {
          path: '/nero',
          name: 'nero',
          meta: { title: 'Nero | Character' },
          component: () => import('@/views/Characters/NeroView.vue')
        },
        {
          path: '/vergil',
          name: 'vergil',
          meta: { title: 'Vergil | Character' },
          component: () => import('@/views/Characters/VergilView.vue')
        },
        {
          path: '/v',
          name: 'v',
          meta: { title: 'V | Character' },
          component: () => import('@/views/Characters/VView.vue')
        },
        {
          path: '/trish',
          name: 'trish',
          meta: { title: 'Trish | Character' },
          component: () => import('@/views/Characters/TrishView.vue')
        },
        {
          path: '/lady',
          name: 'lady',
          meta: { title: 'Lady | Character' },
          component: () => import('@/views/Characters/LadyView.vue')
        },
        {
          path: '/nico',
          name: 'nico',
          meta: { title: 'Nico | Character' },
          component: () => import('@/views/Characters/NicoView.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      meta: { title: 'Page Not Found' },
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

router.afterEach((to) => {
  nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE
  })
})

export default router
