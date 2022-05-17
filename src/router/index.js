import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/WelcomePage'
import Chatroom from '../views/ChatRoom'

const routes = [
  {
    path: '/',
    name: 'WelcomePage',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'ChatRoom',
    component: Chatroom
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
