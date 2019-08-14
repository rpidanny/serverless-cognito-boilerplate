const { success } = require('../utils/responses')

module.exports.handler = (event, context, callback) => {
  console.log(JSON.stringify(event, null, 2))
  callback(null, success({ data: 'OK' }))
}
