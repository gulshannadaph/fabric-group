const { devices } = require("@playwright/test");

import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        trace: 'on-first-retry', // Options include 'off', 'on', 'retain-on-failure', etc.
    },
});

module.exports = {
  testDir: "./tests",
  timeout: 60000, // Increase the global timeout to 60 seconds
  expect: {
    timeout: 5000,
  },
  fullyParallel: false, // Set to false to run tests sequentially
  retries: 0,
  reporter: "html",
  use: {
    headless: false, // Set headless to false to run in non-headless mode
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
    video: "retain-on-failure",
    screenshot: "on", // Capture screenshots for all tests
  },
  workers: 1, // Set to 1 to run tests sequentially
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], headless: false }, // Explicitly set headless to false for chromium
    },
    // Add other browsers if needed
  ],
};
