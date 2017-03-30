// import todosVue from '../todosVue'

export default {
    // login (email, pass, cb) {
    //     cb = arguments[arguments.length - 1]
    //     if (window.localStorage.token) {
    //         if (cb) cb(true)
    //         this.onChange(true)
    //         return
    //     }
    //     pretendRequest(email, pass, (res) => {
    //         if (res.authenticated) {
    //             window.localStorage.token = res.token
    //             if (cb) cb(true)
    //             this.onChange(true)
    //         } else {
    //             if (cb) cb(false)
    //             this.onChange(false)
    //         }
    //     })
    // },
  getToken () {
    return window.localStorage.getItem('system_id')
  },
    // saveToken (token) {
    //     window.localStorage.setItem(todosVue.STORAGE_TOKEN_KEY, token)
    // },
    // logout (cb) {
    //     delete window.localStorage.token
    //     if (cb) cb()
    //     this.onChange(false)
    // },
  loggedIn () {
    return !!window.localStorage.getItem('system_id')
  }
    // getAuthHeader () {
    //     return 'Bearer ' + this.getToken()
    // },
    // onChange () {}
}

// function pretendRequest (email, pass, cb) {
//     setTimeout(() => {
//         if (email === 'joe@example.com' && pass === 'password1') {
//             cb({
//                 authenticated: true,
//                 token: Math.random().toString(36).substring(7)
//             })
//         } else {
//             cb({authenticated: false})
//         }
//     }, 0)
// }
