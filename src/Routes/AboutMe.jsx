import React from 'react'
import styles from '../styles/AboutMe.module.css'
import Biblioteca from '../componentes/Biblioteca';
import useScrollbarWidth from '../hooksPersonalizados/useScrollbarWidth';

const AboutMe = ({aboutMeRef}) => {
    const {images} = Biblioteca()
    const scrollbarWidth = useScrollbarWidth();

  const sectionStyle = {
    width: `calc(100vw - 3vw - ${scrollbarWidth}px)`}
  return (
    <section ref={aboutMeRef} className={styles.aboutMe} style={sectionStyle}>
        <div className={styles.contenedorImgAboutMe}>
            <img className={styles.fotoPersonal}src={images.foto_personal} alt="Andaristis" />
        </div>
        <span className="separador"></span>
        <span className="separador"></span>
        <div className={styles.textoAboutMe}>
            <div className={styles.tituloAboutMe}>
                    <img className={styles.logoAndaristis} src={images.logo_andaristis} alt="" />
                <h2 className={styles.nombre}>ANDRES<br/>ARISTIMUÑO</h2>
            </div>
            <p className={styles.textoAboutMe}>¡Bienvenidos a mi sitio web! Soy Andrés Aristimuño, un apasionado desarrollador con reciente graduación en Desarrollo Profesional. Durante mi formación, me sumergí en el fascinante mundo del Frontend y UX/UI, descubriendo mi pasión por crear experiencias digitales cautivadoras.<br/> <br/>

            Originario de Paso de los Toros, Uruguay, mi jornada diaria transcurre entre ser un orgulloso padre de una encantadora niña llamada Martina y desafiarme como Jefe de taller en un negocio familiar de aberturas de aluminio. A pesar de las responsabilidades, encontré el tiempo para concluir mi carrera y participar en proyectos personales, incluyendo uno destacado como Scrum Master y Frontend en equipo.<br/><br/>

            Mi compromiso, honestidad y atención meticulosa a los detalles definen mi enfoque hacia el diseño y desarrollo. Ansío compartir mis proyectos contigo y mostrar cómo he combinado mis habilidades en HTML, CSS, JS, React, Figma y Patrones de diseño para crear soluciones impactantes.<br/><br/>

            Con una mente abierta y sed de conocimiento, estoy ansioso por embarcarme en mi próxima aventura: una especialización en Frontend. <br/><br/><strong>¡Únete a mí mientras continúo explorando y creciendo en este apasionante campo del desarrollo web!</strong>
            </p>
        </div>
    </section>
  )
}

export default AboutMe