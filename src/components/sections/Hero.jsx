import React from "react";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative w-full h-screen bg-[#f5f5f5] text-zinc-900 overflow-hidden font-sans flex flex-col"
    >
      <header className="absolute top-0 left-0 w-full px-6 md:px-12 py-8 flex justify-between items-center z-50">
        <div className="text-2xl font-black tracking-tighter cursor-pointer flex items-center gap-1">
          Anrai<span className="text-emerald-500">.</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6 text-sm font-medium text-zinc-600">
            <a
              href="#beranda"
              className="hover:text-zinc-900 transition-colors"
            >
              Home
            </a>
            <a
              href="#tentang"
              className="hover:text-zinc-900 transition-colors"
            >
              About
            </a>
            <a href="#proyek" className="hover:text-zinc-900 transition-colors">
              Works
            </a>
          </nav>

          <a
            href="#kontak"
            className="group flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all"
          >
            Contact
            <span className="bg-white/20 rounded-full p-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </header>

      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-5 z-50 hidden md:flex">
        <div className="w-[1px] h-24 bg-zinc-300 mb-2 relative">
          <div className="absolute -top-1 -left-[2.5px] w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>
          <div className="absolute -bottom-1 -left-[2.5px] w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>
        </div>

        <a
          href="#"
          className="text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          href="#"
          className="text-zinc-500 hover:text-emerald-500 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
        <a
          href="#"
          className="text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>

      <div className="relative flex-1 flex flex-col justify-center items-center w-full z-10 px-6">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] max-w-full aspect-square pointer-events-none z-0 opacity-90 mix-blend-multiply">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          >
            <source src="/orb-video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 text-center flex flex-col items-center">
          <p className="text-zinc-500 font-medium text-lg md:text-xl mb-4 md:mb-6 tracking-tight">
            Hi! I'm Anrai
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[100px] font-medium text-zinc-900 leading-[1.05] tracking-tighter">
            Web Developer.
            <br />
            Data Explorer.
          </h1>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-0 w-full px-6 md:px-12 flex justify-between items-end z-50">
        <div className="hidden md:block w-12"></div>

        
        <div className="flex-1 flex justify-center text-zinc-400 text-sm font-medium tracking-wide">
          scroll down
        </div>

        <div className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-900 transition-colors cursor-pointer">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M20 12H4"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
