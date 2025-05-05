import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import imgFoliador from '../assets/img/prouecto-foliardoc.png';
import imgPrimerLp from '../assets/img/proyecto_primerolp.png';
import imgUnir from '../assets/img/proyecto-unirpdf.png';
import imgEcodar from '../assets/img/ecodar.png';
import imgPatente from '../assets/img/Proyecto-patente.png';
import BotonRedes from './Buttonn';

const AboutMeSection = () => {

  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    imgFoliador,
    imgPrimerLp,
    imgUnir,
    imgEcodar,
    imgPatente,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (


    <motion.section

      className="w-full flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 to-indigo-900 px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20"
      id="sobre-mi"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl mx-auto"
      >
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-center md:text-left">
          Sobre mí
        </h2>

        {/* Líneas decorativas */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="origin-left mb-10 flex space-x-2 justify-center md:justify-start"
        >
          <motion.ul initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 list-inside space-y-2  text-center md:text-left">
            <li><div className="h-2 bg-white w-[200px] rounded-full"></div></li>
            <li><div className="h-2 bg-white w-[350px] rounded-full"></div></li>
            <li><div className="h-2 bg-white w-[500px] rounded-full"></div></li>
          </motion.ul>
        </motion.div>

        {/* Contenido descriptivo */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-white">
          <motion.ul
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 list-disc list-inside space-y-4 text-center md:text-left"
          >
            <p>Estudiante de décimo ciclo de la carrea de Ingenieria de Sistemas Computacionales. Cuento con certificaciones en cisco donde obtuve
              conocimientos en Python, Redes, IoT, C++, etc. Además, certificacos de Desarrollador de Aplicaciones Tecnológicas y  Big Data Analyst otorgados por la UPN<br />

            </p>
          </motion.ul>

          <motion.ul
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 list-disc list-inside space-y-4 text-center md:text-left"
          >
            <li>Tengo como objetivo desarrollar aplicaciones de escritorio y páginas web deseables, apoyandome en las nuevas tecnologías</li>
            <li>Objetivo es ser un gran Ingeniero de Sistemas con capacitaciones internacionales</li>
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-purple-700/50 p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 w-full max-w-4xl mx-auto"
        >
          <div className="flex-1 text-white text-center md:text-left">
            {/*boton animado */}
            <h1 className='text-1xl sm:text-2xl md:text-1xl font-bold text-white mb-6 text-center md:text-left'>
              Conoce más sobre mí
            </h1>
            <BotonRedes />
          </div>
          <div className="w-full max-w-sm md:max-w-md rounded-xl shadow-lg overflow-hidden">
            <div className="relative w-full h-64">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Imagen ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"
                    }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>

  );
};

export default AboutMeSection;
