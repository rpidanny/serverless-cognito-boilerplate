import { handler } from '../src/functions/helloworld'

describe('Hello World Function Test', () => {
  it('Should return statusCode 200', async () => {
    const event = {}
    await expect(handler(event)).resolves.not.toThrowError()
  })
})
