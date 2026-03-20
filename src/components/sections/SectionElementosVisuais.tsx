import SectionWrapper from "../miv/SectionWrapper";
import ImagePlaceholder from "../miv/ImagePlaceholder";

const SectionElementosVisuais = () => {
  return (
    <SectionWrapper id="elementos-visuais" chapterNum="05">
      <div className="flex flex-col gap-14">
        <div>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-white mb-3">Linguagem Visual</h2>
          <p className="font-inter text-[15px] leading-relaxed max-w-3xl" style={{ color: "var(--brand-text-secondary)" }}>
            O visual da Inovaxio evoluiu do flat para um sistema com profundidade, gradiente e materialidade — mantendo as mesmas cores oficiais.
          </p>
        </div>

        {/* 5.1 Gradientes Lúdicos */}
        <div>
          <h3 className="font-inter font-semibold text-lg text-white mb-1">5.1 Gradientes Lúdicos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {["Tipo A", "Tipo B", "Tipo C"].map((t, i) => (
              <div key={t} className="glass-card p-4 flex flex-col gap-3">
                <ImagePlaceholder label={`Gradiente ${t} — post real`} sublabel="1080 × 1350px" aspectRatio="4/5" />
                <code className="font-mono text-[11px] p-2 rounded-lg block" style={{ background: "rgba(0,0,0,0.3)", color: "rgba(230,231,232,0.5)" }}>
                  {i === 0 && "linear-gradient(135deg, #2E2EFE 0%, #3245FD 100%)"}
                  {i === 1 && "radial-gradient(circle at 20% 80%, #2E2EFE, #231F20)"}
                  {i === 2 && "linear-gradient(180deg, #3245FD 0%, #231F20 100%)"}
                </code>
              </div>
            ))}
          </div>
        </div>

        {/* 5.2 Glassmorphism */}
        <div>
          <h3 className="font-inter font-semibold text-lg text-white mb-4">5.2 Glassmorphism</h3>
          <div className="relative p-8 rounded-2xl" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(46,46,254,0.2), transparent 70%)" }}>
            <div className="glass-card-strong p-8">
              <p className="font-inter text-white text-lg font-semibold mb-2">Exemplo de Glassmorphism</p>
              <p className="font-inter text-sm" style={{ color: "var(--brand-text-secondary)" }}>
                Superfície translúcida com desfoque de fundo.
              </p>
            </div>
          </div>
          <code className="font-mono text-[11px] mt-3 p-3 rounded-lg block" style={{ background: "rgba(0,0,0,0.3)", color: "rgba(230,231,232,0.5)" }}>
{`background: rgba(255,255,255,0.06);
border: 1px solid rgba(255,255,255,0.10);
border-radius: 16px;
backdrop-filter: blur(12px);`}
          </code>
        </div>

        {/* 5.3 Elementos 3D */}
        <div>
          <h3 className="font-inter font-semibold text-lg text-white mb-4">5.3 Elementos 3D</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { l: "Objeto 3D — Esfera de cristal", s: "PNG transparente" },
              { l: "Objeto 3D — Cubos metálicos", s: "PNG transparente" },
              { l: "Objeto 3D — Painéis de vidro", s: "PNG transparente" },
              { l: "Objeto 3D — Aperto de mãos", s: "PNG transparente" },
            ].map(o => (
              <ImagePlaceholder key={o.l} label={o.l} sublabel={o.s} aspectRatio="1/1" />
            ))}
          </div>
          <p className="font-inter text-sm mt-4" style={{ color: "var(--brand-text-secondary)" }}>
            Sempre iluminados com luz de borda azul elétrico e ciano. Reforçam o conceito: tecnologia que
            você pode visualizar, tocar e acreditar.
          </p>
        </div>

        {/* 5.4 Glows */}
        <div>
          <h3 className="font-inter font-semibold text-lg text-white mb-4">5.4 Glows e Brilhos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass-card p-6 flex flex-col items-center gap-4">
              <div className="h-20 w-20 rounded-2xl" style={{ background: "#2E2EFE", boxShadow: "0 0 80px 20px rgba(46,46,254,0.45)" }} />
              <div className="text-center">
                <p className="font-inter text-sm font-semibold text-white">Glow Principal</p>
                <code className="font-mono text-[10px]" style={{ color: "rgba(230,231,232,0.4)" }}>box-shadow: 0 0 80px 20px rgba(46,46,254,0.45)</code>
              </div>
            </div>
            <div className="glass-card p-6 flex flex-col items-center gap-4">
              <div className="h-20 w-20 rounded-2xl" style={{ background: "transparent", border: "1px solid rgba(0,229,255,0.6)", boxShadow: "0 0 20px 4px rgba(0,229,255,0.3)" }} />
              <div className="text-center">
                <p className="font-inter text-sm font-semibold text-white">Glow de Borda</p>
                <code className="font-mono text-[10px]" style={{ color: "rgba(230,231,232,0.4)" }}>border: 1px solid rgba(0,229,255,0.6)</code>
              </div>
            </div>
            <div className="glass-card p-6 flex flex-col items-center gap-4">
              <div className="h-20 w-20 rounded-2xl" style={{ background: "rgba(50,69,253,0.15)" }} />
              <div className="text-center">
                <p className="font-inter text-sm font-semibold text-white">Glow de Superfície</p>
                <code className="font-mono text-[10px]" style={{ color: "rgba(230,231,232,0.4)" }}>rgba(50,69,253,0.15)</code>
              </div>
            </div>
          </div>
        </div>

        {/* 5.5 Padrão de Marca */}
        <div>
          <h3 className="font-inter font-semibold text-lg text-white mb-4">5.5 Padrão de Marca</h3>
          <div
            className="relative h-[200px] w-full max-w-[400px] overflow-hidden rounded-xl"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div
              className="absolute inset-0 flex flex-wrap items-center justify-center gap-4 font-inter font-bold text-lg"
              style={{ color: "#2E2EFE", opacity: 0.08, transform: "rotate(-15deg) scale(1.4)" }}
            >
              {Array.from({ length: 40 }).map((_, i) => (
                <span key={i} className="whitespace-nowrap">i/o</span>
              ))}
            </div>
          </div>
        </div>

        {/* 5.6 CTA Button */}
        <div>
          <h3 className="font-inter font-semibold text-lg text-white mb-4">5.6 CTA Button</h3>
          <div className="flex flex-wrap items-center gap-6">
            <button
              className="group flex items-center gap-3 rounded-full pl-6 pr-2 py-2 font-inter text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
              style={{ background: "linear-gradient(135deg, #2E2EFE, #3245FD)" }}
            >
              Fale com a gente
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform duration-200 group-hover:translate-x-0.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m0 0L8 4m3 3L8 10" stroke="#231F20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </button>
            <span className="font-inter text-[11px]" style={{ color: "var(--brand-text-secondary)" }}>Default + Hover</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionElementosVisuais;
