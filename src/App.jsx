import React from 'react';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import AboutMeSection from './components/AboutMeSection';
import Projects from './components/Projects';

{/*import Too from './components/ToolsSection';<Too /> */ }


const App = () => {
  return (
    <body className='bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900'>
      <div className="font-sans text-slate-900 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <Header />
        <HeroSection />
        <AboutMeSection />
        <Projects />


      </div>
    </body>
  );
};

export default App;
