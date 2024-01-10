import styles from "../styles/InformationCard.module.css";


export interface InformationCardProps {
    id: number,
    title: string,
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
                <div className={styles.card} style={{backgroundImage: `url(${props.dados?.imageURL})`}} onClick={() => console.log(props.dados?.title, 'Título')}>
                    <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>{props.dados?.title}</h2>
                    <p className={styles.cardBody}>
                        <p>À Partir de <span style={{fontSize: '32px'}}>R${props.dados?.valor}</span></p>
                        {props.dados?.body}
                    </p>
                    </div>
                </div>
            }
        </>
    )
}
