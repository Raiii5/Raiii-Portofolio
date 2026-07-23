import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";

import Preloader from "./components/common/Preloader";
import Hero from "./components/sections/Hero";
import ShortIntro from "./components/sections/ShortIntro";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative bg-[#f5f5f5] min-h-screen text-zinc-900 font-sans overflow-x-hidden selection:bg-emerald-500/30">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative z-10 flex flex-col"
          >
            <main className="flex flex-col w-full">
              <Hero />
              <ShortIntro />

              {/* HALAMAN ABOUT SEKARANG SUDAH PUNYA EFEK MEKAR SENDIRI! */}
              <About />

              <Projects />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
