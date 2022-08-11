import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Ada4All.module.css'
import ButtonMenu from '../components/ButtonMenu'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from 'react';

export default function Ada4All() {

    const [softwares, setSoftwares] = useState([
        {
            id: 1, 
            name: 'Anatomia',
            description: 'Lorem ipsum dolor sit amet...',
            image: '/images/haptx-vr-glove.jpg',
            link: '#'
        },
        {
            id: 2, 
            name: 'Terapia Visual',
            description: 'Lorem ipsum dolor sit amet...',
            image: '/images/haptx-vr-glove.jpg',
            link: '#'
        }
    ])
    const [hardwares, setHardwares] = useState([
        {
            id: 1, 
            name: 'Hardware 1',
            description: 'Lorem ipsum dolor sit amet...',
            image: '/images/haptx-vr-glove.jpg',
            link: '#'
        },
        {
            id: 2, 
            name: 'Hardware 2',
            description: 'Lorem ipsum dolor sit amet...',
            image: '/images/haptx-vr-glove.jpg',
            link: '#'
        }
    ])

    return (
        <div >
            <Head>
                <title> Ada 4 All </title>
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
                    <h3 className={styles.title}> <ChevronRightIcon /> Ada 4 All  </h3>

                    {/* <div className={styles.container}> */}
                        <div className={styles.description}>
                            <p> 
                                O Projeto <strong> Ada 4 All </strong> tem como missão tornar o Metaverso acessível a todos e assim transformar a educação. O Time Ada é formado por Neurocientistas e Neuroengenheiros que compreendem as bases científicas do processo de ensino-aprendizagem e memória. Dessa maneira, entendemos que a tecnologia da realidade estendida (RV, RA e MR)  são ferramentas essenciais que irão auxiliar a nova era da educação imersiva. Acesse já a plataforma Ada 4 all.
                            </p>
                            <a href="/ada4allapps"
                               className={styles.btnComecar}
                               rel="noopener noreferrer"> Comecar!
                            </a>
                        </div>
                    {/* </div> */}
                </section>

                <section className={styles.software}>
                    <h3 className={styles.titleSoftware}> Softwares <ChevronLeftIcon /> </h3>

                    <div className={styles.cardProducts}>
                        {softwares.map(item => (
                            <div className={styles.card} key={item.id}>
                                <Image src={item.image} 
                                       alt={item.name} 
                                       className={styles.image}
                                       width="800px"
                                       height="500px"/>

                                <div className={styles.cardContent}>
                                    <h4 className={styles.cardTitle}> {item.name}  </h4>
                                    <p className={styles.cardDescription}> {item.description} </p>
                                    <a href={item.link} 
                                       className={styles.cardButton}
                                       target='_blank' 
                                       rel="noopener noreferrer"> Conheça! 
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
                                <Image src={item.image} 
                                       alt={item.name} 
                                       className={styles.image} 
                                       width="800px"
                                       height="500px"/>

                                <div className={styles.cardContent}>
                                    <h4 className={styles.cardTitle}> {item.name}  </h4>
                                    <p className={styles.cardDescription}> {item.description} </p>
                                    <a href={item.link} 
                                       className={styles.cardButton}
                                       target='_blank' 
                                       rel="noopener noreferrer"> Conheça! 
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






