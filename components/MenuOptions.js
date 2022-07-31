import React from 'react'
import styles from '../styles/MenuOptions.module.css'

const MenuOptions = ({ isActive }) => {
  return (
      <ul className={`${styles.wrapperOptions}  ${isActive && styles.active}` }>
          <li className={styles.li} title=''> 1 </li>
          <li className={styles.li} title=''> 2 </li>
          <li className={styles.li} title=''> 3 </li>
          <li className={styles.li} title=''> 4 </li>
      </ul>
  )
}

export default MenuOptions