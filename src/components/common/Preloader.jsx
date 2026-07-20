import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [index, setIndex] = useState(0);

  const greetings = [
    "Hello", // English
    "Halo", // Indonesia
    "Bonjour", // French
    "Merhaba", // Turkish
    "你好", // Chinese
    "안녕하세요", // Korean
    "こんにちは", // Japanese
    "Anrai.", // Ending dengan nama lu
  ];

  useEffect(() => {
    if (index === greetings.length - 1) {
      // Tunggu sebentar di sapaan terakhir (nama lu), lalu jalankan fungsi selesai
      const timeout = setTimeout(() => {
        onComplete();
      }, 1200);
      return () => clearTimeout(timeout);
    }

    // Kecepatan ganti kata (300ms)
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 300);

    return () => clearInterval(interval);
  }, [index, onComplete, greetings.length]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
          className="text-4xl md:text-5xl font-black text-white tracking-widest"
        >
          {greetings[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
