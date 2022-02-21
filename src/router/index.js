import { createRouter, createWebHashHistory } from 'vue-router'

import catalog from '../components/catalog'
import cart from '../components/cart'

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: catalog,
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart,
    props: true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router