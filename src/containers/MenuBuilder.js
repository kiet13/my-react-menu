import React from 'react'
import styles from './MenuBuilder.module.scss';
import MenuHeader from '../components/MenuHeader/MenuHeader';
export default function MenuBuilder() {
  return (
    <div className={styles.MenuBuilder}>
      <MenuHeader />
    </div>
  )
}
