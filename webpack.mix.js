const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')
const Dotenv = require('dotenv-webpack');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css').options({
    processCssUrls: false,
    postCss: [tailwindcss('./tailwind.config.js')],
  });

// access files using @ as resource
mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': __dirname + '/resources'
    },
  },
})

// access enviroment variables with env('VAR')..
mix.webpackConfig(webpack => {
  return {
    plugins: [
      new Dotenv({
        path: './.env'
      })
    ]
  };
});