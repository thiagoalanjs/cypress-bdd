const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default
const dotenv = require('cypress-dotenv')


const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file){
  const pathToConfigFile = path.resolve('.', 'cypress/config', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      const file = config.env.confifFile || 'test'
      return getConfigurationByFile(file)
    },
  
    specPattern: "cypress/e2e/cucumber/tests",
    video: false,
    chromeWebSecurity: false
  },
});
