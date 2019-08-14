const buildResponse = (statusCode, body) => {
  return {
    statusCode,
    body: JSON.stringify(body),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    }
  }
}

module.exports.success = (body) => {
  return buildResponse(200, body)
}

module.exports.failure = (body) => {
  console.log(JSON.stringify(body, null, 2))
  return buildResponse(500, body)
}
