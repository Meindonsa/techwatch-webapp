import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../../features/home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/article',
      name: 'article',

      component: () => import('@/features/articles/Article.vue'),
    },
  ],
})

export default router
