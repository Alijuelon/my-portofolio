// src/sections/Footer.tsx
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  // Anda bisa letakkan link sosial media Anda di sini


  return (
    <footer className="py-8 text-slate-400 border-t border-slate-700/50 relative">
      <div className="container mx-auto px-6 text-sm flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Sisi Kiri: Copyright & Credit */}
        <div className="text-center md:text-left">
          <p className="font-semibold text-slate-300">Didesain & Dibangun oleh Ali Juelon</p>
          <p>&copy; {new Date().getFullYear()}. Dibuat dengan React & Tailwind CSS.</p>
        </div>

        {/* Tombol Back to Top (di tengah) */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-6">
          <a 
            href="#" 
            aria-label="Kembali ke atas"
            className="w-12 h-12 flex items-center justify-center bg-slate-700/80 backdrop-blur-md border border-slate-600 rounded-full
                       text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
          >
            <ArrowUp size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;