import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScaleReveal() {
  const containerRef = useRef(null);

  // 1. Pantau Scroll di area yang panjang (250vh)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start start" = Animasi mulai pas ujung atas container nyentuh pucuk layar
    // "end end" = Animasi selesai pas ujung bawah container nyentuh bawah layar
    offset: ["start start", "end end"],
  });

  // 2. Bikin mulus biar gak patah pas mouse wheel diputer cepet
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
    restDelta: 0.001,
  });

  // 3. LOGIKA MEKAR & MELENGKUNG
  // Skala dari 50% (0.5) membesar jadi 100% (1)
  const scale = useTransform(smoothProgress, [0, 1], [0.5, 1]);
  // Lengkungan ekstrem di awal, jadi siku-siku pas udah 100%
  const borderRadius = useTransform(smoothProgress, [0, 1], ["60px", "0px"]);

  return (
    <section
      ref={containerRef}
      // Kita kasih tinggi 250vh biar ada "durasi/jarak" buat nge-scroll animasinya
      // Background disamain sama ShortIntro (#111111)
      className="relative w-full h-[250vh] bg-[#111111] z-20"
    >
      {/* 
        =========================================
        STICKY WRAPPER 
        Ini yang bikin halamannya "terkunci" di layar selama kita nge-scroll 250vh
        =========================================
      */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* KARTU YANG MEMBESAR (WINDOW REVEAL) */}
        <motion.div
          style={{ scale, borderRadius }}
          className="relative w-full h-full bg-white overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center will-change-transform"
        >
          {/* Teks Marquee Raksasa di Background */}
          <div className="absolute top-[20%] left-0 w-full flex whitespace-nowrap overflow-hidden pointer-events-none opacity-[0.03]">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 15, repeat: Infinity }}
              className="flex gap-8 text-[120px] md:text-[200px] font-black text-zinc-950 uppercase tracking-tighter"
            >
              <span>FRONT END DEVELOPER • WEB DEVELOPER • </span>
              <span>FRONT END DEVELOPER • WEB DEVELOPER • </span>
            </motion.div>
          </div>

          {/* Konten Utama */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-end pt-24">
            <div className="text-center mb-8 md:mb-12 z-20">
              <h2 className="text-5xl md:text-7xl font-black text-zinc-950 uppercase tracking-tighter mb-4">
                Visualizing <span className="text-emerald-500">Code.</span>
              </h2>
              <p className="text-zinc-500 font-medium tracking-widest uppercase text-sm">
                Scroll to explore
              </p>
            </div>

            {/* Foto dari Universitas Pamulang / Lanyard */}
            <div className="relative w-[80%] md:w-[400px] h-[50vh] md:h-[60vh] overflow-hidden rounded-t-3xl border-t border-x border-zinc-200 bg-zinc-100">
              <img
                src="/Anrai.jpeg"
                alt="Anrai Harika Harpan"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
