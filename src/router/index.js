import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading


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
    path: '/games/:id/show',
    component: Layout,
    children: [
      {
        path: 'games',
        name: 'games',
        component: () => import('@/views/games/show'),
        meta: { private: false }
      }
    ]
  },

  {
    path: '/games/:id/edit',
    component: Layout,
    children: [
      {
        path: 'games',
        name: 'edit_game',
        component: () => import('@/views/games/edit'),
        meta: { private: false }
      }
    ]
  },


  {
    path: '/games/:game_id/team_games/:id/edit',
    component: Layout,
    children: [
      {
        path: 'team_games',
        name: 'team_games',
        component: () => import('@/views/team_games/edit'),
        meta: { private: false }
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
    path: '/teams',
    component: Layout,
    children: [
      {
        path: 'teams',
        name: 'teams',
        component: () => import('@/views/teams/new'),
        meta: { title: 'Add Team', icon: 'peoples' }
      }
    ]
  },

  {
    path: '/games',
    component: Layout,
    children: [
      {
        path: 'games',
        name: 'games',
        component: () => import('@/views/games/new'),
        meta: { title: 'Add Game', icon: 'example' }
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

  {
    path: '/athletes/:id/edit',
    component: Layout,
    children: [
      {
        path: 'athletes',
        name: 'edit_profile',
        component: () => import('@/views/athletes/edit'),
        meta: { title: 'Edit Profile', icon: 'user' }
      }
    ]
  },

  {
    path: '/athletes/:id/show',
    component: Layout,
    children: [
      {
        path: 'athletes',
        name: 'show_profile',
        component: () => import('@/views/athletes/show'),
        meta: { title: 'View Profile', icon: 'user' }
      }
    ]
  },

  {
    path: '/athletes/colleges',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/athletes/colleges/index'),
        meta: { title: 'Join College', icon: 'table' }
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

