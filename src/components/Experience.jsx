import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Freelance Data Analyst",
    company: "Upwork",
    date: "Sep 2024 – Present",
    description: "Custom dashboards, BI solutions, and client data analysis.",
  },
  {
    role: "Data Analyst",
    company: "Micro1",
    date: "Jun 2026 – Present",
    description: "Datasets analysis, cross-functional team collaboration, optimization of data accuracy.",
  },
  {
    role: "Founder & Technical Mentor",
    company: "Barakat Analytics",
    date: "Nov 2025 – Present",
    description: "Designed practical data analytics curriculum covering Power BI, SQL, Python, and Excel.",
  },
  {
    role: "Technical Mentor",
    company: "Al-Walaa Academy & Future Academy",
    date: "2025 – Present",
    description: "Mentored students in advanced Excel, SQL, BI tools, and evaluated capstone projects.",
  },
];

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 sm:pl-0"
    >
      {/* Timeline Dot (Mobile) */}
      <div className="sm:hidden absolute left-0 top-2 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-[0_0_10px_rgba(0,255,136,0.5)] z-10" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 w-full group">
        {/* Timeline Dot (Desktop) */}
        <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-700 group-hover:bg-accent border-4 border-background shadow-[0_0_10px_rgba(0,0,0,0)] group-hover:shadow-[0_0_10px_rgba(0,255,136,0.5)] transition-all duration-300 z-10" />

        {/* Content Box */}
        <div className={`w-full sm:w-[calc(50%-2rem)] ${index % 2 === 0 ? "sm:text-right sm:pr-8" : "sm:ml-auto sm:pl-8"}`}>
          <div className="glass-card p-6 rounded-2xl hover:border-accent/30 transition-colors">
            <h3 className="text-xl font-bold text-zinc-100 mb-1">{experience.role}</h3>
            
            <div className={`flex items-center gap-2 text-accent font-medium mb-3 ${index % 2 === 0 ? "sm:justify-end" : ""}`}>
              <Briefcase className="w-4 h-4" />
              <span>{experience.company}</span>
            </div>
            
            <div className={`flex items-center gap-2 text-sm text-zinc-500 mb-4 ${index % 2 === 0 ? "sm:justify-end" : ""}`}>
              <Calendar className="w-4 h-4" />
              <span>{experience.date}</span>
            </div>
            
            <p className="text-zinc-400 leading-relaxed text-sm">
              {experience.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase tracking-wider text-zinc-100">
            Experience & <span className="text-gradient-accent">Mentorship</span>
          </h2>
          <div className="w-24 h-1 bg-accent/50 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-2 sm:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 -translate-x-1/2" />
          
          <div className="flex flex-col gap-8 sm:gap-12">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
