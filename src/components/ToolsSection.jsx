import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaLeaf, FaBootstrap } from "react-icons/fa";
import { motion } from 'framer-motion';
export default function ToolsSection() {
  return (
    <motion.section id="">
      <section className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-sm">
          Herramientas que utilizo
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-9 gap-10 justify-items-center">
          {/* HTML5 */}
          <div className="flex flex-col items-center transition-transform duration-300">
            <FaHtml5 className="text-orange-500 text-6xl mb-2 drop-shadow-sm" />
            <span className="text-white font-semibold">HTML5</span>
          </div>

          {/* CSS3 */}
          <div className="flex flex-col items-center transition-transform duration-300">
            <FaCss3Alt className="text-blue-400 text-6xl mb-2 drop-shadow-sm" />
            <span className="text-white font-semibold">CSS3</span>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center transition-transform duration-300">
            <FaJs className="text-yellow-300 text-6xl mb-2 drop-shadow-sm" />
            <span className="text-white font-semibold">JavaScript</span>
          </div>

          {/* React */}
          <div className="flex flex-col items-center transition-transform duration-300">
            <FaReact className="text-cyan-400 text-6xl mb-2 drop-shadow-sm" />
            <span className="text-white font-semibold">React</span>
          </div>

          {/* Node.js */}
          <div className="flex flex-col items-center transition-transform duration-300">
            <FaNodeJs className="text-green-400 text-6xl mb-2 drop-shadow-sm" />
            <span className="text-white font-semibold">Node.js</span>
          </div>
          {/* Python */}
          <div className="flex flex-col items-center transition-transform duration-400">
            <FaPython className="text-[#306998] text-6xl mb-2 drop-shadow-sm" />
            <span className="text-white font-semibold">Python</span>
          </div>
          {/* Java*/}
          <div className="flex flex-col items-center transition-transform duration-300">
            <FaJava className="text-[#5382A1] text-6xl mb-2 drop-shadow-sm" />
            <span className="text-white font-semibold">Java</span>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300">
            <FaLeaf className="text-[#6DB33F] text-6xl mb-2 drop-shadow-sm" />
            <span className="text-white font-semibold">Spring Boot</span>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300">
            <FaBootstrap className="text-[#b82bbd] text-6xl mb-2 drop-shadow-sm" />
            <span className="text-white font-semibold">Spring Boot</span>
          </div>
        </div>
        {/*
import imgFotoChe from '../assets/img/experience/Foto-check.jpeg';
import imgMar from '../assets/img/experience/mar.jpeg';
import imgSunatDentro from '../assets/img/experience/Sunat-dentro.jpeg';
import imgSunatfuera from '../assets/img/experience/Sunat-fuera.jpeg';
const [currentImage, setCurrentImage] = useState(0);

  const images = [
    imgFotoChe,
    imgMar,
    imgSunatDentro,
    imgSunatfuera,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  <div className="w-full max-w-sm md:max-w-md rounded-xl shadow-lg overflow-hidden">
            <div className="relative w-full h-52">
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
          </div>*/}

      </section>
    </motion.section>
  );
}
