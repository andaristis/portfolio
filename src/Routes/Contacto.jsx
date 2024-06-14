import React from 'react'
import styles from '../styles/Contacto.module.css';
import ContactForm from '../componentes/ContactForm';
import CardContacto from '../componentes/CardContacto';
import Biblioteca from '../componentes/Biblioteca';
import useScrollbarWidth from '../hooksPersonalizados/useScrollbarWidth';

const Contacto = ({contactoRef}) => {
  const { images } = Biblioteca();
  const scrollbarWidth = useScrollbarWidth();

  const sectionStyle = {
    width: `calc(100vw - 3vw - ${scrollbarWidth}px)`}
  return (
    <section ref={contactoRef} className={styles.contactos} style={sectionStyle}>
      <div className={styles.contenedorLogosContactos}>
        <CardContacto contactos={images.contactos} />
      </div>
   
      <div className={styles.contenedorFormContactos}>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contacto