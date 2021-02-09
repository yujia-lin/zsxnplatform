import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Landpage from '../views/Landpage.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/Landpage',
    name: 'Landpage',
    component: Landpage
  },
]

const router = createRouter({
//	base: process.env.BASE_URL,
//	routes
//mode:"hash",
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
