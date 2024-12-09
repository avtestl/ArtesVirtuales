import _, { useState } from 'react';

const Header = ({dataHeader}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-main shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold flex items-center">
          <img src={dataHeader.imagenLogo} alt="" />
        </div>
        <button
          onClick={toggleNav}
          className="text-2xl focus:outline-none"
        >
          &#9776;
        </button>
      </div>

      {isNavOpen && (
        <nav
          className="fixed inset-0 bg-main flex flex-col items-center justify-center text-center space-y-8 text-lg"
        >
          <button
            onClick={toggleNav}
            className="absolute top-4 right-6 text-2xl focus:outline-none"
          >
            &times;
          </button>
          <a href="#inicio" className="hover:underline">Inicio</a>
          <a href="#servicios" className="hover:underline">Servicios</a>
          <a href="#contacto" className="hover:underline">Contacto</a>
          <a href="#elegirnos" className="hover:underline">Elegirnos</a>
          <div className="flex space-x-4">
            <a href="#instagram" className="text-xl">📷</a>
            <a href="#facebook" className="text-xl">📘</a>
            <a href="#whatsapp" className="text-xl text-green-600">📱</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
