"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "NeuroCareAI",
    description:
      "AI-powered platform for early dementia detection with backend ML workflow integration.",
    tech: ["MERN", "AI/ML"],
    image: "https://ik.imagekit.io/0tglkhk4r/Projects/Screenshot%202026-03-20%20195359.png",
    live: "https://neuro-care-ai.vercel.app/",
    github: "https://github.com/Rahulll066/NeuroCareAI",
  },
  {
    title: "PocketPay",
    description:
      "Digital payment platform with secure authentication and transaction management.",
    tech: ["Next.js", "NextAuth", "PostgreSQL", "Tailwind"],
    image: "https://ik.imagekit.io/0tglkhk4r/Projects/Screenshot%202026-03-20%20195539.png?updatedAt=1774016791108",
    live: "https://pocketpay-pearl.vercel.app/",
    github: "https://github.com/Rahulll066/PocketPay",
  },
  {
    title: "SolanaDev",
    description:
      "Blockchain dApp built on Solana Devnet with wallet integration.",
    tech: ["Solana", "Web3.js"],
    image: "https://ik.imagekit.io/0tglkhk4r/Projects/Screenshot%202026-03-20%20195602.png?updatedAt=1774016791470",
    live: "https://solana-dev-peach.vercel.app/",
    github: "https://github.com/Rahulll066/SolanaDev",
  },
  {
    title: "Orbit",
    description:
      "Full stack productivity dashboard for managing links and notes.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://ik.imagekit.io/0tglkhk4r/Projects/Screenshot%202026-03-20%20195445.png?updatedAt=1774016791183",
    live: "https://orbit-zeta-one.vercel.app/",
    github: "https://github.com/Rahulll066/Orbit",
  },
  {
    title: "TEDxVJIT Website",
    description:
      "Contributed to official TEDx VJIT event website development.",
    tech: ["React", "Next.js"],
    image: "https://ik.imagekit.io/0tglkhk4r/Projects/Screenshot%202026-03-20%20195514.png?updatedAt=1774016791353",
    live: "https://www.tedxvjit.in/",
    github: "https://github.com/Rahulll066/TedxVjit-2025",
  },
  {
    title: "Play Zone",
    description:
      "Created a real-time multiplayer gaming application using Socket.IO.",
    tech: ["HTML", "CSS"],
    image: "https://ik.imagekit.io/0tglkhk4r/Projects/Screenshot%202026-06-12%20150811.png",
    live: "https://playzone-realtime-multiplayer.vercel.app/",
    github: "https://github.com/Rahulll066/PlayZone",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
              </div>

              <div className="p-5 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-white">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                        {project.title}
                    </a>
                   </h3>

                  <div className="flex gap-2">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition"
                    >
                      <ExternalLink size={18} />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/40 transition-all rounded-xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}