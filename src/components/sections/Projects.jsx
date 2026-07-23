import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Projects() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 75%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
    restDelta: 0.001,
  });

  // GUA UDAH TAMBAHIN PROJECT KE-3 LU DI SINI BIAR KARTUNYA MUNCUL!
  const projectList = [
    {
      id: 1,
      title: "Guru Cerdas E-Learning",
      tech: "React.js • Vite • JavaScript",
      description:
        "Platform e-learning interaktif yang dirancang dengan sistem navigasi yang mulus dan antarmuka yang responsif untuk pengalaman belajar modern.",
      link: "#",
    },
    {
      id: 2,
      title: "Nusantara Burger",
      tech: "HTML • CSS • GitHub Pages",
      description:
        "Website statis profil kuliner yang di-deploy secara presisi. Menampilkan desain visual yang menggugah selera dengan performa pemuatan kilat.",
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Anrai",
      tech: "React.js • Vite • JavaScript",
      description:
        "Website portofolio yang dirancang dengan desain visual yang modern dan responsif. Menampilkan informasi tentang penulis dan projek yang dia kerjakan.",
      link: "#",
    },
  ];

  return (
    <section
      id="proyek"
      ref={containerRef}
      className="relative w-full bg-[#111111] py-32 z-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-50 pointer-events-none flex justify-center items-start">
        {/* === RUTE KHUSUS LAPTOP / DESKTOP === */}
        <svg
          className="hidden md:block w-full h-full opacity-90"
          // Tinggi kanvas diubah jadi 1600 biar nampung 3 kartu project tanpa kepotong
          viewBox="0 -10 990 1600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            // PERHATIKAN PERUBAHANNYA DI SINI BRO:
            // M 750,-10   = Mulai dari kanan atas (titik aman).
            // C 750,250   = KARETNYA DITARIK TURUN DULU KE Y=250! (Biar nggak melintang horizontal).
            // 150,150 250,500 = Baru ditarik ke kiri (150) dan mendarat di Project 1 (250,500).
            d="M 750,-10 C 750,250 150,150 250,500 C 350,750 900,650 750,900 C 600,1100 150,1100 250,1350"
            fill="none"
            stroke="#bef264"
            strokeWidth="4"
            strokeLinecap="round"
            className="drop-shadow-[0_0_8px_rgba(190,242,100,0.8)]"
            style={{ pathLength: smoothProgress }}
          />
        </svg>

        {/* === RUTE KHUSUS HP === */}
        <svg
          className="block md:hidden w-full h-full opacity-90"
          viewBox="0 0 400 1600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M 350,0 C 350,200 50,150 120,500 C 180,800 350,750 250,1100 C 150,1300 50,1350 120,1550"
            fill="none"
            stroke="#bef264"
            strokeWidth="4"
            strokeLinecap="round"
            className="drop-shadow-[0_0_8px_rgba(190,242,100,0.8)]"
            style={{ pathLength: smoothProgress }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="mb-24 flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-zinc-500 tracking-[0.2em] text-sm uppercase font-black">
              Karya & Implementasi
            </h2>
            <div className="w-12 h-[3px] bg-lime-400"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            Eksplorasi <span className="text-lime-400">Digital.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mt-12">
          {projectList.map((project, index) => (
            <div
              key={project.id}
              className={`relative group w-full p-8 md:p-10 flex flex-col justify-between bg-[#1a1a1a]/80 backdrop-blur-sm rounded-3xl border border-zinc-800/80 hover:border-lime-400/50 transition-colors duration-500 ${
                index % 2 === 0 ? "md:-translate-y-12" : "md:translate-y-12"
              }`}
            >
              <div className="relative z-10">
                <p className="text-lime-400 font-mono text-sm mb-4 tracking-wider font-bold">
                  {project.tech}
                </p>
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-lime-300 transition-colors">
                  {project.title}
                </h4>
                <p className="text-zinc-400 leading-relaxed font-medium mb-8">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 pointer-events-auto w-fit">
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest hover:text-lime-400 transition-colors"
                >
                  Lihat Detail
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
