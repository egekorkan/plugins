<template>
  <v-data-table
    v-bind="widget"
    :headers="headers"
    :items="values"
    :items-per-page="1000"
  ></v-data-table>
</template>

<script>
import { ref, computed } from '@vue/composition-api'

export default {
  name: 'TableWidget',
  props: {
    widget: { type: Object, required: true }
  },
  setup(props, context) {
    console.log('[table-widget] props', props.widget)

    const value = ref(true)

    function handleChange(value) {
      console.log('[table-widget] handleChange', value)
      context.emit('vibrate')
    }

    // const headers = computed(() => {
    //   if (props.widget.dataframe.data) {
    //     if (props.widget.display.autoColumns) {
    //       return Object.keys(props.widget.dataframe.data[0]).map((key) => {
    //         return { text: key, value: key, align: 'left', sortable: true }
    //       })
    //     } else {
    //       return props.widget.display.columns
    //     }
    //   } else return props.widget.display.columns || []
    // })

    // const values = computed(
    //   () => [...props.widget.dataframe.data].reverse() // avoids mutating prop
    // )

    const headers = [
      {
        text: 'KPI A',
        align: 'start',
        value: 'name'
      },
      { text: 'KPI B', value: 'kpia' },
      { text: 'KPI C', value: 'kpib' }
    ]

    const values = [
      {
        name: '2021-04-13',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-12',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-11',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-10',
        kpia: 305,
        kpib: 3.7
      },
      {
        name: '2021-04-09',
        kpia: 356,
        kpib: 16.0
      },
      {
        name: '2021-04-08',
        kpia: 375,
        kpib: 0.0
      },
      {
        name: '2021-04-07',
        kpia: 392,
        kpib: 0.2
      },
      {
        name: '2021-04-06',
        kpia: 408,
        kpib: 3.2
      },
      {
        name: '2021-04-05',
        kpia: 452,
        kpib: 25.0
      },
      {
        name: '2021-04-04',
        kpia: 518,
        kpib: 26.0
      },
      {
        name: '2021-04-03',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-02',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-01',
        kpia: 262,
        kpib: 16.0
      },

      {
        name: '2021-04-13',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-12',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-11',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-10',
        kpia: 305,
        kpib: 3.7
      },
      {
        name: '2021-04-09',
        kpia: 356,
        kpib: 16.0
      },
      {
        name: '2021-04-08',
        kpia: 375,
        kpib: 0.0
      },
      {
        name: '2021-04-07',
        kpia: 392,
        kpib: 0.2
      },
      {
        name: '2021-04-06',
        kpia: 408,
        kpib: 3.2
      },
      {
        name: '2021-04-05',
        kpia: 452,
        kpib: 25.0
      },
      {
        name: '2021-04-04',
        kpia: 518,
        kpib: 26.0
      },
      {
        name: '2021-04-03',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-02',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-01',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-13',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-12',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-11',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-10',
        kpia: 305,
        kpib: 3.7
      },
      {
        name: '2021-04-09',
        kpia: 356,
        kpib: 16.0
      },
      {
        name: '2021-04-08',
        kpia: 375,
        kpib: 0.0
      },
      {
        name: '2021-04-07',
        kpia: 392,
        kpib: 0.2
      },
      {
        name: '2021-04-06',
        kpia: 408,
        kpib: 3.2
      },
      {
        name: '2021-04-05',
        kpia: 452,
        kpib: 25.0
      },
      {
        name: '2021-04-04',
        kpia: 518,
        kpib: 26.0
      },
      {
        name: '2021-04-03',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-02',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-01',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-13',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-12',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-11',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-10',
        kpia: 305,
        kpib: 3.7
      },
      {
        name: '2021-04-09',
        kpia: 356,
        kpib: 16.0
      },
      {
        name: '2021-04-08',
        kpia: 375,
        kpib: 0.0
      },
      {
        name: '2021-04-07',
        kpia: 392,
        kpib: 0.2
      },
      {
        name: '2021-04-06',
        kpia: 408,
        kpib: 3.2
      },
      {
        name: '2021-04-05',
        kpia: 452,
        kpib: 25.0
      },
      {
        name: '2021-04-04',
        kpia: 518,
        kpib: 26.0
      },
      {
        name: '2021-04-03',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-02',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-01',
        kpia: 262,
        kpib: 16.0
      },

      {
        name: '2021-04-13',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-12',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-11',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-10',
        kpia: 305,
        kpib: 3.7
      },
      {
        name: '2021-04-09',
        kpia: 356,
        kpib: 16.0
      },
      {
        name: '2021-04-08',
        kpia: 375,
        kpib: 0.0
      },
      {
        name: '2021-04-07',
        kpia: 392,
        kpib: 0.2
      },
      {
        name: '2021-04-06',
        kpia: 408,
        kpib: 3.2
      },
      {
        name: '2021-04-05',
        kpia: 452,
        kpib: 25.0
      },
      {
        name: '2021-04-04',
        kpia: 518,
        kpib: 26.0
      },
      {
        name: '2021-04-03',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-02',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-01',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-13',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-12',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-11',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-10',
        kpia: 305,
        kpib: 3.7
      },
      {
        name: '2021-04-09',
        kpia: 356,
        kpib: 16.0
      },
      {
        name: '2021-04-08',
        kpia: 375,
        kpib: 0.0
      },
      {
        name: '2021-04-07',
        kpia: 392,
        kpib: 0.2
      },
      {
        name: '2021-04-06',
        kpia: 408,
        kpib: 3.2
      },
      {
        name: '2021-04-05',
        kpia: 452,
        kpib: 25.0
      },
      {
        name: '2021-04-04',
        kpia: 518,
        kpib: 26.0
      },
      {
        name: '2021-04-03',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-02',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-01',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-13',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-12',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-11',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-10',
        kpia: 305,
        kpib: 3.7
      },
      {
        name: '2021-04-09',
        kpia: 356,
        kpib: 16.0
      },
      {
        name: '2021-04-08',
        kpia: 375,
        kpib: 0.0
      },
      {
        name: '2021-04-07',
        kpia: 392,
        kpib: 0.2
      },
      {
        name: '2021-04-06',
        kpia: 408,
        kpib: 3.2
      },
      {
        name: '2021-04-05',
        kpia: 452,
        kpib: 25.0
      },
      {
        name: '2021-04-04',
        kpia: 518,
        kpib: 26.0
      },
      {
        name: '2021-04-03',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-02',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-01',
        kpia: 262,
        kpib: 16.0
      },

      {
        name: '2021-04-13',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-12',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-11',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-10',
        kpia: 305,
        kpib: 3.7
      },
      {
        name: '2021-04-09',
        kpia: 356,
        kpib: 16.0
      },
      {
        name: '2021-04-08',
        kpia: 375,
        kpib: 0.0
      },
      {
        name: '2021-04-07',
        kpia: 392,
        kpib: 0.2
      },
      {
        name: '2021-04-06',
        kpia: 408,
        kpib: 3.2
      },
      {
        name: '2021-04-05',
        kpia: 452,
        kpib: 25.0
      },
      {
        name: '2021-04-04',
        kpia: 518,
        kpib: 26.0
      },
      {
        name: '2021-04-03',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-02',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-01',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-13',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-12',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-11',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-10',
        kpia: 305,
        kpib: 3.7
      },
      {
        name: '2021-04-09',
        kpia: 356,
        kpib: 16.0
      },
      {
        name: '2021-04-08',
        kpia: 375,
        kpib: 0.0
      },
      {
        name: '2021-04-07',
        kpia: 392,
        kpib: 0.2
      },
      {
        name: '2021-04-06',
        kpia: 408,
        kpib: 3.2
      },
      {
        name: '2021-04-05',
        kpia: 452,
        kpib: 25.0
      },
      {
        name: '2021-04-04',
        kpia: 518,
        kpib: 26.0
      },
      {
        name: '2021-04-03',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-02',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-01',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-13',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-12',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-11',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-10',
        kpia: 305,
        kpib: 3.7
      },
      {
        name: '2021-04-09',
        kpia: 356,
        kpib: 16.0
      },
      {
        name: '2021-04-08',
        kpia: 375,
        kpib: 0.0
      },
      {
        name: '2021-04-07',
        kpia: 392,
        kpib: 0.2
      },
      {
        name: '2021-04-06',
        kpia: 408,
        kpib: 3.2
      },
      {
        name: '2021-04-05',
        kpia: 452,
        kpib: 25.0
      },
      {
        name: '2021-04-04',
        kpia: 518,
        kpib: 26.0
      },
      {
        name: '2021-04-03',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-02',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-01',
        kpia: 262,
        kpib: 16.0
      },

      {
        name: '2021-04-13',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-12',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-11',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-10',
        kpia: 305,
        kpib: 3.7
      },
      {
        name: '2021-04-09',
        kpia: 356,
        kpib: 16.0
      },
      {
        name: '2021-04-08',
        kpia: 375,
        kpib: 0.0
      },
      {
        name: '2021-04-07',
        kpia: 392,
        kpib: 0.2
      },
      {
        name: '2021-04-06',
        kpia: 408,
        kpib: 3.2
      },
      {
        name: '2021-04-05',
        kpia: 452,
        kpib: 25.0
      },
      {
        name: '2021-04-04',
        kpia: 518,
        kpib: 26.0
      },
      {
        name: '2021-04-03',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-02',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-01',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-13',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-12',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-11',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-10',
        kpia: 305,
        kpib: 3.7
      },
      {
        name: '2021-04-09',
        kpia: 356,
        kpib: 16.0
      },
      {
        name: '2021-04-08',
        kpia: 375,
        kpib: 0.0
      },
      {
        name: '2021-04-07',
        kpia: 392,
        kpib: 0.2
      },
      {
        name: '2021-04-06',
        kpia: 408,
        kpib: 3.2
      },
      {
        name: '2021-04-05',
        kpia: 452,
        kpib: 25.0
      },
      {
        name: '2021-04-04',
        kpia: 518,
        kpib: 26.0
      },
      {
        name: '2021-04-03',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-02',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-01',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-13',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-12',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-11',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-10',
        kpia: 305,
        kpib: 3.7
      },
      {
        name: '2021-04-09',
        kpia: 356,
        kpib: 16.0
      },
      {
        name: '2021-04-08',
        kpia: 375,
        kpib: 0.0
      },
      {
        name: '2021-04-07',
        kpia: 392,
        kpib: 0.2
      },
      {
        name: '2021-04-06',
        kpia: 408,
        kpib: 3.2
      },
      {
        name: '2021-04-05',
        kpia: 452,
        kpib: 25.0
      },
      {
        name: '2021-04-04',
        kpia: 518,
        kpib: 26.0
      },
      {
        name: '2021-04-03',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-02',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-01',
        kpia: 262,
        kpib: 16.0
      },

      {
        name: '2021-04-13',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-12',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-11',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-10',
        kpia: 305,
        kpib: 3.7
      },
      {
        name: '2021-04-09',
        kpia: 356,
        kpib: 16.0
      },
      {
        name: '2021-04-08',
        kpia: 375,
        kpib: 0.0
      },
      {
        name: '2021-04-07',
        kpia: 392,
        kpib: 0.2
      },
      {
        name: '2021-04-06',
        kpia: 408,
        kpib: 3.2
      },
      {
        name: '2021-04-05',
        kpia: 452,
        kpib: 25.0
      },
      {
        name: '2021-04-04',
        kpia: 518,
        kpib: 26.0
      },
      {
        name: '2021-04-03',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-02',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-01',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-13',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-12',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-11',
        kpia: 262,
        kpib: 16.0
      },
      {
        name: '2021-04-10',
        kpia: 305,
        kpib: 3.7
      },
      {
        name: '2021-04-09',
        kpia: 356,
        kpib: 16.0
      },
      {
        name: '2021-04-08',
        kpia: 375,
        kpib: 0.0
      },
      {
        name: '2021-04-07',
        kpia: 392,
        kpib: 0.2
      },
      {
        name: '2021-04-06',
        kpia: 408,
        kpib: 3.2
      },
      {
        name: '2021-04-05',
        kpia: 452,
        kpib: 25.0
      },
      {
        name: '2021-04-04',
        kpia: 518,
        kpib: 26.0
      },
      {
        name: '2021-04-03',
        kpia: 159,
        kpib: 6.0
      },
      {
        name: '2021-04-02',
        kpia: 237,
        kpib: 9.0
      },
      {
        name: '2021-04-01',
        kpia: 262,
        kpib: 16.0
      }
    ]

    return { value, handleChange, headers, values }
  }
}
</script>

<style scoped>
.v-data-table {
  height: 100%;
  width: 100%;
  background: transparent;
}
</style>
