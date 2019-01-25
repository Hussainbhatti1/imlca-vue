import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress progress bar
import 'nprogress/nprogress.css'// Progress Progress bar style
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // Authenticity

const whiteList = ['/login', '/register'] // Do not redirect whitelist
router.beforeEach((to, from, next) => {
  NProgress.start()
  debugger
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
        next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${"%2Fdashboard"}`) // Otherwise all redirect to the login page

      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // EndProgress
})
