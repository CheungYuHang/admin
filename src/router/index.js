import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
const Login = () => import(/* webpackChunkName: "Login" */ '@/views/Login/Login') // 登录页面
const Layout = () => import(/* webpackChunkName: "Login" */ '@/views/HomePage/Layout') // 布局
const HomePage = () => import(/* webpackChunkName: "Login" */ '@/views/HomePage/index') // 首页
// 用户管理
const UserList = () => import(/* webpackChunkName: "UserMamage" */ '@/views/UserMamage/UserList') // 用户列表
const RoleManage = () => import(/* webpackChunkName: "UserMamage" */ '@/views/UserMamage/RoleManage') // 角色管理
const UserLoginLog = () => import(/* webpackChunkName: "UserMamage" */ '@/views/UserMamage/UserLoginLog') // 登陆日志
// 菜单管理
const BgMenu = () => import(/* webpackChunkName: "MenuManage" */ '@/views/MenuManage/BgMenu') // 后台菜单
// 商品管理
const GoodsList = () => import(/* webpackChunkName: "GoodsManage" */ '@/views/GoodsManage/GoodsList') // 商品列表
const GoodsCate = () => import(/* webpackChunkName: "GoodsManage" */ '@/views/GoodsManage/GoodsCate') // 商品分类
// 新闻管理
const NewsList = () => import(/* webpackChunkName: "NewsManage" */ '@/views/NewsManage/NewsList') // 新闻列表
const NewsCate = () => import(/* webpackChunkName: "NewsManage" */ '@/views/NewsManage/NewsCate') // 新闻分类
// 网站设置
const ShufflingFigure = () => import(/* webpackChunkName: "SiteSetting" */ '@/views/SiteSetting/ShufflingFigure') // 轮播图设置
const BaseSetting = () => import(/* webpackChunkName: "SiteSetting" */ '@/views/SiteSetting/BaseSetting') // 基本设置
const AboutUs = () => import(/* webpackChunkName: "SiteSetting" */ '@/views/SiteSetting/AboutUs') // 关于我们
const CompanyProfile = () => import(/* webpackChunkName: "SiteSetting" */ '@/views/SiteSetting/CompanyProfile') // 公司简介
const ChangeTheme = () => import(/* webpackChunkName: "SiteSetting" */ '@/views/SiteSetting/ChangeTheme') // 更换主题
// 错误页面
const NotFound = () => import(/* webpackChunkName: "Error" */ '@/views/Error/404') // 404
Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: '/Login' },
  { path: '/NotFound', component: NotFound, meta: { title: 'NotFound', keepAlive: false } },
  { path: '/Login', component: Login, meta: { title: '登录', keepAlive: false } },
  {
    path: '/Layout',
    component: Layout,
    meta: { title: '布局', keepAlive: false },
    children: [
      { path: '/HomePage', component: HomePage, meta: { parentTitle: null, title: '首页', keepAlive: false } },
      { path: '/UserList', component: UserList, meta: { parentTitle: '用户管理', title: '用户列表', keepAlive: false } },
      { path: '/RoleManage', component: RoleManage, meta: { parentTitle: '用户管理', title: '角色管理', keepAlive: false } },
      { path: '/UserLoginLog', component: UserLoginLog, meta: { parentTitle: '用户管理', title: '用户登陆日志', keepAlive: false } },
      { path: '/BgMenu', component: BgMenu, meta: { parentTitle: '菜单管理', title: '后台菜单', keepAlive: false } },
      { path: '/GoodsList', component: GoodsList, meta: { parentTitle: '商品管理', title: '商品列表', keepAlive: false } },
      { path: '/GoodsCate', component: GoodsCate, meta: { parentTitle: '商品管理', title: '商品分类', keepAlive: false } },
      { path: '/NewsList', component: NewsList, meta: { parentTitle: '新闻管理', title: '新闻列表', keepAlive: false } },
      { path: '/NewsCate', component: NewsCate, meta: { parentTitle: '新闻管理', title: '新闻分类', keepAlive: false } },
      { path: '/ShufflingFigure', component: ShufflingFigure, meta: { parentTitle: '网站设置', title: '轮播图设置', keepAlive: false } },
      { path: '/BaseSetting', component: BaseSetting, meta: { parentTitle: '网站设置', title: '基本设置', keepAlive: false } },
      { path: '/AboutUs', component: AboutUs, meta: { parentTitle: '网站设置', title: '关于我们', keepAlive: false } },
      { path: '/CompanyProfile', component: CompanyProfile, meta: { parentTitle: '网站设置', title: '公司简介', keepAlive: false } },
      { path: '/ChangeTheme', component: ChangeTheme, meta: { parentTitle: '网站设置', title: '更换主题', keepAlive: false } }
    ]
  }
]
const router = new VueRouter({
  routes
})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // 用户未登录
  if (store.state.userInfo.token.length <= 0 && to.path !== '/Login') {
    document.title = to.meta.title + ' ---- 后台管理'
    return next('/Login')
  }
  // 判断是否有权限
  if (store.state.userInfo.permissions.includes(to.path)) {
    document.title = to.meta.title + ' ---- 后台管理'
    next()
  } else {
    router.push('/NotFound')
  }
})
export default router
