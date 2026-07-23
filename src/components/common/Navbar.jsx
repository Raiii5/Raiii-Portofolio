{/*import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Efek blur saat scroll ke bawah
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang", href: "#tentang" },
    { name: "Proyek", href: "#proyek" },
    { name: "Kontak", href: "#kontak" },
    { name: "ID/ENG", href: "#id" }, // Link tambahan untuk bahasa Indonesia
  ];

  return (
    <>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center">
          
          <a
            href="#beranda"
            className="text-2xl font-black text-white tracking-tighter"
          >
            Anrai<span className="text-emerald-500">.</span>
          </a>


          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>


          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-50"
          >
            <span className="w-6 h-0.5 bg-white rounded-full"></span>
            <span className="w-6 h-0.5 bg-white rounded-full"></span>
            <span className="w-4 h-0.5 bg-white rounded-full self-end mr-1"></span>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
          isSidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>


      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-zinc-950 border-l border-zinc-800 z-[70] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col px-8 py-20 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-6 right-6 text-zinc-400 hover:text-white"
        >

          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col gap-8 mt-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsSidebarOpen(false)} // Tutup sidebar pas diklik
              className="text-2xl font-bold text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
  */}
