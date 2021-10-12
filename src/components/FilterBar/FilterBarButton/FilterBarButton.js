import React from 'react'
import styles from './FilterBarButton.module.scss'
export default function FilterBarButton(props) {
  return (
    <button className={styles.FilterBarButton} onClick={props.clicked}>
      {props.children}
    </button>
  )
}
