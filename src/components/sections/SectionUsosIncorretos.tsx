import SectionWrapper from "../miv/SectionWrapper";
import { X } from "lucide-react";

const items = [
  "Alterar as cores do logo",
  "Distorcer proporções",
  "Usar em fundo de baixo contraste",
  "Adicionar sombra ou efeito ao logo",
  "Rotacionar o logo",
  "Usar o wordmark sem o símbolo",
  "Usar fontes fora do sistema",
  "Criar gradientes com cores fora da paleta",
  "Usar opacidade reduzida no logo",
];

const SectionUsosIncorretos = () => {
  return (
    <SectionWrapper id="usos-incorretos" chapterNum="09">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-white mb-3">O que nunca fazer</h2>
          <p className="font-inter text-[15px] leading-relaxed max-w-3xl" style={{ color: "var(--brand-text-secondary)" }}>
            A consistência da marca depende da disciplina no uso dos seus elementos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center justify-center rounded-xl p-8 text-center min-h-[120px]"
              style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.12)" }}
            >
              <span
                className="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full"
                style={{ background: "rgba(239,68,68,0.15)" }}
              >
                <X size={14} color="#ef4444" />
              </span>
              <span className="font-inter text-[13px] font-medium text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionUsosIncorretos;
