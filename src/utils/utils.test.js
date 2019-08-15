/* global it describe before after */

const { generateName, capFirst } = require('./name')
const { success, failure } = require('./responses')

const { assert } = require('chai')

describe('Utilities Functions Test', () => {
  before(() => {
    // Silence the console
    console.log = function () {}
  })

  it('Should return random name', (done) => {
    const name = generateName().split('_')
    assert.equal(name.length, 2)
    done()
  })

  it('Should capitalize first character', (done) => {
    const string = capFirst('hello')
    assert.equal(string, 'Hello')
    done()
  })

  it('Should return HTTP 200 statusCode', (done) => {
    const response = success({ data: 'OK' })
    assert.equal(response.statusCode, 200)
    done()
  })

  it('Should not return HTTP 200 statusCode', (done) => {
    const response = failure({ data: 'OK' })
    assert.notEqual(response.statusCode, 200)
    done()
  })

  it('Should have CORS headers', (done) => {
    const successResponse = success({ data: 'OK' })
    const failureResponse = failure({ data: 'OK' })
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    }
    assert.equal(successResponse.headers['Access-Control-Allow-Origin'], corsHeaders['Access-Control-Allow-Origin'])
    assert.equal(successResponse.headers['Access-Control-Allow-Credentials'], corsHeaders['Access-Control-Allow-Credentials'])
    assert.equal(failureResponse.headers['Access-Control-Allow-Origin'], corsHeaders['Access-Control-Allow-Origin'])
    assert.equal(failureResponse.headers['Access-Control-Allow-Credentials'], corsHeaders['Access-Control-Allow-Credentials'])
    done()
  })

  after(() => {
    // Reset console
    delete console.log
  })
})
