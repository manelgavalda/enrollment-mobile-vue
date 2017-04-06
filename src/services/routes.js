// Afegides
import Home from '../components/Home.vue'
import Login from '../components/auth/Login.vue'
// import App from '../App.vue'
import Full from '../components/containers/Full.vue'
const routes = [
  {
    // path: '/login',
    // redirect: '/login',
    path: '/',
    redirect: '/home',
    component: Full,
    children: [
          // Afegides per mi.
      {
        path: 'home',
        name: 'Home',
        component: Home
      }
    ]
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
