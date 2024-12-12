import { useEffect, useState } from "react";

const Team = ({ dataTeam }) => {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(dataTeam.equipo.length / 2));
  const [windowWidth, setWindowWidth] = useState(0);
  const [animationDuration, setAnimationDuration] = useState(500);



  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }
  const handleProfileClick = (index) => {
    const baseDuration = 500 
    const extraDuration = 40
    setAnimationDuration(baseDuration + extraDuration * index) 
    setCurrentIndex(index)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])



  return (
    <div className="flex flex-col items-center bg-gray-50 py-8 mt-32" id="equipo">
      <h2 className="text-3xl mb-10" >{dataTeam.titulo}</h2>
      {/* Título */}
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        {dataTeam.equipo[currentIndex].tituloPuesto}
      </h3>

      {/* Carrusel principal */}
      <div className="relative w-full max-w-full scrollbar-hide overflow-x-hidden">
        <div 
          style={{
            transform:`translateX(${(windowWidth / 2) - 190}px)`,
          }}
          className="flex items-center space-x-4 justify-start h-[200px]"
        >
          {dataTeam.equipo.map((profile, index) => (
            <div
              key={index}
              className={`flex flex-shrink-0 ${index == currentIndex ? 'w-[200px]' : 'w-[60px]'} justify-center transition-all`}
              style={{ 
                transitionDuration: animationDuration + 'ms'
              }}
            >
              <img
                src={profile.imagenPersona}
                alt={profile.nombreCompleto}
                onClick={() => handleProfileClick(index)}
                width={index === currentIndex  ? 200 : 60}
                height={index === currentIndex  ? 200 : 60}
                className={`rounded-full border-4 border-white shadow-lg object-cover cursor-pointer transition-all ${
                  index === currentIndex ? "w-[200px]" : "w-[60px]"
                }`}
                style={{
                  transform:
                    currentIndex === index
                      ? `translateX(${40 - (currentIndex * 40) + index*2}%)`
                      : `translateX(${130 - (currentIndex * 120) - index*6}%)`,
                  transitionDuration: animationDuration + 'ms'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Nombre */}
      <p className="mt-4 text-lg font-medium">
        {dataTeam.equipo[currentIndex].nombreCompleto}
      </p>
      <a href={dataTeam.equipo[currentIndex].portfolio || `/equipo/${dataTeam.equipo[currentIndex].nombreUrl}`} className="text-[#316D9F] underline" >Ver mas</a>
      {/* Navegación con miniaturas */}
      <div className="flex justify-center flex-wrap gap-4 mt-6">
        {dataTeam.equipo.map((profile, index) => (
          <img
            key={index}
            src={profile.imagenPersona}
            alt={profile.nombreCompleto}
            onClick={() => handleProfileClick(index)}
            width={48} height={48}
            className={`w-12 h-12 rounded-full cursor-pointer border-2 border-gray-300 shadow-md transition-all duration-500 ${
              index === currentIndex
                ? "opacity-50 cursor-default"
                : "hover:scale-110"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
