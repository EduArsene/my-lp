import { motion, useScroll, useTransform } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import yo from './assets/img/yo.png';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div className="font-sans text-slate-800">
      <header className="fixed top-0 left-0 w-full text-white shadow-md z-50 font-[Roboto]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl ">Portafolio  |  Eduardo MV</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:text-purple-500 transition-colors">Inicio</a>
            <a href="#" className="hover:text-purple-500 transition-colors">Sobre mí</a>
            <a href="#" className="hover:text-purple-500 transition-colors">Proyectos</a>
            <a href="#" className="hover:text-purple-500 transition-colors">Habilidades</a>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" justify-center items-center min-h-screen w-full flex flex-col bg-gradient-to-br from-indigo-900 via-purple-800 to-slate-900 px-6 text-center"
      >

        <div className="relative bg-purple-500/50 rounded-xl p-6 md:p-24 max-w-6xl w-full dark:bg-white-800 mx-auto mt-10 z-40 flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">

          {/* Columna izquierda */}
          <div className="flex-1 flex flex-col space-y-6 text-left">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-[Roboto] text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md animate-pulse duration-300 ease-in"
            >
              ¡Hola! Soy Eduardo
            </motion.h3>

            <div className="max-w-md text-left">
              <p className="text-base md:text-xl text-purple-200">
                Estudiante de Ingeniería de Sistemas apasionado por la tecnología, el diseño limpio y la experiencia del usuario. Aquí te muestro lo que uso para construir sitios web modernos.
              </p>
            </div>
          </div>

          {/* Tarjeta azul RESPONSIVA */}
          <div className="bg-indigo-800 rounded-3xl p-6 md:p-8 text-white shadow-xl z-50 
                w-full md:w-[350px] h-auto md:h-[500px] 
                static md:absolute md:-top-16 md:right-8 justify-center items-center">
            <div className="relative w-auto h-60 mb-4 rounded-3xl overflow-hidden">
              <img
                src={yo}
                alt="mi foto"
                className=" w-auto h-[420px] object-cover rounded-3xl"
              />
              {/* Capa de degradado inferior */}
              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-indigo-800 to-transparent" />
            </div>
            <p className="text-sm leading-relaxed">
              asdasdasd Lorem<br />
              asdsadasd add sd asdada<br />
              asdasdasd as ds sdads ad sa<br />
              dasdsasdasdaasd
            </p>
          </div>

        </div>
        {/* CUADROS DECORATIVOS EN POSICIONES LIBRES */}

        <div className=" top-10 left-10 z-10">
          <div className="bg-white rounded-2xl w-32 h-10 sm:rounded-2xl transition-all duration-500 hover:scale-110 shadow-xl" />
        </div>


      </motion.section>

      {/* Tech Tools Section */}
      <motion.section
        style={{ scale }}
        className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 to-indigo-900 px-6 py-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-white mb-12 drop-shadow-sm"
        >
          Herramientas que utilizo
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 justify-items-center">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="flex flex-col items-center transition-transform duration-300"
          >
            <FaHtml5 className="text-orange-500 text-6xl mb-2 drop-shadow-sm" />
            <span className="text-white font-semibold">HTML5</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            className="flex flex-col items-center transition-transform duration-300"
          >
            <FaCss3Alt className="text-blue-400 text-6xl mb-2 drop-shadow-sm" />
            <span className="text-white font-semibold">CSS3</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            className="flex flex-col items-center transition-transform duration-300"
          >
            <FaJs className="text-yellow-300 text-6xl mb-2 drop-shadow-sm" />
            <span className="text-white font-semibold">JavaScript</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            className="flex flex-col items-center transition-transform duration-300"
          >
            <FaReact className="text-cyan-400 text-6xl mb-2 drop-shadow-sm" />
            <span className="text-white font-semibold">React</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            className="flex flex-col items-center transition-transform duration-300"
          >
            <FaNodeJs className="text-green-400 text-6xl mb-2 drop-shadow-sm" />
            <span className="text-white font-semibold">Node.js</span>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
