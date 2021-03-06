'use strict'

module.exports = class Global {
  constructor () {
  }
  async handle ({ request, auth }, next) {
    // call next to advance the request
    console.log(
      request.method(),
      request.url(),
      request.all()
      // request.header('authorization')
    )
    await next()
  }
}
