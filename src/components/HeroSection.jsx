
import { motion } from 'framer-motion';
import yo from '../assets/img/yo.png';

const HeroSection = () => {
    return (
        <motion.section
        id='Inicio'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center items-center min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-800 to-slate-900 px-6 text-center"
        >
            <div className="relative bg-purple-500/50 rounded-xl p-6 md:p-24 max-w-6xl w-full dark:bg-white-800 mx-auto mt-10 z-40 flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
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
                            Soy estudiante de Ingeniería de Sistemas apasionado por la tecnología, el diseño limpio y la experiencia del usuario. Aquí te muestro lo que uso para construir sitios web modernos.
                        </p>
                    </div>
                </div>
                <div className="bg-indigo-800 rounded-3xl p-6 md:p-8 text-white shadow-xl z-50 w-full md:w-[400px] h-auto md:h-[500px] static md:absolute md:-top-16 md:right-8 flex flex-col justify-center items-center drop-shadow-xl/50">
                    <div className="relative w-auto h-auto mb-4 rounded-3xl overflow-hidden">
                        <img src={yo} alt="mi foto" className="w-full h-full object-cover rounded-3xl brightness-100" />
                        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-indigo-800 to-transparent" />
                    </div>
                    <p className="text-base md:text-sm text-purple-200">
                        Cuento con algunos proyectos que desarrollé y sigo desarrollando en mi Github.
                    </p>
                    <a
                        href="https://github.com/EduArsene"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center 
                            bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% 
                            bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] 
                            before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px]
                            before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10%
                            before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 
                            before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out 
                            before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 
                            hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 
                            active:translate-y-[2px] m-7"
                        ><svg
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            class="absolute left-2 group-hover:left-1.5 group-active:left-[10px] duration-300 transition-[left] z-10 w-6 h-6 text-white"
                        >
                                <path
                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                ></path>
                            </svg>
                            Github
                        </button>
                    </a>
                </div>
            </div>
        </motion.section>
    );
};

export default HeroSection;