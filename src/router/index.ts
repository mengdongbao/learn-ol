import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
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
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: TestLogin,
    },
    {
      path: '/base',
      name: 'baseMap',
      component: () => import('@/views/base/BaseMap.vue'),
    },
    {
      path: '/vector',
      name: 'vectorIndex',
      component: () => import('@/views/vector/VectorIndex.vue'),
      children: [
        {
            path: 'base',
            name: 'vectorDemo',
            component: () => import('@/views/vector/VectorDemo.vue')
        }
      ]
    },
    {
      path: '/raster',
      name: 'rasterIndex',
      component: () => import('@/views/raster/RasterIndex.vue'),
      children: [
        {
          path: 'rasterCOG',
          name: 'rasterCOG',
          component: () => import('@/views/raster/RasterCOG.vue'),
        },
        {
          path: 'tileGrid',
          name: 'tileGrid',
          component: () => import('@/views/raster/TileGrid.vue'),
        },
      ],
    },
  ],
})

mitt.on('http:401', () => {
  router.push({ name: 'login' })
})

router.beforeEach((to, from, next) => {
  let pass = true
  if (!inWhiteList(to, true)) {
    next({ name: 'login' })
  }
  pass && next()
})

export default router
