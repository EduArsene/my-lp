import { motion } from 'framer-motion';

const AboutMeSection = () => {
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
                <li>asdsadasd add sd asdada</li>
                <li>asdasdasd as ds sdads ad lorem sa</li>
                <li>dasdsasdasdaasd</li>
              </motion.ul>
  
              <motion.ul
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 list-disc list-inside space-y-4 text-center md:text-left"
              >
                <li><strong>Descripción:</strong> Un párrafo sobre tu experiencia, formación y objetivos.</li>
                <li>asdsadasd as ds sdads ad sa</li>
                <li>dasdsasdasdaasd</li>
              </motion.ul>
            </div>
  
            {/* Tarjeta de experiencia y proyectos */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 bg-purple-700/50 p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 w-full max-w-4xl mx-auto"
            >
              <div className="flex-1 text-white text-center md:text-left">
                <p className="mb-4 font-semibold text-lg">Imágenes de experiencia y proyectos grandes</p>
                <p>asdsadasd add sd asdada</p>
                <p>asdasdasd as ds sdads ad sa</p>
                <p>dasdsasdasdaasd</p>
              </div>
              <img
                src="https://via.placeholder.com/400x250"
                alt="Experiencia y proyectos"
                className="w-full max-w-sm md:max-w-md rounded-xl shadow-lg object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.section>
  
  );
};

export default AboutMeSection;
