import FlowDiagram from "./FlowDiagram";

const stats = [
  { value: "1.500+", label: "Unidades prisionais no Brasil" },
  { value: "900k+", label: "Detentos sob gestão" },
  { value: "27", label: "Estados integráveis" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 grid-bg">
      {/* Radial glow overlay */}
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 section-py">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card-accent text-green-400 text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-green" aria-hidden="true" />
              Plataforma Nacional · Segurança Pública
            </div>

            {/* Brand */}
            <div className="mb-3">
              <span className="text-5xl lg:text-7xl font-black tracking-widest text-green-400 text-glow">
                CARCERIS
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl lg:text-4xl font-bold text-white leading-tight mb-6">
              A Infraestrutura Digital do{" "}
              <span className="text-green-400">Sistema Prisional</span>{" "}
              Brasileiro
            </h1>

            {/* Subheadline */}
            <p className="text-base lg:text-lg text-green-100/60 leading-relaxed mb-8 max-w-xl">
              Gestão completa, inteligente e integrada — da captura à
              reintegração, com controle absoluto e rastreabilidade total.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contato"
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-green-500 hover:bg-green-400 text-black font-bold text-sm transition-all duration-200 glow-green-intense"
              >
                Solicitar apresentação
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#modulos"
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-card hover:border-green-500/40 text-green-300 font-semibold text-sm transition-all duration-200"
              >
                Ver módulos
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black text-green-400 text-glow">{s.value}</div>
                  <div className="text-xs text-green-200/50 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Flow Diagram */}
          <div className="glass-card rounded-2xl p-5 lg:p-6 glow-green">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-5 pb-3 border-b border-green-900/40">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-green-400/50 text-xs font-mono ml-2">
                carceris.system — fluxo operacional
              </span>
              <span className="ml-auto text-green-400 text-xs font-mono animate-pulse-green">
                ● LIVE
              </span>
            </div>

            <FlowDiagram />

            {/* Footer info */}
            <div className="mt-4 pt-3 border-t border-green-900/30 flex items-center justify-between text-xs text-green-400/40 font-mono">
              <span>12 módulos ativos</span>
              <span>sync: tempo real</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#060D09] to-transparent pointer-events-none" />
    </section>
  );
}
