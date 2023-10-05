import styles from "../styles/WhatsAppButton.module.css";

export default function WhatsAppButton() {
  
  return (
        <> 
                <a href="https://api.whatsapp.com/send?phone=5524999952846" target="_blank">
                    <div className={styles.whatsapp}>
                        <img src="https://i.imgur.com/56kfhje.png" alt="Fale Whatsapp"/>
                    </div>
                </a>
        </>
    )
}
