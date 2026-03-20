import SectionWrapper from "../miv/SectionWrapper";
import { Check, X } from "lucide-react";

const channels = [
  { name: "Instagram", tone: "Provocativo e direto. Usa perguntas retóricas, imperativo e frases de impacto curtas." },
  { name: "Proposta Comercial", tone: "Consultivo e empático. Fala a língua do cliente, não da tecnologia." },
  { name: "Site", tone: "Claro e orientado a benefícios. Zero jargão técnico." },
];

const dosDonts = [
  { good: "Você não precisa entender de tecnologia. Precisa de um parceiro que entenda do seu negócio.", bad: "Desenvolvemos soluções tecnológicas inovadoras para empresas de todos os segmentos." },
  { good: "Transformamos ideias em realidade digital.", bad: "Somos especialistas em desenvolvimento de software sob demanda." },
  { good: "Entrega não é o fim. É o começo da nossa parceria.", bad: "Oferecemos suporte pós-entrega para todos os nossos clientes." },
];

const keyPhrases = [
  "Visualize. Toque. Acredite.",
  "Transformamos ideias em realidade digital.",
  "Sem jargão, sem surpresas, com foco no que importa: o seu negócio.",
  "Entrega não é o fim. É o começo da nossa parceria.",
];

const SectionTomDeVoz = () => {
  return (
    <SectionWrapper id="tom-de-voz" chapterNum="07">
      <div className="flex flex-col gap-12">
        <div>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-white mb-3">Tom de Voz</h2>
        </div>

        {/* Attributes */}
        <div className="flex flex-wrap gap-2">
          {["Direto", "Empático", "Humano", "Parceiro", "Confiável", "Sem Jargão"].map(a => (
            <span
              key={a}
              className="rounded-full px-4 py-2 font-inter text-sm font-medium text-white"
              style={{ background: "rgba(46,46,254,0.1)", border: "1px solid rgba(46,46,254,0.2)" }}
            >
              {a}
            </span>
          ))}
        </div>

        {/* Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {channels.map(c => (
            <div key={c.name} className="glass-card p-6">
              <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: "#2E2EFE" }}>{c.name}</span>
              <p className="font-inter text-sm text-white mt-3 leading-relaxed">{c.tone}</p>
            </div>
          ))}
        </div>

        {/* Do / Don't table */}
        <div className="space-y-3">
          {dosDonts.map((dd, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start gap-3 rounded-xl p-4" style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.1)" }}>
                <Check size={16} color="#22c55e" className="mt-0.5 shrink-0" />
                <p className="font-inter text-sm text-white">{dd.good}</p>
              </div>
              <div className="flex items-start gap-3 rounded-xl p-4" style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.1)" }}>
                <X size={16} color="#ef4444" className="mt-0.5 shrink-0" />
                <p className="font-inter text-sm text-white">{dd.bad}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key phrases */}
        <div className="space-y-4">
          {keyPhrases.map(p => (
            <blockquote
              key={p}
              className="rounded-xl py-5 px-6"
              style={{ borderLeft: "3px solid #2E2EFE", background: "rgba(46,46,254,0.05)" }}
            >
              <p className="font-inter text-lg font-medium text-white italic">"{p}"</p>
            </blockquote>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionTomDeVoz;
