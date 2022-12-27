import Vue from 'vue'
import Router from 'vue-router'
import AccueilView from './views/AccueilView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: AccueilView
    },
    {
        path: '/SenFPoules',
        name: 'SenFPoules',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/SenFPoulesView.vue')
    }
  ]
})