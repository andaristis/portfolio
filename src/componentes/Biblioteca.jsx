import React from 'react'
import fondoInicio from '/public/img/fondo_home.jpg'
import logoAndaristis from '/public/img/svg/logo_andaristis.svg'
import logoTerrarent from '/public/img/svg/terraRent_svg.svg'
import logoCortal from '/public/img/svg/cortal.svg'
import logoReact from '/public/img/svg/react_svg.svg'
import logoScrum from '/public/img/svg/scrum_svg.svg'
import logoTrello from '/public/img/svg/trello_svg.svg'
import logoJS from '/public/img/svg/js_svg.svg'
import logoCSS from '/public/img/svg/css_svg.svg'
import logoHTML from '/public/img/svg/html_svg.svg'
import logoGit from '/public/img/svg/git_svg.svg'
import previewTerrarent from '/public/img/preview_terrarent.png'
import previewCortal from '/public/img/preview_cortal.png'
import logoReactAzul from '/public/img/svg/svg_azul/react_svg.svg'
import logoScrumAzul from '/public/img/svg/svg_azul/scrum_svg.svg'
import logoTrelloAzul from '/public/img/svg/svg_azul/trello_svg.svg'
import logoJSAzul from '/public/img/svg/svg_azul/js_svg.svg'
import logoCSSAzul from '/public/img/svg/svg_azul/css_svg.svg'
import logoHTMLAzul from '/public/img/svg/svg_azul/html_svg.svg'
import logoGitAzul from '/public/img/svg/svg_azul/git_svg.svg'
import logoFigmaAzul from '/public/img/svg/svg_azul/figma_svg.svg'
import logoIdiomaAzul from '/public/img/svg/svg_azul/idioma_svg.svg'
import logoCorelAzul from '/public/img/svg/svg_azul/corel_svg.svg'
import logoTestingAzul from '/public/img/svg/svg_azul/testing_svg_azul.svg'
import logoExcelAzul from '/public/img/svg/svg_azul/excel_svg.svg'
import logoMySqlAzul from '/public/img/svg/svg_azul/mysql_svg.svg'
import logoAwsAzul from '/public/img/svg/svg_azul/aws_svg.svg'
import logoPostmanAzul from '/public/img/svg/svg_azul/postman_svg.svg'
import logoJavaAzul from '/public/img/svg/svg_azul/java_svg.svg'
import logoIllustartorAzul from '/public/img/svg/svg_azul/illustrator_svg.svg'
import logoPhotoshopAzul from '/public/img/svg/svg_azul/ps_svg.svg'
import logoAgileAzul from '/public/img/svg/svg_azul/agile_svg.svg'
import fotoPersonal from '/public/img/foto_personal.png'
import logoInstagram from '/public/img/svg/instagram_svg.svg'
import logoLinkedin from '/public/img/svg/linkedin_svg.svg'
import logoWhatsapp from '/public/img/svg/whatsapp_svg.svg'
import logoTelefono from '/public/img/svg/telefono_svg.svg'
import logoGmail from '/public/img/svg/gmail_svg.svg'





