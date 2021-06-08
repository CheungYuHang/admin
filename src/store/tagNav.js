import { getItem, setItem } from '@/utils/sessionStorage'
export default {
  // 开启命名空间
  namespaced: true,
  // state 数据
  state: () => ({
    // 激活的路径
    activePath: '/HomePage',
    // 标签导航
    tagNavList: getItem('tagNavList') || [{ id: 1, path: '/HomePage', name: '首页' }]
  }),
  // 方法
  mutations: {
    // 添加 标签导航 字符串
    addTagNav(state, item) {
      const flag = state.tagNavList.find(x => x.id === item.id)
      // 没有出现该对象
      if (!flag) {
        const obj = {
          id: item.id,
          path: item.path,
          name: item.name
        }
        state.tagNavList.push(obj)
      }
      // 通过 this.commit() 方法，调用 tagNav 模块下的 saveTagNav 方法，将 标签导航数组对象 持久化存储到本地
      this.commit('tagNav/saveTagNav')
    },
    // 将标签导航持久化
    saveTagNav(state) {
      setItem('tagNavList', state.tagNavList)
    },
    // 更新激活路径
    updateActivePath(state, path) {
      state.activePath = path
    },
    // 关闭标签某一项
    closeTagNav(state, index) {
      state.tagNavList.splice(index, 1)
      // 通过 this.commit() 方法，调用 tagNav 模块下的 saveTagNav 方法，将 标签导航数组对象 持久化存储到本地
      this.commit('tagNav/saveTagNav')
    }
  }
}
