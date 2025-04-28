import { useState, useEffect } from 'react';

const header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full text-white shadow-md z-50 font-[Roboto] 
      transition-opacity duration-300 ${isHeaderVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl">Portafolio | Eduardo MV</h1>
        <nav className="space-x-4">
          <a href="#Inicio" className="hover:text-purple-500 transition-colors">Inicio</a>
          <a href="#sobre-mi" className="hover:text-purple-500 transition-colors">Sobre mí</a>
          <a href="#proyectos" className="hover:text-purple-500 transition-colors">Proyectos</a>
          <a href="#habilidades" className="hover:text-purple-500 transition-colors">Habilidades</a>
        </nav>
      </div>
    </header>
  );
};

export default header;
