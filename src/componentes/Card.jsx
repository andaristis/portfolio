import React from 'react'
import styles from '../styles/Card.module.css';


const Card = ({proyecto}) => {
    const { nombre, preview, logo_titulo, subtitulo, descripcion, habilidades } = proyecto;

  return (
    <div className={styles.contenedorCard}>
        <img className={styles.tituloCard} src={logo_titulo} alt={nombre}/>
        <img className={styles.preview} src={preview} alt={preview}/>
        <h2 className={styles.subtituloCard}>{subtitulo}</h2>
        <p className={styles.descripcionCard}>{descripcion}</p>
        {habilidades && habilidades.length > 0 ? (
            <ul className={styles.contenedorHabilidadesCard}>
              {habilidades.map((habilidad, index) => (
                <li key={index}>
                  <img className={styles.habilidadCard} src={habilidad} alt={`Habilidad ${index}`} />
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay habilidades especificadas</p>
          )}
          
       
    </div>
  )
}

export default Card