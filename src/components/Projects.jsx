import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "./Icons";

const projects = [
  {
    title: "Movies Dataset Explorer & API Integration",
    description: "Integrated the TMDB API to fetch, process, and analyze real-time data regarding trending and top-rated movies with advanced search and filtering algorithms.",
    tags: ["Python", "TMDB API", "REST API", "Data Analysis"],
    demoLink: "https://banda974.github.io/Mohamed_Omar_Sayed/",
    githubLink: "#",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "E-Commerce Data Management & Pipeline",
    description: "Engineered backend data flow and RESTful API endpoints, tested rigorously via Postman to ensure seamless data retrieval, state management, and analytics readiness.",
    tags: ["SQL", "REST API", "Postman", "Data Engineering"],
    demoLink: "#",
    githubLink: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "AI Chatbot Data Pipeline (Gemini API)",
    description: "Intelligent conversational system built leveraging Google's Gemini API to process complex academic queries using Clean Architecture principles.",
    tags: ["Python", "Gemini API", "AI Pipeline", "Clean Architecture"],
    demoLink: "#",
    githubLink: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group glass-card rounded-[2rem] overflow-hidden flex flex-col h-full border-zinc-800 hover:border-accent/50 transition-colors"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900/40 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Hover Overlay Buttons */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4">
          <a
            href="#!"
            onClick={(e) => e.preventDefault()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-accent text-background hover:scale-110 transition-transform"
            title="Live Preview"
          >
            <ExternalLink className="w-6 h-6" />
          </a>
          <a
            href="#!"
            onClick={(e) => e.preventDefault()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:scale-110 transition-all"
            title="GitHub Code"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col gap-4">
        <h3 className="text-xl font-bold text-zinc-100 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed flex-1">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-300 border border-zinc-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase tracking-wider text-zinc-100">
            Featured <span className="text-gradient-accent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent/50 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
