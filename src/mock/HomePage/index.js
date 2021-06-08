import Mock from 'mockjs'
const Random = Mock.Random
// 获取首页数据
Mock.mock('/my/indexData', 'get', {
  status: 200,
  message: '获取首页数据成功',
  data: {
    'health|7': [() => Random.integer(100, 1000)],
    'warning|7': [() => Random.integer(100, 1000)],
    'degradation|7': [() => Random.integer(100, 1000)],
    'unhealthy|7': [() => Random.integer(100, 1000)]
  }
})
