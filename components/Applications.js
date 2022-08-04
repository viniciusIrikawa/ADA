import styles from '../styles/Applications.module.css'
import Link from 'next/link'
import { useState, useContext } from 'react';
import Context from '../Context';

const Applications = ({ appIsActive }) => {

  const {setAppIsActive} = useContext(Context);

  const [apps, setApps] = useState([
    {id: 1, name: 'xMed Station', image: 'images/haptx-vr-glove.jpg', linkPage: '/xmedstation'},
    {id: 2, name: 'Meta Valley', image: 'images/haptx-vr-glove.jpg', linkPage: '/metavalley'},
    {id: 3, name: 'Ada 4 All', image: 'images/haptx-vr-glove.jpg', linkPage: '/ada4all'}
  ])

  return (
      <div className={`${styles.container} ${appIsActive && styles.active}`}> 
        <span className={styles.span}> Aplicacoes </span>
        <div className={styles.wrapperApps}>
          {apps.map( item => (
            <Link href={item.linkPage} key={item.id}>
              <a onClick={() => setAppIsActive(false)} className={styles.anchor}>
                <div className={styles.card}>
                  <img src={item.image} 
                      alt={item.name}
                      className={styles.image}/>
                  <h4 className={styles.titleApp}> {item.name} </h4>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
  )
}

export default Applications