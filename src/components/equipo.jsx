import { useState, useEffect } from "react";
import AnimatedImage from "./AnimatedImage";
import "../styles/equipo.css";

const EquipoSection = ({ data }) => {
  const [isDesktop, setIsDesktop] = useState(false); // Detecta si es escritorio
  const [expanded, setExpanded] = useState({});
  const MAX_CHARACTERS = 150; // Número de caracteres visibles por defecto
  // const { nombreCompleto, videoPresentacion, tituloPuesto, experiencia } = data;

  // Detectar si es escritorio (más de 1024px)
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    // Detecta el tamaño inicial
    handleResize();

    // Actualiza en caso de cambios en el tamaño de la ventana
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDescription = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const { nombreCompleto, videoPresentacion, tituloPuesto, experiencia, bannerImagen } = data;

  return (

    <main className="equipo-section">
      <section className="presentacion-equipo">
        <article>
          <h1>Presentacion</h1>
          <h1>{nombreCompleto}</h1>
          <video
            src={videoPresentacion}
            poster={data.bannerImagen}
            controls
          >
            Tu navegador no admite el elemento <code>video</code>.
          </video>
          <h2>{tituloPuesto}</h2>
        </article>
      </section>

      <section className="proyectos">
        <h2>Trabajos/Proyectos</h2>
        {experiencia.map((proyecto, index) => (
          <article key={index}>
            <img src={proyecto.imagen} alt="imagen de trabajo realizado" />
            <h3>{proyecto.tituloOEmpresa}</h3>
            <p
              className={`project-description ${
                expanded[index] ? "expanded" : ""
              }`}
            >
              {proyecto.descripcion}
              {expanded[index] && (
                <span className="hidden-text">{proyecto.puesto}</span>
              )}
            </p>
            <button
              className="toggle-btn"
              onClick={() => toggleDescription(index)}
            >
              {expanded[index] ? "Ver menos" : "Ver mas"}
            </button>
            <button>
              <a
                href={proyecto.urlTrabajo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Proyecto
              </a>
            </button>
          </article>
        ))}
      </section>
    </main>
  );
};

export default EquipoSection;
