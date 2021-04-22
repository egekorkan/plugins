// import { rules } from '@/common/utils/validation-rules'
import textSchema from '@/common/components/forms/schemas/text.schema.js'
import textareaSchema from '@/common/components/forms/schemas/textarea.schema.js'
import switchSchema from '@/common/components/forms/schemas/switch.schema.js'
import textColorPickerSchema from '@/common/components/forms/schemas/text-color-picker.schema.js'
import selectSchema from '@/common/components/forms/schemas/select.schema.js'

export const config = {
  model: {
    meta: {
      uid: 'chart-widget',
      title: 'Chart',
      description: 'Description goes here',
      wotOperations: [
        'readhistoricalproperty',
        'readhistoricalproperties',
        'readhistoricalevent',
        'readhistoricalevents',
        'readproperty',
        'observeproperty',
        'unobserveproperty',
        'readallproperties'
      ]
    },
    name: '',
    display: { color: '#44C47D' },
    //chart
    chartType: 'line',
    chartSeries: [],
    chartOptions: {}, // chart configuration in json
    // values:
    value: { valuePath: '', validDatatypes: ['array'], value: [] },
    // // values:
    // values: [{ name: "", valuePath: "", validDatatypes: ["array"], value: [] }],
    w: 6,
    h: 16
  },
  schema: {
    general: { name: { ...textSchema, label: 'Display name' } },
    display: { color: textColorPickerSchema },
    links: {},
    repeatOptions: {},
    chartType: {
      ...selectSchema,
      label: 'Chart type',
      itemText: 'title',
      itemValue: 'type',
      items: []
    },
    chartSeries: {
      ...selectSchema,
      label: 'Chart series',
      itemText: 'title',
      itemValue: 'type',
      items: []
    },
    chartOptions: {
      ...selectSchema,
      label: 'Chart options',
      itemText: 'title',
      itemValue: 'type',
      items: []
    },
    ['value.valuePath']: { label: 'Value', ...textSchema }
  }
}

// Package (vue) component for npm (docs: packaging-sfc-for-npm):

import component from './ChartWidget.vue' // TODO: "your-component-name" once installed with npm
// import "./css/index.css"; // TODO: "your-component-name/dist/your-component-name.css" once installed with npm

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('MyComponent', component)
}

// Create module definition for Vue.use()
const plugin = { install }

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

// To allow use as module (npm/webpack/etc.) export component
export default component
