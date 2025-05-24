import React from 'react';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import AboutMeSection from './components/AboutMeSection';
import Projects from './components/Projects';
import Tools from './components/ToolsSection';

{/*import Too from './components/ToolsSection';<Too /> */ }


const App = () => {
  return (
      <div className="font-sans text-slate-900 bg-linear-to-br from-slate-900 via-indigo-900 to-slate-900">
        <Header />
        <HeroSection />
        <AboutMeSection />
        <Projects />
        <Tools />


      </div>
    
  );
};

export default App;
