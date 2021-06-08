import request from '@/utils/axios.js'
// 获取首页数据
export const getIndexData = () => {
  return request({
    method: 'GET',
    url: '/my/indexData'
  })
}
