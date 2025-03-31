
export default function Representante({dataRepresentative}) {
  return (
    <div 
			className={`flex flex-col justify-center items-center my-10 py-10 relative bg-cover bg-[url(/wallpaperRepresentant.png)] md:bg-[url(/wallpaperRepresentantDesk.jpg)]`} 
			
		>
			<div className="bg-black absolute w-full h-full z-1 opacity-60"></div>
			<div className="z-10 mb-10">
				<h2 className="text-3xl font-semibold text-center text-white mb-6 mt-12" dangerouslySetInnerHTML={{__html: dataRepresentative.titulo}} ></h2>
				<div className="grid md:grid-cols-1  gap-12 items-center px-6 md:px-10 mt-10" >
					<div className="" >
						<h3 className="text-lg font-semibold text-center text-white md:text-xl lg:text-2xl">{dataRepresentative.nombre}</h3>
						<p className="mt-2 text-white text-sm text-center md:text-lg ">
							{dataRepresentative.descripcion}
						</p>
						<div className="flex justify-center">
							<a href={dataRepresentative.linkedin} target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mt-4">
								Sitio Web
							</a>
						</div>
					</div>
				</div>
			</div>
    </div>
  );
}
