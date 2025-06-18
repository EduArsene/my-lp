import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Inicio", "Sobre mi","Experiencia", "Proyectos", "Contactame"];
      sections.forEach((section) => {
        const element = document.getElementById(section.replace(/\s+/g, "-").toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 50 && rect.bottom >= 50) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full shadow-md z-50 font-[Roboto]
      bg-gradient-to-br from-slate-950 via-indigo-950 to-indigo-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center text-white">
        <h1 className="text-xl max-md:text-[20px]"><a href="#">Portafolio | Eduardo AMV</a></h1>

        {/* Menu de navegacion */}
        <nav className="space-x-12 gap-16 max-md:hidden">
          {["Inicio", "Sobre mi", "Experiencia","Proyectos", "Contactame"].map((section) => (
            <a
              key={section}
              href={`#${section.replace(/\s+/g, "-").toLowerCase()}`}
              onClick={() => setActiveSection(section)}
              className={`relative p-3 transition-colors ${
                activeSection === section
                  ? "text-purple-500 font-bold border-purple-500 rounded-b-2xl after:content-[''] after:absolute after:inset-2.5 after:border-[2px] after:border-purple-500 after:rounded-full after:animate-ping "
                  : "hover:text-purple-500"
              }`}
            >
              {section}
            </a>
          ))}
        </nav>
      </div>

      {/* Animacion de la hamburguesa */}
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
      <motion.div
        className={`md:hidden absolute top-0 right-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-indigo-900 w-60 h-80 flex flex-col items-center justify-center space-y-6 border-slate-900 rounded-b-2xl drop-shadow-xl/100 opacity-100 ${
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
          href="#inicio"
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
          href="#experiencia"
          className="text-white text-2xl hover:text-purple-500"
          onClick={() => setMenuOpen(false)}
        >
          Experiencia
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

export default Header;
