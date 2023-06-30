const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    pageLoadTimeout: 80000,
    defaultCommandTimeout: 60000, 
    
    "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "overwrite": false,
    "html": false,
    "json": true,
  },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
