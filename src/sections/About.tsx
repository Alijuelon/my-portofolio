// src/sections/About.tsx
import FadeIn from '../components/FadeIn';
import Profile3DCard from '../components/Profile3DCard'; 
import SkillCard from '../components/SkillCard'; // Import komponen baru kita

// Import ikon-ikon yang kita butuhkan dari react-icons
import { FaPhp, FaLaravel, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiFlutter, SiMysql, SiTailwindcss, SiTypescript } from 'react-icons/si';


const About = () => {
  // Kita buat data technologies menjadi lebih terstruktur
  const technologies = [
    { name: 'PHP', icon: <FaPhp />, hoverColor: 'hover:text-violet-400' },
    { name: 'Laravel', icon: <FaLaravel />, hoverColor: 'hover:text-red-500' },
    { name: 'Flutter', icon: <SiFlutter />, hoverColor: 'hover:text-sky-400' },
    { name: 'MySQL', icon: <SiMysql />, hoverColor: 'hover:text-blue-500' },
    { name: 'React', icon: <FaReact />, hoverColor: 'hover:text-cyan-400' },
    { name: 'TypeScript', icon: <SiTypescript />, hoverColor: 'hover:text-blue-600' },
    { name: 'Bootstrap', icon: <FaBootstrap />, hoverColor: 'hover:text-purple-500' },
    { name: 'Tailwind', icon: <SiTailwindcss />, hoverColor: 'hover:text-teal-400' },
  ];

  return (
    <section id="about" className="py-24 text-white">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-cyan-400">01.</span> About Me
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-16"></div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <FadeIn className="flex justify-center items-center">
            <Profile3DCard />
          </FadeIn>

          <FadeIn className="text-slate-300 text-lg leading-relaxed text-center md:text-left">
            <p className="mb-4">
              Halo! Saya seorang mahasiswa di **Politeknik Negeri Bengkalis**, dengan fokus pada Rekayasa Perangkat Lunak. Gairah saya terletak pada transformasi ide-ide kreatif menjadi aplikasi web dan mobile yang fungsional dan intuitif.
            </p>
            <p>
              Saya menikmati setiap tahap dalam siklus pengembangan, mulai dari konseptualisasi dan desain hingga pengembangan dan deployment. Saya selalu antusias untuk mendalami teknologi modern dan mencari tantangan baru untuk mengasah kemampuan saya dalam memecahkan masalah di dunia digital.
            </p>
          </FadeIn>
        </div>

        {/* Bagian Skills (di bawah 2 kolom di atas) */}
        <FadeIn className="md:col-span-2 mt-24">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Teknologi yang Saya Kuasai</h3>
          {/* Menggunakan grid untuk layout skill cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {technologies.map(tech => (
              <div key={tech.name} className="flex justify-center">
                <SkillCard name={tech.name} icon={tech.icon} hoverColor={tech.hoverColor} />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;