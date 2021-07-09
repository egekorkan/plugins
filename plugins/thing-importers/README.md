Thing Importer Types

```typescript
export interface IThingsImporterOptions {
  baseUrl: string
  token?: string
  email?: string
  password?: string
}

export interface IDevice {
  [key: string]: string | undefined
}

export interface IThingsImporter {
  getToken?: () => Promise<string>
  getDevices: () => Promise<IDevice[]>
  mapDevicesToThings: (devices: IDevice[]) => Promise<ThingDescription[]>
}
```
