import Mock from 'mockjs'
// 登录
Mock.mock('/api/login', 'post', options => {
  const req = JSON.parse(options.body)
  if (req.userName === 'admin' && req.passWord === '123456') {
    return {
      status: 200,
      message: '登录成功',
      tokenKey: 'afdjsaklfjlksdajflsadjfksdla',
      permissions: ['/', '/NotFound', '/Login', '/Layout', '/HomePage', '/UserList', '/RoleManage', '/UserLoginLog', '/BgMenu', '/GoodsList', '/GoodsCate', '/NewsList', '/NewsCate', '/ShufflingFigure', '/BaseSetting', '/AboutUs', '/CompanyProfile', '/ChangeTheme']
    }
  } else {
    return {
      status: 201,
      message: '用户名或密码错误'
    }
  }
})
