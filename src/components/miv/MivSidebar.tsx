import { useEffect, useState } from "react";

const sections = [
  { id: "introducao", num: "01", label: "Introdução" },
  { id: "marca-logo", num: "02", label: "Marca / Logo" },
  { id: "cores", num: "03", label: "Cores" },
  { id: "tipografia", num: "04", label: "Tipografia" },
  { id: "elementos-visuais", num: "05", label: "Elementos Visuais" },
  { id: "ilustracoes", num: "06", label: "Ilustrações" },
  { id: "tom-de-voz", num: "07", label: "Tom de Voz" },
  { id: "aplicacoes", num: "08", label: "Aplicações" },
  { id: "usos-incorretos", num: "09", label: "Usos Incorretos" },
];

const MivSidebar = () => {
  const [active, setActive] = useState("introducao");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          // pick the one closest to the top
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside
      className="fixed left-0 top-0 z-40 hidden h-screen w-[240px] flex-col border-r border-r-[rgba(255,255,255,0.06)] lg:flex"
      style={{ backgroundColor: "#1A1820" }}
    >
      {/* Logo area */}
      <div className="flex h-16 items-center gap-3 border-b border-b-[rgba(255,255,255,0.06)] px-5">
        <div
          className="flex items-center justify-center rounded-lg"
          style={{
            width: 36, height: 36,
            background: "linear-gradient(135deg, #2E2EFE, #3245FD)",
          }}
        >
          <span className="font-inter font-bold text-sm text-white">i/o</span>
        </div>
        <div>
          <p className="font-inter font-semibold text-sm text-white tracking-wide">INOVAXIO</p>
          <p className="font-inter text-[10px]" style={{ color: "rgba(230,231,232,0.5)" }}>MIV v2.0</p>
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex-1 overflow-y-auto scrollbar-thin px-3 py-6">
        <ul className="space-y-1">
          {sections.map(s => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <button
                  onClick={() => handleClick(s.id)}
                  className="group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-all duration-200"
                  style={{
                    background: isActive ? "rgba(46,46,254,0.12)" : "transparent",
                    color: isActive ? "#fff" : "rgba(230,231,232,0.55)",
                  }}
                >
                  <span
                    className="font-inter text-[11px] font-semibold tabular-nums"
                    style={{ color: isActive ? "#2E2EFE" : "rgba(230,231,232,0.3)" }}
                  >
                    {s.num}
                  </span>
                  <span className="font-inter text-[13px] font-medium">{s.label}</span>
                  {isActive && (
                    <span
                      className="ml-auto h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: "#2E2EFE" }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-t-[rgba(255,255,255,0.06)] px-5 py-4">
        <p className="font-inter text-[10px]" style={{ color: "rgba(230,231,232,0.3)" }}>
          © 2024 Inovaxio
        </p>
      </div>
    </aside>
  );
};

export default MivSidebar;
