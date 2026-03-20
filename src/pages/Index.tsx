import MivSidebar from "@/components/miv/MivSidebar";
import logoSimbolo from "@/assets/logo-simbolo.svg";
import BackToTop from "@/components/miv/BackToTop";
import SectionIntroducao from "@/components/sections/SectionIntroducao";
import SectionMarcaLogo from "@/components/sections/SectionMarcaLogo";
import SectionCores from "@/components/sections/SectionCores";
import SectionTipografia from "@/components/sections/SectionTipografia";
import SectionElementosVisuais from "@/components/sections/SectionElementosVisuais";
import SectionIlustracoes from "@/components/sections/SectionIlustracoes";
import SectionTomDeVoz from "@/components/sections/SectionTomDeVoz";
import SectionAplicacoes from "@/components/sections/SectionAplicacoes";
import SectionUsosIncorretos from "@/components/sections/SectionUsosIncorretos";

const TopBar = () => (
  <header
    className="fixed top-0 right-0 z-30 flex h-14 items-center justify-between border-b px-6 lg:left-[240px] left-0"
    style={{
      backgroundColor: "rgba(35,31,32,0.85)",
      backdropFilter: "blur(12px)",
      borderColor: "rgba(255,255,255,0.06)",
    }}
  >
    <div className="flex items-center gap-3">
      {/* Small logo placeholder */}
      <div className="flex items-center justify-center rounded-md overflow-hidden" style={{ width: 32, height: 32 }}>
        <img src={logoSimbolo} alt="Inovaxio" className="w-full h-full object-contain" />
      </div>
      <span className="font-inter text-sm font-semibold text-white hidden sm:inline">INOVAXIO</span>
    </div>
    <div className="flex items-center gap-3">
      <span className="font-inter text-[13px] font-medium hidden sm:inline" style={{ color: "var(--brand-text-secondary)" }}>
        Manual de Identidade Visual
      </span>
      <span
        className="rounded-full px-2.5 py-0.5 font-inter text-[11px] font-semibold"
        style={{ background: "rgba(46,46,254,0.15)", color: "#2E2EFE" }}
      >
        v2.0
      </span>
    </div>
  </header>
);

const Index = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "radial-gradient(ellipse at 20% 0%, rgba(46,46,254,0.12) 0%, #231F20 60%)",
      }}
    >
      <MivSidebar />
      <TopBar />
      <main className="lg:ml-[240px] pt-14">
        <SectionIntroducao />
        <SectionMarcaLogo />
        <SectionCores />
        <SectionTipografia />
        <SectionElementosVisuais />
        <SectionIlustracoes />
        <SectionTomDeVoz />
        <SectionAplicacoes />
        <SectionUsosIncorretos />
        {/* Footer */}
        <footer className="px-6 py-16 text-center">
          <p className="font-inter text-[13px]" style={{ color: "rgba(230,231,232,0.3)" }}>
            INOVAXIO — Manual de Identidade Visual v2.0
          </p>
        </footer>
      </main>
      <BackToTop />
    </div>
  );
};

export default Index;
