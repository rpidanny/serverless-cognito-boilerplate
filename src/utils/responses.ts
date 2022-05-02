const buildResponse = (statusCode: number, body: Record<any, any>): Record<string, any> => {
  return {
    statusCode,
    body: JSON.stringify(body),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  }
}

export const success = (body: Record<any, any>): Record<string, any> => {
  return buildResponse(200, body)
}

export const failure = (body: Record<any, any>): Record<string, any> => {
  console.log(JSON.stringify(body, null, 2))
  return buildResponse(500, body)
}
