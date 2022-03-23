/* eslint-disable @typescript-eslint/no-var-requires */
const detox = require('detox')

async function globalSetup() {
  await detox.globalInit()
}

module.exports = globalSetup
