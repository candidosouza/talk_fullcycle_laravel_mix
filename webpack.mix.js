


const mix = require('laravel-mix');

mix.js(['src/js/index.js', 'src/js/app.js'], 'assets/js/index.js')
    .sass('./src/styles/styles.scss', 'assets/css')
    .copyDirectory('./src/img', 'public/assets/img');

// sass
// mix.sass(input, output)

// less, stylus

// javascript
// mix.js(input, output)

// typeScript
// mix.ts(input, output)

// vue
// .vue(options?)
// mix.js(input, output).vue({options});

// react
// .react()
// mix.mix.js(input, output).react();


mix.setPublicPath('./public');

// mix.webpackConfig()

mix.options({
    processCssUrls: false,
});

if (mix.inProduction()) {
    mix.version();
}
