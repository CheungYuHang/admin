import Mock from 'mockjs'
// 获取后台菜单
Mock.mock('/my/bgMenu', 'get', {
  status: 200,
  message: '获取菜单列表成功',
  data: [
    {
      id: 1,
      name: '首页',
      path: '/HomePage',
      iconfont: 'icon-icon-test',
      sort: 1,
      parentId: 0,
      level: 1,
      children: null
    },
    {
      id: 2,
      name: '用户管理',
      path: '/UserMamage',
      iconfont: 'icon-yonghuguanli',
      sort: 2,
      parentId: 0,
      level: 1,
      children: [
        {
          id: 3,
          name: '用户列表',
          path: '/UserList',
          iconfont: 'icon-xiangmu',
          sort: 1,
          parentId: 2,
          level: 2
        },
        {
          id: 4,
          name: '角色管理',
          path: '/RoleManage',
          iconfont: 'icon-xiangmu',
          sort: 2,
          parentId: 2,
          level: 2
        },
        {
          id: 5,
          name: '用户登录日志',
          path: '/UserLoginLog',
          iconfont: 'icon-xiangmu',
          sort: 3,
          parentId: 2,
          level: 2
        }
      ]
    },
    {
      id: 6,
      name: '菜单管理',
      path: '/MenuManage',
      iconfont: 'icon-caidan',
      sort: 3,
      parentId: 0,
      level: 1,
      children: [
        {
          id: 7,
          name: '后台菜单',
          path: '/BgMenu',
          iconfont: 'icon-xiangmu',
          sort: 1,
          parentId: 6,
          level: 2
        }
      ]
    },
    {
      id: 12,
      name: '商品管理',
      path: '/GoodsManage',
      iconfont: 'icon-shangpinguanli',
      sort: 4,
      parentId: 0,
      level: 1,
      children: [
        {
          id: 14,
          name: '商品列表',
          path: '/GoodsList',
          iconfont: 'icon-xiangmu',
          sort: 1,
          parentId: 12,
          level: 2
        },
        {
          id: 15,
          name: '商品分类',
          path: '/GoodsCate',
          iconfont: 'icon-xiangmu',
          sort: 2,
          parentId: 12,
          level: 2
        }
      ]
    },
    {
      id: 13,
      name: '新闻管理',
      path: '/NewsManage',
      iconfont: 'icon-xinwenguanli',
      sort: 5,
      parentId: 0,
      level: 1,
      children: [
        {
          id: 16,
          name: '新闻列表',
          path: '/NewsList',
          iconfont: 'icon-xiangmu',
          sort: 1,
          parentId: 13,
          level: 2
        },
        {
          id: 17,
          name: '新闻分类',
          path: '/NewsCate',
          iconfont: 'icon-xiangmu',
          sort: 2,
          parentId: 13,
          level: 2
        }
      ]
    },
    {
      id: 8,
      name: '网站设置',
      path: '/SiteSetting',
      iconfont: 'icon-wangzhanguanli',
      sort: 6,
      parentId: 0,
      level: 1,
      children: [
        {
          id: 18,
          name: '轮播图设置',
          path: '/ShufflingFigure',
          iconfont: 'icon-xiangmu',
          sort: 1,
          parentId: 8,
          level: 2
        },
        {
          id: 9,
          name: '基本设置',
          path: '/BaseSetting',
          iconfont: 'icon-xiangmu',
          sort: 2,
          parentId: 8,
          level: 2
        },
        {
          id: 10,
          name: '关于我们',
          path: '/AboutUs',
          iconfont: 'icon-xiangmu',
          sort: 3,
          parentId: 8,
          level: 2
        },
        {
          id: 11,
          name: '公司简介',
          path: '/CompanyProfile',
          iconfont: 'icon-xiangmu',
          sort: 4,
          parentId: 8,
          level: 2
        },
        {
          id: 19,
          name: '更换主题',
          path: '/ChangeTheme',
          iconfont: 'icon-xiangmu',
          sort: 5,
          parentId: 8,
          level: 2
        }
      ]
    }
  ]
})
// 获取用户数据
Mock.mock('/my/userInfo', 'get', {
  status: 200,
  message: '获取用户信息成功',
  data: {
    id: 1,
    userName: 'admin',
    role: '主管',
    roleId: 1,
    phone: '18857404704',
    pageSize: 15,
    registerTime: 1612427635443
  }
})
