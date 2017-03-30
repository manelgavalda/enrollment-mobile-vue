import VueRouter from 'vue-router'
import routes from './routes'
// import auth from './auth'

const router = new VueRouter({
    // history mode html5 per borrar #
  // mode: 'hash',
  mode: 'history',
  routes
  // linkActiveClass: 'open active',
  // scrollBehavior: () => ({ y: 0 })
})

// router.beforeEach((to, from, next) => {
//   console.log(window.localStorage.getItem('system_id'))
//   if (!auth.loggedIn()) {
//     return next('/Login')
//   }
//   next()
// })

export default router
