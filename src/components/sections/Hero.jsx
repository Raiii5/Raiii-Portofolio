import React from "react";
import SpecularButton from "../react-bits/SpecularButton";
import DecryptedText from "../react-bits/DecryptedText";
import BlurText from "../react-bits/BlurText";
import ProfileCard from "../react-bits/ProfileCard";

export default function Hero() {
  return (
    <section
      id="beranda"
      // UBAH 1: Dari h-screen jadi min-h-screen biar di HP gak kepotong, padding atas ditambahin (pt-28)
      className="relative w-full min-h-screen lg:h-screen flex items-center justify-center px-6 md:px-16 max-w-7xl mx-auto pt-28 pb-16 lg:pt-20 lg:pb-0"
    >
      {/* UBAH 2: flex-col-reverse udah bener, tapi kita tambahin gap yang lebih ramah buat HP */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10 lg:gap-12">
        {/* KOLOM KIRI: Teks & Tombol */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          <p className="text-zinc-400 tracking-[0.2em] text-xs sm:text-sm uppercase mb-3">
            Halo, Saya
          </p>

          {/* UBAH 3: Teks nama di-scale bertahap (text-4xl buat HP, text-5xl tablet, text-7xl laptop) */}
          <BlurText
            text="Anrai Harika Harpan"
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-4 tracking-tighter"
            delay={150}
          />

          <p className="text-zinc-400 text-lg sm:text-xl font-medium mb-2 mt-2 lg:mt-4">
            Seorang
          </p>
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6">
            Web Developer & Data Explorer
          </div>

          <div className="text-zinc-400 max-w-md leading-relaxed mb-8 min-h-[80px] text-sm sm:text-base mx-auto lg:mx-0">
            <DecryptedText
              text="Membangun antarmuka digital yang presisi dan mengeksplorasi pengolahan data untuk menciptakan solusi teknologi yang optimal."
              animateOn="view"
              speed={100}
              maxIterations={25}
            />
          </div>

          {/* UBAH 4: Button dibikin flex-wrap biar kalau layarnya super kecil, tombolnya turun ke bawah dengan rapi */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
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
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10 mb-8 lg:mb-0">
          {/* UBAH 5: ProfileCard disesuaikan ukurannya biar di HP gak kegedean (w-280px), di laptop balik gede lagi (lg:w-320px) */}
          <ProfileCard
            avatarUrl="/Anrai.jpeg"
            altText="Anrai Harika Harpan Profile"
            captionText="Anrai Harika Harpan"
            containerHoverDegrees={15}
            imageHoverDegrees={15}
            showTooltip={true}
            containerClassName="w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md"
          />
        </div>
      </div>
    </section>
  );
}
