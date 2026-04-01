import { motion } from "framer-motion";

const Hero = () => {
  // متغيرات الحركة (Animations)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section 
      dir="rtl" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fdfdfd] dark:bg-[#020617] px-6"
    >
      {/* خلفية جمالية (Blobs) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <motion.div 
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-12 lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* الجانب الأيمن - النصوص */}
        <div className="flex-1 text-center md:text-right">
          <motion.span 
            variants={itemVariants}
            className="inline-block text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 bg-blue-50 dark:bg-blue-900/20 px-4 py-1 rounded-full"
          >
            متاح للعمل على مشاريع جديدة
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-[1.2]"
          >
            أهلاً، أنا <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-cyan-400">معاذ</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6"
          >
            مطور <span className="text-blue-500">Full-Stack</span> محترف
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed"
          >
            أقوم بتحويل الأفكار المعقدة إلى تطبيقات ويب مذهلة. متخصص في بناء الأنظمة القوية باستخدام 
            <span className="text-slate-900 dark:text-white font-semibold"> Laravel </span> 
            وواجهات المستخدم التفاعلية بـ 
            <span className="text-slate-900 dark:text-white font-semibold"> React.js</span>.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/contact"
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/25 transition-all active:scale-95"
            >
              تواصل معي
            </a>
            <a
              href="#projects"
              className="px-10 py-4 bg-transparent border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
            >
              مشاهدة أعمالي
            </a>
          </motion.div>
        </div>

        {/* الجانب الأيسر - الصورة مع تأثيرات قوية */}
        <motion.div
          variants={itemVariants}
          className="relative group"
        >
          {/* حلقة مضيئة خلف الصورة */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-72 h-72 md:w-[400px] md:h-[400px] rounded-3xl overflow-hidden border-[6px] border-white dark:border-slate-800 shadow-2xl"
          >
            <img
              src="/moaz.jpeg"
              alt="معاذ أحمد"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* عناصر ديكورية حول الصورة */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-500/30 rounded-3xl -z-0 translate-x-4 translate-y-4" />
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;