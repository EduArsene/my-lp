import { motion } from "framer-motion";

export default function sobreMi() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Foto con animación */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="./src/assets/img/puma-title.jpeg"
            alt="Ed"
            className="rounded-2xl shadow-xl w-full object-cover"
            height="120px" 
          />
        </motion.div>

        {/* Texto con animación */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-amber-600 mb-4">
            ¡Hola! Soy Ed 👋
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Estudiante de Ingeniería de Sistemas, apasionado por el desarrollo web, la tecnología y el aprendizaje constante.
          </p>
          <p className="text-md text-gray-600">
            Me encanta crear interfaces modernas y funcionales. Actualmente me encuentro aprendiendo React, Tailwind CSS y herramientas de animación como Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
