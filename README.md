<p align="center">
  <a href="https://netzo.io" rel="noopener" target="_blank">
    <img width="150" src="https://netzo.io/img/netzo-symbol-light.svg" alt="Netzo logo" />
  </a>
</p>

<h1 align="center">Netzo Plugin Repository</h1>

<p align="center">
  Plugin repository for the <a href="https://app.netzo.io" target="_blank">Netzo WoT Platform</a>, an open Web of Things platform to interconnect IoT devices, platforms and services over the web.
</p>

<div align="center">

[![MIT Licensed](https://img.shields.io/github/license/netzoio/plugins)](https://github.com/netzoio/plugins/edit/main/LICENSE)
[![Discord](https://discord.com/api/guilds/790465167523577887/widget.png)](https://discord.gg/6wQRmrcPXp)
[![Follow on Twitter](https://img.shields.io/twitter/follow/netzoio.svg?label=follow+netzoio)](https://twitter.com/netzoio)
[![Visit our Channel](https://img.shields.io/youtube/channel/views/UCHFSTwM7-ZjeJRI0RwtlFmg)](https://www.youtube.com/channel/UCHFSTwM7-ZjeJRI0RwtlFmg)

</div>

> This repository is still a Work in Progress. In the meantime, feel free to reach out at [hello@netzo.io](mailto:hello@netzo.io) for more information on the [Netzo WoT Platform](https://app.netzo.io). If you feel like contributing, do let us know!

## Quick Start

This repository lists all officially supported plugins listed on [netzo.io](https://netzo.io/plugins) and used by the [Netzo WoT Platform](https://app.netzo.io).

We review all plugins before they are published. This means that it may take some time before we can review your plugin.

To submit a plugin for review:

1. Fork this repository
2. Copy a starting template from `/_templates` into `/plugins`
3. Develop your plugin by modifying the copied files accordingly
4. Add the URL of the `plugin.json` file to `plugins.json`
5. Create a pull request

## plugin.json

To be valid, a `plugin.json` file must validate against the [plugin.schema.json](./plugin.schema.json) JSON Schema. You can use a tool like [JSON Schema Validator](https://www.jsonschemavalidator.net/) for quickly testing your `plugin.json` files. The following table summarizes the fields in a `plugin.json` file.

| Property      | Type                | Requried | Description                                                                                                      |
| ------------- | ------------------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| `uid`         | String              | true     | A unique ID (camel-case) prefixed by the initials of its the plugin type (`ti-`, `tm-` or `wi`)                  |
| `type`        | String              | true     | Plugin type, one of `thing-importer`, `thing-model`, or `widget`                                                 |
| `version`     | String              | true     | Plugin version in [semantic version](https://semver.org/) format                                                 |
| `status`      | String              | true     | Marks the current development status of the plugin. One of `stable`, `beta`, `requested`, `deprecated`           |
| `category`    | String              | true     | Marks the category of the plugin. One of `official`, `community`, `enterprise`, `deprecated`                     |
| `name`        | String              | true     | A human-friendly display name for the plugin                                                                     |
| `description` | String              | true     | A brief description of the plugin                                                                                |
| `keywords`    | String[]            | false    | An array of relevant keywords (camel-case)                                                                       |
| `authors`     | String[]            | false    | An array of emails of plugin authors or owners (e.g. `mailto:first.last@sample.com`)                             |
| `license`     | String              | false    | A string indicating licensing information (e.g. `MIT`)                                                           |
| `main`        | String              | false    | URL to the plugin's main entry point (e.g. `@netzoio/plugins/plugins/widgets/wi-p-button-toggle/src/index.js`)   |
| `display`     | [Display](#display) | true     | A `Display` object specifying relevant details for rendering the plugin in the UI                                |
| `links`       | [Link](#display)[]  | false    | An array of [link relations](https://www.w3.org/TR/image-resource/#sizes-member) to related web resources        |
| `form`        | [Form](#form)       | false    | A `Form` object specifiying the `model`, `schema` and `options` to be used in the plugin settings form by the UI |

### Display

| Property      | Type              | Requried | Description                                                                                                                                 |
| ------------- | ----------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `imageUrl`    | String            | true     | URL to the plugin's display image (used as logo)                                                                                            |
| `color`       | Object            | false    | String of color in hexadecimal format used by UI in certain places. If none is specified a default will be applied                          |
| `screenshots` | [Image](#image)[] | false    | Array of [image resource objects](https://www.w3.org/TR/image-resource/#sizes-member) specifying sample screenshots of the plugin in action |

#### Image

| Property | Type   | Requried | Description                                                                                                                                   |
| -------- | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`  | String | false    | The accessible name for the associated image                                                                                                  |
| `sizes`  | String | false    | Specifies which image is most suitable for each display context                                                                               |
| `type`   | String | false    | The [image MIME type](https://mimesniff.spec.whatwg.org/#image-mime-type) for the image resource (e.g. `image/png`, `image/svg`, `image/jpg`) |
| `src`    | String | true     | URL from wich the image can be fetched from the internet                                                                                      |

### Link

| Property | Type   | Requried | Description                                                                                     |
| -------- | ------ | -------- | ----------------------------------------------------------------------------------------------- |
| `rel`    | String | false    | The link relation (see possible values [here](https://www.iana.org/assignments/link-relations)) |
| `name`   | String | false    | The human-friendly display name                                                                 |
| `href`   | String | true     | URL to the link resource in the internet                                                        |

### Form

| Property  | Type   | Requried | Description                                                               |
| --------- | ------ | -------- | ------------------------------------------------------------------------- |
| `model`   | String | false    | Specifies default values for the plugin settings form in the UI           |
| `schema`  | String | false    | Specifies the expected data format for the plugin settings form in the UI |
| `options` | String | true     | Specifies options for the plugin settings form in the UI                  |

> The UI uses [@koumoul/vjsf](https://www.npmjs.com/package/@koumoul/vjsf) for UI form generation from static JSON schema definitions. For examples and documentation you can look at the `plugin.json` of other plugins or directly in the [library documentation](https://koumoul-dev.github.io/vuetify-jsonschema-form/latest/configuration).

## Example plugin.json

Here's a reduced example of a `plugin.json` file. You can also always have a look at other plugins for further reference.

```json
{
  "uid": "wi-p-button-toggle",
  "type": "widget",
  "version": "1.0.0",
  "status": "beta",
  "category": "official",
  "name": "Button",
  "description": "Button widget for Netzo",
  "keywords": ["button"],
  "authors": ["mailto:miguel.romero@netzo.io@netzo.io"],
  "license": "MIT",
  "main": "@netzoio/plugins/plugins/widgets/wi-p-button-toggle/src/index.js",
  "display": {
    "imageUrl": "https://raw.githubusercontent.com/netzoio/plugins/main/plugins/widgets/wi-p-button-toggle/src/assets/icon.svg",
    "color": "",
    "screenshots": []
  },
  "links": [],
  "form": {
    "model": {},
    "schema": {},
    "options": {}
  }
}
```

## License

Copyright (c) 2021 [Asterisc GmbH](https://netzo.io)

Licensed under the [MIT license](LICENSE)
