import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _641a0bb9 = () => interopDefault(import('..\\src\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _5d77a114 = () => interopDefault(import('..\\src\\pages\\diet-plans\\index.vue' /* webpackChunkName: "pages/diet-plans/index" */))
const _549d3136 = () => interopDefault(import('..\\src\\pages\\food-items\\index.vue' /* webpackChunkName: "pages/food-items/index" */))
const _3aebb320 = () => interopDefault(import('..\\src\\pages\\leaderboard\\index.vue' /* webpackChunkName: "pages/leaderboard/index" */))
const _e2ed8b78 = () => interopDefault(import('..\\src\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _523ce145 = () => interopDefault(import('..\\src\\pages\\users\\index.vue' /* webpackChunkName: "pages/users/index" */))
const _6e8aa450 = () => interopDefault(import('..\\src\\pages\\auth\\forgot-password\\index.vue' /* webpackChunkName: "pages/auth/forgot-password/index" */))
const _7987822c = () => interopDefault(import('..\\src\\pages\\auth\\login\\index.vue' /* webpackChunkName: "pages/auth/login/index" */))
const _c86f6c32 = () => interopDefault(import('..\\src\\pages\\auth\\signup\\index.vue' /* webpackChunkName: "pages/auth/signup/index" */))
const _7261ca1d = () => interopDefault(import('..\\src\\pages\\diet-plans\\add\\index.vue' /* webpackChunkName: "pages/diet-plans/add/index" */))
const _376ae1ae = () => interopDefault(import('..\\src\\pages\\users\\add\\index.vue' /* webpackChunkName: "pages/users/add/index" */))
const _747d1e67 = () => interopDefault(import('..\\src\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _641a0bb9,
    name: "dashboard"
  }, {
    path: "/diet-plans",
    component: _5d77a114,
    name: "diet-plans"
  }, {
    path: "/food-items",
    component: _549d3136,
    name: "food-items"
  }, {
    path: "/leaderboard",
    component: _3aebb320,
    name: "leaderboard"
  }, {
    path: "/profile",
    component: _e2ed8b78,
    name: "profile"
  }, {
    path: "/users",
    component: _523ce145,
    name: "users"
  }, {
    path: "/auth/forgot-password",
    component: _6e8aa450,
    name: "auth-forgot-password"
  }, {
    path: "/auth/login",
    component: _7987822c,
    name: "auth-login"
  }, {
    path: "/auth/signup",
    component: _c86f6c32,
    name: "auth-signup"
  }, {
    path: "/diet-plans/add",
    component: _7261ca1d,
    name: "diet-plans-add"
  }, {
    path: "/users/add",
    component: _376ae1ae,
    name: "users-add"
  }, {
    path: "/",
    component: _747d1e67,
    name: "index"
  }, {
    path: "/diet-plans/:id/edit",
    component: _7261ca1d,
    name: "diet-plans-id-edit"
  }, {
    path: "/diet-plans/:id/view",
    component: _7261ca1d,
    name: "diet-plans-id-view"
  }, {
    path: "/users/:id/edit",
    component: _376ae1ae,
    name: "users-id-edit"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
