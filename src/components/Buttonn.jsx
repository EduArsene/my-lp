import { FaWhatsapp, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

export default function Butonn() {
  const buttons = [
    {
      icon: <FaWhatsapp size={32} />,
      href: 'https://wa.me/sss',
      color: 'hover:bg-green-500 ',
      corner: 'rounded-tl-3xl ',
    },
    {
      icon: <FaLinkedin size={32} />,
      href: 'https://linkedin.com/in/eduardo-mariños-vergaray-a662072a3',
      color: 'hover:bg-blue-600',
      corner: 'rounded-tr-3xl',
    },
    {
      icon: <FaGithub size={32} />,
      href: 'https://github.com/EduArsene',
      color: 'hover:bg-gray-600',
      corner: 'rounded-bl-3xl',
    },
    {
      icon: <FaDiscord size={32} />,
      href: 'https://discord.gg/tu-servidor',
      color: 'hover:bg-indigo-400',
      corner: 'rounded-br-3xl',
    },
  ];

  return (
    <div className="grid grid-cols-2 grid-rows-2 w-48 h-48 gap-2">
      {buttons.map(({ icon, href, color, corner }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener"
          className={`
            flex items-center justify-center bg-[#d1d1d1]
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
