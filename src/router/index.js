import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import notFound from '@/views/notFound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '*',
      name: '404',
      component: notFound,
    },
  ],
})

export default router
