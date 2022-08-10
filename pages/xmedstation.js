import Head from 'next/head'
import styles from '../styles/xMedStation.module.css'
import ButtonMenu from '../components/ButtonMenu'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from 'react';

export default function xmedstation() {

    const [softwares, setSoftwares] = useState([
        {
            id: 1, 
            name: 'Anatomia',
            description: 'Lorem ipsum dolor sit amet...',
            image: 'images/haptx-vr-glove.jpg',
            link: '#'
        },
        {
            id: 2, 
            name: 'Terapia Visual',
            description: 'Lorem ipsum dolor sit amet...',
            image: 'images/haptx-vr-glove.jpg',
            link: '#'
        }
    ])
    const [hardwares, setHardwares] = useState([
        {
            id: 1, 
            name: 'Hardware 1',
            description: 'Lorem ipsum dolor sit amet...',
            image: 'images/haptx-vr-glove.jpg',
            link: '#'
        },
        {
            id: 2, 
            name: 'Hardware 2',
            description: 'Lorem ipsum dolor sit amet...',
            image: 'images/haptx-vr-glove.jpg',
            link: '#'
        }
    ])

    return (
        <div >
            <Head>
                <title> xMed Station </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="backgroundWrapper">
                <video className="videoBackground"
                    src="videos/video_background.mp4"
                    type="video/mp4"
                    autoPlay
                    muted
                    loop>
                </video>
            </section >

            <main className={styles.main}>
                <section className={styles.about}>
                    <h3 className={styles.title}> <ChevronRightIcon /> xMed Station  </h3>

                    <div className={styles.container}>
                        <div className={styles.description}>
                            <p> O <strong> xMed Station </strong> é um ambiente de estudo e treinamento para estudantes e profissionais da área da saúde. Formado por uma estação composta por laboratórios que simulam ambientes de treinamentos biomédicos, enfermagem, médicos e tecnologias assistivas de Neuroreabilitação, integrado aos hardwares que fornecem Biofeedback. </p>
                        </div>
                    </div>
                </section>

                <section className={styles.software}>
                    <h3 className={styles.titleSoftware}> Softwares <ChevronLeftIcon /> </h3>

                    <div className={styles.cardProducts}>
                        {softwares.map(item => (
                            <div className={styles.card} key={item.id}>
                                <img src={item.image} alt={item.name} className={styles.image} />

                                <div className={styles.cardContent}>
                                    <h4 className={styles.cardTitle}> {item.name}  </h4>
                                    <p className={styles.cardDescription}> {item.description} </p>
                                    <a href={item.link} 
                                       className={styles.cardButton}
                                       target='_blank'> Conheça! 
                                    </a>
                                </div>

                                <div className={styles.borderSquare}></div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.hardware}>
                    <h3 className={styles.titleHardware}> <ChevronRightIcon /> Hardwares </h3>

                    <div className={styles.cardProducts}>
                        {hardwares.map(item => (
                            <div className={styles.card} key={item.id}>
                                <img src={item.image} alt={item.name} className={styles.image} />

                                <div className={styles.cardContent}>
                                    <h4 className={styles.cardTitle}> {item.name}  </h4>
                                    <p className={styles.cardDescription}> {item.description} </p>
                                    <a href={item.link} 
                                       className={styles.cardButton}
                                       target='_blank'> Conheça! 
                                    </a>
                                </div>

                                <div className={styles.borderSquare}></div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <ButtonMenu />
        </div>
    )
}






