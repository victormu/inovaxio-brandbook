import { useState } from "react";
import SectionWrapper from "../miv/SectionWrapper";

const interWeights = [
  { label: "Display (900)", weight: 900, size: "text-5xl md:text-6xl", text: "Transformamos ideias em realidade digital." },
  { label: "H1 (700)", weight: 700, size: "text-3xl md:text-4xl", text: "Precisa de um parceiro que entenda do seu negócio." },
  { label: "H2 (600)", weight: 600, size: "text-2xl md:text-[28px]", text: "Sem jargão, sem surpresas." },
  { label: "H3 (500)", weight: 500, size: "text-xl", text: "Com IA, seu time foca no que importa." },
  { label: "Body (400)", weight: 400, size: "text-base", text: "Antes de qualquer contrato, você já enxerga o seu projeto ganhando forma." },
  { label: "Caption (400)", weight: 400, size: "text-[13px]", text: "#inovaxio_solutions" },
];

const SectionTipografia = () => {
  const [liveText, setLiveText] = useState("Digite aqui para testar a tipografia...");

  return (
    <SectionWrapper id="tipografia" chapterNum="04">
      <div className="flex flex-col gap-12">
        <div>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-white mb-3">Sistema Tipográfico</h2>
          <p className="font-inter text-[15px] leading-relaxed max-w-3xl" style={{ color: "var(--brand-text-secondary)" }}>
            A Inovaxio opera com duas fontes, cada uma com função específica no ecossistema da marca.
          </p>
        </div>

        {/* Quicksand */}
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="font-quicksand font-bold text-2xl text-white">Quicksand</h3>
            <span className="rounded-full px-3 py-1 text-[11px] font-semibold" style={{ background: "rgba(46,46,254,0.15)", color: "#2E2EFE" }}>
              Fonte Institucional
            </span>
          </div>
          <p className="font-inter text-sm mb-6" style={{ color: "var(--brand-text-secondary)" }}>
            Fonte original da marca. Usada em títulos de materiais institucionais, wordmark e documentos formais.
            Pesos: Medium (principal), Bold (destaque).
          </p>
          <div className="space-y-3 mb-6" style={{ color: "rgba(230,231,232,0.6)" }}>
            <p className="font-quicksand font-medium text-lg tracking-wide">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p className="font-quicksand font-medium text-lg tracking-wide">abcdefghijklmnopqrstuvwxyz</p>
            <p className="font-quicksand font-medium text-lg tracking-wide">0123456789</p>
          </div>
          <p className="font-quicksand font-medium text-4xl text-white">Inovaxio</p>
        </div>

        {/* Inter */}
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="font-inter font-bold text-2xl text-white">Inter</h3>
            <span className="rounded-full px-3 py-1 text-[11px] font-semibold" style={{ background: "rgba(46,46,254,0.15)", color: "#2E2EFE" }}>
              Fonte Digital
            </span>
          </div>
          <p className="font-inter text-sm mb-6" style={{ color: "var(--brand-text-secondary)" }}>
            Adicionada ao sistema para todas as comunicações digitais — posts, apresentações, interfaces e landing pages.
            Pesos: Black 900, Bold 700, SemiBold 600, Medium 500, Regular 400, Light 300.
          </p>

          {/* Hierarchy */}
          <div className="space-y-6 mb-8">
            {interWeights.map(w => (
              <div key={w.label} className="flex flex-col gap-1">
                <span className="font-inter text-[11px] font-semibold uppercase tracking-widest" style={{ color: "#2E2EFE" }}>
                  {w.label}
                </span>
                <p className={`font-inter ${w.size} text-white leading-tight`} style={{ fontWeight: w.weight }}>
                  {w.text}
                </p>
              </div>
            ))}
          </div>

          {/* Live text editor */}
          <div>
            <label className="font-inter text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: "#2E2EFE" }}>
              Editor de Texto ao Vivo
            </label>
            <input
              type="text"
              value={liveText}
              onChange={e => setLiveText(e.target.value)}
              className="w-full rounded-xl border-0 px-4 py-3 font-inter text-sm text-white outline-none focus:ring-1 focus:ring-[#2E2EFE]"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
            <div className="mt-4 space-y-2">
              {[900, 700, 600, 500, 400, 300].map(w => (
                <p key={w} className="font-inter text-lg text-white" style={{ fontWeight: w }}>
                  <span className="inline-block w-8 text-[10px] font-semibold tabular-nums" style={{ color: "rgba(230,231,232,0.3)" }}>{w}</span>
                  {liveText}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Key rule */}
        <div className="rounded-xl p-5" style={{ background: "rgba(46,46,254,0.08)", border: "1px solid rgba(46,46,254,0.2)" }}>
          <p className="font-inter text-sm font-medium text-white">
            ☞ A <strong>Inter</strong> é a fonte padrão para toda comunicação digital e social.{" "}
            <strong className="font-quicksand">Quicksand</strong> é a fonte institucional da marca.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionTipografia;
