import { FaWhatsapp, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

export default function Butonn() {
  const buttons = [
    {
      icon: <FaWhatsapp size={28} className="text-green-500"/>,
      href: 'https://wa.me/978713367' ,
      color: 'hover:bg-white ',
      corner: 'rounded-full ',
    },
    {
      icon: <FaLinkedin size={28} className="text-blue-600"/>,
      href: 'https://linkedin.com/in/eduardo-mariños-vergaray-a662072a3',
      color: 'hover:bg-white',
      corner: 'rounded-full',
    },
    {
      icon: <FaGithub size={28} className="text-white hover:text-black"/>,
      href: 'https://github.com/EduArsene',
      color: 'hover:bg-white',
      corner: 'rounded-full',
    },
    
  ];

  return (
    <div className="grid grid-cols-3 grid-rows-1 w-60 h-12 gap-10 mt-5">
      {buttons.map(({ icon, href, color, corner }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener"
          className={`
            flex items-center justify-center bg-slate-800 border-2 border-gray-300
            ${corner} transition-transform duration-200 shadow-lg
            ${color} hover:scale-110  
          `}
        >
          <div className="text-gray-900">
            {icon}
          </div>
        </a>
      ))}
    </div>
  );
}
