import _ from "react";

const Servicios = ({dataService}) => {
  return (
    <div className="bg-[#E3E4E8] flex flex-col py-12 px-5 mt-32">
        <h2 className="text-center text-3xl font-semibold text-[#2F2E41] mb-6">
          {dataService.titulo}
        </h2>
        {dataService.servicios && dataService.servicios.map(servicio => (
            <div className="bg-white p-6 rounded-2xl shadow-md my-6">
                <div className="flex justify-center mb-4">
                    <img src={servicio.imagen} alt={servicio.titulo} />
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
  );
};

export default Servicios;
