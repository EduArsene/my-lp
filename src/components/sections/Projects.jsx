import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaBootstrap,
  FaCode,
  FaReact,
} from "react-icons/fa";
import { SiFirebase, SiArduino, SiTailwindcss } from "react-icons/si";
import projects from "../Data/DataProjects";
// Mapa con íconos existentes
const toolIcons = {
  HTML: <FaHtml5 className="text-orange-600" title="HTML" />,
  CSS: <FaCss3Alt className="text-blue-600" title="CSS" />,
  JS: <FaJs className="text-yellow-400" title="JavaScript" />,
  Python: <FaPython className="text-blue-500" title="Python" />,
  Bootstrap: <FaBootstrap className="text-purple-700" title="Bootstrap" />,
  Firebase: <SiFirebase className="text-yellow-500" title="Firebase" />,
  Arduino: <SiArduino className="text-blue-700" title="Arduino" />,
  Sensores: <SiArduino className="text-teal-600" title="Sensores" />,
  Electrónica: <SiArduino className="text-green-600" title="Electrónica" />,
  React: <FaReact className="text-cyan-400 " />,
  Tailwind: <SiTailwindcss className="text-teal-400" />,
};



export default function Projects() {
  return (
    <section
      id="proyectos"
      className="py-16 min-h-screen flex flex-col items-center "
    >
      <h2 className="text-4xl font-mono font-bold mb-10 text-center text-white  ">
        Proyectos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.2 }}
            className="shadow-md rounded-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300 
                      border-2 border-blue-500/60 bg-slate-700/50 fill-white drop-shadow-xl/50 "
          >
            <div className="mb-4 rounded-lg overflow-hidden w-full">

              <img
                src={project.img}
                alt={project.title}
                className="w-full h-[200px] object-cover rounded-lg "
              />
            </div>
            <h4 className="text-xl  mb-2 text-gray-100 font-bold font-mono">
              {project.title}
            </h4>
            <p className="text-gray-400 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-3 justify-start">
              {project.tools.split(", ").map((tool, idx) => (
                <div key={idx} className="text-2xl" title={tool}>
                  {toolIcons[tool] || (
                    <FaCode className="text-gray-500" title={tool} />
                  )}
                </div>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
