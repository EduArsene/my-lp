import ecodarImg from "../../assets/img/projects/ecodar.png"
import primerLpImg from "../../assets/img/projects/proyecto_primerlp.png"
import foliarImg from "../../assets/img/projects/proyecto_foliardoc.png"
import unirImg from "../../assets/img/projects/proyecto_unirpdf.png"
import patenteImg from "../../assets/img/projects/proyecto_patente.png"
import portfolioImg from "../../assets/img/projects/proyecto_portfolio.png"
const DataProjects = [
  {
    title: "Ecodar",
    description:
      "Inventario de ventas para microempresas. Simple y funcional usando Firebase.",
    tools: "HTML, CSS, JS, Bootstrap, Firebase",
    github: "https://luisestela.github.io/",
    img: ecodarImg,
  },
  {
    title: "Primer Landing Page",
    description:
    "Landing page para proyecto universitario, pensada en ser utilizada como entrada a Ecodar.",
    tools: "HTML, CSS, JS",
    github: "https://eduarsene.github.io/LandingPage/",
    img: primerLpImg,
  },
  {
    title: "Foliador de Documentos",
    description:
      "Foliar PDFs con números y nombres, incluye conversión DOCX a PDF. Utilizando librerias  Tkinter, PyPDF2, docx2pdf, etc.",
    tools: "Python",
    github: "https://github.com/EduArsene/Foliar_documentos",
    img: foliarImg,
  },
  {
    title: "Unir PDF",
    description:
      "Une múltiples archivos PDF en uno solo rápidamente con un diseño simple con Tkinter. Tkinter, PyPDF2, etc.",
    tools: "Python",
    github: "https://github.com/EduArsene/Unir_PDFs",
    img:unirImg,
  },
  {
    title: "Patente Wall-der",
    description:
      "Robot para parques que detecta gas y roedores. Proyecto con Arduino.",
    tools: "Arduino, Electrónica, Sensores",
    github:
      "https://www.upn.edu.pe/investigacion/dispositivo-electronico-autonomo-para-el-monitoreo-ambiental-y-prevencion-de-plagas-y",
      img: patenteImg,
  },
  {
    title: "Mi portafolio web",
    description:
      "Página diseñada para presentarme y que conozcan mas de mí y mis redes. Utilizando Framer-Motion para animaciones suaves",
    tools: "Tailwind, React",
    github: "#",
    img: portfolioImg,
  },
];

export default DataProjects;