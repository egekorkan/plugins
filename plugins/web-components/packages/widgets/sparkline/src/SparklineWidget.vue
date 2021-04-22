<template>
  <v-card class="widget-sparkline-container transparent" flat width="100%">
    <v-card-title class="ma-0 pa-0">
      <div class="widget-sparkline-label">
        <span
          class="text-overline font-weight-light"
          v-text="widget.aggregation || 'AVG'"
        ></span>
      </div>
      <v-spacer></v-spacer>
      <div class="widget-sparkline-label">
        <span
          class="font-weight-medium"
          :class="{
            'text-subtitle-1': widget.h < 5,
            'text-h5': widget.h === 5,
            'display-1': 5 < widget.h && widget.h <= 6,
            'display-2': 6 < widget.h
          }"
          v-text="avg || '—'"
        ></span>
        <span
          class="font-weight-light"
          :class="{
            'text-subtitle-3': widget.h < 5,
            'text-subtitle-1': widget.h === 5,
            title: 5 < widget.h && widget.h <= 6,
            'text-h5': 6 < widget.h
          }"
          v-text="widget.unit || '—'"
        ></span>
      </div>
      <!--  <v-btn icon class="align-self-start" size="28">
        <v-icon>double_arrow</v-icon>
      </v-btn>-->
    </v-card-title>

    <v-sheet class="transparent">
      <v-sparkline
        :key="String(avg)"
        :type="
          widget.sparklineType ? widget.sparklineType.toLowerCase() : 'trend'
        "
        :show-labels="widget.showLabels"
        :fill="widget.fill"
        :auto-line-width="widget.autoLine"
        :line-width="widget.autoLine ? 2 : widget.lineWidth"
        :smooth="widget.autoLine ? true : widget.lineRadius"
        :color="widget.display.color"
        :gradient="
          widget.display.color ? [] : ['#f72047', '#ffd200', '#1feaea']
        "
        stroke-linecap="round"
        :padding="widget.showLabels ? 8 : 0"
        auto-draw
        :auto-draw-duration="750"
        :value="model"
      ></v-sparkline>
    </v-sheet>
  </v-card>
</template>

<script>
import { ref, computed } from '@vue/composition-api'

export default {
  name: 'SparklineWidget',
  props: {
    widget: { type: Object, required: true }
  },
  setup(props, context) {
    console.log('[sparkline-widget] props', props.widget)

    const value = ref(true)

    function handleChange(value) {
      console.log('[sparkline-widget] handleChange', value)
      context.emit('vibrate')
    }

    const avg = computed(() => {
      const sum = this.model.reduce((acc, cur) => acc + Number(cur), 0)
      const length = this.model.length
      if (!sum && !length) return 0
      return Math.ceil(sum / length)
    })

    return { value, handleChange, avg }
  }
}
</script>

<style scoped>
.widget-sparkline-container {
  margin: 0px;
  padding: 0px;
  align-content: space-between !important;
}

.widget-sparkline-label {
  text-align: start;
}
</style>
