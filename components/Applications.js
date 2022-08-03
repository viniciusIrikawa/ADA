import styles from '../styles/Applications.module.css'
import Link from 'next/link'
import { useState } from 'react';

const Applications = ({ appIsActive }) => {

  const [apps, setApps] = useState([
    {id: 1, name: 'xMed Station', image: 'images/haptx-vr-glove.jpg', linkPage: '/xmedstation'},
    {id: 2, name: 'Meta Valley', image: 'images/haptx-vr-glove.jpg', linkPage: '/metavalley'}
  ])

  return (
      <div className={`${styles.container} ${appIsActive && styles.active}`}> 
        <span className={styles.span}> Aplicacoes </span>
        <div className={styles.wrapperApps}>
          {apps.map( item => (
            <Link href={item.linkPage} key={item.id}>
              <div className={styles.card}>
                <img src={item.image} 
                     alt={item.name}
                     className={styles.image}/>
                <h4 className={styles.titleApp}> {item.name} </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
  )
}

export default Applications