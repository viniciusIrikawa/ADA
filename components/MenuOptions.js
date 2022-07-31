import styles from '../styles/MenuOptions.module.css'
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';

const MenuOptions = ({ isActive }) => {

  return (
      <ul className={`${styles.wrapperOptions}  ${isActive && styles.active}` }>
          <li  className={styles.li} title='Home'> <HomeIcon/> </li>
          <li  className={styles.li} title='Quem somos'> <InfoIcon/> </li>
          <li  className={styles.li} title='Contato'> <PhoneIcon/> </li>
          <li  className={styles.li} title='Aplicações'> <AppsIcon/> </li>
      </ul>
  )
}

export default MenuOptions