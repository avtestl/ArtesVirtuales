

const Footer = ({redesSociales, dataNav}) => {
    return (
        <footer className="bg-black text-white py-8 px-6">
            <div className="text-center">
                <h3 className="text-lg font-medium mb-6">Mapa del sitio</h3>
                <div className="flex justify-center flex-wrap font-light gap-5">
                    {dataNav.map(({nombrePagina, urlPagina}, i) => (
                        <div>
                            <a href={urlPagina} className=" font-normal mr-5 hover:underline">
                                {nombrePagina}
                            </a>
                            {(i + 1) < dataNav.length && <span>|</span> }
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 text-center">
                <h4 className="text-md font-medium mb-4">Síguenos</h4>
                <div className="flex justify-center space-x-6 text-xl">
                <a href={redesSociales.linkedIn} className="hover:text-gray-400">
                  <img src="/linkedin.svg" alt="LinkedIn" width={30} height={30} />
                </a>
                <a href={redesSociales.email} className="hover:text-gray-400">
                  <img src="/gmail.svg" alt="email" width={30} height={30} />
                </a>
                <a href={redesSociales.whatsapp} className="text-green-500 hover:text-green-400">
                  <img src="/whatsapp.svg" alt="email" width={30} height={30} />
                </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
