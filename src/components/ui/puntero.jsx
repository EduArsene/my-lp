import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const moverCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };

    const handleClick = () => {
        setClicking(true);
        setTimeout(() => setClicking(false), 200); // efecto de parpadeo
    };

    document.addEventListener('mousemove', moverCursor);
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousemove', moverCursor);
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);
  return (
    <div
      ref={cursorRef} 
      className={`fixed top-0 left-0 w-7 h-7 rounded-full pointer-events-none z-[9999] mix-blend-difference
         bg-amber-50  border-2 border-slate-950 transition-transform duration-75 ease-out shadow-md shadow-purple-500/100 animate-pulse ease-in${
        clicking ? 'opacity-70 bg-slate-500 transition-transform duration-500' : '' 
      }`}
    />
  );
}
