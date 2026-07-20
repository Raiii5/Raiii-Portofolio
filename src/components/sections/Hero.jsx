import React from "react";
import SpecularButton from "../react-bits/SpecularButton";
import DecryptedText from "../react-bits/DecryptedText";
import BlurText from "../react-bits/BlurText";
// 1. Kita panggil nama file lu yang baru
import ProfileCard from "../react-bits/ProfileCard";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative w-full h-screen flex items-center justify-center px-8 md:px-16 max-w-7xl mx-auto pt-20"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-12">
        {/* KOLOM KIRI: Teks & Tombol */}
        <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
          <p className="text-zinc-400 tracking-[0.2em] text-sm uppercase mb-3">
            Halo, Saya
          </p>

          <BlurText
            text="Anrai Harika Harpan"
            className="text-5xl lg:text-7xl font-black text-white leading-tight mb-4 tracking-tighter"
            delay={150}
          />

          <p className="text-zinc-400 text-xl font-medium mb-2 mt-4">Seorang</p>
          <div className="text-2xl lg:text-3xl font-bold text-white mb-6">
            Web Developer & Data Explorer
          </div>

          <div className="text-zinc-400 max-w-md leading-relaxed mb-8 min-h-[80px]">
            <DecryptedText
              text="Membangun antarmuka digital yang presisi dan mengeksplorasi pengolahan data untuk menciptakan solusi teknologi yang optimal."
              animateOn="view"
              speed={100}
              maxIterations={25}
            />
          </div>

          <div className="flex gap-4">
            <SpecularButton
              autoAnimate={true}
              baseColor="#18181b"
              lineColor="#ffffff"
            >
              Lihat Proyek ↗
            </SpecularButton>
            <SpecularButton
              autoAnimate={false}
              baseColor="#09090b"
              lineColor="#525252"
            >
              Kontak Saya
            </SpecularButton>
          </div>
        </div>

        {/* KOLOM KANAN: Profile Card Interaktif */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
          {/* 2. Kita gunakan tag ProfileCard sesuai nama file lu */}
          <ProfileCard
            avatarUrl="/Anrai.jpeg"
            altText="Anrai Harika Harpan Profile"
            captionText="Anrai Harika Harpan"
            containerHoverDegrees={15}
            imageHoverDegrees={15}
            showTooltip={true}
            containerClassName="w-[320px] h-[420px] rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md"
          />
        </div>
      </div>
    </section>
  );
}
