import React from 'react'
import styles from './MenuList.module.scss'
import MenuItem from '../MenuItem/MenuItem'

export default function MenuList(props) {
  const filteredItems = props.menu.reduce((prev, curr) => {
    if (props.category === 'all' || curr.category === props.category) {
      const menuItem = <MenuItem 
                          key={curr.id}
                          title={curr.title}
                          price={curr.price}
                          img={curr.img}
                          desc={curr.desc}/>
      prev.push(menuItem);
    }
    return prev;
  }, [])
  
  return (
    <div className={styles.MenuList}>
      {filteredItems}
    </div>
  )
}
