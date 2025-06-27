// src/sections/Projects.tsx
import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import ProjectCard from '../components/ProjectCard';
import ProjectDetailModal from '../components/ProjectDetailModal';
import Bimble from '../assets/img/bimble/f1.png';
import SmartTime from '../assets/img/smart time/f1.jpg';
import TaskEase from '../assets/img/task ease/f1.jpg';

// Perbarui tipe data proyek
interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  liveLink?: string;
  repoLink?: string;
}

const Projects = () => {
  // State untuk mengelola modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

const projectData: Project[] = [
  {
    title: 'Aplikasi Bimbel Online Berbasis Website',
    description: 'Sebuah platform pembelajaran online yang memungkinkan siswa belajar secara fleksibel dari rumah.',
    longDescription: 'Aplikasi Bimbel Online ini dirancang untuk memudahkan siswa dalam mengakses materi pelajaran, video pembelajaran, soal latihan, dan ujian secara daring. Dilengkapi dengan sistem manajemen pengguna, pembayaran, serta dashboard admin untuk mengelola konten. Cocok untuk lembaga pendidikan atau tutor privat yang ingin mendigitalisasi layanan mereka.',
    tags: ['Laravel', 'Boostrap 5', 'Tailwind CSS', 'MySQL'],
    imageUrl: Bimble,
    repoLink: 'https://github.com/Alijuelon/Bimble-Online-Laravel-.git'
  },
  {
    title: 'Aplikasi Smart Time Android',
    description: 'Aplikasi Android untuk mengelola jadwal harian dan pengingat tugas secara cerdas.',
    longDescription: 'Smart Time adalah aplikasi manajemen waktu berbasis Android yang membantu pengguna mengatur jadwal, membuat pengingat otomatis, dan memprioritaskan tugas harian. Dengan antarmuka intuitif dan integrasi notifikasi, aplikasi ini dirancang untuk meningkatkan produktivitas pengguna, baik pelajar, pekerja, maupun profesional.',
    tags: ['Dart', 'Flutter'],
    imageUrl: SmartTime,
    repoLink: 'https://github.com/Alijuelon/smart-time'
  },
  {
    title: 'Aplikasi Mobile Task Ease',
    description: 'Aplikasi pelacak tugas dan produktivitas dengan fitur gamifikasi untuk memotivasi pengguna.',
    longDescription: 'Task Ease merupakan aplikasi mobile cross-platform yang dirancang untuk membantu pengguna melacak tugas harian, target mingguan, dan progres pribadi. Aplikasi ini dilengkapi dengan sistem gamifikasi seperti penghargaan, level, dan leaderboard yang membuat pengguna lebih semangat dalam menyelesaikan pekerjaan. Cocok untuk pelajar, freelancer, atau siapa saja yang ingin meningkatkan manajemen waktu.',
    tags: ['Dart','Flutter','MySQL API PHP'],
    imageUrl: TaskEase,
  }
];

  return (
    <>
      <section id="projects" className="py-24 text-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="text-cyan-400">02.</span> My Projects
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-16"></div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
              <FadeIn key={index}>
                <ProjectCard {...project} onClick={() => openModal(project)} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Render komponen Modal di sini */}
      <ProjectDetailModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </>
  );
};
export default Projects;