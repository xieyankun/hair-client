import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import welcome from '@/views/welcome/welcome'

import Home from './shops.router'

Vue.use(Router)

const router = {
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome
    }
  ]
}

router.routes = router.routes.concat(Home)

const RouterInstance = new Router(router)

export default RouterInstance
