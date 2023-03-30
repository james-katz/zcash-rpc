import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/zcashrpc/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/zcashrpc/rpclist',
    name: 'rpc-list',
    component: () => import('../views/RpcListView.vue')
  },
  {
    path: '/zcashrpc/rpc/:name',
    name: 'rpc-view',
    component: () => import('../views/RpcView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
