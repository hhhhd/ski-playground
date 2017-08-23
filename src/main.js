import Vue from 'vue'
import app from '@/app'
import router from '@/router'

require('normalize.css')
require('animate.css')
require('@/styles/global/index.less')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { app },
})
