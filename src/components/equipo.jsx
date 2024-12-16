import { useState, useEffect } from "react";
import AnimatedImage from "./AnimatedImage";
import "../styles/equipo.css";

const EquipoSection = ({ data }) => {
  const [isDesktop, setIsDesktop] = useState(false); // Detecta si es escritorio
  const [expanded, setExpanded] = useState({});
  const MAX_CHARACTERS = 150; // Número de caracteres visibles por defecto
  const { nombreCompleto, videoPresentacion, tituloPuesto, experiencia } = data;

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

  return (
    <main className="equipo-section">
      <section className="presentacion-equipo">
        <article>
          <div className="cajaDeH1">
            <h1>Presentación</h1>
            <h1>{nombreCompleto}</h1>
          </div>
          <video
            src={videoPresentacion}
            autoPlay
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
        <div className="contenedor-trabajos">
          {experiencia.map((proyecto, index) => {
            const isExpanded = expanded[index] || isDesktop; // Mostrar todo en escritorio
            const shouldShowButton =
              proyecto.descripcion.length > MAX_CHARACTERS && !isDesktop; // Botón solo en móvil

            return (
              <article key={index}>
                <AnimatedImage
                  src={proyecto.imagen}
                  alt="imagen de trabajo realizado"
                />
                <h3>{proyecto.tituloOEmpresa}</h3>
                <h4>{proyecto.puesto}</h4>
                <p className="project-description">
                  {isExpanded
                    ? proyecto.descripcion
                    : `${proyecto.descripcion.substring(0, MAX_CHARACTERS)}...`}
                </p>
                <div className="cajaDeBotones">
                  {shouldShowButton && (
                    <button
                      className="toggle-btn"
                      onClick={() => toggleDescription(index)}
                    >
                      {isExpanded ? "Ver menos" : "Ver más"}
                    </button>
                  )}
                  {proyecto.urlTrabajo && (
                    <button>
                      <a
                        href={proyecto.urlTrabajo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Proyecto
                      </a>
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default EquipoSection;
