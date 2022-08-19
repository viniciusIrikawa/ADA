import React from 'react'
import Cards from '../api/cards.json'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styles from '../styles/SliderCards.module.css'

const SliderCards = () => {
    return (
        <>
            <main className={styles.cardsContainer}>
                <h1 className={styles.title}> <ChevronRightIcon/> Conheca nossos Apps </h1>

                <ul className={styles.wrapperCards}>
                    {Cards.map( card => (
                        <li className={styles.flipCard} key={card.id}>
                            <div className={styles.flipCardInner}>
                                <div className={styles.flipCardFront}>
                                    <img src={card.imgFront} className={styles.imgFront}/>
                                </div>
                                <div className={styles.flipCardBack}>
                                    <p className={styles.paragraph}> Acesse aqui </p>
                                    <img src={card.qrcode} className={styles.imgBack}/>
                            </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}
export default SliderCards