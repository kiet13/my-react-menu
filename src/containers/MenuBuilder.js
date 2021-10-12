import React, {useState} from 'react'
import styles from './MenuBuilder.module.scss';
import MenuHeader from '../components/MenuHeader/MenuHeader';
import data from '../data';

export default function MenuBuilder() {
  // const [menu, setMenu] = useState(data);
  const [category, setCategory] = useState("all");

  const selectCategoryHandler = (category) => {
    setCategory(category);
  }
  
  return (
    <div className={styles.MenuBuilder}>
      <MenuHeader category={category} categorySelected={selectCategoryHandler}/>
    </div>
  )
}
