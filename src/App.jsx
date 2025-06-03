import React from "react";
import Header from "./components/sections/header";
import HeroSection from "./components/sections/HeroSection";
import AboutMeSection from "./components/sections/AboutMeSection";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/ContanctMe";
import { body } from "framer-motion/client";

{
  /*import Too from './components/ToolsSection';<Too /> */
}

const App = () => {
  return (
    
    /*<body className="font-sans text-slate-900 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">*/
      <div className="">
        <Header />
        <HeroSection />
        <AboutMeSection />
        <Projects />
        <Contact />
      </div>
    /*</body>*/
    
      
  );
};

export default App;
