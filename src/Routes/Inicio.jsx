import React from 'react'
import styles from '../styles/Inicio.module.css';
import Biblioteca from '../componentes/Biblioteca';

const Inicio = ({ inicioRef }) => {
  const {images} = Biblioteca()
 
  return (
    <section ref={inicioRef} className={styles.inicio}>
     
      <div id={styles.contenedorImagenInicio}>
        <img src={images.fondo_inicio} alt="" />
      </div>
      <div className={styles.contnedorTextosInicio}>
        <img className={styles.logoAndaristis} src={images.logo_andaristis} alt="" />
        <h2 className={styles.nombre}>ANDRES<br/>ARISTIMUÑO</h2>
        <p className={styles.subtitulo}>DESARROLLO<br/>IDEAS</p>
        <h4 className={styles.descripcion}>Professional Developer desde Abril de 2024, mi perfil 
            está orientado al Frontend y Web Developer 
            pero me adapto fácilmente a cualquier desafío.
            <br/>
            <br/>
            Explorando, creciendo y desarrollando.
        </h4>
      </div>
    </section>
  )
}

export default Inicio