# Para Bank E2E Test Automation Framework

This project contains automated tests for the Para Bank application using Playwright. The tests cover various functionalities including user registration, navigation, account creation, fund transfer, bill payment, and finding transactions by amount.

## Project Structure

   ```sh
/workspace
├── playwright.config.js
├── package.json
├── utils.js
├── pages
│   ├── basePage.js
│   ├── registrationPage.js
│   ├── homePage.js
│   ├── accountPage.js
│   ├── transferPage.js
│   ├── billPayPage.js
│   └── findTransactionPage.js
└── tests
    ├── ui-tests.spec.js

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-directory>

2. Install the dependencies:
   ```sh
   npm install

4. Running Tests
   ```sh
   npx playwright test

5. Reporting
Test results are saved in the playwright-report directory. You can open the index.html file in this directory to view the test report.
