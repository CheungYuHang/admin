<template>
  <div class="line-chart container" ref="myChart"></div>
</template>
<script>
export default {
  name: 'LineChart',
  props: {
    equipmentInfo: {
      type: Object,
      request: true
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      const myChart = this.$echarts.init(this.$refs.myChart)
      const option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['健康设备', '预警设备', '退化设备', '不健康设备'],
          bottom: '1%'
        },
        grid: {
          left: '1%',
          right: '2%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '健康设备',
            type: 'line',
            data: this.equipmentInfo.health,
            stack: '总量',
            color: '#41d79c'
          },
          {
            name: '预警设备',
            type: 'line',
            data: this.equipmentInfo.warning,
            stack: '总量',
            color: '#ffa804'
          },
          {
            name: '退化设备',
            type: 'line',
            data: this.equipmentInfo.degradation,
            stack: '总量',
            color: '#5171fd'
          },
          {
            name: '不健康设备',
            type: 'line',
            data: this.equipmentInfo.unhealthy,
            stack: '总量',
            color: '#ea667d'
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>
<style lang="scss" scoped></style>
