// Afegides
import Home from '../components/Home.vue'
import Login from '../components/auth/Login.vue'

const routes = [
  {
    path: '/',
    redirect: '/Login',
    component: Login,
    children: [
          // Afegides per mi.
      {
        path: 'home',
        name: 'Home',
        component: Home
      }
    ]
  }
]

export default routes
