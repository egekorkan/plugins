export default {
  install: async (Vue, options) => {
    Vue.component('wi-p-content', () =>
      import('@netzoio/widgets/src/components/p-content/PContent.vue')
    )
  }
}
