<template>
  <!-- eslint-disable vue/no-v-html -->
  <div v-html="value"></div>
</template>

<script>
export default {
  name: 'MarkdownWidget',
  data: () => ({ value: '' }),
  mounted() {
    if (this.widget.markdown) this.value = this.widget.markdown
  }
}
</script>
