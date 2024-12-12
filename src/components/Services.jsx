const Servicios = ({dataService}) => {
  return (
    <div className="bg-[#E3E4E8] flex flex-col py-12 px-5 mt-32" id="servicios">
        <h2 className="text-center text-3xl font-semibold text-[#2F2E41] mb-6">
          {dataService.titulo}
        </h2>
        <div className="flex flex-wrap justify-center gap-10" >
        {dataService.servicios && dataService.servicios.map((servicio, i) => (
            <div className="bg-white p-6 rounded-2xl shadow-md my-6 w-[350px]" key={i}>
              <div className="flex justify-center mb-4 h-[150px]">
                <img src={servicio.imagen} alt={servicio.titulo} width={300} height={150} loading="lazy" />
              </div>
              <h3 className="text-xl font-bold text-center text-[#5382AD] mb-2">
                {servicio.titulo}
              </h3>
              <p className="text-center text-[#2F2E41]">
                {servicio.descripcion}
              </p>
            </div>   
          ))}
        </div>
      </div>
  );
};

export default Servicios;
