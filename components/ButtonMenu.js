import React, { useState, useContext } from 'react'
import styles from '../styles/ButtonMenu.module.css'
import Applications from './Applications';
import MenuOptions from './MenuOptions';
import Context from '../Context';

const ButtonMenu = () => {

    const {appIsActive, setAppIsActive} = useContext(Context);

    const [menuOptionsIsActive, setMenuOptionsIsActive] = useState(false);

    return (
        <div className={styles.wrapperBtn}>
            <Applications appIsActive={appIsActive}/>
            <MenuOptions menuOptionsIsActive={menuOptionsIsActive}/>
            <button onClick={ () => {
                        setAppIsActive(false)
                        setMenuOptionsIsActive(!menuOptionsIsActive)
                    }} 
                    className={styles.btnMenu} 
                    style={{opacity: menuOptionsIsActive ? 1 : 0.5 }}
                    title='Menu'> {menuOptionsIsActive ? 'Opcoes' : 'Menu'}
            </button>
        </div>
    )
}

export default ButtonMenu