import React from 'react'
import styles from '../styles/Habilidades.module.css'
import CardHabilidad from '../componentes/CardHabilidad';
import Biblioteca from '../componentes/Biblioteca';
import Competencia from '../componentes/Competencia';
import useScrollbarWidth from '../hooksPersonalizados/useScrollbarWidth';


const Habilidades = ({habilidadesRef}) => {
  const {habilidades, images} = Biblioteca()
  const scrollbarWidth = useScrollbarWidth();

  const sectionStyle = {
    width: `calc(100vw - 3vw - ${scrollbarWidth}px)`}
    console.log(sectionStyle);
    console.log("sectionStyle");
  return (
    <section ref={habilidadesRef} className={styles.habilidades} style={sectionStyle}>
      <div className={styles.contenedorHabilidades}>
      <h2 className={styles.tituloHabilidades}>HABILIDADES PRINCIPALES</h2>
      <div className={styles.contenedorCardsHabilidades}>
        {habilidades.map((habilidad) =>
        <CardHabilidad key={habilidad.id} habilidad={habilidad}/>)
      }
      </div>
      </div>
      <div className={styles.contenedorCompetencias}>
        <h2 className={styles.tituloHabilidades}>COMPETENCIAS</h2>
        <Competencia competencias={images.logo_competenecias}/>
      </div>
    </section>
  )
}

export default Habilidades