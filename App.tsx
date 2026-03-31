import { TypeAnimation } from 'react-type-animation';
import Certifications from './components/Certifications';


import React, { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Layout from './components/Layout';
import ProjectModal from './components/ProjectModal';

import { PROJECTS } from "./components/ProjectData";
import { EXPERIENCES, SKILLS } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-slate-200">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[5%] right-[-5%] w-[45%] h-[45%] bg-indigo-50/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[35%] h-[35%] bg-blue-50/40 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-8 z-10">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.2em] mb-8 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              I am an Information Technology undergraduate student

            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-8">
              I Build Real-World Projects <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-400 block min-h-[1.2em]  text-6xl md:text-6xl">
              <TypeAnimation
                sequence={[
                'and Continuously Improve My Skills.',
                2200,
                'and Solve Real Problems.',
                2000,
                'and Build Scalable Web Apps.',
                  2200,
                ]}
                  speed={5}
                  repeat={Infinity}
                    />
                  </span>


            </h1>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed mb-10">

             I am a Information Technology Undergraduate student passionate about web development and problem solving. I enjoy building real applications, learning new technologies and regularly practicing Data Structures & Algorithms.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-3.5 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200">
                View Projects
              </a>
              <a href="#about" className="px-8 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all">
                About Me
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-4 relative hidden lg:block">
            <div className="relative p-1.5 bg-slate-50 rounded-[2.5rem] shadow-xl border border-slate-100">
               <div className="aspect-[3/4] overflow-hidden rounded-[2.2rem]">
                  <img src="/profile.jpeg" className="w-full h-full object-cover grayscale-[0.2] contrast-110 hover:grayscale-0 transition-all duration-700" />
               </div>
               <div className="absolute -bottom-8 -left-8 p-6 glass rounded-[2rem] border border-white/50 shadow-2xl max-w-[220px]">
                  <div className="text-[9px] font-black text-indigo-600 uppercase tracking-widest mb-1">Learning & Building</div>
                  <h4 className="font-bold text-slate-900 text-sm leading-tight">Practicing DSA and Developing Real Projects</h4>

               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em] mb-4 block">The Mission</span>
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">Learning by Building Projects. <br />Improving Step by Step</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-md">
                I believe the best way to learn programming is by building projects. I focus on writing clean code, understanding concepts deeply and continuously improving through practice, projects and hackathons.

              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="p-6 bg-white rounded-2xl border border-slate-200/60">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Java / Spring</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">Basic backend development and understanding of server-side concepts using Node.js and APIs.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200/60">
                  <h4 className="text-sm font-bold text-slate-900">React / Node</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">Building responsive user interfaces using React, HTML and CSS.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span>
                  Key Competencies
               </h3>
               <div className="space-y-6">
                  {[
                    { label: 'Problem Solving(DSA)', progress: '74%' },
                    { label: 'Web Development', progress: '78%' },
                    { label: 'Learning New Technologies', progress: '80%' }
                  ].map(goal => (
                    <div key={goal.label} className="space-y-3">
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                          <span>{goal.label}</span>
                          <span className="text-indigo-400">{goal.progress}</span>
                       </div>
                       <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-1000 group-hover:bg-indigo-400" style={{ width: goal.progress }}></div>
                       </div>
                    </div>
                  ))}
               </div>
               <div className="mt-12 pt-8 border-t border-white/5 flex gap-10">
                  <div>
                    <div className="text-3xl font-black text-white">Undergraduate</div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold mt-1 tracking-widest"> IT Student</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white">100+</div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold mt-1 tracking-widest">DSA Problems Solved</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-white to-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em] mb-4 block">My Work</span>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter">Projects I Have Built</h2>
            </div>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
              Here are some projects I developed to practice and apply my programming and web development skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project) => (
              <div 
                key={project.id} 
                className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:border-indigo-200 hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img src={project.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[0.3] group-hover:grayscale-0" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-slate-900/90 text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-xl">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight">{project.title}</h3>
                  <p className="text-slate-500 text-xs mb-8 line-clamp-2 leading-relaxed">{project.description}</p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-400 text-[9px] font-bold uppercase tracking-tight rounded">#{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-indigo-600 font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                      View Details
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>  

     

      {/* Skills Matrix */}
      <section id="skills" className="py-24 bg-gradient-to-b from-white to-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4 order-2 lg:order-1">
               <div className="space-y-10">
                  <div>
                    <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Technical <br /><span className="text-indigo-600">Skills.</span></h2>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Currently learning web development with React and Node.js, and practicing Data Structures & Algorithms. Familiar with databases like MongoDB and basic backend concepts.

                    </p>
                  </div>
                  <div className="space-y-3">
                    {[
                      { cat: 'Software Development', color: 'bg-indigo-600', val: 'Java, TypeScript, Python' },
                      { cat: 'Infrastructure', color: 'bg-blue-600', val: 'Docker, AWS, CI/CD' },
                      { cat: 'Theoretical CS', color: 'bg-emerald-600', val: 'DSA, OS, DBMS' }
                    ].map(c => (
                      <div key={c.cat} className="p-4 bg-white rounded-xl border border-slate-200/60 shadow-sm">
                        <div className="flex items-center gap-3 mb-1">
                           <div className={`w-2 h-2 rounded-full ${c.color}`}></div>
                           <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{c.cat}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-bold ml-5">{c.val}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
            
            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="bg-white p-8 rounded-[3rem] border border-slate-200/60 shadow-xl overflow-hidden h-[450px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={SKILLS} layout="vertical" margin={{ left: 20, right: 30, top: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                    <XAxis type="number" hide domain={[0, 100]} />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#64748b', fontSize: 10, fontWeight: 800 }}
                      width={130}
                    />
                    <Tooltip 
                      cursor={{ fill: 'rgba(79, 70, 229, 0.05)' }}
                      contentStyle={{ backgroundColor: '#fff', border: 'none', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', fontSize: '12px' }}
                    />
                    <Bar dataKey="level" radius={[0, 10, 10, 0]} barSize={18}>
                      {SKILLS.map((entry, index) => (
                        <Cell key={index} fill={entry.category === 'Software' ? '#4f46e5' : entry.category === 'Theory' ? '#10b981' : '#3b82f6'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

       <Certifications />

      {/* Experience Timeline */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.4em] mb-4 block">Track Record</span>
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter">Academic & Prof Journey</h2>
          </div>
          
          <div className="space-y-16">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative pl-12 border-l-2 border-slate-100 hover:border-indigo-200 transition-colors pb-4">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.2)]"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">{exp.role}</h3>
                    <p className="text-indigo-600 text-xs font-black uppercase tracking-widest mt-1">{exp.company}</p>
                  </div>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-4 py-1.5 rounded-full border border-slate-100 shadow-sm">{exp.period}</span>
                </div>
                <ul className="space-y-4">
                  {exp.description.map((line, idx) => (
                    <li key={idx} className="text-slate-500 text-sm leading-relaxed flex items-start gap-4">
                      <span className="text-indigo-400 mt-1.5 font-bold">»</span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[80px]"></div>
             <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter relative z-10 leading-tight">Let’s Work <br />
             
            

             <span className="text-indigo-500">Together.</span>
             
              </h2>
             <p className="text-slate-400 text-lg max-w-xl mx-auto mb-16 relative z-10 leading-relaxed font-medium">
               I am currently looking for internship opportunities and collaborative projects where I can learn and contribute as a developer.

             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <a href="https://www.linkedin.com/in/utkarsh-yadav-219653324/" target="_blank" className="px-12 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all backdrop-blur-md">
                  LinkedIn Profile
                </a>
                <a href="mailto:devninja886@gmail.com" className="px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-900/40">
                  Direct Email
                </a>
                <a href="https://github.com/Utkarsh902" target="_blank" className="px-12 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all backdrop-blur-md">
                  GitHub Profile
                </a>
             </div>
          </div>
        </div>
      </section>

      
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Layout>
  );
};

export default App;
