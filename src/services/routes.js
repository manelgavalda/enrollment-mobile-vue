// Afegides
import Home from '../components/Home.vue'
import Profile from '../components/Profile.vue'
import Login from '../components/auth/Login.vue'
// import App from '../App.vue'
import Full from '../components/containers/Full.vue'
const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Full,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
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
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      }
    ]
  }
]

export default routes
