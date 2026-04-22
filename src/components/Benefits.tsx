const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Rastreabilidade total",
    desc: "Cada ação, movimentação e decisão registrada com timestamp, responsável e contexto completo.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Redução de erros operacionais",
    desc: "Automação de fluxos críticos elimina falhas manuais e garante conformidade dos processos.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "Integração com sistemas estaduais",
    desc: "APIs padronizadas para conexão com SIAPEN, INFOPEN, SDS e demais sistemas de segurança pública.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: "Decisões baseadas em dados",
    desc: "Dashboards estratégicos, alertas preditivos e relatórios para gestores e autoridades.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Segurança da informação",
    desc: "Arquitetura em conformidade com LGPD, criptografia ponta a ponta e logs de acesso auditáveis.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative section-py">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-green-500/50" />
            <span className="text-green-400/80 text-xs font-semibold tracking-widest uppercase">
              Benefícios
            </span>
            <div className="h-px w-8 bg-green-500/50" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Impacto real na{" "}
            <span className="text-green-400">operação e na gestão</span>
          </h2>
          <p className="text-green-100/50 text-base max-w-2xl mx-auto">
            CARCERIS transforma métricas críticas: reduz erros, acelera
            processos e fornece visibilidade total a todos os níveis da gestão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-6 hover:border-green-500/25 transition-all duration-300 cursor-default group ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/8 border border-green-500/15 flex items-center justify-center text-green-500/70 group-hover:text-green-400 group-hover:border-green-500/35 group-hover:bg-green-500/12 transition-all duration-200 mb-4">
                {b.icon}
              </div>
              <h3 className="text-white font-bold text-sm mb-2">{b.title}</h3>
              <p className="text-green-100/45 text-xs leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
