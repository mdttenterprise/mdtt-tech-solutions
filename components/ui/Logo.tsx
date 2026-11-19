import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <a href="#home" className={`inline-flex items-center gap-3 group ${className}`}>
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-600 p-[1px] shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
        <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#070b19]">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M3 17V7L8.5 12.5L14 7V17"
              stroke="url(#mdtt_grad_1)"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 7H21.5M19.5 7V17"
              stroke="url(#mdtt_grad_2)"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="mdtt_grad_1" x1="3" y1="7" x2="14" y2="17" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60A5FA" />
                <stop offset="1" stopColor="#818CF8" />
              </linearGradient>
              <linearGradient id="mdtt_grad_2" x1="17.5" y1="7" x2="21.5" y2="17" gradientUnits="userSpaceOnUse">
                <stop stopColor="#818CF8" />
                <stop offset="1" stopColor="#C084FC" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-tight text-white leading-none">
          MDTT <span className="text-blue-400">Tech</span>
        </span>
        <span className="text-[11px] font-medium tracking-widest uppercase text-slate-400 mt-0.5">
          Solutions
        </span>
      </div>
    </a>
  );
}