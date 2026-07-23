import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LanyardCard from "../react-bits/LanyardCard";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "start 0%"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(12% 12% 12% 12% round 50px)", "inset(0% 0% 0% 0% round 0px)"],
  );

  return (
    <section
      id="tentang"
      ref={containerRef}
      className="relative w-full bg-[#111111] pt-[15vh] pb-[5vh] z-20"
    >
      <motion.div
        style={{ clipPath }}
        className="w-full bg-white text-zinc-900 flex flex-col items-center pt-20 lg:pt-24 pb-32 will-change-transform"
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_380px_1fr] gap-16 lg:gap-0 relative z-10">
          {/* KOLOM KIRI: Mental Baja */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right pr-0 lg:pr-8 pt-4 lg:pt-28">
            <div className="flex items-center justify-center lg:justify-end gap-4 mb-6">
              <h2 className="text-zinc-500 tracking-[0.2em] text-sm uppercase font-black">
                Mental Baja
              </h2>
              <div className="w-12 h-[3px] bg-emerald-500 hidden lg:block"></div>
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-zinc-950 leading-tight mb-6 tracking-tighter">
              Ketangguhan di <span className="text-zinc-400">Jalanan.</span>
            </h3>

            <div className="space-y-4 text-zinc-600 text-lg leading-relaxed font-medium">
              <p>
                Etos kerja saya ditempa di dua dunia yang berbeda. Di lapangan,
                saya mendedikasikan waktu sebagai kurir pengantar.
              </p>
              <p>
                Setiap rute mengajarkan saya tentang kecepatan, navigasi, dan
                daya juang untuk terus melangkah walau keadaan tidak selalu
                berpihak.
              </p>
              <p>
                Logika dan ketepatan yang saya pelajari di jalanan kini saya
                terapkan dalam dunia digital, membangun aplikasi web yang
                responsif dan efisien.
              </p>
            </div>
          </div>

          <div
            className={`
            relative flex justify-center w-full z-30
            ${isMobile ? "min-h-[400px] mt-4" : "min-h-[550px] lg:min-h-[700px] lg:-translate-x-[50px]"}
          `}
          >
            <div className="w-full h-full flex justify-center">
              {isMobile ? (
                <div className="flex flex-col items-center pointer-events-none">
                  <div className="w-4 h-16 bg-zinc-900 rounded-t-sm relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 text-[8px] font-bold text-emerald-400 tracking-widest whitespace-nowrap">
                      DEV
                    </div>
                  </div>
                  <div className="w-6 h-4 bg-zinc-400 rounded-sm mb-1 shadow-sm"></div>
                  <div className="w-[260px] bg-[#111111] rounded-2xl flex flex-col items-center p-4 shadow-2xl shadow-zinc-900/10 border border-zinc-800">
                    <div className="w-full h-[220px] rounded-xl overflow-hidden mb-4 border border-zinc-700/50">
                      <img
                        src="/Anrai.jpeg"
                        alt="Anrai Harika Harpan"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-[#bdf35b] text-zinc-950 text-[10px] font-black uppercase px-3 py-1 rounded-sm mb-2 tracking-wider">
                      Front End Dev
                    </div>
                    <h4 className="text-white font-bold text-lg text-center tracking-wide">
                      Anrai Harika Harpan
                    </h4>

                    <div className="w-full flex flex-col gap-2 mt-4 pt-4 border-t border-zinc-800">
                      <div className="text-[9px] text-zinc-400 flex items-center gap-2">
                        <span className="w-3 h-3 bg-zinc-700 rounded-full inline-block"></span>
                        github.com/anraiharika
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <LanyardCard />
              )}
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left pl-0 lg:pl-8 pt-4 lg:pt-28">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="w-12 h-[3px] bg-emerald-500 hidden lg:block"></div>
              <h2 className="text-zinc-500 tracking-[0.2em] text-sm uppercase font-black">
                Transformasi
              </h2>
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-zinc-950 leading-tight mb-6 tracking-tighter">
              Presisi dalam{" "}
              <span className="text-emerald-500">Baris Kode.</span>
            </h3>

            <div className="space-y-4 text-zinc-600 text-lg leading-relaxed font-medium">
              <p>
                Sebagai mahasiswa Ilmu Komputer di Universitas Pamulang,
                keseharian saya adalah harmoni antara manajemen waktu dan
                pemecahan masalah.
              </p>
              <p>
                Ketangguhan dari jalanan itu kini saya konversi untuk merancang
                antarmuka web interaktif dan menelusuri data visual dengan
                machine learning.
              </p>
              <p>
                Saya percaya bahwa setiap baris kode adalah kesempatan untuk
                menciptakan pengalaman digital yang mulus, efisien, dan
                berdampak.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
