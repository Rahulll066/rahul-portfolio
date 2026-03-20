"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Intern",
    company: "GMR Varalakshmi Foundation",
    duration: "Oct 2025 – Mar 2026",
    points: [
      "Developed staff portal for resource management",
      "Improved UI and fixed frontend bugs",
    ],
  },
  {
    role: "Web Development Team",
    company: "TEDxVJIT",
    duration: "Dec 2025 – Jan 2026",
    points: [
      "Built About page for official TEDx website",
      "Fixed UI bugs and responsive issues",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Where I've Worked
        </motion.h2>

        <div className="relative">

 
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gray-700" />

  
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute left-4 top-0 w-[2px] h-full origin-top bg-purple-500"
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-12"
              >

                <div className="absolute left-[10px] top-3 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_4px_rgba(168,85,247,0.6)] animate-pulse" />

                <div className="p-6 border border-border rounded-xl hover:border-purple-500/40 transition">

                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-purple-400 font-mono">
                      {exp.company}
                    </span>

                    <span className="text-xs text-muted-foreground font-mono">
                      {exp.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {exp.role}
                  </h3>

                  <ul className="space-y-2">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm text-muted-foreground flex gap-2"
                      >
                        <span className="text-purple-400 mt-1 text-xs">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}