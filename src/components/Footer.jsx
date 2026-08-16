import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./Icons";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-background py-8 px-4 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm font-medium">
          © 2026 Mohamed Omar Sayed. All Rights Reserved.
        </p>
        
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/mohamed-omar-9105933aa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-accent transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/Banda974"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-accent transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
