import React, { useState } from 'react';
import styles from '../styles/FormContacto.module.css';
import emailjs from 'emailjs-com';
import { toastError, toastSuccess } from '../componentes/Notificaciones'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send("service_co632j8","template_neaap9n", formData, 'lnx1kxdWAnMR-vWKU')
      .then((response) => {
        console.log('Correo enviado exitosamente', response.status, response.text);
        toastSuccess(`${formData.name}, su mensaje ha sido enviado. Nos pondremos en contacto a la brevedad posible.`)
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.log('Error al enviar el correo', error);
        toastError(`${formData.name}, su mensaje no ha sido enviado, intente de nuevo más tarde.`)
      });
  };

console.log(formData);
  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.contactInputContainer}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.contactInputContainer}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.contactInputContainer}>
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
