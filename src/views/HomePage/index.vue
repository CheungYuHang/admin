<template>
  <div class="index container">
    <el-card class="box-card">
      <el-row :gutter="40" class="tabs-row">
        <el-col :span="6">
          <div class="num-box">
            <span class="title">健康良好设备：</span>
            <span class="number">{{ healthTotal | numberFormat }}</span>
            <img src="../../assets/images/tab01.png" class="icon" />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="num-box">
            <span class="title">健康预警设备：</span>
            <span class="number">{{ warningTotal | numberFormat }}</span>
            <img src="../../assets/images/tab02.png" class="icon" />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="num-box">
            <span class="title">健康退化设备：</span>
            <span class="number">{{ degradationTotal | numberFormat }}</span>
            <img src="../../assets/images/tab03.png" class="icon" />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="num-box">
            <span class="title">不健康设备：</span>
            <span class="number">{{ unhealthyTotal | numberFormat }}</span>
            <img src="../../assets/images/tab04.png" class="icon" />
          </div>
        </el-col>
      </el-row>
      <div class="echarts-box">
        <line-chart v-if="equipmentInfo" :equipmentInfo="equipmentInfo"></line-chart>
      </div>
    </el-card>
  </div>
</template>
<script>
import { getIndexData } from '@/api/HomePage/index'
import lineChart from './components/line-chart'
export default {
  name: 'Index',
  components: { lineChart },
  data() {
    return {
      // 设备信息
      equipmentInfo: null,
      healthTotal: 0,
      warningTotal: 0,
      degradationTotal: 0,
      unhealthyTotal: 0
    }
  },
  mounted() {
    // 获取首页数据
    this.getIndexData()
  },
  methods: {
    // 获取首页数据
    async getIndexData() {
      const res = await getIndexData()
      this.equipmentInfo = res.data
      this.healthTotal = this.sum(res.data.health)
      this.warningTotal = this.sum(res.data.warning)
      this.degradationTotal = this.sum(res.data.degradation)
      this.unhealthyTotal = this.sum(res.data.unhealthy)
    },
    // 计算数字数组总数
    sum(array) {
      let total = 0
      array.forEach(item => {
        total += item
      })
      return total
    }
  }
}
</script>
<style lang="scss" scoped>
.tabs-row {
  height: 100px;
  .el-col {
    height: 100%;
    &:nth-child(1) {
      .num-box {
        background: linear-gradient(90deg, #41d79c 0%, #a7e25f 100%);
      }
    }
    &:nth-child(2) {
      .num-box {
        background: linear-gradient(90deg, #ffa804 0%, #fec800 100%);
      }
    }
    &:nth-child(3) {
      .num-box {
        background: linear-gradient(90deg, #5171fd 0%, #c97afd 100%);
      }
    }
    &:nth-child(4) {
      .num-box {
        background: linear-gradient(90deg, #ea667d 0%, #f09d5e 100%);
      }
    }
    .num-box {
      height: 100%;
      line-height: 100px;
      text-align: center;
      border-radius: 10px;
      position: relative;
      font-size: 20px;
      .title {
        font-weight: 400;
        color: #ffffff;
      }
      .icon {
        z-index: 1;
        position: absolute;
        right: 5px;
        bottom: 5px;
      }
      .number {
        position: relative;
        z-index: 2;
        font-weight: bold;
        color: #ffffff;
        margin-top: 10px;
      }
    }
  }
}
.echarts-box {
  height: calc(100% - 100px);
  width: 100%;
}
</style>
