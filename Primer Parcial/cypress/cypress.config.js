const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
  },
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
