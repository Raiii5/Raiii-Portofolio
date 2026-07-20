import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GooeyNav from "../react-bits/GooeyNav";
import StaggeredMenu from "../react-bits/StaggeredMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navMenu = [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang", href: "#tentang" },
    { label: "Proyek", href: "#proyek" },
  ];

  return (
    <div className="fixed top-6 left-0 w-full z-[100] pointer-events-none transition-all duration-500">
      <AnimatePresence mode="wait">
        {!scrolled ? (
          // NAVBAR FULL DI ATAS
          <motion.div
            key="full-nav"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-7xl mx-auto px-8 md:px-16 flex justify-end md:justify-between items-start"
          >
            <nav className="pointer-events-auto w-full flex items-center justify-between px-6 py-2.5 bg-zinc-950/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
              <div className="text-xl font-black text-white tracking-tighter">
                Anrai<span className="text-emerald-500">.</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <GooeyNav items={navMenu} />
                <div className="flex items-center gap-4 border-l border-zinc-800/80 pl-6 ml-2">
                  <div className="text-sm font-medium text-zinc-400 hover:text-white cursor-pointer transition-colors">
                    🌐 ID
                  </div>
                  <a
                    href="#kontak"
                    className="px-5 py-2.5 bg-white text-zinc-950 text-sm font-bold rounded-lg hover:bg-zinc-200 transition-colors shadow-sm"
                  >
                    Kontak
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        ) : (
          // STAGGERED MENU SAAT SCROLL (DI DORONG MENTOK KANAN DENGAN JARAK 5PX)
          <motion.div
            key="staggered-menu"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            // Ganti right-[5px] jadi right-0 atau right-[-10px] di bawah ini:
            className="absolute right-0 top-0 pointer-events-auto"
          >
            <StaggeredMenu items={navMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
