import React from "react";
import Header from "./components/sections/header";
import HeroSection from "./components/sections/HeroSection";
import AboutMeSection from "./components/sections/AboutMeSection";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/ContanctMe";
import Experience from "./components/sections/Experience";
import { body } from "framer-motion/client";
import Puntero from "./components/ui/puntero";
const App = () => {
  
  return (
    
    /*<body className="font-sans text-slate-900 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">*/
      <div className=" cursor-none">

        <Puntero />
        <Header />
        <HeroSection />
        <AboutMeSection />
        <Experience/>
        <Projects />
        <Contact />
      </div>
    /*</body>*/
    
      
  );
};

export default App;
