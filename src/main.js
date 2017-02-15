// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './vAxios'
import 'normalize.css/normalize.css'
import 'common/scss/index.scss'
import errno from 'common/js/errno.js'

Vue.use(axios)
Vue.prototype.errno = errno
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
