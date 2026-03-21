import SectionWrapper from "../miv/SectionWrapper";

const SectionIntroducao = () => {
  return (
    <SectionWrapper id="introducao" chapterNum="01">
      <div className="flex flex-col gap-8">
        {/* Hero */}
        <div>
          <h1 className="font-quicksand font-bold text-6xl md:text-8xl leading-none text-gradient" style={{ letterSpacing: "-0.04em" }}>
            Inovaxio
          </h1>
          <p className="mt-4 font-inter text-xl md:text-2xl font-light" style={{ color: "var(--brand-text-secondary)" }}>
            Transformamos ideias em realidade digital.
          </p>
        </div>

        {/* Brand origin */}
        <div className="glass-card p-8 max-w-3xl">
          <p className="font-inter text-[15px] leading-relaxed" style={{ color: "rgba(230,231,232,0.75)" }}>
            <strong className="text-white">"Inovaxio"</strong> foi construído unindo três conceitos:{" "}
            <em className="text-gradient">Inovação</em>,{" "}
            <em className="text-gradient">Axio</em> (derivado de "Axioma" — princípios fundamentais) e{" "}
            <em className="text-gradient">IO</em> — representação de Input/Output no universo tecnológico.
            O sufixo "xio" evoca excelência. O "vazio" na palavra sugere um espaço em branco pronto para
            ser preenchido com novas ideias.
          </p>
        </div>

        {/* Attribute pills */}
        <div className="flex flex-wrap gap-3">
          {["Inovação com propósito", "Tecnologia humanizada", "Parceria além da entrega"].map((attr) =>
          <span
            key={attr}
            className="rounded-full px-5 py-2.5 font-inter text-sm font-medium"
            style={{
              background: "rgba(46,46,254,0.1)",
              border: "1px solid rgba(46,46,254,0.25)",
              color: "#fff"
            }}>
            
              {attr}
            </span>
          )}
        </div>
      </div>
    </SectionWrapper>);

};

export default SectionIntroducao;