"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSolana,
  SiJavascript,
  SiCplusplus,
  SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "REST APIs", icon: GitBranch, color: "#22c55e" },
      { name: "Authentication", icon: GitBranch, color: "#f59e0b" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#00758F" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: GitBranch, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Deployment", icon: GitBranch, color: "#22c55e" },
    ],
  },
  {
    title: "Blockchain",
    skills: [
      { name: "Solana", icon: SiSolana, color: "#9945FF" },
      { name: "Web3.js", icon: SiJavascript, color: "#F7DF1E" },
      { name: "dApp Dev", icon: SiSolana, color: "#14F195" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "DSA", icon: SiCplusplus, color: "#00599C" },
      { name: "System Design", icon: GitBranch, color: "#22c55e" },
      { name: "AI/ML", icon: SiJavascript, color: "#F7DF1E" },
    ],
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
          

          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-full border border-primary/20 font-mono transition-all duration-300 hover:scale-110"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.05)",
                        boxShadow: `0 0 10px ${skill.color}33`,
                      }}
                    >
                      <Icon
                        className="text-sm"
                        style={{ color: skill.color }}
                      />
                      <span className="text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}