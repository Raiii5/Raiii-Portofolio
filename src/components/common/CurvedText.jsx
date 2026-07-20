import React from "react";

export default function CurvedText({ text }) {
  return (
    <div className="w-full flex justify-center items-center py-10 opacity-20 hover:opacity-100 transition-opacity duration-700">
      <svg viewBox="0 0 500 150" className="w-full max-w-2xl overflow-visible">
        <path id="curve" fill="transparent" d="M 0,150 Q 250,-20 500,150" />
        <text
          className="text-3xl md:text-4xl font-black uppercase tracking-[0.2em]"
          fill="currentColor"
        >
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
