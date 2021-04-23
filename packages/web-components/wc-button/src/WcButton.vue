<template>
  <v-btn v-bind="widget.display" small rounded @click="handleClick">
    {{ widget.display.btnText }}
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonWidget',
  props: {
    widget: { type: Object, required: true }
  },
  setup(props) {
    function handleClick(event) {
      console.log(event)
      this.$emit('vibrate')
      this.$emit('action', event)
    }

    return { handleClick }
  }
}
</script>
