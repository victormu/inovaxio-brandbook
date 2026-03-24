import SectionWrapper from "../miv/SectionWrapper";
import { FadeUp, ScaleIn } from "../miv/AnimatedSection";
import gridAureo from "@/assets/grid-aureo.png";
import construcaoSimbolo from "@/assets/construcao-simbolo.png";

const SectionConstrucaoSimbolo = () => {
  return (
    <SectionWrapper id="construcao-simbolo" chapterNum="02.1">
      <div className="flex flex-col gap-12">
        <div>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-white mb-3">
            Construção do Símbolo
          </h2>
          <p
            className="font-inter text-[15px] leading-relaxed max-w-2xl"
            style={{ color: "var(--brand-text-secondary)" }}
          >
            O símbolo i/o foi construído sobre a proporção áurea (φ = 1.618),
            garantindo harmonia matemática entre cada elemento. Os círculos e
            retângulos derivados da espiral áurea definem os raios, espessuras e
            espaçamentos internos do ícone.
          </p>
        </div>

        {/* Grid Áureo */}
        <FadeUp>
          <div className="glass-card p-6 flex flex-col gap-4">
            <span
              className="font-inter text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#2E2EFE" }}
            >
              Grid Áureo
            </span>
            <p
              className="font-inter text-sm max-w-xl"
              style={{ color: "rgba(230,231,232,0.6)" }}
            >
              A base geométrica utiliza retângulos e circunferências na proporção
              áurea. Os módulos <strong className="text-white">A</strong> e{" "}
              <strong className="text-white">b</strong> definem as unidades
              principais e secundárias que orientam todo o desenho.
            </p>
            <div
              className="flex items-center justify-center rounded-xl overflow-hidden"
              style={{ backgroundColor: "#1d1d1b" }}
            >
              <img
                src={gridAureo}
                alt="Grid áureo com proporções A e b"
                className="w-full max-w-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </FadeUp>

        {/* Construção aplicada */}
        <FadeUp delay={0.15}>
          <div className="glass-card p-6 flex flex-col gap-4">
            <span
              className="font-inter text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#2E2EFE" }}
            >
              Aplicação no Símbolo
            </span>
            <p
              className="font-inter text-sm max-w-xl"
              style={{ color: "rgba(230,231,232,0.6)" }}
            >
              Cada componente do símbolo — o ponto do "i", as diagonais da barra e
              o "O" circular — é derivado diretamente dos módulos áureos,
              assegurando proporções opticamente equilibradas em qualquer escala.
            </p>
            <div
              className="flex items-center justify-center rounded-xl overflow-hidden"
              style={{ backgroundColor: "#1d1d1b" }}
            >
              <img
                src={construcaoSimbolo}
                alt="Construção do símbolo i/o sobre o grid áureo"
                className="w-full max-w-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </SectionWrapper>
  );
};

export default SectionConstrucaoSimbolo;
