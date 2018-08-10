var gulp = require('flarum-gulp');

gulp({
  modules: {
    'extum/flarum-ext-material': [
      '../lib/**/*.js',
      'src/**/*.js',
    ]
  }
});
