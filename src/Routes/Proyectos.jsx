import React, { useEffect } from 'react';
import styles from '../styles/Proyectos.module.css';
import Card from '../componentes/Card';
import Biblioteca from '../componentes/Biblioteca';

const Proyectos = ({ proyectosRef }) => {
  const { proyectosInfo } = Biblioteca();

  useEffect(() => {
    if (proyectosRef && proyectosRef.current) {
      // Acceder al nodo DOM y realizar acciones si la referencia no es null
      console.log('proyectosRef.current:', proyectosRef.current);
    }
  }, [proyectosRef]);

  return (
    <section ref={proyectosRef} className={styles.contenedorProyectos}>
      {proyectosInfo.map((proyecto) => (
        <Card key={proyecto.id} proyecto={proyecto} />
      ))}
    </section>
  );
};

export default Proyectos;