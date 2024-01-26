import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Caroussel from '../components/Caroussel'
import CarousselGaleria from '../components/CarrousselGaleria'
import WhatsAppButton from '@component/components/WhatsAppButton'
import Rodape from '@component/components/Rodape'
import InformationCard, {InformationCardProps} from '@component/components/InformationCard'
import Modal from '../components/Modal';
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Box, FormControl, IconButton, InputLabel, MenuItem, Tab, Tabs, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useRouter } from 'next/router';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { ptBR as datePtBR } from 'date-fns/locale';
import { format } from 'date-fns';
// Packages //
import { NotificationContainer , NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import PointOfSaleIcon from '@mui/icons-material/PointOfSale';


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
      body: "Crianças grátis até 5 anos, acima, valor integral*",
      paradas: ['Grumixama','Aripeba', 'Lagoa Verde', 'Japariz'],
      horaSaida: '10:30',
      horaChegada: '17:30',
      imageURL: "https://images.prismic.io/incriveisexperiencias/3cd6818b-d422-4ecd-9d6f-10a59baeb1b1_197437893_120663160181796_2727319826198232634_n.jpg?auto=compress,format",
      valor: 180
    },
    {
      id: 2,
      title: "Meia Volta",
      body: "Crianças grátis até 5 anos, acima, valor integral*",
      paradas: ['Lagoa azul','Lagoa verde', 'Grumixama', 'Japariz','Feiticeira'],
      horaSaida: '10:30',
      horaChegada: '16:30',
      imageURL: "https://www.tevejopelomundo.com.br/wp-content/uploads/2020/03/lagoa-verde-Ilha-grande.jpg",
      valor: 140
    },
    {
      id: 3,
      title: "Ilhas Paradisíacas",
      body: "Crianças grátis até 5 anos, acima, valor integral*",
      paradas: ['Cataguases','Botinas', 'Dentista', 'Piedade','Maguariquessaba'],
      horaSaida: '10:30',
      horaChegada: '17:30',
      imageURL: "https://www.essemundoenosso.com.br/wp-content/uploads/2019/06/Ilhas-Paradisiacas-Piedade_Destaque-740x463.jpg.webp",
      valor: 160
    },
    {
      id: 4,
      title: "Volta Ilha",
      body: "Crianças grátis até 5 anos, acima, valor integral*",
      paradas: ['Aventureiro','Meros', 'Paranoica', 'Caxadaço','Maguariquessaba'],
      horaSaida: '09:30',
      horaChegada: '17:30',
      imageURL: "https://img.freepik.com/fotos-premium/pesque-na-lagoa-azul-da-ilha-grande-em-angra-dos-reis_63139-2834.jpg?w=2000",
      valor: 240
    },
    {
      id: 5,
      title: "Lopes Mendes",
      body: "Crianças grátis até 5 anos, acima, valor integral*",
      paradas: ['Pouso','nada','nada','nada'],
      horaSaida: '10:30',
      horaChegada: '16:30',
      imageURL: "https://img.freepik.com/fotos-premium/pesque-na-lagoa-azul-da-ilha-grande-em-angra-dos-reis_63139-2834.jpg?w=2000",
      valor: 50
    },
    {
      id: 6,
      title: "À Combinar",
      body: "Crianças grátis até 5 anos, acima, valor integral*",
      paradas: ['Lagoa azul','Lagoa verde', 'Grumixama', 'Japariz','Feiticeira','Gruta'],
      horaSaida: '??:??',
      horaChegada: '??:??',
      imageURL: "https://img.freepik.com/fotos-premium/pesque-na-lagoa-azul-da-ilha-grande-em-angra-dos-reis_63139-2834.jpg?w=2000",
      valor: 900
    }
  ]
  let data1: Date = new Date();
  data1.setDate(data1.getDate());
  const [isClient,setIsClient] = useState<boolean>();
  const [informacoes,setInformacoes] = useState(cards);
  const [roteiroSelect,setRoteiroSelect] = useState('');
  const [embarcacaoSelect,setEmbarcacaoSelect] = useState('');
  const [dataAgendamento, setDataAgendamento] = useState<Date>(data1);
  const [telefone, setTelefone] = useState('');
  const [indexAba, setIndexAba] = useState(0);
  const [modalCarrinho,setModalCarrinho] = useState<boolean>();
  const [passageiros, setPassageiros] = useState<number>();
  const [valorPasseio, setValorPasseio] = useState<number>();
  const {register, handleSubmit} = useForm(); 
  const router = useRouter();
  const encoder = new TextEncoder();
  const decoder = new TextDecoder('utf-8');

  useEffect(() => {
    setIsClient(true);
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
    if(!data.nome){
      NotificationManager.error('Preencha o nome.', 'Formulário');
     return;
    } 

    if(!dataAgendamento){
      NotificationManager.error('Selecione a data.', 'Formulário');
     return;
    } 

    if(!data.passageiros){
      NotificationManager.error('Preencha a quantidade de passageiros.', 'Formulário');
     return;
    } 

    if(!roteiroSelect){
      NotificationManager.error('Selecione o roteiro.', 'Formulário');
     return;
    } 

    let obs = data.observacao ? `Obs.:${data.observacao}` : ''
    let textoAgendamento = `Olá, vim pelo site alohatour.com.br.
    Me chamo, ${data.nome}.
    Gostaria de agendar um passeio para o dia ${format(dataAgendamento,'dd/MM/yyyy')} com o roteiro ${roteiroSelect} para ${data.passageiros} pessoa(s). \nPoderia me ajudar?
    ${obs}`
    const textoUTF8 = encoder.encode(textoAgendamento);
    const textoDecodificado = decoder.decode(textoUTF8);
    router.push(`https://wa.me//5524993217325?text=${textoDecodificado}`)
  }

  function tirarDuvida(data: any){
    if(!data.nome){
      NotificationManager.error('Preencha o nome.', 'Formulário');
     return;
    } 

    if(!data.duvida){
      NotificationManager.error('Preencha sua dúvida.', 'Formulário');
     return;
    } 

    let textoDuvida = `Olá, vim pelo site alohatour.com.br.
    Me chamo, ${data.nome}.
    Gostaria de Tirar uma dúvida, pode me ajudar?`
    const textoUTF8 = encoder.encode(textoDuvida);
    const textoDecodificado = decoder.decode(textoUTF8);
    router.push(`https://wa.me//5524993217325?text=${textoDecodificado} %0A${data.duvida}`)
  }

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setRoteiroSelect(event.target.value);
  };

  const handleChangeSelectEmbarcacao = (event: SelectChangeEvent) => {
    setEmbarcacaoSelect(event.target.value);
  };

  function calcularValor(passageirosV: number) {

    switch (roteiroSelect) {
      case 'Lopes Mendes':
        embarcacaoSelect == 'Escuna' ? 
          setValorPasseio(passageirosV * 50)
        :
          setValorPasseio(passageirosV * 70)
        break;
      case 'Meia Volta':
        embarcacaoSelect == 'CF' ? 
          setValorPasseio(passageirosV * 140)
        :
          setValorPasseio(passageirosV * 180)
        break;
      case 'Gruta do Acaiá':
          setValorPasseio(passageirosV * 180)
        break;
      case 'Volta Ilha':
          setValorPasseio(passageirosV * 240)
        break;
      case 'Ilhas Paradisíacas':
        embarcacaoSelect == 'CF' ? 
          setValorPasseio(passageirosV * 160)
        :
          setValorPasseio(passageirosV * 200)
        break;
      case 'À Combinar':
          setValorPasseio(900)
        break;
    }
    
  }

  function Formulario() {
    return(
      <>
        <form className={styles.containerForm} onSubmit={indexAba == 0 ? handleSubmit(agendarPasseio) : handleSubmit(tirarDuvida)}>
          <div className={styles.nomeCel}>
            <div className={styles.nome}>
              <label htmlFor='nome'>Nome</label> 
              <input {...register('nome')} name='nome' type="text" placeholder="" ></input>
              <span className={styles.obrigatorio}>Campo obrigatório *</span>
            </div>
            <div className={styles.telefone}>
              <label htmlFor='telefone'>Celular</label> 
              <InputMask {...register('telefone')} name='telefone' type="tel" mask="(99)99999-9999" placeholder="(99)9999-9999" maxLength={15} />
              <span className={styles.obrigatorio} style={{visibility: 'hidden'}}>Campo obrigatório *</span>
            </div>
          </div>

          {indexAba == 0 &&
            <div className={styles.roteiroPessoas}>
              <div>
                <label>Roteiro</label>
                <FormControl sx={{ minWidth: 120, width: '100%' }} size="small">
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={roteiroSelect}
                    label="Roteiro"
                    onChange={handleChangeSelect}
                    sx={{
                      height: '34px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--color-primary)',
                    }}
                  >
                    <MenuItem value={'Gruta do Acaiá'}>Gruta do Acaiá</MenuItem>
                    <MenuItem value={'Volta Ilha'}>Volta Ilha</MenuItem>
                    <MenuItem value={'Ilhas Paradisíacas'}>Ilhas Paradisíacas</MenuItem>
                    <MenuItem value={'Meia Volta'}>Meia Volta</MenuItem>
                    <MenuItem value={'Lopes Mendes'}>Lopes Mendes</MenuItem>
                    <MenuItem value={'À Combinar'}>À Combinar</MenuItem>
                  </Select>
                  <span className={styles.obrigatorio}>Campo obrigatório *</span>
                </FormControl>
                
              </div>

              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.5rem'}}>
                <div className={styles.passageiros}>
                  <label htmlFor='passageiros'>Passageiros</label> 
                  <input {...register('passageiros')} name='passageiros' type="number" placeholder="" onChange={(e) => setPassageiros(e.target.valueAsNumber)}></input>
                  <span className={styles.obrigatorio}>Campo obrigatório *</span>
                </div>

                <div>
                  <label htmlFor='passageiros'>Embarcação</label> 
                  <FormControl sx={{ minWidth: 120, width: '100%' }} size="small">
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={embarcacaoSelect}
                      label="Embarcação"
                      onChange={handleChangeSelectEmbarcacao}
                      sx={{
                        height: '34px',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--color-primary)',
                      }}
                    >
                      <MenuItem value={'CF'} disabled={(roteiroSelect == 'Volta Ilha' || roteiroSelect == 'À Combinar') ? true : false}>CF</MenuItem>
                      <MenuItem value={'Lancha'} disabled={(roteiroSelect == 'Gruta do Acaiá' || roteiroSelect == 'Lopes Mendes') ? true : false}>Lancha</MenuItem>
                      <MenuItem value={'Escuna'} disabled={(roteiroSelect == 'Lopes Mendes') ? false : true}>Escuna</MenuItem>
                    </Select>
                    <span className={styles.obrigatorio}>Campo obrigatório *</span>
                  </FormControl>
                </div>
              </div>

              <div className={styles.dataPickerContainer}>
                  <label 
                      htmlFor="data" 
                  >Data </label>
                  <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={datePtBR}>
                      <DesktopDatePicker 
                        value={dataAgendamento}
                        onChange={(newValue) => {
                            setDataAgendamento(newValue as Date);
                        }}
                        sx={{
                          "& .MuiInputBase-root": {
                            font: '400 1rem "Sarala", sans-serif',
                            height: '34px',
                            backgroundColor: '#FFF',
                            border: '1px solid var(--color-primary)'
                          }
                        }}
                      />
                  </LocalizationProvider>
                  <span className={styles.obrigatorio}>Campo obrigatório *</span>
              </div>
            </div>
          }

          <div className={styles.observacao}>
            <label htmlFor={indexAba == 0 ? "observacao" : "duvida"}>{indexAba == 0 ? 'Observação' : 'Dúvida'}</label>
            <textarea {...indexAba == 0 ? {...register('observacao')} : {...register('duvida')}} name={indexAba == 0 ? 'observacao' : 'duvida'} rows={4} />
            <p style={{fontSize: 12, marginTop: '.5rem'}}>No momento não estamos realizando pagamentos online.</p>
          </div>

          <div className={styles.agendamentoCarrinho}>
            <Modal
              trigger={<button className={styles.carrinho} type='button'>Valor</button>}
              titulo={<PointOfSaleIcon />}
              maxWidth='25rem'
              valueClose={modalCarrinho}
              onOpen={() => passageiros && calcularValor(passageiros)}
            >
            <div className={styles.containerModalCarrinho}> 
              { passageiros && roteiroSelect && embarcacaoSelect ?
                <div>
                  <Image 
                    alt='Logo' src='/../public/imagens/caixa.png' 
                    width={152} 
                    height={152} 
                    className={styles.pagamento} 
                  />
                  <p>Seu passeio fica no valor de: <u>R${valorPasseio},00</u></p>
                </div>
                :
                <p>
                  Preencha as informações necessárias de agendamento para saber o valor à pagar.
                </p>
              }
            </div>
            </Modal>  

            <button className={styles.botaoEnvio} type='submit'>
              <div className={styles.left}></div>
                {indexAba == 0 ? 'Agendar' : 'Perguntar'}
              <div className={styles.right}></div>
            </button>
          </div>
         
        </form>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>AlohaTour</title>
        <meta name="viewport" content="width=device-width,inicial-scale=1.0"/>
        <meta name="discription" content="O melhor conforto com os melhores passeios de barcos e roteiros da Ilha Grande e RJ!"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NotificationContainer />
        <div style={{
          display: 'flex',
          alignItems: 'center',
          textShadow: '5px 5px 5px #222'
        }}>
          <Image 
            className={styles.logo}
            alt='Logo' 
            src='/../public/imagens/garrafa3.png' 
            width={130} 
            height={130}
            style={{
              marginLeft: '5rem'
            }}
          />
          <h2
            style={{
              fontFamily: "'Shrikhand',cursive",
              color: 'var(--white)',
              fontWeight: 600,
              marginLeft: '1rem'
            }}
          >Aloha Tour</h2>
        </div>

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
          <h2
            style={{
              fontFamily: "'Sarala',sans-serif",
              color: 'var(--white)',
              fontWeight: 600,
              textShadow: '5px 5px 5px #222'
            }}
          >Roteiros</h2>
          
          <div className={styles.boxCards}>
            { informacoes && isClient &&
            informacoes?.map((item: any, index: any) =>
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
          <div className={styles.sobreT} style={{textShadow: '5px 5px 5px #222'}}>
            <Image 
              alt='Logo' src='/../public/imagens/mergulho.png' 
              width={152} 
              height={152} 
              className={styles.mergulhador} 
              style={{ position: 'absolute', left: 0, right: 0}}
            />
            <h2
              style={{
                fontFamily: "'Sarala',sans-serif",
                color: 'var(--white)',
                fontWeight: 600,
              }}
            >Sobre</h2>
          </div>
          
          <div className={styles.sobre1}>
            <p style={{display:'flex', position: 'relative', color: '#fffafa',fontWeight: '500',zIndex: '999'}}>
              &nbsp; &nbsp; A AlohaTour vem transformando sonhos de viagem em experiências inesquecíveis no cenário do turismo aquático. Com um profundo conhecimento da região em que operamos e uma dedicação incansável em proporcionar o melhor custo-benefício aos nossos clientes, somos a escolha ideal para quem busca aventuras únicas em meio às águas.
            </p>

            <p style={{display:'flex', position: 'relative', color: '#fffafa', fontWeight: '500',zIndex: '999'}}>
              &nbsp; &nbsp; O coração da nossa empresa bate em sintonia com os desejos dos nossos viajantes, por isso que além dos roteiros fechados, oferecemos também experiências únicas. Compreendemos que cada pessoa tem necessidades e expectativas diferentes quando se aventura nas águas, e é por isso que personalizamos cada roteiro para atender às necessidades específicas de cada cliente. Seja um aventureiro em busca de mergulhos emocionantes, um casal em busca de romance nas águas cristalinas ou uma família que busca relaxar à beira-mar, estamos prontos para criar o passeio perfeito para você.
            </p>

            
          </div>
          
          <div style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'flex-end'
          }}>
            <Image 
              alt='Logo' src='/../public/imagens/mergulho2.png' 
              width={152} 
              height={152} 
            />
          </div>
          

        </section>

        <div className={styles.local}>
          <h2
            style={{
              fontFamily: "'Sarala',sans-serif",
              color: 'var(--white)',
              fontWeight: 600,
            }}
          >Localização</h2>

          <div className={styles.mapResponsive} >
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3668.792088015336!2d-44.1665214!3d-23.1412737!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c5c0c13570d3d%3A0x844a7c570339815f!2sCais%20Tur%C3%ADstico%20da%20Vila%20do%20Abra%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1704986552198!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{border:0, borderRadius: '1rem', boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.25)'}} loading="lazy" ></iframe> 
          </div>

        </div>

        <div className={styles.galeria} style={{textShadow: '5px 5px 5px #222'}}>
          <h2
            style={{
              fontFamily: "'Sarala',sans-serif",
              color: 'var(--white)',
              fontWeight: 600,
              marginTop: '15rem'
            }}
          >Galeria</h2>
          <CarousselGaleria />
        </div>

        <div className={styles.contato} id='contatoSection'>
          <h2
            style={{
              fontFamily: "'Sarala',sans-serif",
              color: 'var(--white)',
              fontWeight: 600,
              textShadow: '5px 5px 5px #222'
            }}
          >Contato</h2>

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
                    <Formulario />
                  </div>
                }
              </TabPanel>

              <TabPanel 
                value={indexAba} 
                index={1}
              >
                { isClient &&
                  <div className={styles.divFormDuvida}>
                    <Formulario />
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
