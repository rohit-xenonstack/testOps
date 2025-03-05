import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  testIgnore: "*lighthouse*",
  timeout: 90_000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  expect: {
    timeout: 10_000,
  },
  use: {
    baseURL: "https://xenonstack.com",
    trace: "on-first-retry",
    headless: false,
  },
  projects: [
    // {
    //   name: "chrome",
    //   use: { ...devices["Desktop Chrome HiDPI"] },
    // },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox HiDPI"] },
    },
    // {
    //   name: "safari",
    //   use: { ...devices["Desktop Safari"] },
    // },
    // {
    //   name: "Mobile Android",
    //   use: { ...devices["Pixel 7"] },
    // },
    // {
    //   name: "Mobile IOS",
    //   use: { ...devices["iPhone 13"] },
    // },
    // {
    //   name: "Tablet Android",
    //   use: { ...devices["Galaxy Tab S4"] },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: "npm run start",
  //   url: "http://127.0.0.1:3000",
  //   reuseExistingServer: !process.env.CI,
  // },
});
