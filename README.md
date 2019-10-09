# React Library Starter

- SCSS modules
- Rollup
- Storybook

## Rollup vs Webpack

> TL;DR: Rollup generally used for libraries and Webpack used for apps.

You'll find both rollup and webpack devDependencies in package.json since Storybook relies on Webpack.

Here's a quick rundown of what each of the npm packages are for.

### Shared

- react
- react-dom

### Storybook/Webpack

- @storybook/react
- babel-loader
- node-sass
- sass-loader
- style-loader

### Rollup

- @svgr/rollup
- rollup
- rollup-plugin-babel
- rollup-plugin-commonjs
- rollup-plugin-json
- rollup-plugin-peer-deps-external
- rollup-plugin-postcss
- rollup-plugin-url
