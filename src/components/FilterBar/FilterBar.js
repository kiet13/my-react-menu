import React from 'react'
import styles from './FilterBar.module.scss';
import FilterBarButton from './FilterBarButton/FilterBarButton';

const categoriesMap = {
  all: "All",
  breakfast: "Breakfast",
  lunch: "Lunch",
  Shakes: "Shakes"
}

export default function FilterBar(props) {
  const btnList = Object.keys(categoriesMap).map(ctKey => {
    return <FilterBarButton 
              key={ctKey}
              clicked={() => props.categorySelected(ctKey)}>
              {categoriesMap[ctKey]}
            </FilterBarButton>
  })
  return (
    <div className={[styles.FilterBar, "mt-2"].join(' ')}>
      {btnList}
    </div>
  )
}
