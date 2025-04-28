import React from 'react';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import AboutMeSection from './components/AboutMeSection';
import Too from './components/ToolsSection';
/*import './styles/globals.css';*/

const App = () => {
  return (
    <div className="font-sans text-slate-800">
      <Header />
      <HeroSection/>
      <AboutMeSection/>
      <Too/>
      
    </div>
  );
};

export default App;
