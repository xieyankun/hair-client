/**
 * Created by Kira on 3/20/17.
 */
import ServiceInfo from '@/views/services/index/index'
import Book from '@/views/services/book/book'

export default [
  {
    path: '/shop/:sid/:svid',
    name: 'ServiceInfo',
    component: ServiceInfo
  },
  {
    path: '/shop/:sid/:svid/book',
    name: 'Book',
    component: Book
  }
]
