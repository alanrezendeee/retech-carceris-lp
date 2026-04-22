const transferSteps = [
  { step: "01", label: "Solicitação", desc: "Unidade solicitante registra transferência com justificativa e dados do detento." },
  { step: "02", label: "Autorização", desc: "CRV verifica disponibilidade e autoriza via sistema com validação jurídica." },
  { step: "03", label: "Agendamento", desc: "Logística programada: escolta, veículo, rota e horário confirmados." },
  { step: "04", label: "Saída", desc: "Registro de saída com biometria, itens e documentação do detento." },
  { step: "05", label: "Chegada", desc: "Unidade destino confirma recebimento e atualiza localização em tempo real." },
  { step: "06", label: "Auditoria", desc: "Registro imutável de todo o ciclo com responsáveis, horários e ocorrências." },
];

export default function CRVSection() {
  return (
    <section id="crv" className="relative section-py">
      {/* BG accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060D09] via-[#071209] to-[#060D09] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card-accent text-green-400 text-xs font-semibold tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-green" aria-hidden="true" />
            Funcionalidade Premium
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5">
            CRV + Controle de{" "}
            <span className="text-green-400">Transferências</span>
          </h2>
          <p className="text-green-100/55 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Gerenciamento centralizado de vagas e o ciclo completo de
            transferências — do pedido à auditoria, sem lacunas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: CRV */}
          <div>
            <div className="glass-card-accent rounded-2xl p-6 lg:p-8 glow-green mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-green-500/15 border border-green-500/30 flex items-center justify-center text-green-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold">Central de Regulação de Vagas</div>
                  <div className="text-green-400/60 text-xs">CRV Nacional</div>
                </div>
              </div>

              {/* Simulated vacancy bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-green-200/50 mb-2">
                  <span>Ocupação atual</span>
                  <span className="text-green-400 font-semibold">67% · 603.000 / 900.000</span>
                </div>
                <div className="h-2 bg-green-900/40 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-green-600 to-green-400 rounded-full" />
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  "Visão em tempo real de todas as vagas por estado e unidade",
                  "Alocação automática baseada em perfil, regime e distância",
                  "Alertas de superlotação com acionamento automático",
                  "Integração direta com módulo de Transferências",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-green-100/65">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Transfer flow */}
          <div>
            <div className="text-green-400/70 text-xs font-semibold uppercase tracking-wider mb-5">
              Ciclo de Transferência
            </div>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[19px] top-6 bottom-6 w-px bg-green-900/50" aria-hidden="true" />

              <div className="space-y-4">
                {transferSteps.map((s, i) => (
                  <div key={i} className="flex gap-4 group cursor-default">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full glass-card-accent border-green-500/30 flex items-center justify-center text-green-400 text-xs font-bold group-hover:border-green-400/60 group-hover:bg-green-500/10 transition-all duration-200 z-10">
                      {s.step}
                    </div>
                    <div className="flex-1 pt-1.5 pb-4">
                      <div className="text-white font-semibold text-sm mb-1 group-hover:text-green-300 transition-colors duration-200">
                        {s.label}
                      </div>
                      <div className="text-green-100/45 text-xs leading-relaxed">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
