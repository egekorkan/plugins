import './wc-wot-interaction/src/wc-wot-interaction.js'
// import './wc-wot-property/src/wot-property.js'
// import './wc-wot-action/src/wot-action.js'
// import './wc-wot-event/src/wot-event.js'
// import './wc-wot-link/src/wot-link.js'
import './wc-wot-stepper/src/wc-wot-stepper.js'

// TODO:
// TODO: REMOVE THIS OLD CODE ////////////////////////////////////////////////////////////////////////////////////////////
// TODO:

// Uses Webpack's require.context(directory, useSubdirectories = true, regExp = /^\.\/.*$/, mode = 'sync'):

// CONFIGS: requires all named export 'config' in index.js files under @/packages/web-components/wc- recursively
const requireConfig = require.context('./', true, /src\/index.js$/)
export const configs = requireConfig
  .keys()
  .map((path) => requireConfig(path).config)
  .filter((config) => !!config)

// INFOS: requires all plugin.json files under @/packages/web-components/wc- recursively
const requireInfo = require.context('./', true, /plugin.json$/)
export const infos = requireInfo.keys().map((path) => requireInfo(path).info)

// IMAGES: requires all screenshot.png images under @/packages/web-components/wc- recursively
// const requirePluginImage = require.context("@/packages/plugins", true, /screenshot.png$/);
// const imagepaths = requirePluginImage
//   .keys()
//   .map(path => `@/packages/plugins${path.substring(1)}`).imagepath;
// console.debug(imagepaths);
