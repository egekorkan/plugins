// import { rules } from '@/common/utils/validation-rules'
import textSchema from '@/packages/forms/text.schema.js'
import textareaSchema from '@/packages/forms/textarea.schema.js'
import switchSchema from '@/packages/forms/switch.schema.js'
import textColorPickerSchema from '@/packages/forms/text-color-picker.schema.js'

export const config = {
  model: {
    meta: {
      uid: 'wc-slider',
      title: 'Slider',
      description: 'Description goes here',
      wotOperations: ['invokeaction'],
      links: [
        {
          rel: 'screenshot',
          href:
            'https://raw.githubusercontent.com/asteriscio/plugins/main/plugins/web-components/wc-slider/src/assets/images/screenshot.png',
          type: 'image/png'
        },
        {
          rel: 'logo-light',
          href:
            'https://raw.githubusercontent.com/asteriscio/plugins/main/plugins/web-components/wc-slider/src/assets/images/logo-light.png',
          type: 'image/png'
        },
        {
          rel: 'logo-dark',
          href:
            'https://raw.githubusercontent.com/asteriscio/plugins/main/plugins/web-components/wc-slider/src/assets/images/logo-dark.png',
          type: 'image/png'
        }
      ]
    },
    name: '',
    value: {
      min: 0,
      max: 100,
      value: {
        valuePath: '',
        validDatatypes: ['number', 'string'],
        value: 50
      }
    },
    display: {
      vertical: false,
      color: '#44C47D'
    },
    w: 4,
    h: 4
  },
  schema: {
    general: { name: { ...textSchema, label: 'Display name' } },
    display: { color: textColorPickerSchema },
    links: {},
    repeatOptions: {},
    vertical: {
      ...switchSchema,
      label: 'Direction',
      textOn: 'Vertical',
      textOff: 'Horizontal'
    }
  }
}

// Package (vue) component for npm (docs: packaging-sfc-for-npm):

import component from './WcSlider.vue' // TODO: "your-component-name" once installed with npm
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

// TODO:
// function onChanged(model) {
//   console.debug(model)
//   if (model.vertical) {
//     model.w = 2
//     model.h = 9
//     model.minW = 1
//     model.minH = 9
//     model.maxW = 12
//     model.maxH = 100
//   } else {
//     model.w = 4
//     model.h = 4
//     model.minW = 2
//     model.minH = 4
//     model.maxW = 12
//     model.maxH = 12
//   }
// }
