import React from "react"
import Markdown from "./Markdown.js"
import styles from "./styles.module.css"

export default function InlineDescription({ content }) {
  return (
    <span className={styles.inlineDescription}>
      -- <Markdown inline content={content} />
    </span>
  )
}
