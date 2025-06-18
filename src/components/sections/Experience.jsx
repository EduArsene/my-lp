import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import portfolioImg from "../../assets/img/experience/Foto-check.jpeg";
import marImg from "../../assets/img/experience/mar.jpeg";
import sunatDentro from "../../assets/img/experience/Sunat-dentro.jpeg";
import sunatFuera from "../../assets/img/experience/sunat-fuera.jpeg";
import ogcaImg from "../../assets/img/experience/ogca.jpeg";
import { ImageItem } from "../Data/IconsSvg";
const experiences = [
  {
    role: "Practicante Pre Profesional",
    company: "SUNAT",
    period: "Abril 2024 – Diciembre 2024",
    description:
      "Desarrollé herramientas de foliación utilizando Python para unir y foliar documentos, Figma para el diseño y prototipado de interfaces, y SQL para la ejecución de consultas en bases de datos. Además, utilicé tablas dinámicas, fórmulas avanzadas y macros en Excel para el ordenamiento y para la presentación eficiente de datos.",
    technologies: ["Python", "Excel", "Visual Basic", "Figma", "SQL"],
    images: [portfolioImg, marImg, sunatDentro, sunatFuera, ogcaImg],
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experiencia"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20  text-white"
    >
      <motion.div className="w-full max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center md:text-left">
          Experiencia
        </h2>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 bg-indigo-950 border-4 border-blue-500/60 rounded-3xl p-6 md:p-10 shadow-lg mb-12"
          >
            {/* Textos a la izquierda */}
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold text-cyan-400">
                {exp.role}{" "}
                <span className="text-white font-light">@ {exp.company}</span>
              </h3>
              <p className="text-sm text-gray-300 italic">{exp.period}</p>
              <p className="text-sm text-gray-200">{exp.description}</p>
              <div>
                <h4 className="font-semibold text-sm mt-4 mb-2 text-blue-300">
                  Tecnologías utilizadas:
                </h4>

                <div className="grid grid-cols-2 md:grid-cols-7 gap-16 justify-items-center">
                  {ImageItem.map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
                    >
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className={`${tech.color} text-5xl drop-shadow-xs `}
                      />
                      <span className="text-white font-semibold">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/*<ul className="list-disc list-inside text-sm text-white space-y-1 pl-2">
                  {exp.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul> */}
              </div>
            </div>
            {/* Carrusel a la derecha */}
            <div className="md:w-2/4 flex flex-col gap-6 items-center justify-center">
              {/* Carrusel de imágenes */}
              <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={4000}
                transitionTime={600}
                className="rounded-lg overflow-hidden w-full"
              >
                {exp.images.map((image, i) => (
                  <div key={i}>
                    <img
                      src={image}
                      alt={`Imagen ${i + 1} de ${exp.company}`}
                      className="w-full h-80 object-cover rounded-xl border-2 border-slate-700"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Experience;
