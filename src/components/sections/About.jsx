import React from "react";
import BlurText from "../react-bits/BlurText";
import LanyardCard from "../react-bits/LanyardCard";

export default function About() {
  return (
    // mt-[10vh] memberi ruang untuk lengkungan kubah di atasnya
    <section
      id="tentang"
      className="relative w-full bg-white text-zinc-900 flex flex-col items-center pt-16 pb-32 z-20 mt-[10vh]"
    >
      {/* INI KUNCI BACKGROUND MELENGKUNGNYA */}
      <div className="absolute top-[-10vh] left-0 w-full h-[10.1vh] bg-white [border-top-left-radius:50%_100%] [border-top-right-radius:50%_100%]"></div>

      {/* Frame Konten Utama */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 mt-8 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 relative z-10">
        {/* Kolom Kiri: Teks Narasi dengan Animasi React Bits */}
        <div className="w-full lg:w-[55%] flex flex-col items-start pt-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[3px] bg-emerald-500"></div>
            <h2 className="text-zinc-500 tracking-[0.2em] text-sm uppercase font-black">
              Tentang Saya
            </h2>
          </div>

          <h3 className="text-4xl md:text-5xl font-black text-zinc-950 leading-tight mb-8 tracking-tighter">
            Ketangguhan di <span className="text-zinc-400">Jalanan</span>,<br />{" "}
            Presisi dalam <span className="text-emerald-500">Baris Kode.</span>
          </h3>

          <div className="space-y-6 text-zinc-600 text-lg leading-relaxed font-medium">
            <BlurText
              text="Sebagai mahasiswa Ilmu Komputer di Universitas Pamulang, keseharian saya adalah tentang harmoni antara manajemen waktu dan penyelesaian masalah."
              delay={20}
              className="inline-block"
            />

            <BlurText
              text="Etos kerja saya ditempa di dua dunia yang berbeda. Di lapangan, saya mendedikasikan waktu sebagai kurir pengantar—mengajarkan kecepatan dan navigasi. Di depan layar, ketangguhan itu saya konversi untuk membangun antarmuka web interaktif dan menelusuri data visual menggunakan model machine learning."
              delay={20}
              className="inline-block mt-4"
            />
          </div>
        </div>

        {/* Kolom Kanan: Lanyard Interaktif Asli React Bits */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative min-h-[500px]">
          <LanyardCard />
        </div>
      </div>
    </section>
  );
}
