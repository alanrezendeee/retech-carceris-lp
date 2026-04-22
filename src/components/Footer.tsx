export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-green-900/30 py-10 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" aria-hidden="true">
              <defs>
                <filter id="footer-glow">
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
              <circle cx="16" cy="16" r="14" stroke="#22C55E" strokeWidth="1" opacity="0.2" />
              <path
                d="M22 10.5A8.5 8.5 0 1 0 22 21.5"
                stroke="#22C55E"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                filter="url(#footer-glow)"
              />
              <circle cx="16" cy="16" r="1.5" fill="#22C55E" opacity="0.6" />
            </svg>
            <span className="text-white/60 font-extralight text-sm tracking-[0.25em]">CARCERIS</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Rodapé">
            {["Módulos", "CRV", "Tecnologia", "Contato"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-xs text-green-200/40 hover:text-green-400 transition-colors duration-200 cursor-pointer"
              >
                {l}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-xs text-green-200/30 text-center md:text-right">
            <div>© {year} CARCERIS · Todos os direitos reservados</div>
            <div className="mt-1">Plataforma Nacional de Gestão Prisional · Brasil</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
