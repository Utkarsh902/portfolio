
import React, { useEffect, useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-600 selection:text-white bg-slate-200 antialiased">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <nav className="max-w-7xl mx-auto px-6">
          <div className={`flex items-center justify-between transition-all duration-300 rounded-xl px-6 h-12 ${scrolled ? 'bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-md' : 'bg-white/40 backdrop-blur-sm'}`}>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-slate-900 rounded-md flex items-center justify-center text-white font-black text-xs">U</div>
              <span className="font-bold text-slate-900 tracking-tight text-md hidden sm:block">UTKARSH YADAV</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <a href="#profile" className="hover:text-indigo-600 transition-colors">Profile</a>
              <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
              <a href="#techstack" className="hover:text-indigo-600 transition-colors">Tech Stack</a>
              <a href="#experience" className="hover:text-indigo-600 transition-colors">Experince</a>
              <a href="#certifications" className="hover:text-indigo-600 transition-colors">Certifications</a>
             
            </div>


            <div className="flex items-center gap-4">
             {/* Hire Me */}
              <a href="mailto:devninja886@gmail.com" className="px-4 py-1.5 bg-slate-900 text-white text-[10px] font-bold rounded-lg hover:bg-indigo-600 transition-all shadow-sm uppercase tracking-wider">
                Hire Me
              </a>

             {/* View Resume */}
              <a href="/Utkarsh_resume.pdf" target="_blank" className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white border border-slate-200 text-[10px] font-bold text-slate-600 hover:border-indigo-600 hover:text-red-600 hover:bg-yellow-50 transition-all uppercase tracking-widest shadow-sm">
                View Resume
              </a>

             {/* Mobile Menu */}
              <button className="md:hidden text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>

          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-slate-900 rounded-md flex items-center justify-center text-white font-black text-xs">U</div>
                <span className="font-bold text-slate-900 tracking-tight text-md">UTKARSH YADAV.</span>
              </div>
              <p className="text-slate-500 max-w-sm text-xs leading-relaxed mb-6">
                Computer Science Engineering student interested in software development, web technologies and problem solving. I enjoy building real applications and continuously improving my coding skills.

              </p>
              <div className="flex gap-2">
                <a href="https://github.com/Utkarsh902" target="_blank" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[10px] font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all uppercase tracking-widest">
                  GitHub
                </a>

                <a href="https://www.linkedin.com/in/utkarsh-yadav-219653324/" target="_blank" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[10px] font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all uppercase tracking-widest">
                  LinkedIn
                </a>

              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-bold text-slate-900 mb-4 text-xs uppercase tracking-widest">Quick Navigation</h4>
              <ul className="space-y-3 text-[11px] text-slate-500 font-medium">
                <li><a href="#profile" className="hover:text-indigo-600 transition-colors">Career Path</a></li>
                <li><a href="#projects" className="hover:text-indigo-600 transition-colors">Technical Projects</a></li>
                <li><a href="#techstack" className="hover:text-indigo-600 transition-colors">Tech Stack</a></li>
                <li><a href="#contact" className="hover:text-indigo-600 transition-colors">Get in Touch</a></li>
               
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="font-bold text-slate-900 mb-4 text-xs uppercase tracking-widest">Open for Opportunities</h4>
              <div className="p-5 bg-white rounded-xl border border-slate-200/60 shadow-sm">
                <p className="text-[10px] text-slate-500 mb-4 leading-relaxed uppercase font-bold tracking-tight">Open to internships, collaborative projects and learning opportunities..</p>
                <a href="mailto:devninja886@gmail.com" className="text-indigo-600 font-bold text-xs hover:underline block truncate">devninja886@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <span>&copy; {new Date().getFullYear()} Utkarsh Yadav</span>
            <div className="flex items-center gap-2">


            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
