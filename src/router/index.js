import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import selectShop from '@/views/selectShop/select_shop'

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
      name: 'selectShop',
      component: selectShop
    }
  ]
})
