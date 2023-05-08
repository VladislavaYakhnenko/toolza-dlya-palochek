import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/test',
      name: 'Home',
      component: () => import('@/pages/TestPage.vue')
    }
  ]
})

export default router
