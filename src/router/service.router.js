/**
 * Created by Kira on 3/20/17.
 */
import ServiceInfo from '@/views/services/index/index'
import Haircut from '@/views/services/haircut/Haircut'

export default [
  {
    path: '/shop/:sid/serviceInfo/:seid',
    name: 'ServiceInfo',
    component: ServiceInfo
  },
  {
    path: '/shop/:sid/serviceInfo/:seid/haircut',
    name: 'Haircut',
    component: Haircut
  }
]
