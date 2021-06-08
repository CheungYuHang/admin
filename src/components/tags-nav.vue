<template>
  <div class="tags-nav-container">
    <fragment v-for="item in tagNavList" :key="item.id">
      <el-tag v-if="item.path === activePath" class="tags-item tags-active" :closable="item.name !== '首页'" @close="tagNavClose(item)">{{ item.name }}</el-tag>
      <el-tag v-else class="tags-item" @click="$router.push(item.path)">{{ item.name }}</el-tag>
    </fragment>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'TagsNav',
  props: {
    // 当前激活的路径
    activePath: {
      type: String
    }
  },
  methods: {
    ...mapMutations('tagNav', ['closeTagNav']),
    // 标签导航关闭事件
    tagNavClose(item) {
      const index = this.tagNavList.findIndex(x => x.id === item.id)
      this.closeTagNav(index)
      // 判断删除之后的激活路径
      if (index === this.tagNavList.length) {
        // 删除的最后一个标签
        this.$router.push(this.tagNavList[index - 1].path)
      } else {
        this.$router.push(this.tagNavList[index].path)
      }
    }
  },
  computed: {
    ...mapState('tagNav', ['tagNavList'])
  }
}
</script>
<style lang="scss" scoped>
.tags-item {
  cursor: pointer;
  height: 26px;
  line-height: 26px;
  border: 1px solid #d8dce5;
  color: #495060;
  background: #fff;
  padding: 0 8px;
  font-size: 12px;
  border-radius: 0;
  margin-right: 5px;
}
/deep/ .tags-active {
  background-color: #42b983;
  color: #fff;
  position: relative;
  &::before {
    content: '';
    background: #fff;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: relative;
    margin-right: 2px;
  }
  .el-tag__close {
    color: #fff;
  }
}
</style>
