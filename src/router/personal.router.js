/**
 * Created by Kira on 3/20/17.
 */
import Personal from '../views/personal/personal'
import Order from '../views/personal/order/order'

export default [
  {
    path: '/shop/:sid/personal',
    name: 'Personal',
    component: Personal
  },
  {
    path: '/shop/:sid/order',
    name: 'Order',
    component: Order
  }
]
