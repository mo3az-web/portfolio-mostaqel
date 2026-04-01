import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "قائمة المهام الذكية",
    description: "تطبيق متكامل لإدارة المهام اليومية مع واجهة مستخدم سلسة وتجربة استجابة كاملة.",
    tags: ["React", "Tailwind", "Vercel"],
    image: "/todo.png", // اتأكد من الصور في الـ public folder
    demo: "https://to-do-list-ruby-gamma.vercel.app/",
  },
  {
    title: "مؤسسة عتيوي الرشيدي للسباكة",
    description: "موقع تعريفي احترافي لمؤسسة تجارية، يركز على عرض الخدمات وسهولة التواصل.",
    tags: ["Vite", "React", "Design"],
    image: "/blog.png",
    demo: "https://vite-new-rebo.vercel.app/",
  },
  {
    title: "لعبة إكس أو (Tic Tac Toe)",
    description: "تطوير لعبة كلاسيكية ببرمجة منطقية متطورة تعتمد على React Hooks.",
    tags: ["Logic", "React", "Games"],
    image: "/xo.png",
    demo: "https://tik-tak-toe-game-pzmr.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" dir="rtl" className="py-24 px-6 bg-[#f8fafc] dark:bg-[#020617] transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* العناوين */}
        <div className="text-right mb-16">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4"
          >
            أعمالي <span className="text-blue-500">المختارة</span>
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
            مجموعة من المشاريع التي قمت بتطويرها، أركز فيها على دقة الأداء وتجربة المستخدم المميزة.
          </p>
        </div>

        {/* شبكة المشاريع */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl"
            >
              {/* الصورة */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* التفاصيل */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-[10px] font-bold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 h-12 overflow-hidden">
                  {project.description}
                </p>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                   <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 font-bold text-sm text-blue-500 hover:text-blue-600 transition-all w-fit"
                   >
                      عرض المشروع الحقيقي <FiExternalLink className="rotate-180 md:rotate-0" />
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;