import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const ToolsSection = () => {
  // Establecemos los estados para cada campo de formulario
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Establecemos estados para el control de la carga y mensajes de éxito/error
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Función para manejar el cambio de valores de los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "phone") setPhone(value);
    if (name === "email") setEmail(value);
    if (name === "message") setMessage(value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mostramos el estado de carga
    setLoading(true);
    setSuccess(false);
    setError(false);

    const formData = { name, phone, email, message };

    try {
      // Enviamos el formulario usando emailjs
      const result = await emailjs.send(
        'service_xu67z67',    
        'template_r8akp5d',   
        formData,             
        'BULkGQMj4y2d5O2o0'   
      );

      console.log('Mensaje enviado:', result.text);
      setSuccess(true);  // Establecemos el estado de éxito
    } catch (error) {
      // Si hubo error
      console.error('Error al enviar el mensaje:', error);
      setError(true);  // estado de error
    } finally {
      setLoading(false);  // finzalizacion del estado de carga
    }
  };

  return (
    <section id='contactame'
      className="py-16  min-h-screen flex flex-col items-center">
      {/* Animación solo en el título */}
      <motion.h3
        className="text-3xl font-bold font-mono mb-4 text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contactame
      </motion.h3>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-700/50 shadow-md rounded-lg px-10 py-3 w-full max-w-4xl"
      >
        <div className="mb-3">
          <label className="block text-white">Nombres</label>
          <input
            placeholder='Nombres completos'
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
            className="w-full px-4  py-1 mt-2 border-2 border-blue-500/60 bg-slate-800/50 text-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-3">
          <label className="block text-white">Teléfono</label>
          <input
            placeholder='999999999'
            type="text"
            name="phone"
            value={phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border-2 border-blue-500/60 bg-slate-800/50 text-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-3">
          <label className="block text-white">Correo Electrónico</label>
          <input
            placeholder='correo@correo.com'
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border-2 border-blue-500/60 bg-slate-800/50 text-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-3">
          <label className="block text-white">Mensaje</label>
          <textarea
            placeholder='Deja tu mensaje...'
            name="message"
            value={message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 mt-2 border-2 border-blue-500/60 bg-slate-800/50  text-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        {/* boton de enviado */}
        <button
          type="submit"
          className="w-full py-2 px-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          disabled={loading}  // deshabilitar botonn
        >
          {loading ? 'Enviando...' : 'Enviar Mensaje'}
        </button>

        {/* mensajes de estado de error o envio exitoso */}
        {success && <p className="mt-4 text-green-600 font-mono font-bold">¡Mensaje enviado con éxito!</p>}
        {error && <p className="mt-4 text-red-600 font-mono font-bold">Hubo un error al enviar el mensaje. Inténtalo nuevamente.</p>}
      </form>
    </section>
  );
};

export default ToolsSection;
