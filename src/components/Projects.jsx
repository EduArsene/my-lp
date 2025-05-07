import { useRef } from "react";

const projects = [
  {
    title: "Ecodar",
    description:
      "Inventario de ventas para microempresas. Simple y funcional usando Firebase.",
    tools: "HTML, CSS, JS, Bootstrap, Firebase",
    github: "https://github.com/tu-usuario/ecodar",
  },
  {
    title: "Primer Landing Page",
    description:
      "Landing page para proyecto universitario, pensada en ser utilizada como entrada a Ecodar.",
    tools: "HTML, CSS, JS",
    github: "https://github.com/tu-usuario/landingpage",
  },
  {
    title: "Foliador de Documentos",
    description:
      "Foliar PDFs con números y nombres, incluye conversión DOCX a PDF.",
    tools: "Python, Tkinter, PyPDF2, docx2pdf",
    github: "https://github.com/tu-usuario/foliador",
  },
  {
    title: "Unir PDF",
    description: "Une múltiples archivos PDF en uno solo rápidamente con un diseño simple con Tkinter.",
    tools: "Python, PyPDF2, Tkinter",
    github: "https://github.com/tu-usuario/unirpdf",
  },
  {
    title: "Patente Wall-der",
    description:
      "Robot para parques que detecta gas y roedores. Proyecto con Arduino.",
    tools: "Arduino, Electrónica, Sensores",
    github: "https://github.com/tu-usuario/wall-der",
  },
];

export default function Projects() {
  const carouselRef = useRef();

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section id="proyectos"
      className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-center md:text-left">
        Proyectos
      </h2>

      <div className="relative w-full max-w-7xl">
        {/* Degradados laterales */}
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-slate-800 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-slate-800 to-transparent z-10 pointer-events-none" />

        {/* Botón izquierdo */}
        <button
          onClick={scrollLeft}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-20 hover:bg-gray-100 transition duration-300"
        >
          ◀
        </button>

        {/* Carrusel */}

        <div
          ref={carouselRef}
          className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory space-x-6 px-8 py-6 scrollbar-hide"
        >
          {projects.map((project, index) => (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-950 transition duration-300"
            >
              <div
                key={index}
                className="min-w-[300px] max-w-sm bg-slate-800 hover:bg-slate-700 transition-colors p-6 rounded-lg shadow-lg text-white flex-shrink-0"
              >
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-white mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-5">
                  <span className="text-xs text-gray-500 italic">
                    {project.tools}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Botón derecho */}
        <button
          onClick={scrollRight}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-20 hover:bg-gray-100 transition duration-300"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
