import { useState } from "react";
import SectionWrapper from "../miv/SectionWrapper";
import { toast } from "sonner";
import { Copy } from "lucide-react";

interface ColorSwatchProps {
  name: string;
  hex: string;
  rgb: string;
  cmyk: string;
  large?: boolean;
  lightBg?: boolean;
}

const ColorSwatch = ({ name, hex, rgb, cmyk, large, lightBg }: ColorSwatchProps) => {
  const copy = () => {
    navigator.clipboard.writeText(hex);
    toast("Copiado! ✓", { duration: 1500 });
  };

  return (
    <button
      onClick={copy}
      className="glass-card group flex flex-col overflow-hidden text-left transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
    >
      <div
        className={`relative flex items-end justify-end ${large ? "h-32" : "h-24"} w-full p-3`}
        style={{ backgroundColor: hex, borderRadius: "16px 16px 0 0" }}
      >
        <Copy size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" color={lightBg ? "#231F20" : "#fff"} />
      </div>
      <div className="flex flex-col gap-1 p-4">
        <span className="font-inter text-sm font-semibold text-white">{name}</span>
        <span className="font-inter text-xs font-mono" style={{ color: "#2E2EFE" }}>{hex}</span>
        <span className="font-inter text-[11px]" style={{ color: "var(--brand-text-secondary)" }}>RGB: {rgb}</span>
        <span className="font-inter text-[11px]" style={{ color: "var(--brand-text-secondary)" }}>CMYK: {cmyk}</span>
      </div>
    </button>
  );
};

const SectionCores = () => {
  return (
    <SectionWrapper id="cores" chapterNum="03">
      <div className="flex flex-col gap-12">
        <div>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-white mb-3">Paleta de Cores</h2>
          <p className="font-inter text-[15px] leading-relaxed max-w-3xl" style={{ color: "var(--brand-text-secondary)" }}>
            A paleta oficial da Inovaxio não mudou desde a fundação. Os gradientes presentes nas comunicações
            são compostos pelas variações dessas mesmas cores.
          </p>
        </div>

        {/* Primary colors */}
        <div>
          <h3 className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#2E2EFE" }}>
            Cores Primárias
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ColorSwatch name="Azul Primário" hex="#2E2EFE" rgb="46 / 46 / 254" cmyk="C89 / M73 / Y0 / K0" large />
            <ColorSwatch name="Azul Secundário" hex="#3245FD" rgb="50 / 69 / 253" cmyk="C87 / M70 / Y0 / K0" large />
            <ColorSwatch name="Dark / Base" hex="#231F20" rgb="35 / 31 / 32" cmyk="C72 / M67 / Y59 / K79" large />
            <ColorSwatch name="Neutro Claro" hex="#E6E7E8" rgb="230 / 231 / 232" cmyk="C12 / M8 / Y8 / K0" large lightBg />
          </div>
        </div>

        {/* Gradient system */}
        <div>
          <h3 className="font-inter text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#2E2EFE" }}>
            Sistema de Gradientes
          </h3>
          <p className="font-inter text-sm mb-6" style={{ color: "var(--brand-text-secondary)" }}>
            Os gradientes não são cores novas — são combinações das cores primárias aplicadas com profundidade e movimento.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Gradient Principal */}
            <div className="glass-card overflow-hidden">
              <div className="h-28 w-full" style={{ background: "linear-gradient(135deg, #2E2EFE, #3245FD)", borderRadius: "16px 16px 0 0" }} />
              <div className="p-4">
                <span className="font-inter text-sm font-semibold text-white">Gradiente Principal</span>
                <code className="mt-2 block font-mono text-[11px]" style={{ color: "rgba(230,231,232,0.5)" }}>
                  linear-gradient(135deg, #2E2EFE, #3245FD)
                </code>
              </div>
            </div>
            {/* Gradient Dark */}
            <div className="glass-card overflow-hidden">
              <div className="h-28 w-full" style={{ background: "radial-gradient(ellipse at 30% 70%, rgba(46,46,254,0.35) 0%, #231F20 70%)", borderRadius: "16px 16px 0 0" }} />
              <div className="p-4">
                <span className="font-inter text-sm font-semibold text-white">Gradiente de Fundo Dark</span>
                <code className="mt-2 block font-mono text-[11px]" style={{ color: "rgba(230,231,232,0.5)" }}>
                  radial-gradient(ellipse at 30% 70%, ...)
                </code>
              </div>
            </div>
            {/* Gradient Text */}
            <div className="glass-card overflow-hidden">
              <div className="flex h-28 items-center justify-center px-6" style={{ borderRadius: "16px 16px 0 0", background: "rgba(255,255,255,0.02)" }}>
                <span
                  className="inline-block font-quicksand text-2xl font-bold md:text-3xl"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #6366ff 0%, #5555f0 30%, #4a4cc8 60%, #3b3d8e 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Seus Sistemas.
                </span>
              </div>
              <div className="p-4">
                <span className="font-inter text-sm font-semibold text-white">Gradiente de Texto</span>
                <code className="mt-2 block font-mono text-[11px] whitespace-pre-line" style={{ color: "rgba(230,231,232,0.5)" }}>
                  linear-gradient(90deg, #6366ff, #5555f0, #4a4cc8, #3b3d8e){"\n"}background-clip: text
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionCores;
