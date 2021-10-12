import React from 'react'
import styles from './MenuHeader.module.scss';
import FilterBar
 from '../FilterBar/FilterBar';
export default function MenuHeader() {
  return (
    <div className={styles.MenuHeader}>
      <h1>Our Menu</h1>
      <FilterBar />
    </div>
  )
}
