import Head from 'next/head'
import styles from '../styles/QuemSomos.module.css'
import ButtonMenu from '../components/ButtonMenu'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function quemsomos() {

    return (
        <div >
            <Head>
                <title> Quem Somos </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <section className={styles.about}>
                    <h1 className={styles.title}> <ChevronRightIcon /> Por que Ada?  </h1>

                    <div className={styles.container}>
                        <div className={styles.description}>
                            <p> 
                                Fundada por duas mulheres jovem negras, nordestinas e cientistas. A <strong> Ada </strong> tem como missão tornar o Metaverso uma realidade, conectando o mundo real com o virtual. 
                            </p>
                            <p>
                                Para isso, o time Ada, formado por Pesquisadores, Engenheiros, Neuroengenheiros, Neurocientistas, Desenvolvedores de games e Programadores, visa integrar as tecnologias de Realidade Virtual (VR), Realidade Aumentada (AR) e Internet das Coisas (IoT), possibilitando experiências imersivas e feedbacks sensoriais no Metaverso. 
                            </p>
                            <p>
                                Através dos projetos de inovação e desenvolvimento tecnológico da Ada, as tecnologias imersivas se tornarão mais acessíveis à população, pois a startup tem como meta fornecer experiências XR para todos. 
                            </p>
                        </div>

                        <img src='images/ada_lovelace.jpg' 
                            className={styles.image}
                            title='Ada Lovelace' 
                            alt='Ada Lovelace'/>
                    </div>

                </section>           
            </main>

            <ButtonMenu />
        </div>
    )
}






