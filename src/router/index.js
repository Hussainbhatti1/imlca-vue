import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/register', component: () => import('@/views/register/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/table',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      }
    ]
  },

  {
    path: '/points',
    component: Layout,
    children: [
      {
        path: 'points',
        name: 'points',
        component: () => import('@/views/points/index'),
        meta: { title: 'Points Table', icon: 'form' }
      }
    ]
  },

  {
    path: '/schedules',
    component: Layout,
    children: [
      {
        path: 'schedules',
        name: 'schedules',
        component: () => import('@/views/schedules/index'),
        meta: { title: 'Manage Schedules', icon: 'excel' }
      }
    ]
  },

  {
    path: '/profile',
    component: Layout,
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/views/profile/index'),
        meta: { title: 'Profile', icon: 'user' }
      }
    ]
  },

  {
    path: '/invite',
    component: Layout,
    children: [
      {
        path: 'invite',
        name: 'invite',
        component: () => import('@/views/invite/index'),
        meta: { title: 'Invite Athlete', icon: 'invitation' }
      }
    ]
  },

  {
    path: '/roster',
    component: Layout,
    children: [
      {
        path: 'roster',
        name: 'roster',
        component: () => import('@/views/roster/index'),
        meta: { title: 'Roster', icon: 'form' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
