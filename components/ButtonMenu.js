import React, { useState } from 'react'
import styles from '../styles/ButtonMenu.module.css'
import MenuOptions from './MenuOptions';

const ButtonMenu = () => {

    const [isActive, setIsActive] = useState(false);

    const toggle  = () => {
        setIsActive(!isActive)
    }

    return (
        <div className={styles.wrapperBtn}>
            <MenuOptions isActive={isActive}/>
            <button onClick={toggle} 
                    className={styles.btnMenu} 
                    style={{opacity: isActive ? 1 : 0.3 }}
                    title='Menu'> {isActive ? 'Opcoes' : 'Menu'} 
            </button>
        </div>
    )
}

export default ButtonMenu