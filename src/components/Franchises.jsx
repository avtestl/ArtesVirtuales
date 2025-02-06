

export default function Franquicias({dataFranchises}) {
  return (
    <div className="p-6 max-w-lg mx-auto text-center">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6 mt-12">{dataFranchises.titulo}</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {dataFranchises.franquicias.map((country) => (
          <a
            key={country.codigo}
            href={country.link}
            className="block p-1 border rounded-lg shadow hover:shadow-md transition"
						target="_blank"
          >
            <img
              src={`https://flagcdn.com/w80/${country.codigo.toLowerCase()}.png`}
              alt={country.nombre}
              className="w-full h-auto rounded"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
