import { motion } from "framer-motion";
import { 
  SiReact, SiTailwindcss, SiJavascript, SiLaravel, 
  SiPhp, SiLinux, SiGit, SiNodedotjs, SiMysql 
} from "react-icons/si";

const About = () => {
  const stats = [
    { label: "مشاريع مكتملة", value: "12+", color: "text-blue-500" },
    { label: "ساعات البرمجة", value: "+1500", color: "text-amber-500" },
    { label: "تقييم العملاء", value: "5/5", color: "text-purple-500" },
  ];

  const skillCategories = [
    {
      title: "تطوير الواجهات (Frontend)",
      skills: [
        { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      ],
    },
    {
      title: "الأنظمة والخدمات (Backend)",
      skills: [
        { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
        { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      ],
    },
    {
      title: "أدوات وأنظمة التشغيل",
      skills: [
        { name: "Linux (Nobara)", icon: <SiLinux className="text-white" /> },
        { name: "Git & Github", icon: <SiGit className="text-orange-500" /> },
      ],
    },
  ];

  const testimonials = [
    {
      name: "أحمد خالد",
      role: "صاحب متجر إلكتروني",
      content: "معاذ مطور محترف، استطاع تحويل فكرتي إلى واقع باستخدام Laravel و React بأداء عالي جداً واهتمام بالتفاصيل.",
      avatar: "https://ui-avatars.com/api/?name=A+K&background=0D8ABC&color=fff"
    },
    {
      name: "سارة محمد",
      role: "مديرة مشروع",
      content: "أكثر ما يميزه هو فهمه العميق للهندسة الخلفية (Backend) وقدرته على حل المشاكل التقنية المعقدة بسرعة.",
      avatar: "https://ui-avatars.com/api/?name=S+M&background=555&color=fff"
    }
  ];

  return (
    <section id="about" dir="rtl" className="py-24 px-6 bg-white dark:bg-[#020617] transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        
        {/* القسم الأول: النص والمهارات */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
              أبني <span className="text-blue-500">حلولاً تقنية</span> متكاملة.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              أنا مطور **Full-Stack** أؤمن أن الكود النظيف هو أساس أي عمل ناجح. من خلال دراستي للـ 
              <span className="text-blue-500 font-medium"> Digital Logic</span> والـ 
              <span className="text-blue-500 font-medium"> Assembly</span>، اكتسبت رؤية هندسية تمكنني من بناء أنظمة قوية ومستقرة.
            </p>
        
          </motion.div>

          <div className="grid gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all group"
              >
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-4 group-hover:text-blue-500 transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* القسم الثاني: الإحصائيات (Stats) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800 shadow-sm"
            >
              <h4 className={`text-4xl font-black ${stat.color} mb-2`}>{stat.value}</h4>
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* القسم الثالث: آراء العملاء (Testimonials) */}
        <div className="pt-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">ثقة <span className="text-blue-500">الشركاء والعملاء</span></h3>
            <p className="text-slate-500 mt-2">ما يقوله الآخرون عن تجربة العمل معي</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none relative"
              >
                <span className="absolute top-6 left-8 text-7xl text-slate-100 dark:text-slate-800 font-serif leading-none select-none">“</span>
                <p className="relative z-10 text-slate-600 dark:text-slate-400 italic mb-8 leading-relaxed text-lg">
                  {item.content}
                </p>
                <div className="flex items-center gap-4">
                  <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border-2 border-blue-500/30" />
                  <div>
                    <h4 className="font-bold dark:text-white text-sm">{item.name}</h4>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;