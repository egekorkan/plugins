import './wot-interaction/src/wot-interaction.js'
// import './wot-property/src/wot-property.js'
// import './wot-action/src/wot-action.js'
// import './wot-event/src/wot-event.js'
// import './wot-link/src/wot-link.js'
import './wot-stepper/src/wot-stepper.js'

// TODO:
// TODO: REMOVE THIS OLD CODE ////////////////////////////////////////////////////////////////////////////////////////////
// TODO:

// Uses Webpack's require.context(directory, useSubdirectories = true, regExp = /^\.\/.*$/, mode = 'sync'):

// CONFIGS: requires all named export 'config' in index.js files under @/packages/web-components/ recursively
const requireConfig = require.context('./', true, /src\/index.js$/)
export const configs = requireConfig
  .keys()
  .map((path) => requireConfig(path).config)
  .filter((config) => !!config)

// INFOS: requires all plugin.json files under @/packages/web-components/ recursively
const requireInfo = require.context('./', true, /plugin.json$/)
export const infos = requireInfo.keys().map((path) => requireInfo(path).info)

// IMAGES: requires all screenshot.png images under @/packages/web-components/ recursively
// const requirePluginImage = require.context("@/packages/plugins", true, /screenshot.png$/);
// const imagepaths = requirePluginImage
//   .keys()
//   .map(path => `@/packages/plugins${path.substring(1)}`).imagepath;
// console.debug(imagepaths);
