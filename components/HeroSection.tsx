"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-24 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* MAIN */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left order-2 md:order-1">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-primary text-base mb-3">
              {"// Hello, World! I'm"}
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              <span>P Rahul</span>{" "}
              <span className="gradient-text">Sai Nadh</span>
            </h1>

            {/*  Role */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Full Stack Developer
            </p>

            <p className="text-sm text-muted-foreground/60 mb-6 font-mono">
              📍 Hyderabad, India
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground mb-6 max-w-lg text-base md:text-lg"
          >
            Full-stack developer building scalable and efficient web applications.
            Focused on clean code, performance, and solving real-world problems.
          </motion.p>

          {/* Buttons */}
            <div className="flex gap-4 flex-wrap justify-center md:justify-start mb-6">
  
                <a
                    href="#projects"
                    className="border border-primary/40 text-primary px-6 py-3 rounded-lg text-sm font-semibold hover:brightness-110 transition"
                >
                View Projects
                </a>

                <a
                    href="#contact"
                    className="border border-primary/40 text-primary px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary/10 transition"
                >
                Contact Me
                </a>

            </div>

          {/* Socials */}
            <div className="flex gap-5 justify-center md:justify-start">
  
                <a
                    href="https://github.com/Rahulll066"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-lg hover:text-primary hover:border-primary transition hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                >
                <Github size={20} />
                </a>

                <a
                    href="https://www.linkedin.com/in/rahul-sai-nadh-638a21324/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-lg hover:text-primary hover:border-primary transition hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                >
                <Linkedin size={20} />
                </a>

                <a
                    href="mailto:rahulsainadhmail@gmail.com"
                    className="p-3 border border-border rounded-lg hover:text-primary hover:border-primary transition hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                >
                    <Mail size={20} />
                </a>

            </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-1 md:order-2"
            >
            <div className="w-52 h-52 md:w-72 md:h-72 relative flex items-center justify-center">
    
                <div className="absolute w-[90%] h-[90%] rounded-full bg-purple-500 blur-[60px] opacity-30" />

                <Image
                src="https://ik.imagekit.io/0tglkhk4r/Rahul?updatedAt=1774016947927"
                alt="profile"
                fill
                className="object-cover rounded-full border-4 border-purple-500/40 relative z-10"
                />

            </div>
        </motion.div>
      </div>

      {/* Arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <ArrowDown size={22} className="animate-float opacity-50" />
      </div>
    </section>
  );
}