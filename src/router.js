import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Teams from './views/Teams.vue'
import Players from './views/Players.vue'
import Tournaments from './views/Tournaments.vue'
import Schedule from './views/Schedule.vue'
import Maps from './views/Maps.vue'
import Chat from './views/Chat.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/teams',
      name: 'teams',
      component: Teams
    },
    {
      path: '/players',
      name: 'players',
      component: Players
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule
    },
    {
      path: '/tournaments',
      name: 'tournaments',
      component: Tournaments
    },
    {
      path: '/maps',
      name: 'maps',
      component: Maps
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    }
  ]
})
