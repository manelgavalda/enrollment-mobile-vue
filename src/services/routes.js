// import Vue from 'vue'
// import Router from 'vue-router'
// Containers
import Full from '../containers/Full'
import FullBlank from '../containers/FullBlank'

// Afegides
import Home from '../views/Home'
import Login from '../components/auth/Login.vue'

const routes = [
  {
    path: '/',
    redirect: '/Login',
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
    path: '/',
    redirect: '/Login',
    component: FullBlank,
    children: [
              // Afegides per mi.
      {
        path: 'Login',
        name: 'Login',
        component: Login
      }
    ]
  }
]

export default routes
