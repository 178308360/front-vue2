/*
 * @Author: Y
 * @Date: 2021-09-06 17:40:51
 * @LastEditTime: 2021-12-23 22:41:21
 * @LastEditors: Y
 * @Description:
 */
import Vue from 'vue'
import Vuex from 'vuex'

// import * as types from "./types";

Vue.use(Vuex)

// 动态加载modules
const modules = {}
const files = require.context('./', true, /index\.js$/)
console.log(files.keys())
files
  .keys()
  .filter(key => {
    if (key === './index.js') return false
    return true
  })
  .map(key => {
    // 获取名字
    const modulePath = key.replace('./modules/', '')
    const moduleName = modulePath.replace('/index.js', '')
    const module = require(`${key}`)
    console.log(moduleName)
    modules[`${moduleName}`] = module.default
  })

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: modules
})

export default store
