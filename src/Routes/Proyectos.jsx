import React, { useEffect } from 'react';
import styles from '../styles/Proyectos.module.css';
import Card from '../componentes/Card';
import Biblioteca from '../componentes/Biblioteca';
import useScrollbarWidth from '../hooksPersonalizados/useScrollbarWidth';


const Proyectos = ({ proyectosRef }) => {
  const { proyectosInfo } = Biblioteca();
  const scrollbarWidth = useScrollbarWidth();

  const sectionStyle = {
    width: `calc(100vw - 3vw - ${scrollbarWidth}px)`}
  useEffect(() => {
    if (proyectosRef && proyectosRef.current) {
      console.log('proyectosRef.current:', proyectosRef.current);
    }
  }, [proyectosRef]);

  return (
    <section ref={proyectosRef} className={styles.contenedorProyectos} style={sectionStyle}>
      {proyectosInfo.map((proyecto) => (
        <Card key={proyecto.id} proyecto={proyecto} />
      ))}
    </section>
  );
};

export default Proyectos;