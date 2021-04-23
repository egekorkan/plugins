<template>
  <v-row class="widget-controls-stepper">
    <v-btn
      icon
      text
      class="ml-0 mr-0"
      :color="widget.display.color"
      :disabled="value === widget.min"
      @click="handleChangeSubtract"
    >
      <v-icon>remove</v-icon>
    </v-btn>
    <v-toolbar-title
      class="counter ma-0 font-weight-bold"
      :style="{ width: 'auto', textAlign: 'center' }"
      >{{ value }}</v-toolbar-title
    >
    <v-btn
      icon
      text
      class="ml-0 mr-0"
      :color="widget.display.color"
      :disabled="value === widget.max"
      @click="handleChangeAdd"
    >
      <v-icon>add</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'StepperWidget',
  props: {
    widget: { type: Object, required: true }
  },
  setup(props, context) {
    console.log('[stepper-widget] props', props.widget)

    const value = ref(Math.floor(Math.random() * 100))

    function handleChange(value) {
      console.log('[stepper-widget] handleChange', value)
      context.emit('vibrate')
    }

    function handleChangeSubtract(value) {
      context.emit('vibrate')
      context.emit('action', --value.value)
    }

    function handleChangeAdd(value) {
      context.emit('vibrate')
      context.emit('action', ++value.value)
    }

    return { value, handleChange, handleChangeSubtract, handleChangeAdd }
  }
}
</script>

<style scoped>
.widget-controls-stepper {
  justify-content: center;
}
</style>
