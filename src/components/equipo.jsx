import { useState } from "react";

const EquipoSection = ({ data }) => {
  const [expanded, setExpanded] = useState({});

  const toggleDescription = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const { nombreCompleto, videoPresentacion, tituloPuesto, experiencia, bannerImagen } = data;

  return (

    <main>
      <section className="text-center mb-12 mt-32">
        <article className="lg:px-32" >
          <h1 className="text-3xl mb-4 text-[#004aad]" >{nombreCompleto}</h1>
          {videoPresentacion ? 
            <video
              src={videoPresentacion}
              className="max-w-full h-auto my-4 border-solid border-2 border-[#ccc] "
              poster=""
              controls
            >
              Tu navegador no admite el elemento <code>video</code>.
            </video>
            :
            <div className="flex justify-center" >
              <img src={bannerImagen}  width={250} />
            </div>
          }
          <h2 className="text-2xl text-[#555] mt-4" >{tituloPuesto}</h2>
        </article>
      </section>

      <section className="text-center mb-12">
        <h2 className=" text-3xl color-[#004aad] mb-16" >Trabajos/Proyectos</h2>
        <div className="flex flex-col items-center w-full gap-16 p-10 md:gap-32 lg:px-32" >
          {experiencia.map((proyecto, index) => (
            <article className="flex flex-col justify-center items-center text-center min-w-[300px] md:flex-row md:gap-12"  key={index}>
              <div>
                <h3 className="text-lg mb-4 text-[#004aad] font-semibold md:text-xl" >{proyecto.tituloOEmpresa}</h3>
                {proyecto.imagen ?
                  <img 
                    src={proyecto.imagen} 
                    alt="imagen de trabajo realizado" 
                    className="max-w-full aspect-auto rounded-sm shadow-sm mb-4 md:aspect-[12/8]"
                  />
                  :
                  <video  
                    src={videoPresentacion}
                    className="my-4 border-solid border-2 border-[#ccc]"
                    poster=""
                    controls
                  />
                }
              </div>
              
              <div className="flex flex-col items-center" >
                <div 
                  className={`text-lg color-[#555] mb-4 overflow-hidden transition-all duration-500 ${
                    expanded[index] ? "max-h-fit opacity-100" : "h-0 opacity-0"
                  }`}
                >
                  <p>
                    {proyecto.descripcion}
                    {expanded[index] && (
                      <span className="hidden-text">{proyecto.puesto}</span>
                    )}
                  </p>
                </div>
                <button
                  className="
                    bg-[#007bff] 
                      text-white 
                      border-none 
                      py-[10px] 
                      px-[15px] 
                      cursor-pointer 
                      mt-[10px] 
                      rounded-md
                      transition-all
                      hover:bg-[#0056b3]
                      w-[150px]
                    " 
                  onClick={() => toggleDescription(index)}
                >
                  {expanded[index] ? "Ver menos" : "Ver mas"}
                </button>
                {proyecto.urlTrabajo && 
                  <button className="mt-6" >
                    <a
                      href={proyecto.urlTrabajo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#004aad] text-white border-none py-2 px-4 cursor-pointer text-base rounded-md"
                    >
                      Ver Proyecto
                    </a>
                  </button>
                }
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default EquipoSection;
