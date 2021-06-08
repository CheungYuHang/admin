<template>
  <el-menu class="nav-menu" :default-active="activePath" :collapse="isCollapse" background-color="#0C552A" text-color="#fff" active-text-color="#ffd04b" :collapse-transition="false" unique-opened router>
    <fragment v-for="item in menuList" :key="item.id">
      <!-- 一级菜单区域 -->
      <el-menu-item v-if="!item.children" :index="item.path" @click="onclick(item)">
        <i :class="'iconfont ' + item.iconfont"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
      <!-- 一级菜单区域 -->

      <!-- 二级菜单区域 -->
      <el-submenu v-else :index="item.path">
        <template slot="title">
          <i :class="'iconfont ' + item.iconfont"></i>
          <span>{{ item.name }}</span>
        </template>
        <!-- 二级菜单子菜单 -->
        <el-menu-item v-for="children in item.children" :key="children.id" :index="children.path" @click="onclick(children)">
          <i :class="'iconfont ' + children.iconfont"></i>
          <span slot="title">{{ children.name }}</span>
        </el-menu-item>
      </el-submenu>
      <!-- 二级菜单区域 -->
    </fragment>
  </el-menu>
</template>
<script>
export default {
  name: 'NavMenu',
  props: {
    // 数据列表
    menuList: {
      type: Array,
      required: true
    },
    // 当前激活的路径
    activePath: {
      type: String,
      required: true
    },
    // 是否折叠
    isCollapse: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    // 菜单单击事件
    onclick(item) {
      this.$emit('changeTagNav', item)
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-menu {
  height: 100%;
  border-right: 0;
  > .is-active > .iconfont {
    color: #ffd04b;
  }
  .el-submenu .el-menu .is-active .iconfont {
    color: #ffd04b;
  }
  .iconfont {
    margin-right: 5px;
    color: #fff;
  }
}
</style>
