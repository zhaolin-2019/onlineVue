import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HelloWorld from '../components/HelloWorld.vue'
// import feedbackPage from '@/components/feedbackPage/feedbackPage'
// import forgetpasswordPage from '@/components/forgetpasswordPage/forgetpasswordPage'
// import mytracksPage from '@/components/mytracksPage/mytracksPage'
// import bottom from '@/components/bottom/bottom'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
