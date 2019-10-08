import React from "react"
import styles from "./index.css"
import IconSvg from "./icon.svg"

const Example = () => (
  <button className={styles.example} type="button">
    {/* <IconSvg /> */}
    <img src={IconSvg} alt="icon" />
    <span>hello</span>
  </button>
)

export default Example
