import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone, User } from "lucide-react";

const stats = [
  { label: "Experience", value: "2+ Years" },
  { label: "Data & BI Projects", value: "10+" },
  { label: "Students Mentored", value: "100+" },
  { label: "Satisfaction", value: "99%" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient-accent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent/50 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Photo & CV */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="glass-card rounded-[2rem] p-2 border-accent/20 relative group">
              <div className="absolute inset-0 bg-accent/10 blur-xl rounded-[2rem] group-hover:bg-accent/20 transition-colors duration-500 z-0" />
              <div className="aspect-[4/5] bg-zinc-800 rounded-[1.5rem] relative z-10 overflow-hidden flex items-center justify-center">
                <img src="/profile.jpg" alt="Mohamed Omar Sayed" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <a
              href="/cv.pdf"
              download
              className="w-full"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl glass border-accent/30 text-accent font-semibold flex items-center justify-center gap-2 hover:bg-accent/10 transition-colors"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.button>
            </a>
          </motion.div>

          {/* Right Column: Bio & Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-zinc-100">
                Transforming Data into Insights
              </h3>
              <p className="text-zinc-400 leading-relaxed text-lg">
                I am an analytical and results-driven Data Analyst & Technical Mentor with a strong foundation in Computer Science and AI from Bani Suef University. I specialize in Data Analytics, transforming complex raw data into clear, actionable business insights, and empowering aspiring analysts through practical mentorship.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass p-4 rounded-xl flex items-center gap-4">
                <div className="p-3 bg-zinc-800/50 rounded-lg text-accent">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium">Name</p>
                  <p className="text-zinc-200 font-medium">Mohamed Omar Sayed</p>
                </div>
              </div>
              <div className="glass p-4 rounded-xl flex items-center gap-4">
                <div className="p-3 bg-zinc-800/50 rounded-lg text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium">Location</p>
                  <p className="text-zinc-200 font-medium">Cairo / Bani Suef, Egypt</p>
                </div>
              </div>
              <div className="glass p-4 rounded-xl flex items-center gap-4">
                <div className="p-3 bg-zinc-800/50 rounded-lg text-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium">Email</p>
                  <a href="mailto:moh20062006a@gmail.com" className="text-zinc-200 font-medium hover:text-accent transition-colors truncate block max-w-[200px]">
                    moh20062006a@gmail.com
                  </a>
                </div>
              </div>
              <div className="glass p-4 rounded-xl flex items-center gap-4">
                <div className="p-3 bg-zinc-800/50 rounded-lg text-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium">Phone</p>
                  <a href="tel:+201040413911" className="text-zinc-200 font-medium hover:text-accent transition-colors">
                    +20 1040413911
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stat Counter Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="glass-card p-4 rounded-xl text-center flex flex-col justify-center border-t-accent/20"
                >
                  <h4 className="text-3xl font-bold text-accent mb-2">{stat.value}</h4>
                  <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
