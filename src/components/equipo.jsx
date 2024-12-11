import { useState } from "react";

const EquipoSection = ({ data }) => {
  const [expanded, setExpanded] = useState({});

  const toggleDescription = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const { nombreCompleto, videoPresentacion, tituloPuesto, experiencia } = data;

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
