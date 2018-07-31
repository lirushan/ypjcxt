import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../test/HelloWorld'
import Login from '../views/login/Login'
import Index from '../views/index/index'
import WinServer from '../views/win_server/win_server'
import LinuxServer from '../views/linux_server/linux_server'

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
      path: '/index',
      name: 'index',
      component: Index,
      children: [{
        path: 'win_server',
        name: 'win_server',
        component: WinServer
      }, {
        path: 'linux_server',
        name: 'linux_server',
        component: LinuxServer
      }]
    },
    {
      path: '/test',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
