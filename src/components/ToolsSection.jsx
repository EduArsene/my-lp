import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { motion } from 'framer-motion';
export default function ToolsSection() {
  return (
    <motion.section id="proyectos">
        <section  className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 to-indigo-900 px-6 py-20">
      <h2 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-sm">
        Herramientas que utilizo
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 justify-items-center">
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
      </div>
    </section>
    </motion.section>
  );
}
