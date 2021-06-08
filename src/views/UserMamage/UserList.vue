<template>
  <div class="user-list container">
    <el-card class="box-card pagination">
      用户列表
    </el-card>
    <el-pagination background :page-size="100" layout="total, prev, pager, next" :total="400"></el-pagination>
  </div>
</template>
<script>
import pageMix from '@/mixins/page.js'
export default {
  name: 'UserList',
  mixins: [pageMix],
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped></style>
