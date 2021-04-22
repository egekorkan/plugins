# Asterisc Plugin Repository

Plugin repository for Asterisc, Web of Things platform to interconnect IoT devices, platforms and services over the web.

This repository lists all officially supported plugins listed on [asterisc.io](https://asterisc.io/plugins) and used by the [Asterisc Application Enablement Platform](https://app.asterisc.io).

We review all plugins before they are published. This means that it may take some time before we can review your plugin.

To submit a plugin for review:

1. Fork this repository
2. Add your plugin to `plugins.json`
3. Create a pull request

### Plugin Schema

| Property      | Type     | Description                                                                               |
| ------------- | -------- | ----------------------------------------------------------------------------------------- |
| `uid`         | String   | A unique ID. Needs to match the plugin UID in `plugin.json`                               |
| `version`     | String   | Plugin [semantic version](https://semver.org/). Needs to match the version in plugin.json |
| `type`        | String   | Plugin type, e.g. `thing-model`, `thing-importer`, or `app-template`                      |
| `name`        | String   | A human-friendly display name for the plugin                                              |
| `description` | String   | A brief description of the plugin                                                         |
| `keywords`    | String[] | URL to the plugin's GitHub project page                                                   |
| `author`      | String   | The name of the plugin's author or owner                                                  |
| `license`     | String   | A string indicating licensing information                                                 |

### Plugin Assets Schema

| Property | Type   | Description                                                 |
| -------- | ------ | ----------------------------------------------------------- |
| `logo`   | Object | Object with form `{ light, dark }` indicating URLs to logos |
| `images` | Link[] | Array of Link Objects                                       |

### Plugin Link Schema

| Property | Type   | Description                                                 |
| -------- | ------ | ----------------------------------------------------------- |
| `rel`    | String | Object with form `{ light, dark }` indicating URLs to logos |
| `name`   | String | The human-friendly display name                             |
| `href`   | String |                                                             |

## Example plugin.json

Here's an example of a plugin:

```json
{
  "uid": "button-widget",
  "version": "1.0.0",
  "type": "widget",
  "name": "Button",
  "description": "Button widget for Asterisc",
  "assets": {
    "logo": {
      "light": "https://raw.githubusercontent.com/asterisc-io/plugins/main/widgets/button/src/assets/logos/logo-light.png",
      "dark": "https://raw.githubusercontent.com/asterisc-io/plugins/main/widgets/button/src/assets/logos/logo-dark.png"
    },
    "images": [
      {
        "name": "Demo",
        "path": "https://raw.githubusercontent.com/asterisc-io/plugins/main/widgets/alert-table/src/assets/images/demo.png"
      },
      {
        "name": "Options",
        "path": "https://raw.githubusercontent.com/asterisc-io/plugins/main/widgets/alert-table/src/assets/images/options.png"
      }
    ]
  },
  "links": [
    {
      "name": "Homepage",
      "rel": "homepage",
      "href": "https://github.com/asterisc-io/plugins/tree/main/widgets/button"
    },
    {
      "name": "Repository",
      "rel": "repository",
      "href": "https://github.com/asterisc-io/plugins"
    },
    {
      "name": "MIT License",
      "rel": "license",
      "href": "https://raw.githubusercontent.com/asterisc-io/plugins/main/widgets/button/LICENSE"
    }
  ],
  "keywords": ["asterisc", "plugin", "widget", "button"],
  "author": "asterisc",
  "license": "MIT"
}
```

## Resources

- [Plugin Development](https://asterisc.io/docs)
