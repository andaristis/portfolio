import React from 'react'
import styles from '../styles/HabilidadCard.module.css';

const CardHabilidad = ({habilidad}) => {
  const { id, titulo, logo_habilidad, descripcion } = habilidad
 
  
  return (
    <div className={styles.cardHabilidad}>
      <h2 className={styles.tituloHabilidad}>{titulo}</h2>
      <img className={styles.logoHabilidad} src={logo_habilidad} alt={titulo}/>
      <p className={styles.descripcionHabilidad}>{descripcion}</p>
    </div>
  )
}

export default CardHabilidad