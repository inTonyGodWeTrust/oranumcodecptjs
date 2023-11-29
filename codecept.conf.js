const fs = require('fs').promises;
const { exec } = require('child_process');

function clearFolders() {
  try {
      fs.rm('output', { recursive: true, force: true });
    } catch (error) {
  }
}

exports.config = {
  tests: './tests/*test.js',
  output: './output',
  timeout: 60,
  name: 'oranum-codeceptjs',
  helpers: {
    Playwright: {
      url: 'https://www.oranum.com/en',
      show: false,
      browser: 'webkit',
      ignoreHTTPSErrors: true,
    },
  },
  bootstrap() {
    clearFolders();
  },
  teardown() {
    exec('allure serve output -p 4999');
  },
  include: {
    homePage: './pages/home_page.js',
    resultsPage: './pages/results_page.js',
    profilePage: './pages/profile_page.js',
  },
  gherkin: {
    features: './features/**/*.feature',
    steps: './step_definitions/*_steps.js',
  },
  mocha: {
    reporterOptions: {
      mochaFile: 'output/result.xml',
      reportDir: 'output',
    },
  },
  plugins: {
    allure: {
      enabled: true,
      outputDir: "output",
      require: '@codeceptjs/allure-legacy',
    },
    screenshotOnFail: {
      enabled: true,
    },
    pauseOnFail: {
      enabled: false,
    },
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    stepByStepReport: {
      enabled: false,
      screenshotsForAllureReport: true,
      output: './output',
      deleteSuccessful: false,
    }
  }
};
