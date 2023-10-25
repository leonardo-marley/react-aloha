import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Caroussel from '../components/Caroussel'
import WhatsAppButton from '@component/components/WhatsAppButton'
import InformationCard, {InformationCardProps} from '@component/components/InformationCard'
import { useEffect, useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const cards : InformationCardProps[] = [
    {
      id: 1,
      title: "Gruta do Acaiá",
      body: "Bootstrap Carousel Example Bootstrap Carousel Example Bootstrap Carousel Example Bootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel Example",
      imageURL: "https://res.cloudinary.com/kizmelvin/image/upload/v1586799813/kizmelvin/persons_pigeon_nurkq2.jpg"
    },
    {
      id: 2,
      title: "Lagoa Verde",
      body: "Bootstrap Carousel Example Bootstrap Carousel Example Bootstrap Carousel Example Bootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel Example",
      imageURL: "https://res.cloudinary.com/kizmelvin/image/upload/v1587785064/kizmelvin/michael-BcgEo2CNeYA-unsplash_cdaruk.jpg"
    },
    {
      id: 3,
      title: "Ilhas Paradisíacas",
      body: "Bootstrap Carousel Example Bootstrap Carousel Example Bootstrap Carousel Example Bootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel Example",
      imageURL: "https://res.cloudinary.com/kizmelvin/image/upload/v1586799827/kizmelvin/brownlion_qm8hah.jpg"
    },
    {
      id: 4,
      title: "Lagoa Azul",
      body: "Bootstrap Carousel Example Bootstrap Carousel Example Bootstrap Carousel Example Bootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel ExampleBootstrap Carousel Example",
      imageURL: "https://res.cloudinary.com/kizmelvin/image/upload/v1587870308/kizmelvin/edvin-johansson-5AylXcpJn1I-unsplash_lbhgod.jpg"
    }
  ]
  const [informacoes,setInformacoes] = useState(cards)

  // useEffect(() => {
  //   setInformacoes(infos)
  // }, [])

  return (
    <>
      <Head>
        <title>AlohaTour | Home</title>
        <meta name="viewport" content="width=device-width,inicial-scale=1.0"/>
        <meta name="discription" content="O melhor conforto com os melhores passeios de barcos e roteiros da Ilha Grande e RJ!"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        {/* <Image alt='Logo' src='../public/imagens/barcologoo.png' width={50} height={50}/> */}

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

        <section className={styles.conteudoCards}>
          <Image src='/../public/imagens/corda2.png' alt='Corda' className={styles.cordaCima} width={10000} height={10000} style={{position: 'absolute', marginLeft: -80, marginTop: -380, width: '100vw', height: '100%', overflow: 'hidden',rotate: '-0.5deg'}}/>
          <Image src='/../public/imagens/corda2.png' alt='Corda' className={styles.cordaEsquerda} width={10000} height={10000} style={{position: 'absolute', marginLeft: -740, marginTop: 250, width: '100vw', height: '100%',rotate: '90deg', overflow: 'hidden'}}/>
          <Image src='/../public/imagens/corda2.png' alt='Corda' className={styles.cordaDireita} width={10000} height={10000} style={{position: 'absolute', marginLeft: 580, marginTop: 250, width: '100vw', height: '100%',rotate: '90deg', overflow: 'hidden'}}/>
          <Image src='/../public/imagens/corda2.png' alt='Corda' className={styles.cordaBaixo} width={10000} height={10000} style={{position: 'absolute', marginLeft: -80, marginTop: 875, width: '100vw', height: '100%', overflow: 'hidden'}}/>

          <h1 style={{color: '#fffafa'}} onClick={() => console.log(informacoes, 'Infos')}>Roteiros</h1>
          
          <div className={styles.boxCards}>
            {informacoes?.map((item: any, index: any) =>
              (<InformationCard key={index} dados={item}/>)
            )
            }
          </div>
        </section>

        <WhatsAppButton />
      </main>
    </>
  )
}
