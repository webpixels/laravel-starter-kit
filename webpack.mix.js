let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css',  {
      sassOptions: {
         includePaths: ['node_modules'],
      },
   });

mix.browserSync({
   proxy: 'localhost:8000',
   notify: true
});

if (mix.inProduction()) {
   mix.version();
   mix.sourceMaps();
}
