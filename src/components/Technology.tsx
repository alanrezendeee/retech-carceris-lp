const techs = [
  {
    label: "APIs Integradas",
    desc: "REST e GraphQL com documentação completa para integração com todos os sistemas dos estados.",
    badge: "REST · GraphQL",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },
  {
    label: "Tempo Real",
    desc: "WebSockets e streaming de eventos garantem visibilidade instantânea de todas as operações.",
    badge: "WebSockets · SSE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    label: "Arquitetura Escalável",
    desc: "Microsserviços em cloud nativa suportam crescimento sem degradação de performance.",
    badge: "Cloud · Microservices",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    label: "LGPD Ready",
    desc: "Criptografia AES-256, anonimização de dados sensíveis e logs imutáveis de acesso.",
    badge: "LGPD · ISO 27001",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function Technology() {
  return (
    <section id="tecnologia" className="relative section-py">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060D09] via-[#07120A] to-[#060D09] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-green-500/50" />
              <span className="text-green-400/80 text-xs font-semibold tracking-widest uppercase">
                Tecnologia
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
              Infraestrutura de{" "}
              <span className="text-green-400">nível estadual</span>,{" "}
              construída para a Paraíba
            </h2>
            <p className="text-green-100/55 text-base leading-relaxed mb-8">
              CARCERIS foi projetado para a realidade da SEAP-PB — 83 unidades
              distribuídas do litoral ao sertão — com disponibilidade 99.9%,
              segurança de ponta e integração com os sistemas legados do estado
              sem retrabalho.
            </p>

            <div className="flex flex-wrap gap-2">
              {["99.9% uptime", "Multi-tenant", "On-premise ou cloud", "Suporte 24/7"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full glass-card text-green-300/70 text-xs font-medium border-green-900/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: tech cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techs.map((t, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-5 hover:border-green-500/25 transition-all duration-300 cursor-default group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-green-900/30 border border-green-900/50 flex items-center justify-center text-green-500/60 group-hover:text-green-400 group-hover:border-green-500/30 transition-all duration-200">
                    {t.icon}
                  </div>
                  <span className="text-green-400/40 text-[10px] font-mono px-2 py-0.5 rounded-md bg-green-900/20">
                    {t.badge}
                  </span>
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{t.label}</h3>
                <p className="text-green-100/45 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture diagram strip */}
        <div className="mt-16 glass-card rounded-2xl p-6 overflow-x-auto">
          <div className="min-w-[500px] flex items-center justify-between gap-3">
            {[
              "Polícia / SINAN",
              "CARCERIS API Gateway",
              "Módulos CARCERIS",
              "Judiciário / CNJ",
              "Saúde / DATASUS",
            ].map((node, i, arr) => (
              <div key={node} className="flex items-center gap-3 flex-1">
                <div className="flex-1 min-w-0">
                  <div className="glass-card-accent rounded-xl px-3 py-2.5 text-center">
                    <div className="text-white/80 text-[11px] font-semibold truncate">{node}</div>
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex-shrink-0 text-green-500/40">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 text-center text-green-400/30 text-xs font-mono">
            Arquitetura de integração · API-first · Tempo real
          </div>
        </div>
      </div>
    </section>
  );
}
