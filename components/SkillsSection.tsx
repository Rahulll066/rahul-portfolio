"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    title: "Languages",
    skills: ["Java", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Blockchain",
    skills: ["Solana", "Web3.js", "dApp Development"],
  },
  {
    title: "Tools & Concepts",
    skills: ["Git", "GitHub", "DSA", "AI/ML Basics"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">
            {"// 02. Skills"}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-hover p-6"
            >
              <h3 className="font-semibold text-primary mb-4 font-mono text-sm">
                {`{${cat.title}}`}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-mono transition-all hover:bg-primary/20 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}