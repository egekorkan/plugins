<template>
  <div class="apexchart-container">
    <div class="apexchart-wrapper">
      <vue-apexchart
        :options="options"
        :series="series"
        height="100%"
        class="apexchart-chart"
      ></vue-apexchart>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from '@vue/composition-api'

export default {
  name: 'Apexchart',
  components: {
    VueApexchart: () => import('vue-apexcharts')
  },
  props: {
    widget: { type: Object, required: true },
    chartSeries: {
      type: Array,
      default: () => [
        {
          name: 'TEAM A',
          type: 'column',
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        },
        {
          name: 'TEAM B',
          type: 'area',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        },
        {
          name: 'TEAM C',
          type: 'line',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }
      ]
    },
    chartOptions: {
      type: Object,
      required: false,
      default: () => ({
        chart: {
          height: 350,
          type: 'line',
          stacked: false
        },
        stroke: {
          width: [0, 2, 5],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        }
      })
    }
  },
  setup(props) {
    const options = ref(props.chartOptions)
    const series = ref(props.chartSeries)

    // wot:

    // const things = computed(() =>
    //   props.widget.interactions.map((i) => i.getThing())
    // )

    // console.debug(props.widget)

    // const thing = ref(null)
    // watch(things, (things) => {
    //   if (things) {
    //     console.warn(things.value)

    //     // setInterval(async () => {
    //     //   const value = await thing.readProperty(
    //     //     interaction.value.getName()
    //     //   )
    //     //   console.warn('TODO: update chart data', value)
    //     //   updateChart(value)
    //     // }, 5000)
    //   }
    // })

    function updateChart(value) {
      series.value[0].data = [...series.value[0].data, value]
    }

    return {
      // widget:
      options,
      series
      // wot:
      // thing
    }
  },
  methods: {
    // updateChart() {
    //   const max = 90
    //   const min = 20
    //   const newData = this.series[0].data.map(() => {
    //     return Math.floor(Math.random() * (max - min + 1)) + min
    //   })
    //   // In the same way, update the series option
    //   this.series = [
    //     {
    //       data: newData
    //     }
    //   ]
    // }
  }
}
</script>

<style>
.apexchart-container,
.apexchart-wrapper {
  width: 100%;
  height: 100%;
}

.apexchart-chart {
  width: 100%;
}
</style>
