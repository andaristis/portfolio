import React from 'react'
import styles from '../styles/Contacto.module.css';
import ContactForm from '../componentes/ContactForm';
import CardContacto from '../componentes/CardContacto';
import Biblioteca from '../componentes/Biblioteca';

const Contacto = ({contactoRef}) => {
  const { images } = Biblioteca();
  console.log(images);
  return (
    <section ref={contactoRef} className={styles.contactos}>
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