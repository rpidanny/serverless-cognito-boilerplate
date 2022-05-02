import { success } from '../utils/responses'

export const handler = async (event: any): Promise<Record<string, any>> => {
  return success({
    message: 'Go Serverless v1.0! Your function executed successfully!',
    input: event,
  })
}
