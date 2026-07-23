import React from "react";

export default function ShortIntro() {
  return (
    // pb-40 gua kurangin jadi pb-20 (HP) dan pb-32 (Laptop) biar lebih rapet ke bawah
    <section className="relative w-full bg-[#111111] text-zinc-100 flex flex-col items-center justify-center pt-24 pb-20 md:pb-32 px-6 mt-[8vh] z-20">
      <div className="absolute top-[-8.1vh] left-0 w-full h-[8.1vh] bg-[#111111] [border-top-left-radius:50%_100%] [border-top-right-radius:50%_100%] pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center z-10">
        <h2 className="text-3xl md:text-5xl lg:text-[52px] font-medium leading-[1.3] md:leading-[1.3] tracking-tight text-white mb-8">
          I'm Anrai — a Web Developer crafting fast, responsive, and immersive
          digital experiences that merge modern UI with engineering precision.
        </h2>

        <p className="text-base md:text-lg lg:text-xl text-zinc-400 font-medium max-w-3xl leading-relaxed mb-12">
          I specialize in developing interactive web platforms and AI-driven
          object detection using technologies like React.js, Vite, PyTorch, and
          YOLO.
        </p>

        <a
          href="#tentang"
          className="group flex items-center gap-3 bg-[#bdf35b] text-zinc-950 px-8 py-3.5 rounded-full text-base font-bold hover:bg-[#a8e04a] transition-all hover:scale-105"
        >
          About Me
          <span className="bg-zinc-950 text-[#bdf35b] rounded-full p-1.5 transform group-hover:rotate-45 transition-transform duration-300">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
