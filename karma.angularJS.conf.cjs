//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'lib/angular/angular.js',
      'lib/angular-animate/angular-animate.js',
      'lib/angular-resource/angular-resource.js',
      'lib/angular-route/angular-route.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      '**/*.module.*js',
      '**/*.service.*js',
      '*!(.module|.spec).js',
      '!(lib)/**/*!(.module|.spec).js',
      '**/*.spec.js',
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-webpack',
    ],

    webpack: {
      // karma watches the test entry points
      // Do NOT specify the entry option
      // webpack watches dependencies

      // webpack configuration
      "mode": "development",
    },

    preprocessors: {
      // process your `esmodule` syntax of your files
      '**/*.js': ['webpack'],
      '**/*.spec.js': ['webpack']
    },

  });
};
