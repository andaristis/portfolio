import React from 'react'
import styles from '../styles/CardContacto.module.css';
const CardContacto = ({ contactos }) => {
  
   return (
    <div className={styles.contenedorLogosContactos}>
      {contactos.map((contacto, index) => (
        <div className={styles.cardContacto} key={contacto.id}>
          <img className={styles.logoContacto} src={contacto.logo} alt={`Contacto ${index}`} />
          <h4 className={styles.textoContacto}>{contacto.texto}</h4>
        </div>
      ))}
    </div>
  )
}

export default CardContacto