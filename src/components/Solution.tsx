const pillars = [
  { label: "Centralização", desc: "Uma única fonte de verdade para as 83 unidades prisionais da Paraíba." },
  { label: "Integração", desc: "Conectado à Polícia Civil PB, TJPB, saúde e assistência social estadual." },
  { label: "Automação", desc: "Fluxos automáticos eliminam erros humanos e aceleram processos críticos." },
  { label: "Rastreabilidade", desc: "Cada ação registrada com auditoria completa e imutável." },
];

export default function Solution() {
  return (
    <section id="solucao" className="relative section-py">
      <div className="absolute inset-0 radial-glow pointer-events-none opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-green-500/50" />
            <span className="text-green-400/80 text-xs font-semibold tracking-widest uppercase">
              A Solução
            </span>
            <div className="h-px w-8 bg-green-500/50" />
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Uma plataforma única que{" "}
            <span className="text-green-400">centraliza, organiza</span>{" "}
            e automatiza toda a gestão da SEAP-PB.
          </h2>

          <p className="text-green-100/55 text-base lg:text-lg leading-relaxed">
            CARCERIS não é mais um sistema isolado. É a infraestrutura digital
            que a Paraíba precisa para integrar suas 83 unidades prisionais em
            uma operação única, segura, eficiente e auditável — do interior à
            capital.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="glass-card-accent rounded-2xl p-6 text-center hover:border-green-500/50 transition-all duration-300 cursor-default group glow-green"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors duration-200">
                <span className="text-green-400 font-black text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-white font-bold text-sm mb-2">{p.label}</h3>
              <p className="text-green-200/45 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison bar */}
        <div className="mt-16 glass-card rounded-2xl p-6 lg:p-8">
          <div className="grid lg:grid-cols-3 gap-6 items-center">
            <div className="text-center lg:text-left">
              <div className="text-xs text-red-400/70 font-semibold uppercase tracking-wider mb-2">Antes do CARCERIS</div>
              <ul className="space-y-2">
                {["Dados fragmentados", "Processos manuais", "Auditoria inexistente", "Decisões sem dados"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-xs text-green-100/40">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-red-500/60 flex-shrink-0" aria-hidden="true">
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-px h-16 bg-green-900/50 lg:hidden" />
              <div className="hidden lg:flex flex-col items-center gap-2">
                <div className="text-green-500 font-black text-2xl">→</div>
                <div className="text-green-400/50 text-xs font-mono">CARCERIS</div>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="text-xs text-green-400/70 font-semibold uppercase tracking-wider mb-2">Com o CARCERIS</div>
              <ul className="space-y-2">
                {["Fonte única de dados", "Automação de fluxos", "Auditoria completa", "Inteligência operacional"].map((t) => (
                  <li key={t} className="flex items-center justify-end gap-2 text-xs text-green-100/70">
                    {t}
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-green-500 flex-shrink-0" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
