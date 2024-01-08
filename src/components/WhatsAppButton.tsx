import styles from "../styles/WhatsAppButton.module.css";

export default function WhatsAppButton() {
  
  return (
        <> 
                <a href="https://wa.me//5524993217325?text=Ol%C3%A1%2C%20vim%20pelo%20site%20alohatour.com.br.%0APoderia%20me%20ajudar%3F" target="_blank">
                    <div className={styles.whatsapp}>
                        <img src="https://i.imgur.com/56kfhje.png" alt="Fale Whatsapp"/>
                    </div>
                </a>
        </>
    )
}
