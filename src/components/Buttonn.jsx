import { FaWhatsapp, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

export default function Butonn() {
  const buttons = [
    {
      icon: <FaWhatsapp size={28} />,
      href: 'https://wa.me/sss',
      color: 'hover:bg-green-500 ',
      corner: 'rounded-2xl ',
    },
    {
      icon: <FaLinkedin size={28} />,
      href: 'https://linkedin.com/in/eduardo-mariños-vergaray-a662072a3',
      color: 'hover:bg-blue-600',
      corner: 'rounded-2xl',
    },
    {
      icon: <FaGithub size={28} />,
      href: 'https://github.com/EduArsene',
      color: 'hover:bg-gray-600',
      corner: 'rounded-2xl',
    },
    
  ];

  return (
    <div className="grid grid-cols-4 grid-rows-1 w-60 h-16 gap-4 mt-4">
      {buttons.map(({ icon, href, color, corner }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener"
          className={`
            flex items-center justify-center bg-purple-500/50
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
