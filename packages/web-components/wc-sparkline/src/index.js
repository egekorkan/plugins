// import { rules } from '@/common/utils/validation-rules'
import textSchema from '@/packages/forms/text.schema.js'
import textareaSchema from '@/packages/forms/textarea.schema.js'
import switchSchema from '@/packages/forms/switch.schema.js'
import btnToggleSchema from '@/packages/forms/btn-toggle.schema.js'
import textColorPickerSchema from '@/packages/forms/text-color-picker.schema.js'
import sliderSchema from '@/packages/forms/slider.schema.js'

export const config = {
  model: {
    meta: {
      uid: 'wc-sparkline',
      title: 'Sparkline',
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
      ],
      links: [
        {
          rel: 'screenshot',
          href:
            'https://raw.githubusercontent.com/asteriscio/plugins/main/plugins/web-components/wc-sparkline/src/assets/images/screenshot.png',
          type: 'image/png'
        },
        {
          rel: 'logo-light',
          href:
            'https://raw.githubusercontent.com/asteriscio/plugins/main/plugins/web-components/wc-sparkline/src/assets/images/logo-light.png',
          type: 'image/png'
        },
        {
          rel: 'logo-dark',
          href:
            'https://raw.githubusercontent.com/asteriscio/plugins/main/plugins/web-components/wc-sparkline/src/assets/images/logo-dark.png',
          type: 'image/png'
        }
      ]
    },
    name: '',
    unit: '',
    display: {
      color: '#44C47D',
      sparklineType: 'Trend',
      autoLine: true,
      showLabels: false,
      fill: false,
      lineWidth: '2',
      lineRadius: '10'
      // gradient: false,
    },
    w: 4,
    h: 7
  },
  schema: {
    general: { name: { ...textSchema, label: 'Display name' } },
    display: {
      color: textColorPickerSchema,
      unit: { label: 'Unit', ...textSchema },
      sparklineType: {
        label: 'Type',
        options: ['Bar', 'Trend'],
        ...btnToggleSchema
      },
      autoLine: { label: 'Auto-line', class: 'col-4', ...switchSchema },
      showLabels: {
        ...switchSchema,
        label: 'Show labels',
        textOn: 'On',
        textOff: 'Off'
      },
      fill: { label: 'Fill', class: 'col-4', ...switchSchema },
      // gradient: { label: "Gradient", class: "col-4", ...switchSchema },
      lineWidth: {
        label: 'Line Width',
        min: '0.1',
        max: '10',
        ...sliderSchema
      },
      lineRadius: {
        label: 'Line Radius',
        min: '0',
        max: '16',
        ...sliderSchema
      }
    },
    links: {},
    repeatOptions: {}
  }
}

// Package (vue) component for npm (docs: packaging-sfc-for-npm):

import component from './WcSparkline.vue' // TODO: "your-component-name" once installed with npm
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
