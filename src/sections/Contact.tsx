// src/sections/Contact.tsx
import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { Github, Linkedin, Mail, MapPin, Copy, Check } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const email = "alijuelon01@gmail.com"; 

  const socials = [
    { icon: <Github />, href: 'https://github.com/Alijuelon', name: 'GitHub' },
    { icon: <Linkedin />, href: 'https://www.linkedin.com/in/ali-juelon-sinaga-048386294', name: 'LinkedIn' },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Tampilkan notifikasi "Copied!" selama 2 detik
  };

  return (
    <section id="contact" className="py-24 text-white">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-cyan-400">03.</span> Get In Touch
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-16"></div>
        </FadeIn>

        {/* Panel Kontak Utama */}
        <FadeIn>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-2xl p-8">
            
            {/* Sisi Kiri: Pesan Ajakan */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Mari Terhubung</h3>
                <p className="text-slate-400 leading-relaxed">
                  Saya selalu terbuka untuk diskusi, kolaborasi, atau sekadar bertukar pikiran. Jangan ragu untuk menghubungi saya melalui salah satu cara di samping, dan saya akan membalasnya sesegera mungkin.
                </p>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin />
                  <span>Bengkalis, Riau, Indonesia</span>
                </div>
              </div>
            </div>

            {/* Sisi Kanan: Aksi Kontak */}
            <div className="space-y-6">
              {/* Aksi Email dengan Fitur Copy */}
              <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-lg flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-cyan-400" />
                  <span className="text-slate-300">{email}</span>
                </div>
                <button onClick={handleCopy} className="p-2 rounded-md hover:bg-slate-700 transition-colors" title="Copy email">
                  {copied ? <Check className="text-green-400" /> : <Copy className="text-slate-400" />}
                </button>
              </div>

              {/* Aksi Sosial Media */}
              <div className="space-y-3">
                {socials.map(social => (
                  <a 
                    key={social.name} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-700 rounded-lg
                               text-slate-400 hover:text-white hover:border-cyan-400/50 transition-all duration-300"
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
};
export default Contact;