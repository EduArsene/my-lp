import { useState, useEffect } from 'react';

const header = () => {
  

  return (
    <header className={`fixed top-0 left-0 w-full text-white shadow-md z-50 font-[Roboto] 
      bg-gradient-to-br from-slate-900 via-indigo-900 to-indigo-900 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl">Portafolio | Eduardo AMV</h1>
        <nav className="space-x-4">
          <a href="#Inicio" className="hover:text-purple-500 transition-colors ">Inicio</a>
          <a href="#sobre-mi" className="hover:text-purple-500 transition-colors ">Sobre mí</a>
          <a href="#proyectos" className="hover:text-purple-500 transition-colors ">Proyectos</a>
          <a href="#contactame" className="hover:text-purple-500 transition-colors ">Contactame</a>
        </nav>
      </div>
    </header>
  );
};

export default header;
