// src/components/ProjectCard.tsx

// Perbarui interface props
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string; // Tambahkan prop untuk gambar
  onClick: () => void; // Tambahkan prop untuk aksi klik
}

const ProjectCard = ({ title, description, tags, imageUrl, onClick }: ProjectCardProps) => {
  return (
    // Kita ubah dari <a> menjadi <div> yang bisa diklik
    <div onClick={onClick} className="block group cursor-pointer">
      <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/80 rounded-lg 
                      h-full flex flex-col overflow-hidden
                      transition-all duration-300 
                      group-hover:border-cyan-400/60 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
        
        {/* Bagian Gambar */}
        <div className="w-full h-48 overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        </div>

        {/* Bagian Konten Teks */}
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors duration-300">{title}</h3>
            {/* Kita ganti ikon panah dengan ikon 'lihat detail' */}
            <span className="text-xs font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors">Lihat Detail</span>
          </div>
          <p className="text-slate-400 mb-4 flex-grow">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs font-semibold text-cyan-400 bg-cyan-900/50 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;