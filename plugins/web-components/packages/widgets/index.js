// Uses Webpack's require.context(directory, useSubdirectories = true, regExp = /^\.\/.*$/, mode = 'sync'):

// CONFIGS: requires all named export 'config' in module.js files under @/packages/web-components/packages/widgets/ recursively
const requireConfig = require.context('./', true, /module.js$/)
export const configs = requireConfig
  .keys()
  .map((path) => requireConfig(path).config)

// INFOS: requires all plugin.json files under @/packages/web-components/packages/widgets/ recursively
const requireInfo = require.context('./', true, /plugin.json$/)
export const infos = requireInfo.keys().map((path) => requireInfo(path).info)

// IMAGES: requires all demo.png images under @/packages/web-components/packages/widgets/ recursively
// const requirePluginImage = require.context("@/packages/plugins", true, /demo.png$/);
// const imagepaths = requirePluginImage
//   .keys()
//   .map(path => `@/packages/plugins${path.substring(1)}`).imagepath;
// console.debug(imagepaths);
