"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  HandHeart,
  Gamepad2,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  Cloud,
  Cpu,
  FileUser
} from "lucide-react";

const projects = [
  {
    title: "Dual-Factor Smart Access Control System",
    icon: ShieldCheck,
    description:
      "End‑to‑end dual‑factor access control solution combining face recognition and RFID on Raspberry Pi 5 + ESP32, with a web‑based dashboard.",
    stack: ["Raspberry Pi 5", "ESP32", "Python", "OpenCV", "RFID"],
    href: "/projects/access-control"
  },
  {
    title: "AWS Serverless CRM System",
    icon: Cloud,
    description:
      "A cloud-native solution for managing customer relations, featuring automated meeting reminders, secure authentication, and scalable NoSQL data storage.",
    stack: [
      "AWS Lambda",
      "DynamoDB",
      "Cognito",
      "API Gateway",
      "SES",
      "Node.js"
    ],
    href: "/projects/cloud-crm"
  },
  {
    title: "CPL Language Compiler",
    icon: Code2,
    description:
      "A complete compiler from scratch using Flex & Bison, featuring lexical and syntax analysis for a custom C-like language.",
    stack: ["C", "Flex", "Bison", "Unix"],
    href: "/projects/compiler"
  },
  {
    title: "Sign Language Translation Tool",
    icon: HandHeart,
    description:
      "Computer‑vision based tool that interprets sign language gestures and translates them into text to improve accessibility.",
    stack: ["Python", "Computer Vision", "ML", "OpenCV"]
  },
  {
    title: "7‑Boom FPGA Game",
    icon: Gamepad2,
    description:
      "Interactive counting game implemented on FPGA, exploring digital design, timing constraints and real‑time logic.",
    stack: ["VHDL / Verilog", "FPGA", "Digital Design"]
  }
];

const skills = {
  languages: [
    "C",
    "C++",
    "Python",
    "Verilog / VHDL",
    "JavaScript / TypeScript",
    "Bash"
  ],
  tools: [
    "Git & GitHub",
    "Linux",
    "Docker",
    "Cloud (AWS / Azure basics)",
    "FPGA Toolchains (Xilinx, Intel)",
    "CI/CD & Automation",
    "Monitoring & Observability"
  ]
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),transparent_55%),radial-gradient(circle_at_bottom,_rgba(79,70,229,0.16),transparent_55%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
        {/* Hero */}
        <section className="flex flex-1 flex-col justify-center gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/80 px-3 py-1 text-xs font-medium text-cyan-200 shadow shadow-black/50 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              <span>Computer Engineer · Software & Cloud</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
                Tohar Hermon
              </h1>
              <p className="text-lg font-medium text-cyan-300 sm:text-xl">
                Computer Engineer
              </p>
              <p className="max-w-xl text-sm text-slate-300 sm:text-base">
                I design and build reliable software systems that bridge
                low‑level engineering with modern cloud infrastructure.
                Experienced in security‑oriented environments, embedded
                development and FPGA design, with a strong academic background
                in computer engineering.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:bg-cyan-300"
              >
                <Code2 className="h-4 w-4" />
                View Projects
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-5 py-2 text-sm font-medium text-slate-100 shadow shadow-black/50 transition hover:border-cyan-400/60 hover:text-cyan-100"
              >
                <BriefcaseBusiness className="h-4 w-4" />
                Experience
              </a>
              <motion.a
                href="/Tohar_Hermon_CV.pdf"
                download
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full border border-indigo-500/70 bg-slate-950/60 px-5 py-2 text-sm font-semibold text-indigo-200 shadow shadow-indigo-900/40 transition-colors hover:border-indigo-400 hover:bg-indigo-500/10"
              >
                <FileUser className="h-4 w-4" />
                Download CV
              </motion.a>
              <motion.a
                href="/grade_sheet.pdf"
                download
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/70 bg-slate-950/60 px-5 py-2 text-sm font-semibold text-emerald-200 shadow shadow-emerald-900/40 transition-colors hover:border-emerald-400 hover:bg-emerald-500/10"
              >
                <GraduationCap className="h-4 w-4" />
                Download Grades
              </motion.a>
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-slate-300">
              <span className="chip gap-1">
                <Cloud className="h-3 w-3 text-cyan-300" />
                Cloud‑aware development
              </span>
              <span className="chip gap-1">
                <Cpu className="h-3 w-3 text-indigo-300" />
                Embedded & FPGA
              </span>
            </div>
          </div>

          <div className="mt-6 w-full max-w-md lg:mt-0">
            <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-2xl shadow-black/50 backdrop-blur">
              <div className="absolute inset-px rounded-3xl bg-gradient-to-br from-cyan-500/15 via-transparent to-indigo-500/20 opacity-70 mix-blend-screen" />

              <div className="relative space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
                    CURRENT FOCUS
                  </span>
                  <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[0.65rem] font-semibold text-emerald-300">
                    Building & Securing Systems
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="card">
                    <p className="mb-2 text-[0.7rem] font-semibold text-slate-300">
                      Software & Cloud
                    </p>
                    <ul className="space-y-1 text-[0.7rem] text-slate-300">
                      <li>· Backend‑oriented development</li>
                      <li>· Cloud‑native thinking</li>
                      <li>· Reliability & monitoring</li>
                    </ul>
                  </div>
                  <div className="card">
                    <p className="mb-2 text-[0.7rem] font-semibold text-slate-300">
                      Hardware‑aware
                    </p>
                    <ul className="space-y-1 text-[0.7rem] text-slate-300">
                      <li>· FPGA & digital logic</li>
                      <li>· Security mindset</li>
                      <li>· Real‑time constraints</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-100 sm:text-xl">
                Featured Projects
              </h2>
              <p className="text-xs text-slate-400 sm:text-sm">
                A selection of academic and personal work that highlight how I
                think about systems, security and user experience.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;
              const hasLink = "href" in project && project.href;

              const content = (
                <>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-cyan-300">
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="text-sm font-semibold text-slate-100">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  {"image" in project && project.image ? (
                    <div className="mb-3 overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/80">
                      <Image
                        src={project.image}
                        alt={`${project.title} architecture`}
                        width={640}
                        height={360}
                        className="h-32 w-full object-cover object-center"
                      />
                    </div>
                  ) : null}
                  <p className="mb-4 text-xs text-slate-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[0.65rem] text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              );

              return hasLink ? (
                <Link
                  key={project.title}
                  href={project.href as string}
                  className="card block hover:border-cyan-400/70 hover:text-slate-100"
                >
                  {content}
                </Link>
              ) : (
                <article key={project.title} className="card">
                  {content}
                </article>
              );
            })}
          </div>
        </section>

        {/* Experience & Education */}
        <section
          id="experience"
          className="grid gap-5 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]"
        >
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-100 sm:text-xl">
              Experience
            </h2>
            <article className="card">
              <div className="mb-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-cyan-300">
                    <BriefcaseBusiness className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-100">
                      Security Shift Supervisor
                    </h3>
                    <p className="text-xs text-slate-300">NVIDIA</p>
                  </div>
                </div>
                <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[0.65rem] text-slate-300">
                  Security · Operations · Leadership
                </span>
              </div>
              <p className="mb-3 text-xs text-slate-300">
                Overseeing security operations in a high‑tech, mission‑critical
                environment. Responsible for coordinating shifts, responding to
                incidents and maintaining high standards of reliability and
                safety.
              </p>
              <ul className="space-y-1 text-[0.7rem] text-slate-300">
                <li>· Incident response and root‑cause thinking</li>
                <li>· Cross‑functional coordination under pressure</li>
                <li>· Process discipline and continuous improvement</li>
              </ul>
            </article>
          </div>

          <div className="space-y-4" id="education">
            <h2 className="text-lg font-semibold text-slate-100 sm:text-xl">
              Education
            </h2>
            <article className="card">
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-indigo-300">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-100">
                    BSc in Computer Engineering
                  </h3>
                  <p className="text-xs text-slate-300">Ruppin Academic Center</p>
                </div>
              </div>
              <ul className="mt-2 space-y-1 text-[0.7rem] text-slate-300">
                <li>· Dean&apos;s List 2022–2025</li>
                <li>· GPA 87</li>
                <li>
                  · Focus on digital systems, computer architecture, software
                  engineering and networking
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-100 sm:text-xl">
                Skills
              </h2>
              <p className="text-xs text-slate-400 sm:text-sm">
                A toolbox shaped by academic work, hands‑on projects and
                operating in production‑grade environments.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="card">
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-cyan-300">
                  <Code2 className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-semibold text-slate-100">
                  Languages
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((lang) => (
                  <span
                    key={lang}
                    className="chip border-slate-700/70 bg-slate-900/80 text-[0.7rem]"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </article>

            <article className="card">
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-indigo-300">
                  <Cpu className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-semibold text-slate-100">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool) => (
                  <span
                    key={tool}
                    className="chip border-slate-700/70 bg-slate-900/80 text-[0.7rem]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <footer className="mt-6 border-t border-slate-800/80 pt-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Tohar Hermon. Built with Next.js,
            Tailwind CSS and Lucide icons.
          </p>
        </footer>
      </div>
    </main>
  );
}

