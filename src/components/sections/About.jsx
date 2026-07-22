import React from "react";
import BlurText from "../react-bits/BlurText";
import LanyardCard from "../react-bits/LanyardCard";

export default function About() {
  return (
    <section
      id="tentang"
      className="relative w-full bg-white text-zinc-900 flex flex-col items-center pt-16 pb-32 z-20 mt-[10vh]"
    >
      <div className="absolute top-[-10vh] left-0 w-full h-[10.1vh] bg-white [border-top-left-radius:50%_100%] [border-top-right-radius:50%_100%] pointer-events-none"></div>

      {/* UBAH 1: Tambahkan gap-12 untuk mobile agar komponen tidak saling tabrak, lg:gap-0 agar desktop tetap nempel */}
      <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_380px_1fr] gap-16 lg:gap-0 relative z-10">
        {/* KOLOM KIRI: Dibuat center di HP (items-center text-center), kembali rata kanan di Desktop */}
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
            <BlurText
              text="Etos kerja saya ditempa di dua dunia yang berbeda. Di lapangan, saya mendedikasikan waktu sebagai kurir pengantar."
              delay={20}
              className="inline-block"
            />
            <BlurText
              text="Setiap rute mengajarkan saya tentang kecepatan, navigasi, dan daya juang untuk terus melangkah walau keadaan tidak selalu berpihak."
              delay={20}
              className="inline-block mt-2"
            />
            <BlurText
              text="Logika dan ketepatan yang saya pelajari di jalanan kini saya terapkan dalam dunia digital, membangun aplikasi web yang responsif dan efisien."
              delay={20}
              className="inline-block mt-2"
            />
          </div>
        </div>

        {/* LANYARD: Di HP margin-nya didorong ke bawah (mt-10) biar gak nabrak teks, di Desktop ditarik ke atas (lg:-mt-[8vh]) */}
        <div
          className={`
          relative flex justify-center w-full min-h-[550px] lg:min-h-[700px] z-30
          mt-10 lg:-mt-[8vh]            
          lg:-translate-x-[50px]        
        `}
        >
          <div className="w-full h-full flex justify-center">
            <LanyardCard />
          </div>
        </div>

        {/* KOLOM KANAN: Dibuat center di HP, kembali rata kiri di Desktop */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left pl-0 lg:pl-8 pt-4 lg:pt-28">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
            <div className="w-12 h-[3px] bg-emerald-500 hidden lg:block"></div>
            <h2 className="text-zinc-500 tracking-[0.2em] text-sm uppercase font-black">
              Transformasi
            </h2>
          </div>

          <h3 className="text-4xl md:text-5xl font-black text-zinc-950 leading-tight mb-6 tracking-tighter">
            Presisi dalam <span className="text-emerald-500">Baris Kode.</span>
          </h3>

          <div className="space-y-4 text-zinc-600 text-lg leading-relaxed font-medium">
            <BlurText
              text="Sebagai mahasiswa Ilmu Komputer di Universitas Pamulang, keseharian saya adalah harmoni antara manajemen waktu dan pemecahan masalah."
              delay={20}
              className="inline-block"
            />
            <BlurText
              text="Ketangguhan dari jalanan itu kini saya konversi untuk merancang antarmuka web interaktif dan menelusuri data visual dengan machine learning."
              delay={20}
              className="inline-block mt-2"
            />
            <BlurText
              text="Saya percaya bahwa setiap baris kode adalah kesempatan untuk menciptakan pengalaman digital yang mulus, efisien, dan berdampak. "
              delay={20}
              className="inline-block mt-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
