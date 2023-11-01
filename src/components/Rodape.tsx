import styles from "../styles/Rodape.module.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";

export default function Rodape() {
  
  return (
        <> 
            <div className={styles.containerRodape}>
                <div className={styles.rodapeEsquerda} style={{display: 'flex', justifyContent: 'center', width: '35%'}}>
                    <h2 style={{fontFamily: "'Shrikhand', cursive"}}>AlohaTour</h2>
                </div>

                <div className={styles.rodapeDireita}
                    style={{
                        display: 'grid',
                        gap: '1rem'
                    }}
                >
                    <div>
                        <h3>alohatour.com.br</h3>
                        <div className={styles.containerSocial}
                            style={{display: 'flex', gap: '.5rem'}}
                        >
                            <div style={{cursor: 'pointer'}}><InstagramIcon /></div>
                            <div style={{cursor: 'pointer'}}><FacebookIcon /></div>
                            <div style={{cursor: 'pointer'}}><TwitterIcon /></div>
                        </div>
                    </div>
                    <Link href='https://github.com/leonardo-marley' style={{textDecoration: 'none',color: '#fffafa'}}>
                        <div 
                            className={styles.creator} 
                            style={{
                                cursor: 'pointer',
                                display: 'flex',
                                gap: '.5rem'
                            }}
                            
                        >
                            <GitHubIcon fontSize="large" sx={{marginTop: '.3rem'}}/>
                            <p style={{fontWeight: '600'}}>
                                Powered by <br />
                                Leonardo Marley
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
