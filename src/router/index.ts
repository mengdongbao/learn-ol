import { createRouter, createWebHistory } from 'vue-router'
import TestView from '@/views/TestView.vue'
import { inWhiteList } from './authentication'
import { useMitt } from '@/bus'
import TestLogin from '@/views/TestLogin.vue'

const mitt = useMitt()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TestView,
    },
    {
      path: '/login',
      name: 'login',
      component: TestLogin,
    },
  ],
})

mitt.on('http:401', () => {
  router.push({ name: 'login' })
})

router.beforeEach((to, from, next) => {
  let pass = true
  if (!inWhiteList(to)) {
    next({ name: 'login' })
  }
  pass && next()
})

export default router
