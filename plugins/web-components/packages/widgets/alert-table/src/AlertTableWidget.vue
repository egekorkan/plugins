<template>
  <v-data-table
    v-if="value"
    :headers="headers"
    :items="value.reverse()"
    :dense="widget.display.dense"
    :item-key="widget.origin"
  >
    <template #item.origin="{ item }">
      {{ Date(item.origin).slice(4, 24) }}
    </template>
  </v-data-table>
</template>

<script>
import { ref, computed } from '@vue/composition-api'

export default {
  name: 'AlertTableWidget',
  props: {
    widget: { type: Object, required: true }
  },
  setup(props, context) {
    console.log('[alert-table-widget] props', props.widget)

    const value = ref([])

    function handleChange(value) {
      console.log('[alert-table-widget] handleChange', value)
      context.emit('vibrate')
    }

    const headers = computed(() => {
      if (value.value) {
        if (props.widget.autoColumns) {
          return Object.keys(value.value[0]).map((col) => {
            return {
              text: col,
              value: col,
              align: 'left',
              soralarm: true
            }
          })
        } else {
          return props.widget.columns
        }
      } else return []
    })

    return { value, handleChange, headers }
  }
}
</script>
