import React from 'react'
import styles from './MenuItem.module.scss'

export default function MenuItem(props) {
  return (
    <div className={styles.MenuItem}>
      <img src={props.img} alt="item" />
      <div>
        <div className={styles.ItemTitle}>
          <h3>{props.title}</h3>
          <span className={styles.Price}>&#36;{props.price}</span>
        </div>
        <p className={[styles.ItemInfo, "mt-1"].join(' ')}>{props.desc}</p>
      </div>
      
    </div>
  )
}
