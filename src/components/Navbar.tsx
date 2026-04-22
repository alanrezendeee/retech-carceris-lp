"use client";

import { useState, useEffect } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const links = [
  { label: "Problema", href: "#problema" },
  { label: "Solução", href: "#solucao" },
  { label: "Módulos", href: "#modulos" },
  { label: "CRV", href: "#crv" },
  { label: "Tecnologia", href: "#tecnologia" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060D09]/90 backdrop-blur-md border-b border-green-900/30 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" aria-hidden="true">
                <defs>
                  <filter id="nav-glow">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>
                {/* Outer ring */}
                <circle cx="16" cy="16" r="14" stroke="#22C55E" strokeWidth="1.5" opacity="0.25" />
                {/* C shape */}
                <path
                  d="M22 10.5A8.5 8.5 0 1 0 22 21.5"
                  stroke="#22C55E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  filter="url(#nav-glow)"
                />
                {/* Inner dot */}
                <circle cx="16" cy="16" r="1.5" fill="#22C55E" opacity="0.6" />
              </svg>
            </div>
            <span className="text-white font-extralight text-lg tracking-[0.25em]">CARCERIS</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-green-200/70 hover:text-green-400 transition-colors duration-200 cursor-pointer"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href={getWhatsAppLink("navbar")}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-green-500 hover:bg-green-400 text-black font-semibold text-sm transition-all duration-200 glow-green"
            >
              Solicitar apresentação
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden cursor-pointer text-green-300 p-2 rounded-md hover:bg-green-900/30 transition-colors"
            aria-label="Abrir menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden glass-card border-t border-green-900/30 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-green-200/80 hover:text-green-400 transition-colors cursor-pointer py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-green-500 hover:bg-green-400 text-black font-semibold text-sm transition-all duration-200 mt-2"
          >
            Solicitar apresentação
          </a>
        </div>
      )}
    </header>
  );
}
