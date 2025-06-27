// src/sections/Hero.tsx
import { motion } from 'framer-motion';
import Photo3D from '../components/Photo3D';

// Easing array yang sesuai spesifikasi
const easing: [number, number, number, number] = [0.42, 0, 0.58, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: easing,
    },
  },
};

const gradientTitleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const, // ✅ perbaikan tipe
      stiffness: 80,
      damping: 15,
    },
  },
};

const Hero = () => {
  const gradientText = "WEB & MOBILE DEVELOPER".split(" ");

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-white py-24 px-4 overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Kolom Kiri */}
        <motion.div
          className="text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
            variants={itemVariants}
          >
            <span className="block text-slate-300">HI, SAYA ALI JUELON</span>
          </motion.h1>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent"
            variants={gradientTitleVariants}
            aria-label="WEB & MOBILE DEVELOPER"
          >
            {gradientText.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={wordVariants}
                style={{ marginRight: '0.25em' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            className="max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-slate-400 mb-12"
            variants={itemVariants}
          >
            Saya mengubah ide-ide kompleks baik menjadi aplikasi web dan mobile yang elegan, modern, dan mudah digunakan.
          </motion.p>

          <motion.div variants={itemVariants}>
            <motion.a
              href="#projects"
              className="inline-block bg-cyan-500 text-slate-900 font-bold py-4 px-10 rounded-lg shadow-[0_0_25px_rgba(6,182,212,0.6)]"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.7)",
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
              Lihat Karya Saya
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Kolom Kanan: Foto 3D */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: easing }}
        >
          <Photo3D />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
