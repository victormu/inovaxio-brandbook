import SectionWrapper from "../miv/SectionWrapper";
import ImagePlaceholder from "../miv/ImagePlaceholder";
import { Check, X } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "../miv/AnimatedSection";
import obj1 from "@/assets/obj1.png?format=webp&quality=80";
import obj2 from "@/assets/obj2.png?format=webp&quality=80";
import obj3 from "@/assets/obj3.png?format=webp&quality=80";
import ilus1 from "@/assets/ilus1.png?format=webp&quality=80";
import ilus2 from "@/assets/ilus2.png?format=webp&quality=80";
import ilus3 from "@/assets/ilus3.png?format=webp&quality=80";
import elementoMaos from "@/assets/elemento-maos.png?format=webp&quality=80";
import elementoPessoa from "@/assets/elemento-pessoa.png?format=webp&quality=80";
import elementoEsfera from "@/assets/elemento-esfera.png?format=webp&quality=80";

const categories = [
  {
    title: "Objetos 3D Renderizados",
    desc: "Objetos tridimensionais com acabamento vítreo, metálico ou cristalino. Representam tecnologia tangível — algo que pode ser visualizado e tocado antes de existir.",
    rules: [
      "Sempre em fundo escuro da paleta oficial",
      "Iluminação: luz de borda azul elétrico (#2E2EFE) + toque de ciano",
      "Nunca usar fundo branco ou claro",
      "Escala: objeto ocupa entre 40–70% da área da peça",
    ],
    images: [
      { src: obj1, alt: "Objeto 3D — Grid de cristal" },
      { src: obj2, alt: "Objeto 3D — Cubos metálicos" },
      { src: obj3, alt: "Objeto 3D — Painéis de vidro" },
    ],
  },
  {
    title: "Ilustrações Conceituais",
    desc: "Composições visuais que traduzem conceitos abstratos em imagem — conexão, crescimento, processo, parceria. Usadas quando não há um objeto tecnológico direto para ilustrar.",
    rules: [
      "Paleta restrita: apenas as cores oficiais da marca",
      "Traço ou render: sempre alinhado ao estilo 3D da marca",
      "Evitar ilustrações flat ou com cores fora da paleta",
      "Evitar fotografias realistas de pessoas",
    ],
    images: [
      { src: ilus1, alt: "Ilustração — Parceria" },
      { src: ilus2, alt: "Ilustração — Interface digital" },
      { src: ilus3, alt: "Ilustração — Conexão e negócios" },
    ],
  },
];

const elementos = [
  {
    title: "Mãos",
    desc: "Representam parceria, confiança e negociação. Sempre em estilo 3D monocromático azul, sem traços realistas.",
    src: elementoMaos,
    alt: "Elemento — Mãos",
  },
  {
    title: "Pessoas",
    desc: "Figuras humanas abstratas, sem aspectos faciais definidos. Transmitem profissionalismo e autoridade de forma universal.",
    src: elementoPessoa,
    alt: "Elemento — Pessoa",
  },
  {
    title: "Esfera",
    desc: "Representa globalidade, inovação e completude. Elemento central da linguagem visual da marca.",
    src: elementoEsfera,
    alt: "Elemento — Esfera",
  },
];

const dos = [
  "Objetos 3D com iluminação azul elétrico em fundo escuro",
  "Renders de interface em perspectiva sobre fundo gradiente",
];
const donts = [
  "Ilustrações flat coloridas fora da paleta",
  "Ícones genéricos sem tratamento de marca",
];

const SectionIlustracoes = () => {
  return (
    <SectionWrapper id="ilustracoes" chapterNum="06">
      <div className="flex flex-col gap-12">
        <div>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-white mb-3">Ilustrações e Visuais de Apoio</h2>
          <p className="font-inter text-[15px] leading-relaxed max-w-3xl" style={{ color: "var(--brand-text-secondary)" }}>
            A Inovaxio utiliza três categorias de visuais de apoio nas suas comunicações. Cada categoria tem um papel específico e regras de uso.
          </p>
        </div>

        {categories.map((cat, idx) => (
          <FadeUp key={idx} delay={idx * 0.1}>
            <div className="glass-card p-6 md:p-8">
              <span className="font-inter text-[11px] font-semibold uppercase tracking-widest" style={{ color: "#2E2EFE" }}>
                Categoria {idx + 1}
              </span>
              <h3 className="font-inter font-semibold text-xl text-white mt-2 mb-2">{cat.title}</h3>
              <p className="font-inter text-sm mb-4" style={{ color: "var(--brand-text-secondary)" }}>{cat.desc}</p>
              <ul className="space-y-1 mb-6">
                {cat.rules.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 font-inter text-[13px]" style={{ color: "rgba(230,231,232,0.6)" }}>
                    <span style={{ color: "#2E2EFE" }}>•</span> {r}
                  </li>
                ))}
              </ul>
              <StaggerContainer className="grid grid-cols-3 gap-4">
                {cat.images.map((img, i) => (
                  <StaggerItem key={i} className="rounded-xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeUp>
        ))}

        {/* Elementos-chave das Ilustrações */}
        <FadeUp delay={0.2}>
          <div className="glass-card p-6 md:p-8">
            <span className="font-inter text-[11px] font-semibold uppercase tracking-widest" style={{ color: "#2E2EFE" }}>
              Elementos-Chave
            </span>
            <h3 className="font-inter font-semibold text-xl text-white mt-2 mb-2">Elementos das Ilustrações</h3>
            <p className="font-inter text-sm mb-6" style={{ color: "var(--brand-text-secondary)" }}>
              As ilustrações da Inovaxio utilizam 3 elementos-chave recorrentes que reforçam a identidade visual e a narrativa da marca.
            </p>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {elementos.map((el, i) => (
                <StaggerItem key={i} className="flex flex-col items-center gap-4">
                  <div className="rounded-xl overflow-hidden w-full" style={{ aspectRatio: "1/1" }}>
                    {el.src ? (
                      <img src={el.src} alt={el.alt} className="w-full h-full object-cover" loading="lazy" />
                    ) : (
                      <ImagePlaceholder label={el.title} sublabel="Próximo envio" aspectRatio="1/1" className="w-full h-full" />
                    )}
                  </div>
                  <div className="text-center">
                    <h4 className="font-inter font-semibold text-white text-base mb-1">{el.title}</h4>
                    <p className="font-inter text-[13px]" style={{ color: "var(--brand-text-secondary)" }}>{el.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeUp>

        {/* Do / Don't */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StaggerItem className="rounded-xl p-5" style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.15)" }}>
            <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: "#22c55e" }}>Correto</span>
            <ul className="mt-3 space-y-2">
              {dos.map(d => (
                <li key={d} className="flex items-start gap-2 font-inter text-sm text-white">
                  <Check size={14} color="#22c55e" className="mt-0.5 shrink-0" /> {d}
                </li>
              ))}
            </ul>
          </StaggerItem>
          <StaggerItem className="rounded-xl p-5" style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}>
            <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: "#ef4444" }}>Incorreto</span>
            <ul className="mt-3 space-y-2">
              {donts.map(d => (
                <li key={d} className="flex items-start gap-2 font-inter text-sm text-white">
                  <X size={14} color="#ef4444" className="mt-0.5 shrink-0" /> {d}
                </li>
              ))}
            </ul>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
};

export default SectionIlustracoes;
