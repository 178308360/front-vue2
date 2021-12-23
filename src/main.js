/*
 * @Author: Y
 * @Date: 2021-09-06 16:40:46
 * @LastEditTime: 2021-12-23 22:40:47
 * @LastEditors: Y
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
