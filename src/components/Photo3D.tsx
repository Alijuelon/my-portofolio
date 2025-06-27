// src/components/Photo3D.tsx
import React, { useState, useRef } from 'react';
import ProfilImg from '../assets/img/profil.jpg';
const Photo3D = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const photoRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!photoRef.current) return;

    const { width, height, left, top } = photoRef.current.getBoundingClientRect();
    const mouseX = e.clientX - left - width / 2;
    const mouseY = e.clientY - top - height / 2;
    
    const rotateFactor = 20;
    const rotateX = -(mouseY / height) * rotateFactor;
    const rotateY = (mouseX / width) * rotateFactor;

    setRotation({ x: rotateY, y: rotateX });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  // Nilai clip-path untuk bentuk organik
  const clipPathStyle = {
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
  };

  return (
    // Wrapper untuk 'perspective' dan event handler
    <div
      ref={photoRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-80 h-80 lg:w-96 lg:h-96"
      style={{ perspective: '1500px' }}
    >
      {/* Kontainer utama yang akan berotasi */}
      <div
        className="w-full h-full relative transition-transform duration-100 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateY(${rotation.x}deg) rotateX(${rotation.y}deg)`,
        }}
      >
        {/* Lapisan Foto Utama dengan Bentuk Organik */}
        <div
          className="absolute inset-0"
          style={{ ...clipPathStyle, transform: 'translateZ(20px)' }}
        >
          <img
            src={ProfilImg}
            alt="Foto Profil"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Lapisan Bayangan/Glow di belakang foto, mengikuti bentuk */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 blur-2xl opacity-60"
          style={{ ...clipPathStyle, transform: `translateZ(-20px) scale(1.05)` }}
        ></div>

        {/* Lapisan Orb/Cahaya 1 (Kiri Atas) */}
        <div 
          className="absolute w-24 h-24 bg-cyan-400/50 rounded-full blur-2xl -top-5 -left-5"
          style={{ transform: `translateZ(-40px) translateX(${rotation.x * -0.2}px) translateY(${rotation.y * -0.2}px)` }}
        ></div>

        {/* Lapisan Orb/Cahaya 2 (Kanan Bawah) */}
        <div 
          className="absolute w-24 h-24 bg-fuchsia-500/50 rounded-full blur-2xl -bottom-5 -right-5"
          style={{ transform: `translateZ(-30px) translateX(${rotation.x * 0.3}px) translateY(${rotation.y * 0.3}px)` }}
        ></div>

      </div>
    </div>
  );
};

export default Photo3D;