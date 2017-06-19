import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import welcome from '../views/welcome/welcome'

Vue.use(Router)

export default new Router({
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
})
