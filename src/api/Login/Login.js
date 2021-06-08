import request from '@/utils/axios.js'
// 登录
export const login = data => {
  return request({
    method: 'POST',
    url: '/api/login',
    data
  })
}
