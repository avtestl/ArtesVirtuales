import { useState } from 'react';

const Header = ({ dataHeader, dataNav }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	const itemsNavbar = dataNav.map(({nombrePagina, urlPagina, background, color, display}) => {
		if(display == 'none') return
		return <a 
			href={urlPagina} 
			key={nombrePagina} 
			className={'hover:underline text-lg flex items-center'}
			style={{
				backgroundColor: background,
				color: color,
				borderRadius: background ? '5px' : '',
				padding: background ? '5px 10px' : '',
			}}
			>
				{nombrePagina}
			</a>
	})

	return (
		<header className="fixed top-0 left-0 w-full bg-main shadow-md z-50 h-[85px]">
			<div className="flex justify-between items-center px-6 py-4">
				<a href='/' className="text-2xl font-bold flex items-center">
					<img src={dataHeader.imagenLogo} className='w-[105px] cursor-pointer' alt="Artes Virtuales" />
				</a>
				<button
					onClick={toggleNav}
					className="text-2xl focus:outline-none md:hidden"
				>
					&#9776;
				</button>
				<div className='hidden md:flex gap-10' >
					{itemsNavbar}
				</div>
			</div>

			{isNavOpen && (
				<nav
					onClick={toggleNav}
					className="fixed inset-0 bg-main flex flex-col items-center justify-center text-center space-y-8 text-lg"
				>
					<button

						className="absolute top-4 right-6 text-3xl focus:outline-none"
					>
						&times;
					</button>
					{itemsNavbar}
				</nav>
			)}
		</header>
	);
};

export default Header;
