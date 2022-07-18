const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 200000,
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
