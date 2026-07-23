import React from "react";
import { motion } from "framer-motion";

export default function TechStack() {
  // Susunan core arsenal lu
  const techArsenal = [
    "React.js",
    "Vite",
    "JavaScript",
    "PyTorch",
    "YOLO",
    "Google Colab",
    "Vercel",
    "HTML & CSS",
  ];

  // Gandakan array biar efek infinite scroll-nya nyambung terus dan gak putus
  const duplicatedTech = [...techArsenal, ...techArsenal, ...techArsenal];

  return (
    <section className="relative w-full bg-zinc-950 py-16 md:py-24 overflow-hidden z-20">
      {/* Garis batas tipis neon untuk pemanis */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs font-black mb-8 md:mb-12">
          Core Arsenal & Technologies
        </p>

        {/* Slider Wrapper */}
        <div className="w-full flex overflow-hidden whitespace-nowrap">
          <motion.div
            className="flex gap-12 md:gap-20 items-center px-6"
            // Animasi geser ke kiri tanpa henti
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {duplicatedTech.map((tech, index) => (
              <div key={index} className="flex items-center gap-12 md:gap-20">
                <span className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 opacity-80 hover:opacity-100 transition-opacity cursor-default">
                  {tech}
                </span>
                {/* Separator Titik */}
                <span className="text-emerald-500 text-2xl md:text-4xl">•</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
    </section>
  );
}
