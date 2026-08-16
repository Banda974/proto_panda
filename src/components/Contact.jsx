import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./Icons";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    const templateParams = {
      from_name: formData.get("from_name"),
      from_email: formData.get("from_email"),
      message: formData.get("message"),
    };

    emailjs
      .send(
        "service_x0nwfdl",
        "template_g4a3jgb",
        templateParams,
        "MyNap7QUeq8p9piqp"
      )
      .then(() => {
        setStatus("success");
        e.target.reset();

        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");

        // Reset error message after 5 seconds
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase tracking-wider text-zinc-100">
            Get In <span className="text-gradient-accent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-accent/50 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-zinc-100 mb-6">Let's Connect</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Whether you have a question about data analytics, want to collaborate on a project, or need a mentor, feel free to reach out. I'm always open to discussing new opportunities and ideas.
              </p>
              
              <div className="flex flex-col gap-6">
                <a href="mailto:moh20062006a@gmail.com" className="flex items-center gap-4 group">
                  <div className="p-4 rounded-xl bg-zinc-800/50 text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 font-medium">Email</p>
                    <p className="text-zinc-200 font-medium truncate max-w-[200px] sm:max-w-none">moh20062006a@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+201040413911" className="flex items-center gap-4 group">
                  <div className="p-4 rounded-xl bg-zinc-800/50 text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 font-medium">Phone</p>
                    <p className="text-zinc-200 font-medium">+20 1040413911</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="p-4 rounded-xl bg-zinc-800/50 text-accent transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 font-medium">Location</p>
                    <p className="text-zinc-200 font-medium">Cairo / Bani Suef, Egypt</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8 pt-8 border-t border-zinc-800">
                <a 
                  href="https://www.linkedin.com/in/mohamed-omar-9105933aa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-800 text-zinc-400 hover:bg-[#0077b5] hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/Banda974" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="from_name" className="text-sm font-medium text-zinc-400">Your Name</label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="from_email" className="text-sm font-medium text-zinc-400">Your Email</label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  required
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-400">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed ${
                  status === "error"
                    ? "bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                    : "bg-accent text-background shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)]"
                }`}
              >
                {status === "idle" && (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
                {status === "loading" && (
                  <>
                    <span className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Message sent successfully! ✓</span>
                  </>
                )}
                {status === "error" && (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to send. Please try again.</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
