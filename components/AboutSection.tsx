"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Blocks } from "lucide-react";

const highlights = [
  { icon: Globe, label: "Frontend", desc: "React, Next.js, Tailwind" },
  { icon: Database, label: "Backend", desc: "Node.js, Express, REST APIs" },
  { icon: Code2, label: "DSA", desc: "Java, C++, Problem Solving" },
  { icon: Blocks, label: "Blockchain", desc: "Solana, Web3.js, dApps" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">
            {"// 01. About Me"}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Get to know <span className="gradient-text">me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a Full Stack Developer experienced in building scalable web applications
              using modern technologies. I have a strong foundation in Data Structures and
              Algorithms, backend systems, REST APIs, authentication, and blockchain development.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I also have basic knowledge of AI/ML and enjoy solving real-world problems.
              I'm constantly learning and building to push the boundaries of what's possible
              on the web.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="glass-hover p-5 text-center">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{label}</h3>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}