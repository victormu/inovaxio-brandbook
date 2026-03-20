import SectionWrapper from "../miv/SectionWrapper";
import { X } from "lucide-react";

import logoColoridoHorizontal from "@/assets/logos/inovaxio-colorido-horizontal.svg";
import logoColoridoVertical from "@/assets/logos/inovaxio-colorido-vertical.svg";
import logoBrancoHorizontal from "@/assets/logos/inovaxio-branco-horizontal.svg";
import logoBrancoVertical from "@/assets/logos/inovaxio-branco-vertical.svg";
import logoEscuroHorizontal from "@/assets/logos/inovaxio-escuro-horizontal.svg";
import logoEscuroVertical from "@/assets/logos/inovaxio-escuro-vertical.svg";

const logoVersions = [
  {
    title: "Versão Preferencial — Colorida Horizontal",
    img: logoColoridoHorizontal,
    bg: "#ffffff",
  },
  {
    title: "Versão Preferencial — Colorida Vertical",
    img: logoColoridoVertical,
    bg: "#ffffff",
  },
  {
    title: "Versão Branca — Horizontal",
    img: logoBrancoHorizontal,
    bg: "#1A1820",
  },
  {
    title: "Versão Branca — Vertical",
    img: logoBrancoVertical,
    bg: "#1A1820",
  },
  {
    title: "Versão Monocromática Escura — Horizontal",
    img: logoEscuroHorizontal,
    bg: "#E6E7E8",
  },
  {
    title: "Versão Monocromática Escura — Vertical",
    img: logoEscuroVertical,
    bg: "#E6E7E8",
  },
];

const incorrectUses = [
  "Alterar as cores do logo",
  "Distorcer ou esticar proporções",
  "Aplicar em fundo sem contraste",
  "Adicionar sombra ao logo",
  "Rotacionar o logo",
  "Usar o wordmark sem o símbolo",
];

const SectionMarcaLogo = () => {
  return (
    <SectionWrapper id="marca-logo" chapterNum="02">
      <div className="flex flex-col gap-12">
        <div>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-white mb-3">Marca / Logo</h2>
          <p className="font-inter text-[15px] leading-relaxed max-w-2xl" style={{ color: "var(--brand-text-secondary)" }}>
            O símbolo i/o combina um "i" estilizado com ponto superior, um elemento diagonal (barra) e
            um "O" circular — representando I/O (Input/Output), a linguagem fundamental da tecnologia.
          </p>
        </div>

        {/* Logo versions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {logoVersions.map(v => (
            <div key={v.title} className="glass-card p-5 flex flex-col gap-3">
              <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: "#2E2EFE" }}>
                {v.title}
              </span>
              <div
                className="flex items-center justify-center rounded-xl p-6"
                style={{ backgroundColor: v.bg }}
              >
                <img
                  src={v.img}
                  alt={v.title}
                  className="w-full max-w-[200px] h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Spacing diagram */}
        <div className="glass-card p-8">
          <h3 className="font-inter font-semibold text-lg text-white mb-4">Área de Respiro</h3>
          <p className="font-inter text-sm mb-6" style={{ color: "var(--brand-text-secondary)" }}>
            Use a altura do ponto do "i" como unidade X. Espaço mínimo livre = 1X em todos os lados.
          </p>
          <div className="flex items-center justify-center">
            <div
              className="relative flex items-center justify-center"
              style={{
                width: 280, height: 120,
                border: "1px dashed rgba(46,46,254,0.4)",
                borderRadius: 8,
              }}
            >
              <div className="flex items-center justify-center rounded-md p-2" style={{ width: 160, height: 56, border: "1px solid rgba(255,255,255,0.15)" }}>
                <img src={logoBrancoHorizontal} alt="Logo referência" className="h-full w-auto object-contain" />
              </div>
              <span className="absolute top-1 left-1/2 -translate-x-1/2 font-inter text-[10px] font-semibold" style={{ color: "#2E2EFE" }}>1X</span>
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 font-inter text-[10px] font-semibold" style={{ color: "#2E2EFE" }}>1X</span>
              <span className="absolute left-1 top-1/2 -translate-y-1/2 font-inter text-[10px] font-semibold" style={{ color: "#2E2EFE" }}>1X</span>
              <span className="absolute right-1 top-1/2 -translate-y-1/2 font-inter text-[10px] font-semibold" style={{ color: "#2E2EFE" }}>1X</span>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-6">
            <div className="glass-card px-4 py-3">
              <span className="font-inter text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#2E2EFE" }}>Digital</span>
              <p className="font-inter text-sm text-white mt-1">Altura mínima: 24px</p>
            </div>
            <div className="glass-card px-4 py-3">
              <span className="font-inter text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#2E2EFE" }}>Impresso</span>
              <p className="font-inter text-sm text-white mt-1">Altura mínima: 1cm</p>
            </div>
          </div>
        </div>

        {/* Usos incorretos */}
        <div>
          <h3 className="font-inter font-semibold text-lg text-white mb-4">Usos Incorretos</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {incorrectUses.map(use => (
              <div
                key={use}
                className="relative flex items-center justify-center rounded-xl p-6 text-center"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full" style={{ background: "rgba(239,68,68,0.2)" }}>
                  <X size={12} color="#ef4444" />
                </span>
                <span className="font-inter text-[13px]" style={{ color: "rgba(230,231,232,0.6)" }}>{use}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionMarcaLogo;
