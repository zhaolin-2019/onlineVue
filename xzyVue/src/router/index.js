import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import HelloWorld from '../components/HelloWorld.vue'
import order from '../views/order.vue'
import sure from '../views/sure.vue'
import pay from '../views/pay.vue'
import goodscar from '../views/goodscar.vue'
import lianxi from '../views/lianxi.vue'
import lianxi2 from '../views/lianxi2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/order',
    name: 'order',
    component: order
  },
  {
    path: '/sure',
    name: 'sure',
    component: sure
  },
  {
    path: '/pay',
    name: 'pay',
    component: pay
  },
  {
    path: '/goodscar',
    name: 'goodscar',
    component: goodscar
  },
  {
    path: '/lianxi',
    name: 'lianxi',
    component: lianxi
  },
  {
    path: '/lianxi2',
    name: 'lianxi2',
    component: lianxi2
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
