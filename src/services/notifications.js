/* globals localStorage */

import constants from '../constants'

import app from '../App.vue'

// import Form from 'acacha-forms'
//
// import router from './router'

export default {
  get () {
    return {
      notifications: this.fetchNotifications()
    }
  },
  fetchNotifications: function () {
    // this.$http.get(constants.GET_MESSAGES_URL).then((response) => {
    //   return response.data
    // }, (error) => {
    //   console.log('error: ' + error)
    // })
  },
  enable () {
    this.init()
    // this.register()
    // this.subscribe('all')
    this.process()
  },
  init () {
    app.push = window.PushNotification.init({
      'android': {
        'senderID': constants.ANDROID_SENDER_ID
      },
      // 'browser': {
      //   pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      // },
      'ios': {
        'sound': true,
        'vibration': true,
        'badge': true
      },
      'windows': {}
    })
  },
  // register () {
  //   app.push.on('registration', function (data) {
  //     console.log('registration event: ' + data.registrationId)
  //     // let oldRegId = localStorage.getItem('registrationId')
  //     // if (oldRegId !== data.registrationId) {
  //     // Save new registration ID
  //     // localStorage.setItem('registrationId', data.registrationId)
  //     // Post registrationId to your app server as the value has changed
  //     let form = new Form({'registration_id': data.registrationId})
  //
  //     form.post(constants.REGISTER_GCM_TOKEN_URL)
  //       .then(response => {
  //         localStorage.setItem('registrationId', data.registrationId)
  //         console.log('GCM token registered OK!')
  //       })
  //       .catch(error => {
  //         console.log('And error ocurred adding GCM token to backend!')
  //         console.log(error)
  //       })
  //     // }
  //   })
  // },
  subscribe (topic) {
    app.push.subscribe('/topics/' + topic, function () {
      console.log('Success registration to all topic')
    }, function (e) {
      console.log('error registrating to all topic:')
      console.log(e)
    })
  },
  process () {
    app.push.on('error', function (e) {
      console.log('push error = ' + e.message)
    })
    app.push.on('notification', function (data) {
      console.log('Notification event RECEIVED!!!!!!!!!!!!')
      console.log('Title: ' + data.title)
      console.log('Message: ' + data.message)
      console.log('Foreground: ' + data.additionalData.foreground)

      // router.push({
      //   path: '/notifications',
      //   params: {
      //     notifications: this.fetchNotifications()
      //   }
      // })
    })
  }
}
