// src/components/Profile3DCard.tsx
import { useState } from 'react';
import React from 'react';
import ProfilImg from '../assets/img/profile1.jpg';
const Profile3DCard = () => {
  // State untuk menyimpan rotasi kartu
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Ref untuk mengakses elemen kartu
  const cardRef = React.useRef<HTMLDivElement>(null);

  // Fungsi untuk menangani pergerakan mouse di atas kartu
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const { width, height, left, top } = card.getBoundingClientRect();
    
    // Hitung posisi mouse dari tengah kartu
    const mouseX = e.clientX - left - width / 2;
    const mouseY = e.clientY - top - height / 2;
    
    // Tentukan seberapa kuat efek rotasinya (semakin kecil angkanya, semakin kuat)
    const rotateFactor = 20;
    const rotateX = -(mouseY / height) * rotateFactor;
    const rotateY = (mouseX / width) * rotateFactor;

    setRotation({ x: rotateY, y: rotateX });
  };

  // Fungsi untuk mereset rotasi saat mouse meninggalkan kartu
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    // Wrapper untuk menciptakan 'perspective' 3D
    <div
      className="w-80 h-96"
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      {/* Kartu utama yang akan berotasi */}
      <div
        className="w-full h-full bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-2xl shadow-cyan-500/10 relative transition-transform duration-100 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateY(${rotation.x}deg) rotateX(${rotation.y}deg)`,
        }}
      >
        {/* Lapisan Latar/Glow di dalam kartu */}
        <div 
            className="absolute inset-4 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 blur-2xl rounded-xl"
            style={{ transform: 'translateZ(-20px)'}}
        ></div>

        {/* Lapisan Konten: Foto dan Nama */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
          {/* Foto Profil */}
          <div 
            className="w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-400/50 mb-4"
            style={{ transform: 'translateZ(50px)' }} 
          >
            <img 
              src={ProfilImg}
              alt="Foto Profil"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Nama dan Jabatan */}
          <h2 
            className="text-2xl font-bold text-white mb-1"
            style={{ transform: 'translateZ(40px)' }}
          >
            Ali Juelon Sinaga
          </h2>
          <p 
            className="text-cyan-400"
            style={{ transform: 'translateZ(30px)' }}
          >
            Web & Mobile Developer 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile3DCard;