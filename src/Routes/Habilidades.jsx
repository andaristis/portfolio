import React from 'react'
import styles from '../styles/Habilidades.module.css'
import CardHabilidad from '../componentes/CardHabilidad';
import Biblioteca from '../componentes/Biblioteca';
import Competencia from '../componentes/Competencia';


const Habilidades = ({habilidadesRef}) => {
  const {habilidades, images} = Biblioteca()

  return (
    <section ref={habilidadesRef} className={styles.habilidades}>
      <h2 className={styles.tituloHabilidades}>HABILIDADES PRINCIPALES</h2>
      <div className={styles.contenedorHabilidades}>
        {habilidades.map((habilidad) =>
        <CardHabilidad key={habilidad.id} habilidad={habilidad}/>)
      }
      </div>
      <div>
      <h2 className={styles.tituloHabilidades}>COMPETENCIAS</h2>
      <Competencia competencias={images.logo_competenecias}/>
      </div>
    </section>
  )
}

export default Habilidades