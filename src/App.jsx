import { useRef } from 'react';
import './App.css';
import Header from './componentes/Header';
import Inicio from './Routes/Inicio';
import Proyectos from './Routes/Proyectos';
import Habilidades from './Routes/Habilidades';
import AboutMe from './Routes/AboutMe';
import Contacto from './Routes/Contacto';

function App() {
  const inicioRef = useRef(null);
  const proyectosRef = useRef(null);
  const habilidadesRef = useRef(null);
  const aboutMeRef = useRef(null);
  const contactoRef = useRef(null);

  return (
    <>
      <Header
        inicioRef={inicioRef}
        proyectosRef={proyectosRef}
        habilidadesRef={habilidadesRef}
        aboutMeRef={aboutMeRef}
        contactoRef={contactoRef}
      />
      <Inicio inicioRef={inicioRef} />
      <Proyectos proyectosRef={proyectosRef} />
      <Habilidades habilidadesRef={habilidadesRef} />
      <AboutMe aboutMeRef={aboutMeRef} />
      <Contacto contactoRef={contactoRef} />
    </>
  );
}

export default App;