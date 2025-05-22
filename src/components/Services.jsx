const Servicios = ({ dataService, serviciosEcuador = [], incluirEcuador = false }) => {
  const titulosUnicos = new Set();

  const todosLosServicios = incluirEcuador
    ? [...dataService.servicios, ...serviciosEcuador]
    : dataService.servicios;

  const serviciosFinales = todosLosServicios.filter(servicio => {
    if (titulosUnicos.has(servicio.titulo)) return false;
    titulosUnicos.add(servicio.titulo);
    return true;
  });

  return (
    <div className="bg-[#bfcbe8] flex flex-col py-12 px-5 mt-32" id="Servicios">
      <h2 className="text-center text-3xl font-semibold text-[#2F2E41] mb-6">
        {dataService.titulo}
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {serviciosFinales.map((servicio, i) => (
          <div
            key={i}
            className="group bg-white p-6 rounded-2xl shadow-md my-6 w-[350px] transform transition-all duration-300 hover:scale-105 active:scale-105 hover:shadow-xl active:shadow-xl"
          >
            <div className="flex justify-center mb-4 h-[150px] transition-transform duration-300 group-hover:scale-105 group-active:scale-105">
              <img src={servicio.imagen} alt={servicio.titulo} />
            </div>
            <h3 className="text-xl font-semibold text-center text-[#5382AD] mb-2 transition-all duration-300 group-hover:text-2xl group-active:text-2xl">
              {servicio.titulo}
            </h3>
            <p className="text-center text-[#2F2E41] transition-all duration-300 group-hover:text-base group-active:text-base">
              {servicio.descripcion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
