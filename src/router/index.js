/*
 * @Author: Y
 * @Date: 2021-09-06 16:40:46
 * @LastEditTime: 2021-12-23 22:43:34
 * @LastEditors: Y
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterConfig from './modules' // 引入业务逻辑模块
import CommonRouters from './common' // 引入通用模块
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history', // 需要服务端支持
  routes: RouterConfig.concat(CommonRouters)
})
