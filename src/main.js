import Vue from 'vue'
import App from './App'
import { router } from './router'
import request from '@/request/index'
import 'normalize.css/normalize.css'

Vue.prototype._request = request

new Vue({
  router,
  el: '#app',
  render: h => h(App),
})
