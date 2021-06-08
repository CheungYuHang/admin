<template>
  <div class="layout container">
    <el-container class="main">
      <!-- 侧边栏区域 -->
      <el-aside :class="['aside', { isCollapse }]">
        <nav-menu :menuList="menuList" :activePath="activePath" :isCollapse="isCollapse" @changeTagNav="changeTagNav"></nav-menu>
      </el-aside>
      <!-- 侧边栏区域 -->

      <el-container>
        <!-- 头部区域 -->
        <el-header>
          <div class="header-top">
            <!-- 左侧区域 -->
            <div class="top-left">
              <i :class="['iconfont', isCollapse ? 'icon-caidanzhankai' : 'icon-caidanshouqi']" @click="onIsCollapse"></i>
              <el-breadcrumb class="breadcrumb-box" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-if="routerInfo.title === '首页'">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-else :to="{ path: '/HomePage' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-if="routerInfo.parentTitle">{{ routerInfo.parentTitle }}</el-breadcrumb-item>
                <el-breadcrumb-item v-if="routerInfo.title && routerInfo.title !== '首页'">{{ routerInfo.title }}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <!-- 左侧区域 -->

            <!-- 右侧区域 -->
            <div class="top-right">
              <a class="name">欢迎您 : {{ userInfo.userName }}</a>
              <a class="role">角色：{{ userInfo.role }}</a>
              <span @click="exit"><i class="iconfont icon-tuichu"></i>退出</span>
            </div>
            <!-- 右侧区域 -->
          </div>

          <div class="header-bottom">
            <tags-nav :activePath="activePath"></tags-nav>
          </div>
        </el-header>
        <!-- 头部区域 -->

        <!-- 主体区域 -->
        <el-main>
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </el-main>
        <!-- 主体区域 -->
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import navMenu from '@/components/nav-menu.vue'
import { getMenuList, getUserInfo } from '@/api/HomePage/Layout.js'
import TagsNav from '../../components/tags-nav.vue'
export default {
  name: 'Layout',
  components: { navMenu, TagsNav },
  data() {
    return {
      // 菜单列表
      menuList: [],
      // 用户信息
      userInfo: {},
      // 菜单是否折叠
      isCollapse: false,
      // 路由信息
      routerInfo: {}
    }
  },
  mounted() {
    // 获取菜单列表
    this.getMenuList()
    // 获取用户信息
    this.getUserInfo()
  },
  methods: {
    ...mapMutations('userInfo', ['updateUserInfo', 'updateToken']),
    ...mapMutations('tagNav', ['addTagNav', 'updateActivePath']),
    // 获取菜单列表
    async getMenuList() {
      const res = await getMenuList()
      if (res.status !== 200) {
        return this.$message.error(res.message)
      }
      this.menuList = res.data
    },
    // 获取用户信息
    async getUserInfo() {
      const res = await getUserInfo()
      this.userInfo = res.data
      this.updateUserInfo(res.data)
    },
    // 菜单项单击事件
    changeTagNav(item) {
      // 添加标签导航项
      this.addTagNav(item)
    },
    // 菜单展开折叠
    onIsCollapse() {
      this.isCollapse = !this.isCollapse
    },
    // 退出
    exit() {
      this.$confirm('是否退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // 清空token
          this.updateToken('')
          this.$router.push('/Login')
          this.$message.success('退出登录')
        })
        .catch(() => {
          this.$message.info('已取消操作')
        })
    }
  },
  computed: {
    ...mapState('tagNav', ['activePath'])
  },
  watch: {
    // 路由
    $route: {
      handler(val) {
        this.routerInfo = val.meta
        // 修改激活路径
        this.updateActivePath(val.path)
      },
      // 深度监听
      immediate: true
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  .aside {
    transition: all 0.5s;
    width: 210px !important;
    border-radius: 0 15px 15px 0;
    background-color: #0c552a;
  }
  .isCollapse {
    width: 64px !important;
  }
  .el-header {
    height: 90px !important;
    padding: 0 !important;
    .header-top {
      padding: 0 20px;
      height: 55px;
      line-height: 55px;
      border-bottom: 2px solid #f7f7f8;
      .top-left {
        height: 55px;
        line-height: 55px;
        float: left;
        overflow: hidden;
        .iconfont {
          float: left;
          cursor: pointer;
        }
        .breadcrumb-box {
          margin-left: 15px;
          height: 55px;
          line-height: 55px;
          float: left;
        }
      }
      .top-right {
        float: right;
        font-size: 14px;
        .name,
        .role {
          margin-right: 20px;
        }
        span {
          cursor: pointer;
          .iconfont {
            font-size: 14px;
            margin-right: 5px;
          }
        }
      }
    }
    .header-bottom {
      padding: 3px 20px;
    }
  }
  .el-main {
    background-color: #efefef;
  }
}
</style>
