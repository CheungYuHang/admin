import Vue from 'vue'
import Vuex from 'vuex'
import moduleUser from './user.js'
import moduleTagNav from './tagNav'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    // 用户
    userInfo: moduleUser,
    // 标签导航
    tagNav: moduleTagNav
  }
})
export default store
