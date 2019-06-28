import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home'
import Index from '@/components/layout'
import Foods from '@/components/pages/foods'
import My from '@/components/pages/my'
import Order from '@/components/pages/order'
import Login from '@/components/pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home',
      component: Index,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/foods',
          name: 'Foods',
          component: Foods
        },
        {
          path: '/order',
          name: 'Order',
          component: Order
        },
        {
          path: '/my',
          name: 'My',
          component: My
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
