export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-green-900/30 py-10 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-green-500/20 border border-green-500/30 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-green-400" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor" opacity="0.9" />
                <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor" opacity="0.6" />
                <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor" opacity="0.6" />
                <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor" opacity="0.3" />
              </svg>
            </div>
            <span className="text-white/60 font-bold text-sm tracking-widest">CARCERIS</span>
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
