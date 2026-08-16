import { motion } from "framer-motion";
import { ArrowRight, Database, BarChart3, Users } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 text-center lg:text-left z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 w-fit mx-auto lg:mx-0">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Available for work</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="text-zinc-100">Hi, I'm </span>
            <br className="hidden sm:block" />
            <span className="text-gradient-accent drop-shadow-[0_0_15px_rgba(0,255,136,0.3)]">
              Mohamed Omar Sayed
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            <strong className="text-zinc-200">Data Analyst & Technical Mentor</strong> | Transforming Complex Datasets into Actionable Business Intelligence & Mentoring the Next Gen of Tech Talent.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-4">
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 py-3 rounded-full bg-accent text-background font-bold flex items-center gap-2 overflow-hidden shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.6)]"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </a>
            <a href="#projects" className="px-6 py-3 rounded-full glass text-zinc-200 font-medium hover:bg-zinc-800/50 transition-colors">
              View Work
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto lg:mx-0 w-full max-w-md aspect-square"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-[100px] z-0" />
          
          {/* Main Photo Container */}
          <div className="relative z-10 w-full h-full rounded-[2rem] glass-card overflow-hidden border-accent/20 p-2">
            <div className="w-full h-full bg-zinc-800/80 rounded-[1.5rem] overflow-hidden flex items-center justify-center relative">
              {/* Profile Photo */}
              <img src="/profile.jpg" alt="Mohamed Omar Sayed" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl flex items-center gap-3 border-accent/20 z-20"
          >
            <div className="p-2 bg-accent/10 rounded-xl text-accent">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-zinc-400 font-medium">Expert in</p>
              <p className="text-sm text-zinc-100 font-bold">SQL & Pipelines</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 -left-12 glass-card p-4 rounded-2xl flex items-center gap-3 border-accent/20 z-20"
          >
            <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-zinc-400 font-medium">Power BI</p>
              <p className="text-sm text-zinc-100 font-bold">Dashboards</p>
            </div>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-4 right-8 glass-card p-4 rounded-2xl flex items-center gap-3 border-accent/20 z-20"
          >
            <div className="p-2 bg-purple-500/10 rounded-xl text-purple-400">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-zinc-400 font-medium">Mentored</p>
              <p className="text-sm text-zinc-100 font-bold">100+ Students</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
