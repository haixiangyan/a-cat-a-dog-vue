import Vue from 'vue'
import Router from 'vue-router'
// Pages
import Home from './views/Home.vue'
import Register from './views/Register'
import Setting from './views/Setting'
import Votes from './views/Votes'
import Favourites from './views/Favourites'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/votes',
      name: 'votes',
      component: Votes
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: Favourites
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    }
  ]
})
