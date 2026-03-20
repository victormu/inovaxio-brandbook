import SectionWrapper from "../miv/SectionWrapper";
import { X } from "lucide-react";

import logoPrincipal from "@/assets/logo-principal.svg";
import logoColoridoVertical from "@/assets/logo-colorido-vertical.svg";
import logoSimbolo from "@/assets/logo-simbolo.svg";
import logoMonoBranca from "@/assets/logo-mono-branca.svg";
import logoNegativo from "@/assets/logo-negativo.svg";

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

        {/* Logo versions — Principal (2x) + 4 normal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Principal — spans 2 columns */}
          <div className="glass-card p-5 flex flex-col gap-3 sm:col-span-2">
            <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: "#2E2EFE" }}>
              Versão Principal
            </span>
            <div className="flex items-center justify-center rounded-xl p-8" style={{ backgroundColor: "#1A1820" }}>
              <img src={logoPrincipal} alt="Logo principal INOVAXIO" className="w-full max-w-lg" />
            </div>
          </div>

          {/* Versão Colorida Vertical */}
          <div className="glass-card p-5 flex flex-col gap-3">
            <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: "#2E2EFE" }}>
              Versão Vertical
            </span>
            <div className="flex items-center justify-center rounded-xl p-6" style={{ backgroundColor: "#1A1820" }}>
              <img src={logoColoridoVertical} alt="Logo colorido vertical" className="h-40" />
            </div>
          </div>

          {/* Versão Ícone / Símbolo */}
          <div className="glass-card p-5 flex flex-col gap-3">
            <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: "#2E2EFE" }}>
              Versão Ícone
            </span>
            <div className="flex items-center justify-center rounded-xl p-6" style={{ backgroundColor: "#1A1820" }}>
              <img src={logoSimbolo} alt="Símbolo i/o" className="h-32" />
            </div>
          </div>

          {/* Monocromática Branca */}
          <div className="glass-card p-5 flex flex-col gap-3">
            <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: "#2E2EFE" }}>
              Monocromática Branca
            </span>
            <div className="flex items-center justify-center rounded-xl p-6" style={{ backgroundColor: "#1A1820" }}>
              <img src={logoMonoBranca} alt="Logo monocromático branco" className="w-full max-w-[220px]" />
            </div>
          </div>

          {/* Monocromática Escura / Negativo */}
          <div className="glass-card p-5 flex flex-col gap-3">
            <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: "#2E2EFE" }}>
              Monocromática Escura
            </span>
            <div className="flex items-center justify-center rounded-xl p-6" style={{ backgroundColor: "#E6E7E8", borderRadius: 12 }}>
              <img src={logoNegativo} alt="Logo monocromático escuro" className="w-full max-w-[220px]" />
            </div>
          </div>
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
              <div className="flex items-center justify-center" style={{ width: 160, height: 56 }}>
                <img src={logoMonoBranca} alt="Logo branco" className="w-full" />
              </div>
              {/* X labels */}
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
