"use client";

import { motion } from "framer-motion";
import { Layers, Server, Blocks, Code2 } from "lucide-react";

const highlights = [
  { icon: Layers, label: "Full Stack" },
  { icon: Server, label: "DevOps" },
  { icon: Blocks, label: "Blockchain" },
  { icon: Code2, label: "DSA" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Get to know <span className="gradient-text">me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a Full Stack Developer focused on building scalable and
              efficient web applications using modern technologies. I specialize
              in developing end-to-end systems including frontend, backend APIs,
              authentication, and databases.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              I also work with DevOps practices such as version control,
              deployment, and system optimization. Alongside this, I have
              experience in blockchain development, building decentralized
              applications on Solana.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I have a strong foundation in Data Structures and Algorithms and
              basic knowledge of AI/ML, which helps me solve real-world problems
              effectively.
            </p>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="glass-hover p-6 flex flex-col items-center justify-center text-center group"
              >
                <Icon className="w-9 h-9 text-primary mb-3 transition-transform duration-300 group-hover:scale-110" />
                
                <h3 className="font-semibold text-foreground">
                  {label}
                </h3>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}