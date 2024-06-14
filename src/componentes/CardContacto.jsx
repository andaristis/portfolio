import React from 'react';
import styles from '../styles/CardContacto.module.css';

const CardContacto = ({ contactos }) => {
   return (
    <div className={styles.contenedorLogosContactos}>
      {contactos.map((contacto, index) => (
        <div className={styles.cardContacto} key={contacto.id}>
          <a href={contacto.url} className={styles.linkContacto} target="_blank" rel="noopener noreferrer">
            <img className={styles.logoContacto} src={contacto.logo} alt={`Contacto ${contacto.nombre}`} />
          </a>
          <h4 className={styles.textoContacto}>
            {contacto.texto}
          </h4>
        </div>
      ))}
    </div>
  );
}

export default CardContacto;