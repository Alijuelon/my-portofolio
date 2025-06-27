// src/sections/Navbar.tsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center bg-slate-900/40 backdrop-blur-md rounded-b-lg border-b border-slate-700/60">
        
        {/* Logo Baru yang Stylish */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-cyan-500 to-fuchsia-500 rounded-full
                          transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
            <span className="text-xl font-extrabold text-slate-900">AJ</span>
          </div>
          <span className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
            ALI JUELON
          </span>
        </a>

        {/* Desktop Menu dengan Animasi Underline */}
        <ul className="hidden md:flex items-center gap-8 text-lg text-slate-300">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="relative group pb-1">
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Menu Overlay dengan Animasi Stagger */}
      <div
        className={`fixed inset-0 bg-slate-900/90 backdrop-blur-xl z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)} className="text-white">
            <X size={32} />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((link, index) => (
            <li
              key={link.name}
              className={`transition-all duration-500 ease-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <a href={link.href} onClick={() => setIsOpen(false)} className="text-3xl text-slate-200 hover:text-cyan-400 transition-colors duration-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;