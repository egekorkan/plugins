const Ajv = require('ajv')
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const { form } = require('../plugin.json')
const { wot: wotSchema } = form.schema.properties

wotSchema.examples.forEach((example) => {
  it(`should wotSchema be valid`, () => {
    const valid = ajv.validate(wotSchema, example)
    const errorMessage = (ajv.errors || [])
      .map((error) => {
        try {
          const [, index, fieldName] = /\[(.*)\].(.*)/.exec(error.dataPath)
          return `error with item #${index}'s field "${fieldName}". The error is: ${error.message}`
        } catch (error) {
          return error.message
        }
      })
      .join('\n')
    expect(valid).toBeTruthy()
  })
})
