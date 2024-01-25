import React, { useEffect, useRef, useState } from 'react';
import Popup from 'reactjs-popup';
import styles from '../styles/components/Modal.module.css'

interface ModalProps{
  titulo: string,
  trigger: any,
  children?: any,
  contentStyle?: any,
  maxWidth?: string,
  valueClose?: boolean,
  onOpen?: () => void
}

const Modal = (props : ModalProps) => {   
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  useEffect(() => {    
    setOpen(!open)    
  },[props.valueClose])

  useEffect(() => {
    setOpen(false)
  }, [open])
  
  return(
    <Popup
      className={styles.globalModalClass}
      modal={true}    
      trigger={props.trigger}       
      nested
      open={open}
      onOpen={props.onOpen}
      // closeOnDocumentClick
      keepTooltipInside=".tooltipBoundary"
      onClose={closeModal}      
      contentStyle={props.contentStyle ? props.contentStyle : {
        backgroundColor: 'var(--white)',        
        padding: '1rem',
        borderRadius: '5px',        
        textAlign: 'center',
        display: 'grid',        
        color:'var(--color-primary)',      
        width :'100%' ,
        gap: '10px',
        maxWidth: props.maxWidth ? props.maxWidth : '50rem',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}
      overlayStyle={{
        backgroundColor: 'rgba(0,0,0,0.4)',    
        padding: '1rem'
      }}           
    >
      <div className={styles.modalTop}>        
        <h3>{props.titulo}</h3>
        <button 
          className={styles.modalClose}
          onClick={() => setOpen(o => !o)}
        >&times;</button>
      </div>
      <hr 
        style={{
          color:'var(--background)',
          background: 'var(--background)',
          outline: 'none',
          height: '2px',
          border: 'none',
          margin: '0.5rem 0'
        }}
      />
        {props.children}
    </Popup>
  )
    
};

export default Modal;