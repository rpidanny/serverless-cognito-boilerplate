import { failure, success } from '../src/utils/responses'

describe('Utilities Functions Test', () => {
  beforeAll(() => {
    console.log = function () {
      /* TODO document why this function is empty */
    }
  })

  it('Should return HTTP 200 statusCode', () => {
    const response = success({ data: 'OK' })
    expect(response.statusCode).toEqual(200)
  })

  it('Should not return HTTP 200 statusCode', () => {
    const response = failure({ data: 'OK' })
    expect(response.statusCode).not.toEqual(200)
  })

  it('Should have CORS headers', () => {
    const successResponse = success({ data: 'OK' })
    const failureResponse = failure({ data: 'OK' })
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    }

    expect(successResponse.headers['Access-Control-Allow-Origin']).toEqual(
      corsHeaders['Access-Control-Allow-Origin'],
    )
    expect(successResponse.headers['Access-Control-Allow-Credentials']).toEqual(
      corsHeaders['Access-Control-Allow-Credentials'],
    )
    expect(failureResponse.headers['Access-Control-Allow-Origin']).toEqual(
      corsHeaders['Access-Control-Allow-Origin'],
    )
    expect(failureResponse.headers['Access-Control-Allow-Credentials']).toEqual(
      corsHeaders['Access-Control-Allow-Credentials'],
    )
  })
})
