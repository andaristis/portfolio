import React from 'react'
import styles from '../styles/Card.module.css';


const Card = ({proyecto}) => {
    const { nombre, preview, logo_titulo, subtitulo, descripcion, habilidades,url_proyecto } = proyecto;
    const handleCardClick = () => {
      window.open(url_proyecto, '_blank')
    };
  return (
    
      <div className={styles.contenedorCard} onClick={handleCardClick}>
          <div className={styles.contenedorPreview}>
            <img className={styles.preview} src={preview} alt={preview}/>
          </div>
        <div className={styles.contenedorDescripcionProyecto}>
          <img className={styles.tituloCard} src={logo_titulo} alt={nombre}/>
          <div className={styles.textosProyecto}>
            <h2 className={styles.subtituloCard}>{subtitulo}</h2>
            <p className={styles.descripcionCard}>{descripcion}</p>
          </div>
          {habilidades && habilidades.length > 0 ? (
            <ul className={styles.contenedorHabilidadesCard}>
              {habilidades.map((habilidad, index) => (
                <li className={styles.listadoHabilidadCard} key={index}>
                  <img className={styles.habilidadCard} src={habilidad} alt={`Habilidad ${index}`} />
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay habilidades especificadas</p>
          )}
          </div>
      </div>
    
  )
}

export default Card