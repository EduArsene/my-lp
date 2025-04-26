import { motion } from "framer-motion";

export default function ScrollSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gray-100">
      <motion.div
        className="max-w-xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-amber-600 mb-4">
          Sección con Scroll
        </h2>
        <p className="text-gray-700 text-lg">
          Esta sección aparece con una animación suave cuando haces scroll y entra en pantalla.
        </p>
      </motion.div>
    </section>
  );
}
