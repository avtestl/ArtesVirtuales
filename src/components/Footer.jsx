import _ from "react";

const navbarItems = [
  "Servicios",
  "Inicio",
  "Nosotros",
  "Elegirnos",
  "Contacto",
  "Testimonios",
];

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 px-6 mt-32">
            <div className="text-center">
                <h3 className="text-lg font-medium mb-6">Mapa del sitio</h3>
                <div className="flex justify-center flex-wrap font-light gap-5">
                    {navbarItems.map((item, i) => (
                        <div>
                            <a href={ '#' + item } className=" font-normal mr-5 hover:underline">
                                {item}
                            </a>
                            {(i + 1) < navbarItems.length && <span>|</span> }
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 text-center">
                <h4 className="text-md font-medium mb-4">Síguenos</h4>
                <div className="flex justify-center space-x-6 text-xl">
                <a href="#instagram" className="hover:text-gray-400">
                📷
                </a>
                <a href="#facebook" className="hover:text-gray-400">
                📘
                </a>
                <a href="#whatsapp" className="text-green-500 hover:text-green-400">
                📱
                </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
