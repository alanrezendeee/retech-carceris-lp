import { getWhatsAppLink } from "@/lib/whatsapp";

export default function CTAFinal() {
  return (
    <section id="contato" className="relative section-py">
      <div className="absolute inset-0 radial-glow pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card-accent text-green-400 text-xs font-semibold tracking-wider uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-green" aria-hidden="true" />
          SEAP-PB · Acesso institucional
        </div>

        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Transforme a gestão do sistema prisional com{" "}
          <span className="text-green-400 text-glow">inteligência e controle total.</span>
        </h2>

        <p className="text-green-100/55 text-base lg:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          CARCERIS foi desenhado para a realidade da SEAP-PB — 83 unidades,
          16.452 presos e 174% de ocupação. Solicite uma apresentação técnica
          e veja como integrar toda a gestão prisional paraibana em uma única
          plataforma.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href={getWhatsAppLink("cta_primary")}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 text-black font-bold text-base transition-all duration-200 glow-green-intense"
          >
            Solicitar apresentação
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.06L14.44 10.75H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href={getWhatsAppLink("cta_specialist")}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-card hover:border-green-500/40 text-green-300 font-semibold text-base transition-all duration-200"
          >
            Falar com especialista
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "Implementação personalizada",
            "Suporte técnico dedicado",
            "Conformidade LGPD",
            "Treinamento incluído",
          ].map((t) => (
            <div key={t} className="flex items-center gap-2 text-xs text-green-200/50">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-green-500/70" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
