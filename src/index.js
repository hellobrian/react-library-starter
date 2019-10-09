import React from "react"
import styles from "./index.scss"
import IconSvg from "./icon.svg"
import pkg from "../package.json"

const Example = ({ withIconImg }) => (
  <button className={styles.example} type="button">
    {/* <IconSvg /> */}
    <img src={IconSvg} alt="icon" />
    <span>Hello, this is an example component from: {pkg.name}</span>
  </button>
)

export default Example
