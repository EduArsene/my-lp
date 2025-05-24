
import { motion } from 'framer-motion';
import yo from '../assets/img/yo.png';
import BotonRedes from './Buttonn';
const HeroSection = () => {
    const fileUrl = "cv.pdf"; // Puede ser una URL de un archivo estático o un enlace a un servidor

    return (
        <motion.section
            id='Inicio'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
        >
            <div className="relative bg-purple-500/50 rounded-xl p-6 md:p-24 max-w-6xl w-full dark:bg-white-800 mx-auto mt-2 z-40 flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex-1 flex flex-col space-y-6 text-left">
                    <motion.h3
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="font-[Roboto] text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md animate-pulse duration-300 ease-in"
                    >
                        ¡Hola! Soy Eduardo
                    </motion.h3>
                    <div className="max-w-md text-left">
                        <p className="text-base md:text-xl text-purple-200">
                            Soy estudiante de Ingeniería de Sistemas apasionado por la tecnología, el diseño limpio y la experiencia del usuario.
                            Aquí te muestro lo que uso para construir sitios web modernos.

                        </p>
                        {/*boton para descargar mi cv */}
                        <a href={fileUrl} className='' target="_blank">
                            <div className='flex items-center justify-center bg-slate-800 text-white hover:scale-110 hover:bg-gray-700 duration-300 h-10 w-44 rounded-full mt-6 border-2 border-gray-300' >
                                Descarga mi CV
                            </div>
                        </a>
                        {/*Botones de mis redes */}
                        <BotonRedes />
                    </div>
                </div>
                <div className="bg-linear-to-br from-indigo-900 via-slate-900 to-indigo-900  rounded-3xl p-9 md:p-10 text-white shadow-xl z-50 w-full md:w-[400px] h-auto md:h-[540px] static md:absolute md:-top-8 md:right-8 flex flex-col justify-center items-center drop-shadow-xl/50">

                    <div className="relative w-auto h-auto mb-4 rounded-3xl overflow-hidden">
                        <img src={yo} alt="mi foto" className="w-full h-full object-cover rounded-3xl brightness-100 mask-radial-at-center mask-radial-from-50% mask-radial-to-70%" />
                        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-linear-to-t from-indigo-800 to-transparent" />
                    </div>
                    <p className="text-base md:text-sm text-purple-200">
                        Tengo 24 años, soy de Perú y me gusta jugar futbol y salir a correr. En mis ratos libres me gusta aprender sobre tecnología y aplicarlo en distintos proyectos.
                        Mi sueño es trabajar como un desarrollador Full Stack.
                    </p>

                </div>
            </div>
        </motion.section>
    );
};

export default HeroSection;