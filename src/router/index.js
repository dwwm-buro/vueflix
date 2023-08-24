import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/a-propos',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/films',
      name: 'movies',
      component: () => import('@/views/MovieListView.vue')
    },
    {
      path: '/films/:id-:slug?',
      name: 'movie',
      component: () => import('@/views/MovieShowView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      beforeEnter: (to, from) => {
        return useUserStore().logged ? '/films' : true
      }
    }
  ]
})

export default router
