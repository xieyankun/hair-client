/**
 * Created by Kira on 3/20/17.
 */
import BarberInfo from '@/views/barber/barberInfo'
import BarberList from '@/views/barber/barberList'

export default [
  {
    path: '/shop/:sid/barberList',
    name: 'BarberList',
    component: BarberList
  },
  {
    path: '/shop/:sid/barberInfo/:bid',
    name: 'BarberInfo',
    component: BarberInfo
  }
]
