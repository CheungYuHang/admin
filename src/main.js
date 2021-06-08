import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 占位符
import Fragment from 'vue-fragment'
// echarts
import echarts from 'echarts'
// Element UI
// import Element from 'element-ui'
import './assets/styles/element-variables.scss'
// 全局过滤器
import './utils/filters'
// mockjs
import './mock/mock'
// 全局样式
import './assets/styles/reset.scss'
// 字体图标库
import './assets/fonts/iconfont.css'
// Vue.use(Element)
Vue.use(Fragment.Plugin)
// echarts挂在到vue原型中
Vue.prototype.$echarts = echarts
// 设置element ui默认大小
Vue.prototype.$ELEMENT = { size: 'small' }
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
