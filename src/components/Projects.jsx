import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaBootstrap,
  FaCode,FaReact,
} from "react-icons/fa";
import {
  SiFirebase,
  SiArduino,SiTailwindcss ,
} from "react-icons/si";

// Mapa con íconos existentes
const toolIcons = {
  HTML: <FaHtml5 className="text-orange-600" title="HTML" />,
  CSS: <FaCss3Alt className="text-blue-600" title="CSS" />,
  JS: <FaJs className="text-yellow-400" title="JavaScript" />,
  Python: <FaPython className="text-blue-500" title="Python" />,
  Bootstrap: <FaBootstrap className="text-purple-700" title="Bootstrap" />,
  Firebase: <SiFirebase className="text-yellow-500" title="Firebase" />,
  Arduino: <SiArduino className="text-blue-700" title="Arduino" />,
  Electrónica: <SiArduino className="text-green-600" title="Electrónica" />,
  Sensores: <SiArduino className="text-teal-600" title="Sensores" />,
  Tailwind: <SiTailwindcss className="text-teal-400" />,
  React: <FaReact className="text-cyan-400 " />
  
};

const projects = [
  {
    title: "Ecodar",
    description:
      "Inventario de ventas para microempresas. Simple y funcional usando Firebase.",
    tools: "HTML, CSS, JS, Bootstrap, Firebase",
    github: "https://luisestela.github.io/",
  },
  {
    title: "Primer Landing Page",
    description:
      "Landing page para proyecto universitario, pensada en ser utilizada como entrada a Ecodar.",
    tools: "HTML, CSS, JS",
    github: "https://eduarsene.github.io/LandingPage/",
  },
  {
    title: "Foliador de Documentos",
    description:
      "Foliar PDFs con números y nombres, incluye conversión DOCX a PDF. Utilizando librerias  Tkinter, PyPDF2, docx2pdf, etc.",
    tools: "Python",
    github: "https://github.com/EduArsene/Foliar_documentos",
  },
  {
    title: "Unir PDF",
    description:
      "Une múltiples archivos PDF en uno solo rápidamente con un diseño simple con Tkinter. Tkinter, PyPDF2, etc.",
    tools: "Python",
    github: "https://github.com/EduArsene/Unir_PDFs",
  },
  {
    title: "Patente Wall-der",
    description:
      "Robot para parques que detecta gas y roedores. Proyecto con Arduino.",
    tools: "Arduino, Electrónica, Sensores",
    github:
      "https://www.upn.edu.pe/investigacion/dispositivo-electronico-autonomo-para-el-monitoreo-ambiental-y-prevencion-de-plagas-y",
  },
  {
    title: "MI portafolio web",
    description:
      "Página diseñada para presentarme y que conozcan mas de mí y mis redes. Utilizando Framer-Motion para animaciones suaves",
    tools: "Tailwind, React",
    github:
      "#",
  },
];

export default function Projects() {
  return (
    <section id="proyectos"
    className="py-16 min-h-screen flex flex-col items-center ">
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
            transition={{ delay: index * 0.01, duration: 0.4 }}
            className="shadow-md rounded-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300 
                      border-2 border-blue-500/60 bg-slate-700/50 fill-white drop-shadow-xl/50 "
          >
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
