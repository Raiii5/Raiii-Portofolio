import React from "react";

export default function VelocityScroll({ text, speed = 20 }) {
  return (
    <div className="relative w-full overflow-hidden bg-emerald-500 py-3 flex items-center border-y border-emerald-400/30 rotate-1 scale-105">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee ${speed}s linear infinite;
          }
        `}
      </style>
      <div className="flex w-[200%] animate-marquee whitespace-nowrap">
        {/* Kita render dua kali agar efek infinite-nya nyambung sempurna */}
        <div className="flex-1 flex justify-around text-black font-black text-xl tracking-widest uppercase">
          {text}
        </div>
        <div className="flex-1 flex justify-around text-black font-black text-xl tracking-widest uppercase">
          {text}
        </div>
      </div>
    </div>
  );
}
