export default {
  paths: ['tests/features/**/*.feature'],

  import: [
    'tests/hooks/**/*.js',
    'tests/steps/**/*.js'
  ],

  format: [
    'progress',
    'allure-cucumberjs/reporter'
  ],

  formatOptions: {
    resultsDir: 'allure-results'
  },

  timeout: 60000
};