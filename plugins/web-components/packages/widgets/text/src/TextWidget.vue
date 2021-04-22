<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-html="model"></div>
</template>

<script>
export default {
  name: 'TextWidget',
  data() {
    return {
      model: [],
      done: []
    }
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler(newVal) {
        this.model = newVal
        this.done = Array(newVal ? newVal.length : 0).fill(false)
        // console.debug(this.model);
      }
    }
  },
  methods: {
    handleChange(event) {
      this.$emit('vibrate')
      this.$emit('action', event)
    }
  }
}
</script>

<style scoped></style>
