<template>
  <div id="circle-slider-container">
    <circle-slider
      v-model="model"
      :min="Number(widget.min)"
      :max="Number(widget.max)"
      :circle-width="5"
      :progress-width="6"
      :knob-radius="8"
      :progress-color="widget.display.color"
      :knob-color="widget.display.color"
      @input="handleChange"
      @change="handleFinalChange"
    ></circle-slider>
    <div id="circle-slider-label">{{ model }}</div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'KnobWidget',
  props: {
    widget: { type: Object, required: true }
  },
  setup(props, context) {
    console.log('[knob-widget] props', props.widget)

    const value = ref(50)

    function handleChange(value) {
      console.log('[knob-widget] handleChange', value)
      context.emit('vibrate')
    }

    function handleFinalChange(value) {
      console.log('[knob-widget] handleFinalChange', value)
      context.emit('action', value)
    }

    return { value, handleChange, handleFinalChange }
  }
}
</script>

<style scoped>
#circle-slider-container {
  position: relative;
}

#circle-slider-container svg {
  /* Required so that Knob fits in gridItem of minH: 6 and minW: 2 without overflowing  */
  height: 90px !important;
  width: 90px !important;
}

#circle-slider-label {
  height: 50px;
  width: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -25px;
  margin-top: -25px;
  z-index: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  vertical-align: middle;
  color: #212121;
}

.theme--dark #circle-slider-label {
  color: #ffffff;
}
</style>
