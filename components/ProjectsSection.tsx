"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "NeuroCareAI",
    description:
      "AI-powered platform for early dementia detection with backend ML workflow integration.",
    tech: ["MERN", "AI/ML"],
    features: ["AI detection", "Backend processing"],
    live: "#",
    github: "#",
  },
  {
    title: "PocketPay",
    description:
      "Digital payment platform with secure authentication and transaction management.",
    tech: ["Next.js", "NextAuth", "PostgreSQL", "Tailwind"],
    features: ["Authentication", "Transactions"],
    live: "#",
    github: "#",
  },
  {
    title: "Solana Dev dApp",
    description:
      "Blockchain dApp built on Solana Devnet with wallet integration and transactions.",
    tech: ["Solana", "Web3.js"],
    features: [
      "Wallet connection",
      "Balance display",
      "Airdrop",
      "Message signing",
    ],
    live: "#",
    github: "#",
  },
  {
    title: "Orbit",
    description:
      "Full stack productivity dashboard for managing links and notes.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB"],
    features: ["JWT authentication", "Dashboard UI"],
    live: "#",
    github: "#",
  },
  {
    title: "TEDxVJIT Website",
    description:
      "Contributed to official TEDx VJIT event website development.",
    tech: ["React", "Next.js"],
    features: ["Event pages", "Responsive design"],
    live: "#",
    github: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">
            {"// 03. Projects"}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-hover p-6 flex flex-col group"
            >
              
              {/* Title + Links */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <div className="flex gap-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.features.map((f) => (
                  <span key={f} className="text-xs text-muted-foreground/70">
                    • {f}
                  </span>
                ))}
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-primary/80"
                  >
                    {t}
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