import SectionWrapper from "../miv/SectionWrapper";
import { StaggerContainer, StaggerItem, FadeUp } from "../miv/AnimatedSection";
import postExemplo from "@/assets/post-exemplo.png?format=webp&quality=80";
import cartaoVisita from "@/assets/cartao-visita.png?format=webp&quality=80";
import comercialCapa from "@/assets/comercial-capa.png?format=webp&quality=80";
import comercialConteudo from "@/assets/comercial-conteudo.png?format=webp&quality=80";

const SectionAplicacoes = () => {
  return (
    <SectionWrapper id="aplicacoes" chapterNum="08">
      <div className="flex flex-col gap-12">
        <div>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-white mb-3">Aplicações</h2>
        </div>

        {/* Instagram Post */}
        <FadeUp>
          <div className="glass-card p-6 md:p-8">
            <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: "#2E2EFE" }}>Instagram Post</span>
            <div className="mt-4 max-w-sm">
              <img src={postExemplo} alt="Post Instagram — exemplo de template" className="rounded-lg w-full" style={{ aspectRatio: "4/5", objectFit: "cover" }} loading="lazy" />
            </div>
            <p className="font-inter text-sm mt-4" style={{ color: "var(--brand-text-secondary)" }}>
              Quicksand Bold para copy principal · Inter Regular para apoio · Logo centralizado na parte inferior
            </p>
          </div>
        </FadeUp>

        {/* Apresentação Comercial */}
        <FadeUp delay={0.1}>
          <div className="glass-card p-6 md:p-8">
            <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: "#2E2EFE" }}>Apresentação Comercial</span>
            <StaggerContainer className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <StaggerItem>
                <img src={comercialCapa} alt="Slide — Capa da apresentação" className="rounded-lg w-full" style={{ aspectRatio: "16/9", objectFit: "cover" }} loading="lazy" />
              </StaggerItem>
              <StaggerItem>
                <img src={comercialConteudo} alt="Slide — Conteúdo interno" className="rounded-lg w-full" style={{ aspectRatio: "16/9", objectFit: "cover" }} loading="lazy" />
              </StaggerItem>
            </StaggerContainer>
            <p className="font-inter text-sm mt-4" style={{ color: "var(--brand-text-secondary)" }}>
              Fundo #231F20 · Logo no canto superior esquerdo · Numeração no canto superior direito
            </p>
          </div>
        </FadeUp>

        {/* Cartão de Visita */}
        <FadeUp delay={0.2}>
          <div className="glass-card p-6 md:p-8">
            <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: "#2E2EFE" }}>Cartão de Visita</span>
            <div className="mt-4 max-w-md">
              <img src={cartaoVisita} alt="Mockup — Cartão de visita" className="rounded-lg w-full" style={{ aspectRatio: "8/5", objectFit: "cover" }} loading="lazy" />
            </div>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-inter text-[13px]" style={{ color: "var(--brand-text-secondary)" }}>
              <span>contato@inovaxio.com.br</span>
              <span>·</span>
              <span>(82) 9 9938-1283</span>
              <span>·</span>
              <span>inovaxio.com.br</span>
              <span>·</span>
              <span>@inovaxio_solutions</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </SectionWrapper>
  );
};

export default SectionAplicacoes;
