import request from '@/utils/axios.js'
// 获取后台菜单
export const getMenuList = () => {
  return request({
    method: 'GET',
    url: '/my/bgMenu'
  })
}
// 获取用户信息
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/my/userInfo'
  })
}
