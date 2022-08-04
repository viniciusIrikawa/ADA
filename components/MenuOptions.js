import styles from '../styles/MenuOptions.module.css'
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import Link from 'next/link'
import Applications from './Applications';
import React, { useContext } from 'react'
import Context from '../Context';

const MenuOptions = ({ menuOptionsIsActive }) => {

  const {appIsActive ,setAppIsActive} = useContext(Context);

  return (
      <ul className={`${styles.wrapperOptions}  
                      ${ menuOptionsIsActive && styles.active}`}>
          <Link href='/'>
            <li  className={styles.li} 
                 title='Home' 
                 onClick={() => setAppIsActive(false)}> 
                <HomeIcon/> 
            </li>
          </Link> 

          <Link href='/quemsomos'> 
            <li  className={styles.li} 
                 title='Quem somos' 
                 onClick={() => setAppIsActive(false)}> 
                <InfoIcon/>
            </li>
          </Link> 

          <Link href='/contato' >
            <li  className={styles.li} 
                 title='Contato' 
                 onClick={() => setAppIsActive(false)}> 
                <PhoneIcon/>  
            </li>
          </Link>
          
          <button className={styles.li} 
                  title='Aplicações'
                  onClick={() => setAppIsActive(!appIsActive)} >
            <AppsIcon/>  
          </button>
      </ul>
  )
}

export default MenuOptions