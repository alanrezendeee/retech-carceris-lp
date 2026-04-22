const problems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.181 8.68a4.503 4.503 0 011.303 1.498l.053.092M13.181 8.68l-5.09-5.09a.75.75 0 00-1.06 1.06l3.99 3.99a4.5 4.5 0 01.16 6.305l-1.44 1.44a.75.75 0 01-1.06-1.06l1.44-1.44a3 3 0 00-.106-4.185M10.818 8.32l-.053.091a4.5 4.5 0 01-6.343.862l-1.44-1.44a.75.75 0 10-1.06 1.06l1.44 1.44a6 6 0 008.362-1.133" />
      </svg>
    ),
    title: "83 unidades, zero integração",
    desc: "De João Pessoa a Cajazeiras, cada unidade da SEAP-PB opera em silo — sem comunicação real com judiciário, saúde ou assistência social.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Processos ainda manuais",
    desc: "Apesar do SAREF para audiências remotas, a gestão diária das 83 unidades ainda depende de formulários físicos e planilhas desatualizadas.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <line x1="2" y1="2" x2="22" y2="22" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    ),
    title: "174% de ocupação sem controle",
    desc: "Sem visibilidade em tempo real das vagas, a SEAP-PB não consegue redistribuir presos eficientemente — agravando superlotação e risco à segurança.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Transferências sem auditoria",
    desc: "Movimentações entre unidades paraibanas ocorrem sem rastreabilidade completa — criando vulnerabilidades graves de segurança e compliance jurídico.",
  },
];

export default function Problem() {
  return (
    <section id="problema" className="relative section-py">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060D09] via-[#07100B] to-[#060D09] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-red-500/50" />
          <span className="text-red-400/80 text-xs font-semibold tracking-widest uppercase">
            O Problema
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
              A SEAP-PB opera 83 unidades{" "}
              <span className="text-red-400">sem gestão integrada</span>
            </h2>
            <p className="text-green-100/50 text-base lg:text-lg leading-relaxed">
              A Paraíba tem 174% de taxa de ocupação — 3ª pior do Nordeste —
              com déficit de quase 7.000 vagas. São 16.452 pessoas privadas de
              liberdade distribuídas em 83 unidades que não se comunicam entre
              si com eficiência. O custo humano e operacional é alto demais.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((p, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-5 hover:border-red-500/25 transition-all duration-300 cursor-default group"
              >
                <div className="text-red-400/70 mb-3 group-hover:text-red-400 transition-colors duration-200">
                  {p.icon}
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{p.title}</h3>
                <p className="text-green-100/45 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
