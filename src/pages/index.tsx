import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'

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
        <nav className={styles.menu}>
          <ul>
          <li><a >Home</a></li>
          <li><a >Roteiros</a></li>
          <li><a >Sobre</a></li>
          <li><a >Contato</a></li>
          </ul>
        </nav>

        
      </main>
    </>
  )
}
