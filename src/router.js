import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/Login',
      name: 'login',
      component: () => import('./views/Login')
    },
    {
      path: '/',
      name: 'register',
      component: () => import('./views/Register')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
