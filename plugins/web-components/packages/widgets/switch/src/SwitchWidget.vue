<template>
  <v-switch
    v-model="value"
    hide-details="auto"
    :color="widget.display.color"
    inset
    class="ma-0"
    @change="handleChange"
  >
    {{ widget.title }}
  </v-switch>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'SwitchWidget',
  props: {
    widget: { type: Object, required: true }
  },
  setup(props, context) {
    console.log('[switch-widget] props', props.widget)

    const value = ref(true)

    function handleChange(value) {
      console.log('[switch-widget] handleChange', value)
      context.emit('vibrate')
    }

    return { value, handleChange }
  }
}
</script>
