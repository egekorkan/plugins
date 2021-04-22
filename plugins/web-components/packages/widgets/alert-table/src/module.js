// import { rules } from '@/common/utils/validation-rules'
import textSchema from '@/common/components/forms/schemas/text.schema.js'
import textareaSchema from '@/common/components/forms/schemas/textarea.schema.js'
import switchSchema from '@/common/components/forms/schemas/switch.schema.js'

export const config = {
  model: {
    meta: {
      uid: 'alert-table-widget',
      title: 'Alert table',
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
    display: {
      color: '#44C47D',
      autoColumns: true,
      dense: true,
      columns: 'TODO: add column selection'
    },
    w: 8,
    h: 18
  },
  schema: {
    general: { name: { ...textSchema, label: 'Display name' } },
    display: {
      autoColumns: {
        ...switchSchema,
        label: 'Auto-columns',
        textOn: 'On',
        textOff: 'Off'
      },
      dense: {
        ...switchSchema,
        label: 'Dense',
        textOn: 'On',
        textOff: 'Off'
      },
      columns: { label: 'Columns', ...textareaSchema }
    },
    links: {},
    repeatOptions: {}
  }
}

// Package (vue) component for npm (docs: packaging-sfc-for-npm):

import component from './AlertTableWidget.vue' // TODO: "your-component-name" once installed with npm
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
