export default {
  paths: ['tests/features/**/*.feature'],
  import: [
    'tests/hooks/**/*.js',
    'tests/steps/**/*.js'
  ],
  format: ['progress'],
  timeout: 60000
};