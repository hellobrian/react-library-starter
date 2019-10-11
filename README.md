# React Library Starter

Boilerplate for your design system component library.

## Usage

Clone the boilerplate and install the dependencies:

```sh
# You can also download the code here: https://github.com/hellobrian/react-library-starter
git clone https://github.com/hellobrian/react-library-starter.git my-new-component-lib
cd my-new-component-lib
npm i
```

Start the dev server:

```sh
npm run dev
```

Navigate to http://localhost:1234/ to see your component.
Make changes and you'll trigger rollup to rebuild and parcel will rerender your component.

## Gotchas with CSS/SCSS styles

This library is setup to use CSS Modules for all stylesheets.
You can write your styles in `.css` or `.scss` files.
But, class selectors get post-processed as CSS modules.

Let's say you have this class selector in your styles:

```css
.button {
  color: red;
}
```

✅ This works!

```jsx
import styles from "./styles.scss"
// OR import styles from './styles.css'

const Button = () => <button className={styles.button}>hello</button>
```

❌ But...this won't work (very sorry)

```jsx
import "./styles.scss"
// OR import './styles.css'

const Button = () => <button className="button">hello</button>
```

On the other hand, element selectors are okay. This is helpful if you have a CSS reset that you want to use.

```css
* {
  box-sizing: border-box;
}
```

✅ This works!

```jsx
import "./reset.css"
// OR import './reset.scss'

const Button = () => <button className={styles.button}>hello</button>
```

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

## Questions

- single package.json OR one package.json for each component?
- do we develop with a CSS reset?
  - do other component libs mandate users to use the lib CSS reset?
