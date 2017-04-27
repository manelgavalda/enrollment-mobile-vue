// Afegides
import Home from '../components/Home'
import Profile from '../components/Profile'
import PersonalStudentData from '../components/PersonalStudentData'
import Login from '../components/auth/Login'
import Full from '../components/containers/Full'
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
      },
      {
        path: 'personalStudentData',
        name: 'PersonalStudentData',
        component: PersonalStudentData
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
