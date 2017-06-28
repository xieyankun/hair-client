import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import welcome from '@/views/welcome/welcome'

import Home from './shops.router'
import Activity from './activity.router'
import Barber from './barber.router'
import Design from './design.router'
import Personal from './personal.router'
import Services from './service.router'

Vue.use(Router)

const router = {
  routes: [
    {
      path: '/',
      redirect: '/welcome'
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome
    }
  ]
}

router.routes = router.routes.concat(Home, Activity, Barber, Design, Personal, Services)

const RouterInstance = new Router(router)

export default RouterInstance
