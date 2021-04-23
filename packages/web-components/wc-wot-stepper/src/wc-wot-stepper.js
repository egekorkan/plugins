import { html, define } from 'hybrids'

function inc(host) {
  host.count++
}

function dec(host) {
  host.count--
}

const WotStepper = {
  count: 0,
  render: ({ count }) => html`
    <style>
      * {
        font-size: 200%;
      }

      span {
        width: 4rem;
        display: inline-block;
        text-align: center;
      }

      button {
        width: 4rem;
        height: 4rem;
        border: none;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
      }
    </style>
    <button class="large btn" onclick="${dec}">-</button>
    <span class="large span">${count}</span>
    <button class="large btn" onclick="${inc}">+</button>
  `
}

define('wc-wot-stepper', WotStepper)
