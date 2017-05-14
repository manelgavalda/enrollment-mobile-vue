// Afegides
import Home from '../components/Home'
import Profile from '../components/Profile'
import Login from '../components/auth/Login'
import Enrollments from '../components/Enrollments'
// import App from '../App.vue'
import Full from '../components/containers/Full.vue'
const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: { auth: true },
    component: Full,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta: { auth: true }
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
        meta: { auth: true }
      },
      {
        path: 'enrollments',
        name: 'Enrollments',
        component: Enrollments,
        meta: { auth: true }
      }
    ]
  },
  {
    path: '/android_asset/www/index.html',
    redirect: '/'
  },
  {
    path: '/login',
    component: Login,
    meta: { auth: false },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
        meta: { auth: false }
      }
    ]
  },
  {
    path: '*',
    redirect: '/login',
    meta: { auth: false }
  }
]

export default routes
