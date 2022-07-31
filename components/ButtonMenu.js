import React, { useState } from 'react'
import styles from '../styles/ButtonMenu.module.css'

const ButtonMenu = () => {

    const [isActive, setIsActive] = useState(false);

    const toggle  = () => {
        setIsActive(!isActive)
    }

    return (
        <div>
            <button onClick={toggle} className={styles.btnMenu} title='Menu'> {isActive ? 'Opcoes' : 'Menu'} </button>
        </div>
    )
}

export default ButtonMenu