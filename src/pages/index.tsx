import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Caroussel from '../components/Caroussel'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>AlohaTour | Home</title>
        <meta name="viewport" content="width=device-width,inicial-scale=1.0"/>
        <meta name="discription" content="O melhor conforto com os melhores roteiros!"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src='../public/imagens/barcologo.png'/>
        <nav className={styles.menu}>
          <ul>
          <li><a >Home</a></li>
          <li><a >Roteiros</a></li>
          <li><a >Sobre</a></li>
          <li><a >Contato</a></li>
          </ul>
        </nav>

        <section className={styles.conteudoPrincipal} >
            <div className={styles.conteudoPrincipalEscrito}>
                <h1 className={styles.conteudoPrincipalEscritoTitulo}>Aloha Tour</h1>
                <h2 className={styles.conteudoPrincipalEscritoSubTitulo}>Agende passeios marítimos com os melhores roteiros da Ilha Grande, RJ.</h2>
                <button className={styles.conteudoPrincipalEscritoBotao}><strong>Roteiros</strong></button>
            </div>
            <div>
              <Caroussel />
            </div>
        </section>

        
      </main>
    </>
  )
}
