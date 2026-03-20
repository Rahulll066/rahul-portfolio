"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-24 overflow-hidden">
      
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px] animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm md:text-base mb-4 tracking-wider">
            {"// Hello, World! I'm"}
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-foreground">P Rahul</span>{" "}
            <span className="gradient-text glow-text">Sai Nadh</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Full Stack Developer
          </p>

          <p className="text-muted-foreground/60 mb-8 font-mono text-sm">
            📍 Hyderabad, India
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed"
        >
          Building scalable web applications with modern technologies.
          Passionate about clean code, blockchain, and solving real-world problems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold glow-button hover:brightness-110 transition-all"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-primary/30 text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 hover:border-primary/60 transition-all"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: "https://github.com/Rahulll066", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/rahul-sai-nadh", label: "LinkedIn" },
            { icon: Mail, href: "mailto:rahulsainadhmail@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="text-muted-foreground/40 hover:text-primary transition-colors animate-float"
          >
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}