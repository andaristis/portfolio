import {useState, React, useEffect} from 'react'
import logo from '../img/CV.svg'
import styles from '../styles/Header.module.css';


const Header = ({ inicioRef, proyectosRef, habilidadesRef, aboutMeRef, contactoRef }) => {
  const [selectedSection, setSelectedSection] = useState('inicio');
  const [activeSection, setActiveSection] = useState('inicio');
  const sectionRefs = {
    inicio: inicioRef,
    proyectos: proyectosRef,
    habilidades: habilidadesRef,
    aboutMe: aboutMeRef,
    contacto: contactoRef,
  };
  const handleScroll = () => {
    for (const [section, ref] of Object.entries(sectionRefs)) {
      if (isElementPartiallyInViewport(ref.current)) {
        setActiveSection(section);
        break;
      }
    }
  };

  const isElementPartiallyInViewport = (el) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const topVisible = rect.top >= 0 && rect.top < windowHeight;
    return topVisible;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  useEffect(() => {
    const scrollToSection = (elementRef) => {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      });
    };

    switch (selectedSection) {
      case 'inicio':
        scrollToSection(inicioRef);
        break;
      case 'proyectos':
        scrollToSection(proyectosRef);
        break;
      case 'habilidades':
        scrollToSection(habilidadesRef);
        break;
      case 'aboutMe':
        scrollToSection(aboutMeRef);
        break;
      case 'contacto':
        scrollToSection(contactoRef);
        break;
      default:
        scrollToSection(inicioRef);
    }
  }, [selectedSection]);

  const handleSectionClick = (section, elementRef) => {
    setSelectedSection(section);
  };
   
  return (
    <header className={styles.header}>
      <nav>
        <button onClick={() => handleSectionClick('inicio', inicioRef)} className={`${styles.textoButtons} ${activeSection === 'inicio' ? styles.selected : ''}`}>
           INICIO 
        </button>
        <button onClick={() => handleSectionClick('proyectos', proyectosRef)} className={`${styles.textoButtons} ${activeSection === 'proyectos' ? styles.selected : ''}`}>
          PROYECTOS
        </button>
        <button onClick={() => handleSectionClick('habilidades', habilidadesRef)} className={`${styles.textoButtons} ${activeSection === 'habilidades' ? styles.selected : ''}`}>
          HABILIDADES
        </button>
        <button onClick={() => handleSectionClick('aboutMe', aboutMeRef)} className={`${styles.textoButtons} ${activeSection === 'aboutMe' ? styles.selected : ''}`}>
          SOBRE MI
        </button>
        <button onClick={() => handleSectionClick('contacto',contactoRef)} className={`${styles.textoButtons} ${activeSection === 'contacto' ? styles.selected : ''}`}>
         CONTACTO
        </button>
      </nav>  
    </header>
  )
}

export default Header