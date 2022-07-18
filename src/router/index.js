import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "../views/HomePage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    component: HomePage
  },
  {
    path: '/userview',
    name: '全部用户',
    component: () => import(/* webpackChunkName: "user" */ '../views/UserView.vue')
   },
   {
    path: '/useradd',
    name: '添加用户',
    component: () => import(/* webpackChunkName: "user" */ '../views/UserAdd.vue')
   },
   {
    path: '/useredit',
    name: '编辑用户',
    component: () => import(/* webpackChunkName: "user" */ '../views/UserAdd.vue')
   }
]

const router = new VueRouter({
  routes
})

export default router
