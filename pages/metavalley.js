import Head from 'next/head'
import styles from '../styles/MetaValley.module.css'
import ButtonMenu from '../components/ButtonMenu'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function metavalley() {

    return (
        <div >
            <Head>
                <title> Meta Valley </title>
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
                    <h3 className={styles.title}> <ChevronRightIcon /> Meta Valley  </h3>

                    <div className={styles.container}>
                        <div className={styles.description}>
                            <p>
                                O <strong> MetaValley </strong> é o hub de inovação do Metaverso. Seu ambiente foi criado para fomentar a cultura do empreendedorismo, conectar e facilitar a integração dos apaixonados por inovação, criatividade e tecnologia. Explore as maiores regiões da cultura empreendedora, conecte-se com mentes criativas, participe de pitches e desenhe a sua trajetória empreendedora. Venha para o MetaValley e crie sua startup no metaverso participando da nova era de “garagens” formadoras de startups.
                            </p>
                            <a className={styles.wrapperBtn} href="#" target='_blank' >
                                <button className={styles.btnConheca}> Conheça! </button>
                            </a>
                        </div>
                    </div>
                </section>           
            </main>

            <ButtonMenu />
        </div>
    )
}






