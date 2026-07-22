import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis"; // Engine Smooth Scroll

// Import komponen lu
import Preloader from "./components/common/Preloader";
import Navbar from "./components/common/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import MagneticFluid from "./components/react-bits/MagneticFluid";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Setup Lenis Smooth Scroll
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
    <div className="relative bg-black min-h-screen text-white font-sans overflow-x-hidden selection:bg-emerald-500/30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <MagneticFluid />
      </div>

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
            <Navbar />

            <main>
              <Hero />
              <About />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
