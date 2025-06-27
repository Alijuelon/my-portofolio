// src/components/SkillCard.tsx
import React from 'react';

interface SkillCardProps {
  name: string;
  icon: React.ReactNode; // Kita akan menerima komponen ikon sebagai prop
  hoverColor: string; // Warna yang akan muncul saat hover
}

const SkillCard = ({ name, icon, hoverColor }: SkillCardProps) => {
  return (
    // 'group' memungkinkan kita mengubah style anak saat parent di-hover
    <div className="group relative flex flex-col items-center justify-center gap-2 p-6 w-36 h-36 
                   bg-slate-800/50 border-2 border-slate-700 rounded-2xl
                   transition-all duration-300 ease-in-out
                   hover:border-cyan-400 hover:-translate-y-2">
      
      {/* Ikon Teknologi */}
      <div className={`text-6xl text-slate-400 group-hover:text-7xl ${hoverColor} transition-all duration-300`}>
        {icon}
      </div>

      {/* Nama Teknologi */}
      <p className="text-lg font-semibold text-slate-300 group-hover:text-white transition-colors duration-300">
        {name}
      </p>

      {/* Efek glow di latar belakang saat hover */}
      <div className="absolute inset-0 bg-cyan-400/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
    </div>
  );
};

export default SkillCard;