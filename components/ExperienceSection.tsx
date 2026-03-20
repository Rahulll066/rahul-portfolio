"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Web Development Team",
    company: "TEDxVJIT",
    points: [
      "Built About page for official TEDx website",
      "Fixed UI bugs and responsive issues",
    ],
  },
  {
    role: "Intern",
    company: "GMR Varalakshmi Foundation",
    points: [
      "Developed staff portal for resource management",
      "Improved UI and fixed frontend bugs",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">
            {"// 04. Experience"}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Where I've <span className="gradient-text">Worked</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-4 top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="glass-hover p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={16} className="text-primary" />
                    <span className="text-sm text-primary font-mono">
                      {exp.company}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {exp.role}
                  </h3>

                  <ul className="space-y-2">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5 text-xs">
                          ▹
                        </span>
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
