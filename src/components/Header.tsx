"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Si hacemos scroll hacia abajo y pasamos de 50px, ocultamos el header
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        // Si hacemos scroll hacia arriba, lo mostramos
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md fixed top-0 z-50 px-6 py-3 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Isotipo / Logo Minimalista */}
        <a href="#" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center font-mono font-bold text-xs text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-md shadow-blue-500/10">
            &lt;/&gt;
          </div>
          <span className="font-mono text-xs font-bold text-slate-300 tracking-wider group-hover:text-blue-400 transition-colors">
            JS<span className="text-blue-500">.ai</span>
          </span>
        </a>

        {/* Navegación y Enlaces Externos */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Navegación interna */}
          <nav className="hidden sm:flex items-center gap-1 md:gap-1.5">
            <a
              href="#projects"
              className="px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition"
            >
              Experience
            </a>
            <a
              href="#timeline"
              className="px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition"
            >
              Education
            </a>
            <a
              href="#contact"
              className="px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition"
            >
              Contact
            </a>
          </nav>

          <div className="h-4 w-[1px] bg-slate-800 hidden sm:block" />

          {/* Enlaces a Perfiles Profesionales */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/seba39399"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 text-slate-200 hover:bg-slate-800 border border-slate-800 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/juan-sebasti%C3%A1n-pe%C3%B1a-valderrama-1a8246276/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition shadow-lg shadow-blue-500/20"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
