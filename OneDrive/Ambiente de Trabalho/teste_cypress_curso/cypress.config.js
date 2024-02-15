const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity:false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    requestTimeout: 8000,
    env:{
      viewportWidthBreakpoint: 768,
    },
  },
  video: true,
  projectId: 'https://github.com/hussein1997323/curso-login-cypress.git'
})
