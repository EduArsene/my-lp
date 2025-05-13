import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaLeaf, FaBootstrap } from "react-icons/fa";

const AboutMeSection = () => {
  return (


    <motion.section
      className="min-h-screen w-full flex flex-col justify-center items-center  px-6 py-20"
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
        <h3 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-6 text-center md:text-left">
          Sobre mí
        </h3>

        {/* Líneas decorativas */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="origin-left mb-8 flex space-x-2 justify-center md:justify-start"
        >
          <motion.ul initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 list-inside space-y-1  text-center md:text-left">
            <li><div className="h-1 bg-white w-[500px] rounded-full"></div></li>
          </motion.ul>
        </motion.div>

        {/* Contenido descriptivo */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-16 text-white">
          <motion.ul
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 list-disc list-inside space-y-2 text-center md:text-left bg-indigo-950 p-5 border-4 border-blue-500/60 rounded-3xl"
          >
            <span className='font-mono font-bold'>¿Quién soy?</span>
            <div className="h-1 bg-white w-[325px] rounded-full"></div>
            <p className='text-sm'>
              Estudiante de décimo ciclo de la carrea de Ingenieria de Sistemas Computacionales. con una gran pasión
              por la tecnología y todo lo relacionado con la creación de soluciones digitales. Me encanta aprender
              nuevas herramientas y lenguajes de programación, siempre buscando formas de hacer las cosas de manera
              más eficiente
            </p>
          </motion.ul>
          <motion.ul
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex-1 list-disc list-inside space-y-2 text-center md:text-left bg-indigo-950 p-5 border-4 border-blue-500/60 rounded-3xl"
          >
            <span className='font-mono font-bold'>¿Cuáles son mis objetivos?</span>
            <div className="h-1 bg-white w-[325px] rounded-full"></div>
            <p className='text-sm'>
              Mi objetivo es seguir creciendo como profesional, aprendiendo constantemente sobre nuevas tecnologías
              y tendencias del sector. Me interesa mucho todo lo relacionado con desarrollo web, programación y
              optimización de procesos. Busco trabajar en proyectos interesantes donde pueda aportar ideas y soluciones,
              y seguir desarrollándome
            </p>
          </motion.ul>

          <motion.ul
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 list-disc list-inside space-y-4 text-center md:text-left bg-indigo-950 p-5 border-4 border-blue-500/60 rounded-3xl"
          >
            <span className='font-mono font-bold'>Mis características</span>
            <div className="h-1 bg-white w-[325px] rounded-full"></div>
            <p className='text-sm'>Me considero una persona curiosa, con una gran capacidad para aprender y enseñar. Soy
              organizado y me gusta investigar sobre nuevas tecnologías, pero también soy flexible y me adapto
              con facilidad a nuevos entornos. Disfruto de los desafíos y, sobre todo, de trabajar en equipo
              para encontrar soluciones. </p>
          </motion.ul>
        </div>
        {/*Iconos de las herramientas que uti*/}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 bg-slate-700/50 p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 w-full max-w-4xl mx-auto"
        >
          <div className="flex-1 text-white text-center md:text-left">
            <h2 className="text-2xl font-mono font-bold text-center text-white mb-4 drop-shadow-sm">
              Habilidades Técnicas
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-9 gap-10 justify-items-center">
              {/* HTML5 */}
              <div className="flex flex-col items-center transition-transform duration-300">
                <FaHtml5 className="text-orange-500 text-5xl  drop-shadow-sm" />
                <span className="text-white font-semibold">HTML5</span>
              </div>

              {/* CSS3 */}
              <div className="flex flex-col items-center transition-transform duration-300">
                <FaCss3Alt className="text-blue-400 text-5xl  drop-shadow-sm" />
                <span className="text-white font-semibold">CSS3</span>
              </div>

              {/* JavaScript */}
              <div className="flex flex-col items-center transition-transform duration-300">
                <FaJs className="text-yellow-300 text-5xl drop-shadow-sm" />
                <span className="text-white font-semibold">JavaScript</span>
              </div>

              {/* React */}
              <div className="flex flex-col items-center transition-transform duration-300">
                <FaReact className="text-cyan-400 text-5xl drop-shadow-sm" />
                <span className="text-white font-semibold">React</span>
              </div>

              {/* Node.js */}
              <div className="flex flex-col items-center transition-transform duration-300">
                <FaNodeJs className="text-green-400 text-5xl drop-shadow-sm" />
                <span className="text-white font-semibold">Node.js</span>
              </div>
              {/* Python */}
              <div className="flex flex-col items-center transition-transform duration-400">
                <FaPython className="text-[#306998] text-5xl drop-shadow-sm" />
                <span className="text-white font-semibold">Python</span>
              </div>
              {/* Java*/}
              <div className="flex flex-col items-center transition-transform duration-300">
                <FaJava className="text-[#5382A1] text-5xl drop-shadow-sm" />
                <span className="text-white font-semibold">Java</span>
              </div>
              <div className="flex flex-col items-center transition-transform duration-300">
                <FaLeaf className="text-[#6DB33F] text-5xl mx-32 drop-shadow-sm" />
                <span className="text-white font-semibold">Spring Boot</span>
              </div>
              <div className="flex flex-col items-center transition-transform duration-300">
                <FaBootstrap className="text-[#b82bbd] text-5xl drop-shadow-sm" />
                <span className="text-white font-semibold">Bootstrap</span>
              </div>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </motion.section>

  );
};

export default AboutMeSection;
