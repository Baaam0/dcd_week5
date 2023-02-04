const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */

const config = {
  timeout: 30000,
  use: {
    ignoreHTTPSErrors: true,
  },

  // Options specific to each project browser size
  projects: [
    {
      name: 'Desktop Chromium',
      use: {
        browserName: 'chromium'
      }
    }
  ]
}