/* global it describe */
const { handler } = require('./helloworld')

const { assert } = require('chai')

describe('Hello World Function Test', () => {
  it('Should return statusCode 200', (done) => {
    const event = {}
    const context = {}
    const callback = (err, data) => {
      if (err) {
        assert(false, err.message)
      } else {
        assert.equal(data.statusCode, 200)
        done()
      }
    }
    handler(event, context, callback)
  })
})
