import { useState, useEffect } from "react";
import AnimatedImage from "./AnimatedImage";
import "../styles/equipo.css";

const EquipoSection = ({ data }) => {
  const [isDesktop, setIsDesktop] = useState(false); // Detecta si es escritorio
  const [expanded, setExpanded] = useState({});
  const MAX_CHARACTERS = 150; // Número de caracteres visibles por defecto
  const { nombreCompleto, videoPresentacion, tituloPuesto, experiencia, bannerImagen, sobreMi } = data || {};

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    handleResize();

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
      {/* Header Section */}
      <section className="text-center mb-12">
        <article>
          <div className="flex flex-col items-center justify-center mt-[18vh]">
            <h1 className="text-3xl mb-4 text-[#006e9f] lg:text-5xl">
              {nombreCompleto || "Nombre no disponible"}
            </h1>
          </div>
          {videoPresentacion ? (
            <video
              src={videoPresentacion}
              autoPlay
              poster={bannerImagen}
              controls
              className="max-w-[90%] h-auto shadow-md m-auto lg:max-w-[70%]"
            >
              Tu navegador no admite el elemento <code>video</code>.
            </video>
          ) : (
            <div className="flex justify-center">
              <img
                src={bannerImagen}
                className="rounded-full w-[300px] h-[300px]"
                loading="lazy"
                alt={nombreCompleto || "Imagen de usuario"}
              />
            </div>
          )}
          <h2 className="text-2xl text-[#555] mt-4 lg:text-4xl">{tituloPuesto || "Puesto no especificado"}</h2>
        </article>
      </section>

      {/* Acerca de Section */}
      <section className="acerca-de text-center mb-12 lg:m-4">
        <h2 className="text-3xl text-[#006e9f] mb-8 lg:text-5xl">Acerca de mí</h2>
        <p className="text-[#555] text-base px-4 lg:text-lg lg:px-12">
          {sobreMi || "No hay información disponible sobre este usuario."}
        </p>
      </section>

      {/* Proyectos Section */}
      <section className="proyectos text-center mb-12 lg:m-4">
        <h2 className="text-3xl text-[#495b63] mb-16 mt-24 lg:text-5xl">Trabajos/Proyectos</h2>
        <div className="flex flex-wrap justify-center items-start m-auto lg:justify-center lg:gap-[30px] ">
          {experiencia?.map((proyecto, index) => {
            const isExpanded = expanded[index] || isDesktop;
            const shouldShowButton =
              proyecto.descripcion.length > MAX_CHARACTERS && !isDesktop;
            return (
              <article
                className="flex flex-col items-center w-[450px] box-border text-center bg-[#ffffffe9] rounded-md shadow-md px-4 pt-2 pb-4 m-2 hover:shadow-lg hover:bg-[#f0f0f0f2]"
                style={{ transition: "background-color 0.3s ease, box-shadow 0.3s ease" }}
                key={index}
              >
                {proyecto.imagen ? (
                  <AnimatedImage src={proyecto.imagen} alt="Imagen de trabajo realizado" />
                ) : (
                  <video
                    src={proyecto.video}
                    controls
                    style={{ transform: "scale(1.08)" }}
                    className="rounded-t-lg mb-4 max-w-full h-[250px]"
                  >
                    Tu navegador no admite el elemento <code>video</code>.
                  </video>
                )}
                <h3 className="text-xl text-[#006e9f] mb-2">{proyecto.tituloOEmpresa}</h3>
                <p className="text-[#555] text-base mb-2">
                  {proyecto.inicio && (<><strong>Inicio:</strong> <>{proyecto.inicio}</><br /></> ) }
									{proyecto.final && (<><strong>Final:</strong> <>{proyecto.final}</></> ) }
                </p>
                <h4 className="font-semibold mb-4">{proyecto.puesto}</h4>
                <p className="lg:flex-grow lg:flex-shrink lg:basis-[46%] lg:overflow-visible lg:whitespace-normal lg:block">
                  {isExpanded
                    ? proyecto.descripcion
                    : `${proyecto.descripcion.substring(0, MAX_CHARACTERS)}${shouldShowButton ? "..." : ""}`}
                </p>
                <div className="cajaDeBotones">
                  {shouldShowButton && (
                    <button
                      className="bg-[#006e9f] text-white border-none px-4 py-2 rounded-md cursor-pointer text-base m-5 hover:bg-[#003080] hover:brightness-90 lg:hidden"
                      style={{ transition: "background-color 0.3s ease" }}
                      onClick={() => toggleDescription(index)}
                    >
                      {isExpanded ? "Ver menos" : "Ver más"}
                    </button>
                  )}
                  {proyecto.urlTrabajo && (
                    <button className="bg-[#006e9f] text-white border-none px-4 py-2 rounded-md cursor-pointer text-base m-5 hover:bg-[#003080]">
                      <a href={proyecto.urlTrabajo} target="_blank" rel="noopener noreferrer">
                        Ver Proyecto
                      </a>
                    </button>
                  )}
									{proyecto.linksVarios && (
                    <div className="flex flex-wrap justify-center my-6 gap-5" >
											{proyecto.linksVarios.map((link, i) => (
												<a href={link.url} className=" text-[#111] border-none px-4 py-2 rounded-xl cursor-pointer text-base shadow-md flex gap-3 h-[40px] transition-all hover:scale-105" key={i}>
													<img src={link.icono} alt="" className="w-[24px] h-[24px] " />
													<p className="text-[#006e9f] h-auto" >{link.nombre}</p>
                    		</a>
											))}
											
										</div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Footer Button */}
      <div className="text-center mt-8">
        <button
          className="bg-[#006e9f] text-white border-none px-4 py-2 rounded-md cursor-pointer text-base m-5"
          style={{ transition: "background-color 0.3s ease" }}
          onClick={() => (window.location.href = "/")}
        >
          Volver al Inicio
        </button>
      </div>
    </main>
  );
};

export default EquipoSection;
