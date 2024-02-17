import styles from "../styles/InformationCard.module.css";
import RestaurantIcon from '@mui/icons-material/Restaurant';

export interface InformationCardProps {
    id: number,
    title: string,
    paradas?: any,
    horaSaida?: string,
    horaChegada?: string,
    body: string,
    imageURL: string,
    valor?: number
}

export interface InformationCardCompProps {
    key: number,
    dados?: InformationCardProps
}

export default function InformationCard(props: InformationCardCompProps) {
  
  return (
        <> 
            {
                <div className={styles.card} style={{backgroundImage: `url(${props.dados?.imageURL})`}} key={props.dados?.id}>
                    <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>{props.dados?.title}</h2>
                    <div className={styles.cardBody}>
                        <p style={{fontSize: 20, fontWeight: 600}}>À Partir de <span style={{fontSize: '26px'}}>R${props.dados?.valor}</span></p>
                        
                        <div style={{display: 'flex', alignContent: 'center'}}>
                            <p style={{fontSize: 20, fontWeight: 600}}>Horários:</p>

                            <div style={{display: 'flex',width: '100%', justifyContent: 'space-between', padding: '.3rem', marginLeft: '1rem'}}>
                                <u><p>Saída às {props.dados?.horaSaida}</p></u>
                                <p>/</p>
                                <u><p>Retorno às {props.dados?.horaChegada}</p></u>
                            </div>
                        </div>
                        
                        <p style={{fontSize: 20, fontWeight: 600}}>Paradas:</p>

                        <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto', gap: '0'}}>
                            {props.dados?.paradas &&
                                props.dados?.paradas.map((item: string, k: number) => (
                                    <u key={k}><p style={item == 'nada' ? {visibility: 'hidden'} : {}} key={k}>{item} {item == 'Maguariquessaba' ? <RestaurantIcon fontSize="small"/> : item == 'Japariz' ? <RestaurantIcon fontSize="small"/> : ''}</p></u>
                                ))
                            }
                        </div>
                        
                        <p style={{display: 'flex', justifyContent: 'center' , width: '100%', fontSize: 10}}>{props.dados?.body}</p>
                    </div>
                    </div>
                </div>
            }
        </>
    )
}
