import React from "react"
import styles from "./index.scss"
import "./index.css"

import IconSvg from "./icon.svg"
import pkg from "../package.json"

const Example = ({ withIconImg }) => (
  <button onClick={() => alert("hi")} className={styles.example} type="button">
    {/* <IconSvg /> */}
    <img src={IconSvg} alt="icon" />
    <p className={styles.text}>
      Hello, this is an example component from: {pkg.name}
    </p>
  </button>
)

export default Example
