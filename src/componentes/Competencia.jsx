import React from 'react'
import styles from '../styles/Habilidades.module.css'
const Competencia = ({competencias}) => {
    
  return (
    <div className={styles.competencias}>
    {competencias.map((logo,index )=> (
        <div className={styles.competencia}>
        <img key={index} src={logo.logo} alt={`Competencia ${index}`} />
        <h4 className={styles.tituloCompetencia}> {logo.nombre}</h4>
        </div>
        ))}
    </div>
  )
}

export default Competencia