import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../test/HelloWorld'
import Login from '../views/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
