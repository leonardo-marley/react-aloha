import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Caroussel from '../components/Caroussel'
import CarousselGaleria from '../components/CarrousselGaleria'
import WhatsAppButton from '@component/components/WhatsAppButton'
import Rodape from '@component/components/Rodape'
import InformationCard, {InformationCardProps} from '@component/components/InformationCard'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Box, IconButton, Tab, Tabs, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


const inter = Inter({ subsets: ['latin'] })

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;


  return (
    <div
      className={styles.TabContent}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}

    </div>
  );
}

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
  const [isClient,setIsClient] = useState<boolean>();
  const [informacoes,setInformacoes] = useState(cards);
  const [nomeAgendamento,setNomeAgendamento] = useState('');
  const [indexAba, setIndexAba] = useState(0);
  const {register, handleSubmit} = useForm(); 

  useEffect(() => {
    setIsClient(true)
  }, [])

  interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
  }

  const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
      centered
      sx={{ fontFamily: "'Sarala',sans-serif" }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'var(--color-primary)',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: 'var(--color-primary)',
    },
  });

  interface StyledTabProps {
    label: string;
  }

  const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} sx={{ fontFamily: "'Sarala',sans-serif" }} />
  ))(({ theme }) => ({
    textTransform: 'none',
    fontFamily: "'Sarala',sans-serif",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: 'var(--color-primary)',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }));

  function carregaItens(indexAba: number) {
    switch (indexAba) {
      case 0:
        break;
      case 1:
        break;
    }
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setIndexAba(newValue);
    carregaItens(newValue)
  }

  function agendarPasseio(data: any){
    console.log(data)
  }

  return (
    <>
      <Head>
        <title>AlohaTour | Home</title>
        <meta name="viewport" content="width=device-width,inicial-scale=1.0"/>
        <meta name="discription" content="O melhor conforto com os melhores passeios de barcos e roteiros da Ilha Grande e RJ!"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        {/* <Image alt='Logo' src='https://see.fontimg.com/api/renderfont4/vm6VD/eyJyIjoiZnMiLCJoIjo0MSwidyI6MTAwMCwiZnMiOjQxLCJmZ2MiOiIjQjBDQzE5IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/Um90ZWlyb3M/swimming-pool-demo.png' width={50} height={50}/> */}

        <nav className={styles.menu}>
          <ul>
          <li><a href='#homeSection'>Home</a></li>
          <li><a href='#roteirosSection'>Roteiros</a></li>
          <li><a href='#sobreSection'>Sobre</a></li>
          <li><a href='#contatoSection'>Contato</a></li>
          </ul>
        </nav>

        <section className={styles.conteudoPrincipal} id='homeSection'>
            <div className={styles.conteudoPrincipalEscrito}>
                <h1 className={styles.conteudoPrincipalEscritoTitulo}>AlohaTour</h1>
                <h2 className={styles.conteudoPrincipalEscritoSubTitulo}>Agende passeios marítimos com os melhores roteiros da Ilha Grande, RJ.</h2>
                <Link href='#roteirosSection'>
                  <button className={styles.conteudoPrincipalEscritoBotao}><strong>Roteiros</strong></button>
                </Link>
            </div>
            <div>
              <Caroussel />
            </div>
        </section>

        <section className={styles.conteudoCards} id='roteirosSection'>
          {/* <h1 style={{color: '#fffafa', fontFamily: '"Shrikhand", cursive'}} >Roteiros</h1> */}
          <Image alt='Logo' src='/../public/imagens/roteirosBubbleB.png' width={232} height={41} className={styles.roteirosTittle}/>
          
          <div className={styles.boxCards}>
            {informacoes?.map((item: any, index: any) =>
              (<InformationCard key={index} dados={item}/>)
            )
            }
          </div>

          <div className={styles.bubbles}>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div> 
          </div>
        </section>

        <WhatsAppButton />

        <section className={styles.sobre} id='sobreSection'>
          {/* <h1 style={{color: '#fffafa'}} >Sobre</h1> */}
          <div className={styles.sobreT}>
            <Image alt='Logo' src='/../public/imagens/sobreBubble.png' width={143} height={41} className={styles.sobreTittle} style={{marginTop: '3rem'}}/>
          </div>

          <div className={styles.bolha}>
            <div className={styles.sobre1}>
              <p style={{display:'flex', position: 'relative', color: '#fffafa',fontWeight: '500',zIndex: '999'}}>
                &nbsp; &nbsp; A AlohaTour vem transformando sonhos de viagem em experiências inesquecíveis no cenário do turismo aquático. Com um profundo conhecimento da região em que operamos e uma dedicação incansável em proporcionar o melhor custo-benefício aos nossos clientes, somos a escolha ideal para quem busca aventuras únicas em meio às águas.
              </p>

              <p style={{display:'flex', position: 'relative', color: '#fffafa', fontWeight: '500',zIndex: '999'}}>
                &nbsp; &nbsp; O coração da nossa empresa bate em sintonia com os desejos dos nossos viajantes, por isso que além dos roteiros fechados, oferecemos também experiências únicas. Compreendemos que cada pessoa tem necessidades e expectativas diferentes quando se aventura nas águas, e é por isso que personalizamos cada roteiro para atender às necessidades específicas de cada cliente. Seja um aventureiro em busca de mergulhos emocionantes, um casal em busca de romance nas águas cristalinas ou uma família que busca relaxar à beira-mar, estamos prontos para criar o passeio perfeito para você.
              </p>
            </div>
          </div>
          <div className={styles.sobre1}>
              <p style={{display:'flex', position: 'relative', color: 'rgba(0, 0, 0, 0)'}}>
                &nbsp; &nbsp; A AlohaTour vem transformando sonhos de viagem em experiências inesquecíveis no cenário do turismo aquático. Com um profundo conhecimento da região em que operamos e uma dedicação incansável em proporcionar o melhor custo-benefício aos nossos clientes, somos a escolha ideal para quem busca aventuras únicas em meio às águas.
              </p>

              <p style={{display:'flex', position: 'relative', color: 'rgba(0, 0, 0, 0)'}}>
                &nbsp; &nbsp; O coração da nossa empresa bate em sintonia com os desejos dos nossos viajantes, por isso que além dos roteiros fechados, oferecemos também experiências únicas. Compreendemos que cada pessoa tem necessidades e expectativas diferentes quando se aventura nas águas, e é por isso que personalizamos cada roteiro para atender às necessidades específicas de cada cliente. Seja um aventureiro em busca de mergulhos emocionantes, um casal em busca de romance nas águas cristalinas ou uma família que busca relaxar à beira-mar, estamos prontos para criar o passeio perfeito para você.
              </p>
            </div>
        </section>

        <div className={styles.local}>
          {/* <h2 style={{color: '#fffafa'}} >Localização</h2> */}
          <Image alt='Logo' src='/../public/imagens/localBubble.png' width={139} height={41} className={styles.localTittle}/>
        </div>

        <div className={styles.galeria}>
          {/* <h2 style={{color: '#fffafa',padding: '0 2rem 0 2rem'}} >Galeria</h2> */}
          <p>
            <Image alt='Logo' src='/../public/imagens/galeriaBubble.png' width={195} height={41} className={styles.galeriaTittle}/>
          </p>
          <CarousselGaleria />
        </div>

        <div className={styles.contato} id='contatoSection'>
          <p>
            <Image alt='Logo' src='/../public/imagens/contatoBubble.png' width={215} height={41} className={styles.contatoTittle}/>
          </p>

          <div className={styles.contatoContainer}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', height: '48px', bottom: '0' }}>
              <StyledTabs value={indexAba} onChange={handleChange}>
                <StyledTab label="AGENDAMENTOS" />
                <StyledTab label="DÚVIDAS" />
              </StyledTabs>
            </Box>

            <div
              className={styles.tabContainer}
            >
              <TabPanel
                value={indexAba}
                index={0}
              >
                { isClient &&
                  <div className={styles.divFormAgendamento}>
                    <form className={styles.containerForm} onSubmit={handleSubmit(agendarPasseio)}>
                      <div className={styles.nome}>
                        <label htmlFor='nome'>Nome</label> 
                        <input {...register('nome')} name='nome' type="text" placeholder="" value={nomeAgendamento} onChange={(e) => setNomeAgendamento(e.target.value)}></input>
                        <span className={styles.obrigatorio}>Campo obrigatório *</span>
                      </div>

                      <div className={styles.observacao}>
                        <label htmlFor="observacao">Observação</label>
                        <textarea {...register('observacao')} name='observacao' rows={4} />
                      </div>

                      <button className={styles.botaoEnvio} type='submit'>
                        <div className={styles.left}></div>
                          Agendar
                        <div className={styles.right}></div>
                      </button>

                      <a target="_blank" >
                        <svg style={{
                          width:'2em',
                          height:'2em',
                          position:'fixed',
                          top:'1em',left:'1em',
                          opacity:.8}} 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            fill="#fff" 
                            d="M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
                        </svg>
                      </a>
                    </form>
                  </div>
                }
              </TabPanel>

              <TabPanel 
                value={indexAba} 
                index={1}
              >
                { isClient &&
                  <div className={styles.divFormDuvida}>
                    <h3>Tirar Dúvidas</h3>
                  </div>
                }
              </TabPanel>
            </div>
          </div>
        </div>

        <section className={styles.rodape}>
          <Rodape />
        </section>
      </main>
    </>
  )
}
