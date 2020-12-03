import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Cheshi',
      name: 'Cheshi',
      component: () => import('./components/Cheshi')
    },
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
    },
    {
      path: '/Mian',
      name: 'Mian',
      component: () => import('./views/Mian'),
      
    },
    {
      path: '/Mian1',
      name: 'Mian1',
      component: () => import('./views/Mian1'),
      children:[
        {
          path: '/Mian1',
          name: 'cheshi',
          component: () => import('./components/Cheshi'),
        },
        {
          path: '/Jishi',
          name: 'cishi',
          component: () => import('./views/Jishi'),
        },
        
       

      ]
    }
  ]
})
