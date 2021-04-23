import { html, define } from 'hybrids'

/**
 * Optionally fetches and consumes TD, extracts interaction from href
 * and renders an adequate web component based on properties of the interaction
 */

async function fetchTd(url) {
  const result = await fetch(url)
  return result.json()
}

const WotInteraction = {
  render: () => html` <div>Hello World</div> `
}

define('wc-wot-interaction', WotInteraction)
