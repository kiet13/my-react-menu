import React, {useState} from 'react'
import styles from './MenuBuilder.module.scss';
import MenuHeader from '../components/MenuHeader/MenuHeader';
import MenuList from '../components/MenuList/MenuList';
import data from '../data';

export default function MenuBuilder() {
  const [menu] = useState(data);
  const [category, setCategory] = useState("all");

  const selectCategoryHandler = (category) => {
    setCategory(category);
  }
  return (
    <div className={styles.MenuBuilder}>
      <MenuHeader categorySelected={selectCategoryHandler}/>
      <MenuList category={category} menu={menu}/>
    </div>
  )
}
