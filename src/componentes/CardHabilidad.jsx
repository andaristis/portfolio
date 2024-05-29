import React from 'react'
import styles from '../styles/HabilidadCard.module.css';

const CardHabilidad = ({habilidad}) => {
  const { id, titulo, logo_habilidad, descripcion } = habilidad
 
  
  return (
    <div className={styles.cardContainer}>
    <div className={styles.card}>
      <div className={`${styles.cardFace} ${styles.cardFront}`}>
        <h2 className={styles.tituloHabilidad}>{titulo}</h2>
        <img className={styles.logoHabilidad} src={logo_habilidad} alt={titulo} />
      </div>
      <div className={`${styles.cardFace} ${styles.cardBack}`}>
        <p className={styles.descripcionHabilidad}>{descripcion}</p>
      </div>
    </div>
  </div>
  )
}

export default CardHabilidad