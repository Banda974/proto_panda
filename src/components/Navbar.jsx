import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { LinkedinIcon as Linkedin } from "./Icons";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActive(navLinks.find(l => l.href === `#${section.id}`)?.name || "Home");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <nav
        className={cn(
          "flex items-center gap-1 sm:gap-2 px-4 py-2 rounded-full transition-all duration-300",
          scrolled ? "glass shadow-xl shadow-accent/5 border-accent/20" : "bg-transparent"
        )}
      >
        <div className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className="relative px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium rounded-full transition-colors"
            >
              <span
                className={cn(
                  "relative z-10 transition-colors",
                  active === link.name ? "text-background font-semibold" : "text-zinc-400 hover:text-zinc-100"
                )}
              >
                {link.name}
              </span>
              {active === link.name && (
                <motion.div
                  layoutId="navbar-active"
                  className="absolute inset-0 bg-accent rounded-full shadow-[0_0_10px_rgba(0,255,136,0.5)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>
        
        {/* Social Links / Toggles Divider */}
        <div className="flex items-center gap-2 border-l border-zinc-700 pl-2 sm:pl-4">
          <a
            href="https://www.linkedin.com/in/mohamed-omar-9105933aa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-[#0077b5]"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
