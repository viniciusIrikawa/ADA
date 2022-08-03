import styles from '../styles/MenuOptions.module.css'
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import Link from 'next/link'
import Applications from './Applications';

const MenuOptions = ({ isActive }) => {

  return (
      <ul className={`${styles.wrapperOptions}  
                      ${isActive && styles.active}`}>
          <Link href='/'>
            <li  className={styles.li} title='Home'> 
                <HomeIcon/> 
            </li>
          </Link> 

          <Link href='/quemsomos'> 
            <li  className={styles.li} title='Quem somos'> 
                <InfoIcon/>
            </li>
          </Link> 

          <Link href='/contato'>
            <li  className={styles.li} title='Contato'> 
                <PhoneIcon/>  
            </li>
          </Link>
          
          <button className={styles.li} 
                  title='Aplicações'>
            <AppsIcon/>  
          </button>
      </ul>
  )
}

export default MenuOptions