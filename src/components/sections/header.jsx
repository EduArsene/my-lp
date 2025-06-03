import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className="fixed top-0 left-0 w-full shadow-md z-50 font-[Roboto] 
      bg-linear-to-br from-slate-900 via-indigo-900 to-indigo-900 transition-colors duration-300  "
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center text-white">
        <h1 className="text-xl max-md:text-[30px]">Portafolio | Eduardo AMV</h1>

        <nav className="space-x-12 gap-16 max-md:hidden">
          <a
            href="#Inicio"
            className="hover:text-purple-500 transition-colors p-3"
          >
            Inicio
          </a>
          <a
            href="#sobre-mi"
            className="hover:text-purple-500 transition-colors p-3"
          >
            Sobre mí
          </a>
          <a
            href="#proyectos"
            className="hover:text-purple-500 transition-colors p-3"
          >
            Proyectos
          </a>
          <a
            href="#contactame"
            className="hover:text-purple-500 transition-colors p-3"
          >
            Contactame
          </a>
        </nav>
      </div>

      <div className="flex items-center space-x-4 md:hidden absolute right-6 top-6">
        <button onClick={toggleMenu} className="text-white">
          {/* Animación de la hamburguesa */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: menuOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white my-1"
          />
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white my-1"
          />
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: menuOpen ? -45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white my-1"
          />
        </button>
      </div>

      <motion.div
        className={`md:hidden absolute top-0 right-0 bg-gradient-to-br from-slate-900 via-indigo-900
           to-indigo-900 w-60 h-80 flex flex-col items-center justify-center space-y-6 border-slate-900 
           rounded-b-2xl drop-shadow-xl/100 opacity-100  ${
             menuOpen ? "block" : "hidden"
           }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center space-x-4 md:hidden absolute right-6 top-6">
          <button onClick={toggleMenu} className="text-white">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: menuOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-white my-1"
            />
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-white my-1"
            />
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: menuOpen ? -45 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-white my-1"
            />
          </button>
        </div>
        <a
          href="#Inicio"
          className="text-white text-2xl hover:text-purple-500 "
          onClick={() => setMenuOpen(false)}
        >
          Inicio
        </a>
        <a
          href="#sobre-mi"
          className="text-white text-2xl hover:text-purple-500"
          onClick={() => setMenuOpen(false)}
        >
          Sobre mí
        </a>
        <a
          href="#proyectos"
          className="text-white text-2xl hover:text-purple-500"
          onClick={() => setMenuOpen(false)}
        >
          Proyectos
        </a>
        <a
          href="#contactame"
          className="text-white text-2xl hover:text-purple-500"
          onClick={() => setMenuOpen(false)}
        >
          Contactame
        </a>
      </motion.div>
    </header>
  );
};

export default header;
