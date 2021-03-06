#!/usr/bin/env node
import axios from 'axios'

const repoBaseUrl = 'https://raw.githubusercontent.com/netzoio/plugins/main'
const apiBaseUrl = 'https://api.netzo.io'
let headers = { 'Content-Type': 'application/json', Accept: 'application/json' }

/**
 * This script syncs all plugins from @netzoio/plugins repo to the production mongodb
 * database. The 'deploy-plugins' action fetches links array, and maps them to an array
 * of plugin.json objects and either creats a new or updates an existing record in
 * the plugins collection of the mongodb production database (hosting all plugins
 * for the @netzoio/api to consume).
 *
 * NOTE: this script is run once before each commit by 'pre-commit' lib (see package.json)
 *
 * @returns {array} plugins - an array of the entire plugins collection
 */
async function main() {
  try {
    // GitHub:

    console.log(
      `[deploy-plugins] NOTE: make sure to commit and push changes to @netzoio/plugins repository before running this script so that it fetches these latest changes from github during execution`
    )

    // 1) fetch array of plugin urls from plugins.json @netzoio/plugins repository in GitHub
    const { data: urls } = await axios(`${repoBaseUrl}/plugins.json`, {
      headers
    })
    console.log(
      `[deploy-plugins] fetched array of ${urls.length} urls from plugins.json in @netzoio/plugins repository`
    )

    // 2) map array of url pointers to each plugin.json to array of plugin objects
    const pluginsJson = await Promise.all(
      urls.map((url) => axios(url, { headers }).then((res) => res.data))
    )
    console.log(
      `[deploy-plugins] mapped ${pluginsJson.length} urls to plugin objects (from plugin.json file)`
    )

    // Netzo API:

    // 3) authenticate to get JWT token
    const {
      data: { accessToken }
    } = await axios.post(
      `${apiBaseUrl}/authentication`,
      {
        strategy: 'local',
        email: process.env.NETZO_API_EMAIL,
        password: process.env.NETZO_API_PASSWORD
      },
      { headers }
    )
    console.log(`[deploy-plugins] authenticated with ${apiBaseUrl}`)

    // add JWT token to headers object
    headers = { ...headers, Authorization: `Bearer ${accessToken}` }

    // 4) merge each plugin.json with item in database (mongoose sets default values on create)
    // NOTE: max limit set to 250 for all services (despite $limit) on config/default.json
    // to enable fetching more plugins, this should be updated.
    // @see https://github.com/feathersjs/feathers/issues/499
    const items = await Promise.all(
      pluginsJson.map((pluginJson) =>
        axios(`${apiBaseUrl}/plugins?uid=${pluginJson.uid}`, { headers }).then(
          ({ data: paginatedResponse }) => ({
            ...paginatedResponse.data[0],
            ...pluginJson
          })
        )
      )
    )
    console.log(
      `[deploy-plugins] merged ${items.length} plugins from repository and database`
    )

    // 5) update db record with merged plugin or create new if it already exists (has _id)
    // NOTE: mongoose strict mode is set to false to allow additional properties in model
    let updatedCount = 0
    let createdCount = 0
    const plugins = await Promise.all(
      items.map((item) => {
        if (item._id)
          return axios
            .put(`${apiBaseUrl}/plugins/${item._id}`, item, { headers })
            .then(() => {
              console.debug('[deploy-plugins] updated', item.uid)
              ++updatedCount
              return item
            })
        else
          return axios
            .post(`${apiBaseUrl}/plugins`, item, { headers })
            .then(() => {
              console.debug('[deploy-plugins] created', item.uid)
              ++createdCount
              return item
            })
      })
    )

    console.log(
      `[deploy-plugins] updated ${updatedCount} and created ${createdCount} plugins in database (${plugins.length} total plugins)`
    )
  } catch (error) {
    console.log(error)
  } finally {
    console.log(`[deploy-plugins] finished running 'deploy-plugins' script`)
  }
}

main()
