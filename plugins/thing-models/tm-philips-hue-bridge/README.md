<div align="center">
  <a href="https://netzo.io" target="_blank" >
    <img height="50" src="https://raw.githubusercontent.com/netzoio/plugins/main/plugins/thing-models/tm-philips-hue-bridge/src/assets/icon.svg" style="margin: 12px 0px" />
  </a>

  <h1>tm-philips-hue-bridge</h1>
</div>

An open source thing model for the Netzo WoT platform.

## Philips Philips HUE Software-based Daylight Sensor

This is a TD of a daylight sensor that runs on a Philips Philips HUE Bridge and that can be used to learn whether there is daylight in the Bridge's location or not. It is based on the GPS location.

### Get it running

- Follow the Philips Philips HUE in-app guide to get your bridge started.
- Follow the [developer page](https://developers.meethue.com/develop/get-started-2/) to get an API Key
- The base URI is using our API Key and Sensor number, replace them with yours:
  - Look for the base URI in the TD
  - Replace the part between `/api/` and `/sensors/` with your API key.
  - This TD is representing the sensor number 1. You should replace the part after `/sensors/` with your sensor's number.
  - This TD uses `Philips-hue` as hostname, in case you have multiple Philips HUE Bridges, you will need to change this in the base URI as well

### Links

- [App](https://app.netzo.io)
- [Website](https://netzo.io)
- [Docs](https://docs.netzo.io)

<div align="center">
  <h4>Netzo© Plugin</h4>
</div>
