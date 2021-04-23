<template>
  <v-slider
    v-model="model"
    :min="widget.min"
    :max="widget.max"
    :color="widget.display.color"
    hide-details="auto"
    :label="String(model || '0')"
    inverse-label
    :vertical="widget.vertical"
    @input="handleChange"
    @change="handleFinalChange"
  ></v-slider>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'SwitchWidget',
  props: {
    widget: { type: Object, required: true }
  },
  setup(props, context) {
    console.log('[slider-widget] props', props.widget)

    const value = ref(true)

    function handleChange(value) {
      console.log('[slider-widget] handleChange', value)
      context.emit('vibrate')
    }

    function handleFinalChange(value) {
      console.log('[slider-widget] handleFinalChange', value)
      context.emit('action', value)
    }

    return { value, handleChange, handleFinalChange }
  }
}
</script>

<style scoped>
.v-slider + .v-label {
  width: 45px; /* accomodates 5 digits without word wrap */
  text-align: center;
}

.v-input__slot {
  justify-content: center;
}

.v-slider--horizontal {
  max-width: 100%;
  max-height: 30px;
  margin-left: 12px;
}

.v-slider--vertical {
  max-width: 30px;
  max-height: 100%;
  margin-left: 12px;
}

.v-slider--horizontal .v-slider__track-container {
  height: 6px;
  /* border-radius: 2px !important; */
}

.v-slider--horizontal .v-slider__track-background {
  height: 5px;
  /* border-radius: 2px !important; */
}

.v-slider--vertical .v-slider__track-container {
  width: 6px;
  /* border-radius: 2px !important; */
}

.v-slider--vertical .v-slider__track-background {
  width: 5px;
  /* border-radius: 2px !important; */
}
</style>
