
import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-slate-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
        </button>
        
        <div className="md:w-1/2 h-64 md:h-auto">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </div>
        
        <div className="md:w-1/2 p-8 flex flex-col">
          <div className="mb-6">
            <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-2 block">{project.category}</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{project.title}</h2>
            <p className="text-slate-600 leading-relaxed mb-6">{project.longDescription}</p>
            
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">Technical Breakdown</h3>
            <ul className="space-y-2 mb-8">
              {project.technicalDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                  {detail}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded border border-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto flex gap-4">
            {project.github && (
              <a href={project.github} className="flex-1 text-center py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                View Source
              </a>
            )}
            {project.link && (
              <a href={project.link} className="flex-1 text-center py-3 border border-slate-200 text-slate-800 rounded-xl font-medium hover:bg-slate-50 transition-all">
                Live Demo
              </a>
            )}
            {!project.github && !project.link && (
              <button disabled className="flex-1 py-3 bg-slate-100 text-slate-400 rounded-xl font-medium cursor-not-allowed">
                Confidential Project
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
