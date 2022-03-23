/* eslint-disable @typescript-eslint/no-var-requires */
const detox = require('detox')

async function globalTeardown() {
  await detox.globalCleanup()
}

module.exports = globalTeardown
