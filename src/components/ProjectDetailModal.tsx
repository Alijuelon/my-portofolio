// src/components/ProjectDetailModal.tsx
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';

// Definisikan tipe untuk data proyek
interface Project {
  title: string;
  longDescription: string;
  imageUrl: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectDetailModal = ({ isOpen, onClose, project }: ModalProps) => {
  if (!project) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Bagian Overlay (latar belakang gelap) */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        {/* Bagian Konten Modal */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-slate-800/80 backdrop-blur-lg border border-slate-700 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-cyan-400 flex justify-between items-center">
                  {project.title}
                  <button onClick={onClose} className="p-1 rounded-full hover:bg-slate-700 transition-colors">
                    <X className="w-6 h-6 text-slate-400" />
                  </button>
                </Dialog.Title>
                
                <div className="mt-4">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold text-cyan-400 bg-cyan-900/50 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{project.longDescription}</p>
                </div>

                <div className="mt-6 flex gap-4">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-900 bg-cyan-400 border border-transparent rounded-md hover:bg-cyan-300">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.repoLink && (
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-300 bg-slate-700/50 border border-slate-600 rounded-md hover:bg-slate-700">
                      <Github size={16} /> Source Code
                    </a>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectDetailModal;