import Image from "next/image";
import { Cpu, RadioTower, ShieldCheck, GlobeLock } from "lucide-react";

const techStack = ["Raspberry Pi 5", "ESP32", "Python", "OpenCV"];

export default function AccessControlCaseStudyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),transparent_55%),radial-gradient(circle_at_bottom,_rgba(79,70,229,0.18),transparent_55%)]" />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        {/* Introduction */}
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-900/80 px-3 py-1 text-xs font-medium text-cyan-200 shadow shadow-black/50 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
            <span>Engineering Case Study</span>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                Dual-Factor Smart Access Control System
              </h1>
              <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
                Traditional single‑factor access systems (only RFID or only
                passwords) are vulnerable to cloning, sharing and social
                engineering attacks. This project proposes a{" "}
                <span className="text-cyan-300">dual‑factor solution</span>{" "}
                powered by a <span className="text-cyan-300">Raspberry Pi 5</span>
                {" "}and an <span className="text-cyan-300">ESP32</span>, combining
                on‑device <span className="text-cyan-300">face recognition</span>{" "}
                with <span className="text-cyan-300">RFID</span> for stronger,
                more reliable access control.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-xs shadow-lg shadow-black/40 backdrop-blur">
              <p className="mb-2 font-semibold text-slate-200">
                Tech stack overview
              </p>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((item) => (
                  <span
                    key={item}
                    className="chip border-slate-700/80 bg-slate-900/80 text-[0.7rem]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Project Audio Overview */}
        <section className="card flex flex-col gap-3 border-cyan-500/30 bg-slate-950/80">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold text-slate-100 sm:text-base">
                Project Audio Overview
              </h2>
              <p className="text-xs text-slate-300 sm:text-sm">
                Listen to an AI-generated deep dive (via NotebookLM) into the
                technical architecture and challenges of this project.
              </p>
            </div>
          </div>
          <audio
            controls
            className="mt-2 w-full rounded-xl bg-slate-900/80 p-2 text-slate-100"
          >
            <source
              src="/projects/podcast_final_project.m4a"
              type="audio/mp4"
            />
            Your browser does not support the audio element.
          </audio>
        </section>

        {/* System Architecture – The Big Picture */}
        <section className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="space-y-3">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-100 sm:text-base">
              <Cpu className="h-4 w-4 text-cyan-300" />
              System Architecture
            </h2>
            <p className="text-xs text-slate-300 sm:text-sm">
              The system is split between a{" "}
              <span className="text-cyan-300">Raspberry Pi 5</span> and an{" "}
              <span className="text-cyan-300">ESP32</span> to balance
              compute‑heavy image processing with real‑time control of
              peripherals.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300 sm:text-sm">
              <li>
                · The Raspberry Pi 5 runs the Python application,{" "}
                <span className="text-cyan-200">captures and analyzes video
                frames</span>, and makes the final decision on whether to grant
                access.
              </li>
              <li>
                · The ESP32 handles{" "}
                <span className="text-cyan-200">
                  low‑level I/O (RFID reader, LEDs, solenoid lock)
                </span>{" "}
                and reports events back to the Pi.
              </li>
              <li>
                · A lightweight communication protocol keeps the two boards
                synchronized, ensuring that the physical state of the door
                always matches the latest decision from the vision model.
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="mb-2 flex items-center justify-between text-[0.7rem] text-slate-300">
              <span className="font-mono uppercase tracking-[0.18em] text-slate-400">
                Architecture Diagram
              </span>
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/70">
              <Image
                src="/projects/system-arch.png"
                alt="System architecture: interaction between Raspberry Pi 5 and ESP32 for dual-factor access control"
                width={1200}
                height={800}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* The Hardware – The Product */}
        <section className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div className="card order-2 md:order-1">
            <div className="mb-2 flex items-center justify-between text-[0.7rem] text-slate-300">
              <span className="font-mono uppercase tracking-[0.18em] text-slate-400">
                The Hardware (The Product)
              </span>
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/70">
              <Image
                src="/projects/The_prodact.png"
                alt="Physical prototype of the dual-factor smart access control system with RC522, solenoid lock and status LEDs"
                width={1200}
                height={800}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="order-1 space-y-3 md:order-2">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-100 sm:text-base">
              <RadioTower className="h-4 w-4 text-cyan-300" />
              Hardware Overview
            </h2>
            <p className="text-xs text-slate-300 sm:text-sm">
              The hardware platform connects the RC522 RFID reader, solenoid
              lock and status LEDs through the ESP32, with the Raspberry Pi 5
              acting as the secure decision‑maker.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300 sm:text-sm">
              <li>
                · <span className="text-cyan-200">RC522</span> module reads RFID
                cards within approximately{" "}
                <span className="text-cyan-200">2&nbsp;cm</span>, ensuring
                intentional user interaction.
              </li>
              <li>
                · <span className="text-cyan-200">Solenoid lock</span> is
                driven by the ESP32 based on the Raspberry Pi&apos;s
                authorization decision.
              </li>
              <li>
                · <span className="text-cyan-200">LED indicators</span> provide
                immediate visual feedback (idle, processing, access granted /
                denied).
              </li>
            </ul>
          </div>
        </section>

        {/* Software & AI Logic + Management Interface */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-100 sm:text-base">
              <ShieldCheck className="h-4 w-4 text-cyan-300" />
              Software & AI Logic
            </h2>
            <p className="text-xs text-slate-300 sm:text-sm">
              The system uses the Python{" "}
              <span className="text-cyan-200">face_recognition</span> library on
              the Raspberry Pi 5 to identify users in real time.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300 sm:text-sm">
              <li>
                · Embeddings are generated for known users and compared against
                live camera frames.
              </li>
              <li>
                · In good lighting conditions, the system achieved around{" "}
                <span className="text-cyan-200">95% identification accuracy</span>.
              </li>
              <li>
                · Average identification and decision time is roughly{" "}
                <span className="text-cyan-200">5–10 seconds</span>, including
                camera capture, processing and ESP32 synchronization.
              </li>
            </ul>
            <div className="card mt-3">
              <div className="mb-2 text-[0.7rem] font-mono uppercase tracking-[0.18em] text-slate-400">
                Face Recognition Flow
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/70">
                <Image
                  src="/projects/Face_rec.png"
                  alt="Face recognition flow diagram showing the decision pipeline for access control"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-100 sm:text-base">
              <GlobeLock className="h-4 w-4 text-cyan-300" />
              Management Interface
            </h2>
            <p className="text-xs text-slate-300 sm:text-sm">
              A browser‑based interface is used to manage users, review access
              logs and monitor system status remotely.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300 sm:text-sm">
              <li>· Register and update authorized users and their RFID cards.</li>
              <li>· View recent access events and system states.</li>
              <li>· Provides an operator‑friendly view over the embedded system.</li>
            </ul>
            <div className="card mt-3">
              <div className="mb-2 text-[0.7rem] font-mono uppercase tracking-[0.18em] text-slate-400">
                Web Interface
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/70">
                <Image
                  src="/projects/The_web.png"
                  alt="Web interface for managing users and monitoring the access control system"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Full Process, Key Results & Challenges */}
        <section className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <h2 className="mb-3 text-sm font-semibold text-slate-100 sm:text-base">
              Full Process
            </h2>
            <ul className="space-y-1.5 text-xs text-slate-300 sm:text-sm">
              <li>· Characterization – defining security risks and user flows.</li>
              <li>· Architecture – splitting responsibilities between RPi 5 and ESP32.</li>
              <li>· Development – implementing hardware, firmware and Python services.</li>
              <li>· Integration – connecting vision, RFID and the web dashboard.</li>
              <li>· Testing – measuring accuracy, latency and reliability.</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="mb-3 text-sm font-semibold text-slate-100 sm:text-base">
              Key Results
            </h2>
            <ul className="space-y-1.5 text-xs text-slate-300 sm:text-sm">
              <li>
                · ~<span className="text-cyan-200">95%</span> face recognition
                accuracy in good lighting using the{" "}
                <span className="text-cyan-200">face_recognition</span> library.
              </li>
              <li>
                · Identification and authorization typically within{" "}
                <span className="text-cyan-200">5–10 seconds</span>, including
                communication with the ESP32 and physical actuation.
              </li>
              <li>
                · Reliable RFID reads at around{" "}
                <span className="text-cyan-200">2&nbsp;cm</span> range with the
                RC522 module.
              </li>
            </ul>
          </div>

          <div className="card">
            <h2 className="mb-3 text-sm font-semibold text-slate-100 sm:text-base">
              Challenges & Learnings
            </h2>
            <ul className="space-y-1.5 text-xs text-slate-300 sm:text-sm">
              <li>
                · <span className="text-cyan-200">Low‑light recognition:</span>{" "}
                accuracy dropped significantly in darker environments, requiring
                tuning of thresholds and consideration of additional lighting.
              </li>
              <li>
                · <span className="text-cyan-200">RPi–ESP32 sync:</span> keeping
                the communication between Raspberry Pi 5 and ESP32 synchronized
                under variable processing times was non‑trivial and required
                careful protocol design.
              </li>
              <li>
                · Balancing user experience (speed) against security and
                hardware constraints informed design decisions across the stack.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

