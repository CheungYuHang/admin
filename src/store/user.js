import { getItem, setItem } from '@/utils/localStorage'
export default {
  // 开启命名空间
  namespaced: true,
  // state 数据
  state: () => ({
    // 登录成功之后的 token 字符串
    token: getItem('token') || '',
    // 用户信息
    userInfo: {},
    // 用户权限
    permissions: getItem('permissions') || ['/', '/Login', '/HomePage', '/NotFound']
  }),
  // 方法
  mutations: {
    // 更新 token 字符串
    updateToken(state, token) {
      state.token = token
      this.commit('userInfo/saveTokenToStorage')
    },
    // 将 token 字符串持久化存储到本地
    saveTokenToStorage(state) {
      setItem('token', state.token)
    },
    // 更新 userInfo 字段
    updateUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    // 更新用户权限
    updatePermissions(state, permissions) {
      state.permissions = permissions
      this.commit('userInfo/savePermissionsToStorage')
    },
    // 将用户权限持久化存储到本地
    savePermissionsToStorage(state) {
      setItem('permissions', state.permissions)
    }
  }
}
