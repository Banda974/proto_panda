import { motion } from "framer-motion";
import { BarChart, FileSpreadsheet, Database, Code2, LineChart, Network, Terminal, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "Power BI", percentage: 95, icon: BarChart, color: "text-yellow-400", bg: "bg-yellow-400" },
  { name: "Advanced Excel & Pivot Tables", percentage: 95, icon: FileSpreadsheet, color: "text-green-500", bg: "bg-green-500" },
  { name: "SQL / PostgreSQL / MySQL", percentage: 90, icon: Database, color: "text-blue-500", bg: "bg-blue-500" },
  { name: "Python (Data Analysis & Pandas)", percentage: 85, icon: Code2, color: "text-blue-400", bg: "bg-blue-400" },
  { name: "Data Visualization & Dashboards", percentage: 95, icon: LineChart, color: "text-purple-500", bg: "bg-purple-500" },
  { name: "ETL Processes & Data Pipelines", percentage: 85, icon: Network, color: "text-orange-500", bg: "bg-orange-500" },
  { name: "C++ / Dart", percentage: 80, icon: Terminal, color: "text-indigo-400", bg: "bg-indigo-400" },
  { name: "REST APIs & TMDB/Gemini Integrations", percentage: 85, icon: Globe, color: "text-cyan-400", bg: "bg-cyan-400" },
];

const SkillCard = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 rounded-2xl flex flex-col gap-4 group hover:-translate-y-2 transition-transform duration-300"
    >
      <div className="flex items-center gap-4">
        <div className={cn("p-3 rounded-xl bg-zinc-800/50", skill.color)}>
          <skill.icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h4 className="text-zinc-100 font-semibold text-lg line-clamp-1" title={skill.name}>
            {skill.name}
          </h4>
        </div>
        <span className="text-xl font-bold text-accent">{skill.percentage}%</span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.percentage}%` } : {}}
          transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
          className={cn("h-full rounded-full shadow-[0_0_10px_currentColor]", skill.bg)}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase tracking-wider text-zinc-100">
            Skills & <span className="text-gradient-accent">Expertise</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-4">Let's Explore Popular Tools, Technologies & Capabilities</p>
          <div className="w-24 h-1 bg-accent/50 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
