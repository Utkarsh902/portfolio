
const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16">
          <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em] mb-4 block">
            Achievements
          </span>
          <h2 className="text-5xl font-black text-slate-900 tracking-tighter">
            Certifications
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Certificate 1 */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            
            <a href="/certificates/metaJS CERTIFICAT.pdf" target="_blank">
              <img 
                src="/certificates/mete.png" 
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />
            </a>

            <div className="p-5">
              <h3 className="text-md font-bold text-slate-900 mb-1">
                Programming with JavaScript
              </h3>

              <p className="text-xs text-slate-500 mb-4">
                Meta (via Coursera)
              </p>

              <a 
                href="/certificates/metaJS CERTIFICAT.pdf" 
                target="_blank"
                className="text-indigo-600 font-bold text-xs hover:underline"
              >
                View Certificate →
              </a>
            </div>
          </div>

           {/* Certificate 2 */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            
            <a href="/certificates/isro python and ml.pdf" target="_blank">
              <img 
                src="/certificates/isro.png" 
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />
            </a>

            <div className="p-5">
              <h3 className="text-md font-bold text-slate-900 mb-1">
                 Geodata Processing using Python & Machine Learning
              </h3>

              <p className="text-xs text-slate-500 mb-4">
                ISRO (IIRS)
              </p>

              <a 
                href="/certificates/isro python and ml.pdf" 
                target="_blank"
                className="text-indigo-600 font-bold text-xs hover:underline"
              >
                View Certificate →
              </a>
            </div>
          </div>

          {/* Certificate 3 */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            
            <a href="/certificates/Completion Certificate _ SkillsBuild.pdf" target="_blank">
              <img 
                src="/certificates/IBM_skillbuild.png" 
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />
            </a>

            <div className="p-5">
              <h3 className="text-md font-bold text-slate-900 mb-1">
                 Artificial Intelligence (IBM SkillsBuild)
              </h3>

              <p className="text-xs text-slate-500 mb-4">
                IBM SkillsBuild
              </p>

              <a 
                href="/certificates/Completion Certificate _ SkillsBuild.pdf" 
                target="_blank"
                className="text-indigo-600 font-bold text-xs hover:underline"
              >
                View Certificate →
              </a>
            </div>
          </div>

          {/* Certificate 4 */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            
            <a href="/certificates/COURSE COMPLETION_Microsoft Azure.pdf" target="_blank">
              <img 
                src="/certificates/Microsoft_Azure.png" 
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />
            </a>

            <div className="p-5">
              <h3 className="text-md font-bold text-slate-900 mb-1">
                 Microsoft Azure Internship (25 Hours)
              </h3>

              <p className="text-xs text-slate-500 mb-4">
                Microsoft Elevate + AICTE
              </p>

              <a 
                href="/certificates/COURSE COMPLETION_Microsoft Azure.pdf" 
                target="_blank"
                className="text-indigo-600 font-bold text-xs hover:underline"
              >
                View Certificate →
              </a>
            </div>
          </div>

             {/* Certificate 5 */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            
            <a href="/certificates/COURSE COMPLETION_Power BI.pdf" target="_blank">
              <img 
                src="/certificates/power_bi.png" 
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />
            </a>

            <div className="p-5">
              <h3 className="text-md font-bold text-slate-900 mb-1">
                Power BI for Business Applications
              </h3>

              <p className="text-xs text-slate-500 mb-4">
                Microsoft Elevate + AICTE
              </p>

              <a 
                href="/certificates/COURSE COMPLETION_Power BI.pdf" 
                target="_blank"
                className="text-indigo-600 font-bold text-xs hover:underline"
              >
                View Certificate →
              </a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Certifications;