import axios from 'axios'
import store from '@/store'
import VueRouter from 'vue-router'
import { removeItem } from '@/utils/localStorage'
import Nprogress from 'nprogress'
const router = new VueRouter()
const request = axios.create({
  // baseURL: 'http://127.0.0.1:3007',
  // timeout: 2000
})
// 请求拦截器
request.interceptors.request.use(
  config => {
    // 展示nprogress进度条
    Nprogress.start()
    if (config.url.indexOf('/my') !== -1) {
      // 设置请求头
      config.headers = {
        Authorization: store.state.userInfo.token
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截器
request.interceptors.response.use(
  config => {
    // 隐藏nprogress进度条
    Nprogress.done()
    if (config.data.status === 401) {
      removeItem('token')
      router.push('/Login')
      location.reload()
    }
    return config.data
  },
  error => {
    return Promise.reject(error)
  }
)
export default request
