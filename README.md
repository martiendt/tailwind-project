# TAILWIND PROJECT

https://tailwindcss.com/
A utility-first CSS framework for
rapidly building custom designs.

## SETTING UP TAILWIND AND POSTCSS

1. Install tailwindcss, postcss-cli, and autoprefixer

```
npm install tailwindcss post-cli autoprefixer
```

2. Init tailwind configuration files

```
npx tailwind init

or

npx tailwind init tailwind-full.config.js --full
```

3. Create postcss.config.js file

```
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}
```

4. Create tailwind.css file

```
@tailwind base;
@tailwind components;
@tailwind utilities;

...
```

5. Create build script in your package.json

```
"scripts": {
  "build": "postcss css/tailwind.css -o public/build/tailwind.css"
},
```

6. Install live-server package to help speed up development (live reload on browser)

```
npm install -g live-server
```

7. Optimize production build with remove unused css with [purgecss.com](https://purgecss.com)

```
npm install @fullhuman/postcss-purgecss
```

and add in postcss.config.js

```
process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
  content: [
    './public/index.html'
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})
```
