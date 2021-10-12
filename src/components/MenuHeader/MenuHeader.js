import React from 'react'
import styles from './MenuHeader.module.scss';
import FilterBar from '../FilterBar/FilterBar';

export default function MenuHeader(props) {
  return (
    <div className={styles.MenuHeader}>
      <h1 className={styles.Heading}>Our Menu</h1>
      <FilterBar categorySelected={props.categorySelected}/>
    </div>
  )
}
