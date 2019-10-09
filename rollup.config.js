import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import postcss from "rollup-plugin-postcss"

import peerDepsExternal from "rollup-plugin-peer-deps-external"
// import resolve from "rollup-plugin-node-resolve"
import json from "rollup-plugin-json"
import url from "rollup-plugin-url"
import svgr from "@svgr/rollup"

import pkg from "./package.json"

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.browser,
      format: "umd",
      name: "Example",
      sourcemap: true,
      globals: {
        react: "React",
      },
    },
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    peerDepsExternal(),
    json(),
    postcss({
      extract: true,
      modules: true,
    }),
    url(),
    svgr(),
    babel({
      exclude: "node_modules/**",
      // plugins: ["external-helpers"],
    }),
    // resolve(),
    commonjs(),
  ],
}
