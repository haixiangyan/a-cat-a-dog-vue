<template>
    <div class="analysis">
        <div id="analysis-pie" style="height: 300px;"></div>

        <p style="margin-bottom: 12px"><strong>Vendor: </strong>{{imageAnalysis.vendor}}</p>
        <p><strong>Created At: </strong>{{formatDate(imageAnalysis.created_at)}}</p>
    </div>
</template>

<script>
  import echarts from 'echarts'
  import {formatDate, getEChartOptions} from "../utils/utils"

  export default {
    name: "Analysis",
    props: {
      imageAnalysis: {
        type: Object,
        default: () => ({vendor: '', created_at: '', labels: []})
      }
    },
    mounted() {
      this.drawPie()
    },
    updated() {
      this.drawPie()
    },
    methods: {
      formatDate,
      getEChartOptions,
      drawPie() {
        const pieEl = document.querySelector('#analysis-pie')
        if (!pieEl) {
          return
        }

        const myChart = echarts.init(pieEl)
        const options = this.getEChartOptions(this.imageAnalysis)
        myChart.setOption(options)
      }
    }
  }
</script>

<style scoped lang="scss">
    .analysis {
        margin-top: 12px;
    }
</style>
