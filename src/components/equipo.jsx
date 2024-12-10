import React, { useEffect, useState } from 'react';
import './EquipoSection.css';

const EquipoSection = () => {
  const [data, setData] = useState(null);
  const [expanded, setExpanded] = useState({});


  const toggleDescription = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  if (!data) {
    return <p>Cargando datos...</p>;
  }

  const { presentacion, proyectos } = data;

  return (
    <main className="equipo-section">
      <section className="presentacion-equipo">
        <article>
          <h1>Presentación</h1>
          <h1>{presentacion.nombre}</h1>
          <video
            src={presentacion.video}
            autoPlay
            poster={presentacion.poster}
            controls
          >
            Tu navegador no admite el elemento <code>video</code>.
          </video>
          <h2>{presentacion.rol}</h2>
        </article>
      </section>

      <section className="proyectos">
        <h2>Trabajos/Proyectos</h2>
        {proyectos.map((proyecto, index) => (
          <article key={index}>
            <img src={proyecto.imagen} alt="imagen de trabajo realizado" />
            <h3>{proyecto.titulo}</h3>
            <p
              className={`project-description ${
                expanded[index] ? 'expanded' : ''
              }`}
            >
              {proyecto.descripcion}
              {expanded[index] && (
                <span className="hidden-text">{proyecto.textoOculto}</span>
              )}
            </p>
            <button className="toggle-btn" onClick={() => toggleDescription(index)}>
              {expanded[index] ? 'Ver menos' : 'Ver más'}
            </button>
            <button>
              <a
                href={proyecto.enlace}
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