const Biblioteca = () => {
    const images = {
        fondo_inicio: fondoInicio,
        logo_andaristis: logoAndaristis,
        foto_personal:fotoPersonal,
        contactos:[
                {id:1,
                nombre: "instagram",
                logo: logoInstagram,
                texto: "@andaristis",
                url: "https://www.instagram.com/andaristis/"},
                {id:2,
                nombre:"linkedin",
                logo: logoLinkedin,
                texto: "/andaristis",
                url: "https://www.linkedin.com/in/andaristis/"},
                {id:3,
                nombre:"telefono",
                logo: logoTelefono,
                texto: "Llame ya!",
                url:"tel: +59899281322"},
                {id:4,
                nombre:"mail",
                logo: logoGmail,
                texto: "andaristis@gmail.com",
                url:"mailto: andaristis@gmail.com"},
                {id:5,
                nombre:"whatsapp",
                logo: logoWhatsapp,
                texto: "Escribiendo...",
                url:`https://wa.me/${encodeURIComponent('59899281322')}`}
        ],
        logo_competenecias:[
            {nombre:"My SQL",
            logo: logoMySqlAzul},
            {nombre:"AWS",
            logo: logoAwsAzul},
            {nombre:"POSTMAN",
            logo: logoPostmanAzul}, 
            {nombre:"JAVA",
            logo: logoJavaAzul}, 
            {nombre:"ILLUSTRATOR",
            logo: logoIllustartorAzul}, 
            {nombre:"PHOTOSHOP",
            logo: logoPhotoshopAzul}, 
            {nombre:"AGILE",
            logo:logoAgileAzul}, 
            ]
    };
    const proyectosInfo = [
            {id: 1,
            nombre: "Terrarent",
            preview: previewTerrarent,
            logo_titulo: logoTerrarent,
            subtitulo: "Alquiler de kits y elementos de camping",
            descripcion: "Terrarent es una plataforma de alquiler de equipos de camping que ofrece una amplia gama de productos de alta calidad para satisfacer las necesidades de los amantes del camping. Desde tiendas de campaña hasta estufas portátiles, nuestro servicio elimina la necesidad de comprar equipos costosos, ofreciendo una opción conveniente y flexible para tus aventuras al aire libre.",
            habilidades:[logoHTML, logoCSS, logoReact, logoScrum, logoGit, logoTrello],
            url_proyecto: "https://terrarent.ddns.net"},
            {id: 2,
            nombre: "Cortal",
            preview: previewCortal,
            logo_titulo: logoCortal,
            subtitulo: "Aplicación de Carpintería de Aluminio",
            descripcion: "Cortal es una herramienta en línea que ayuda a calcular los cortes necesarios para diferentes aberturas y medidas en trabajos de carpintería de aluminio. Esta aplicación permite a los usuarios ingresar dimensiones y configuraciones específicas para obtener resultados precisos.",
            habilidades:[logoHTML, logoCSS, logoJS, logoGit],
            url_proyecto: "https://andaristis.github.io/CORTAL/"}
        ];
        
    const habilidades = [
            {id: 1,
            titulo: "HTML",
            logo_habilidad: logoHTMLAzul,
            descripcion: "Semántica web efectiva, manejo de etiquetas y atributos, implementación de las últimas prácticas y estándares para garantizar la accesibilidad y la compatibilidad multiplataforma.",
            },
            {id: 2,
            titulo: "CSS",
            logo_habilidad: logoCSSAzul,
            descripcion: "Uso eficiente de selectores, aplicación de reglas de diseño responsivo, creación de animaciones y transiciones y la resolución de problemas de diseño con precisión y creatividad.",
            },
            {id: 3,
            titulo: "JAVA SCRIPT",
            logo_habilidad: logoJSAzul,
            descripcion: "Manipulación del DOM, desarrollo de aplicaciones web interactivas y dinámicas. Familiarizado con conceptos fundamentales de JavaScript,  variables, operadores, estructuras de control y funciones.",
            },
            {id: 4,
            titulo: "REACT.JS",
            logo_habilidad: logoReactAzul,
            descripcion: "Desarrollo de componentes reutilizables, manejo eficiente del estado y el enrutamiento y construir aplicaciones web modernas de alto rendimiento.",
            },
            {id: 5,
            titulo: "GIT",
            logo_habilidad: logoGitAzul,
            descripcion: "Conceptos básicos de Git, como la creación de repositorios, la creación y fusión de ramas, la resolución de conflictos y la colaboración en equipos utilizando plataformas como GitHub o GitLab.",
            },
            {id: 6,
            titulo: "SCRUM",
            logo_habilidad: logoScrumAzul,
            descripcion: "Liderar equipos hacia el éxito del proyecto con la implementación eficaz de este ambiente ágil. Como Scrum Master, facilito ceremonias,  las reuniones diarias, la planificación de sprints y las retrospectivas.",
            },
            {id: 7,
            titulo: "EXCEL",
            logo_habilidad: logoExcelAzul,
            descripcion: "Dominio completo de las funciones avanzadas y las capacidades de análisis de datos que ofrece la plataforma. Mis habilidades incluyen la creación de complejas fórmulas y macros para automatizar tareas repetitivas.",
            },
            {id: 8,
            titulo: "FIGMA",
            logo_habilidad: logoFigmaAzul,
            descripcion: "Experiencia sólida en diseño de interfaces de usuario y creación de prototipos interactivos. Utilizo las herramientas de diseño de Figma para crear diseños limpios y modernos, centrándome en usabilidad y accesibilidad.",
            },
            {id: 9,
            titulo: "COREL DRAW",
            logo_habilidad: logoCorelAzul,
            descripcion: "Utilizo las herramientas avanzadas de CorelDRAW para crear logotipos, recursos gráficos para mis proyectos. Estoy familiarizado con la de edición de imágenes y la manipulación de vectores.",
            },
            {id: 10,
            titulo: "TRELLO",
            logo_habilidad: logoTrelloAzul,
            descripcion: "Experiencia en organización y seguimiento de tareas mediante los tableros personalizados, listas y tarjetas, etiquetado, asignación de tareas y fechas  para priorizar y gestionar eficientemente el flujo de trabajo.",
            },
            {id: 11,
            titulo: "QA MANUAL",
            logo_habilidad: logoTestingAzul,
            descripcion: "Identificación y ejecución de casos de prueba para verificar funcionalidad y  usabilidad de apps y sitios con métodos sistemáticos para explorar diferentes escenarios e identificar problemas, documentar resultados.",
            },
            {id: 12,
            titulo: "INGLES",
            logo_habilidad: logoIdiomaAzul,
            descripcion: "Nivel: Intermedio. Puedo comunicarme en situaciones cotidianas y comprender conversaciones y textos simples. Tengo habilidades para expresar ideas básicas y comprender la información general.",
            },
        ];
        
    
    return {
        images,
        proyectosInfo,
        habilidades
    };
};

export default Biblioteca