import { motion } from "framer-motion";
import logoPrincipal from "@/assets/logo-mono-branca.svg";

const metaRows = [
  { label: "Versão", value: "2.0 — 2026" },
  { label: "Tipo", value: "Identidade Visual" },
  { label: "Serviços", value: "Branding, UI/UX, Estratégia" },
];

const SectionHero = () => {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-between overflow-hidden px-8 md:px-16 lg:px-24 py-12 md:py-16">
      {/* Top bar: logo right */}
      <motion.div
        className="flex items-center justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <img
          src={logoPrincipal}
          alt="Inovaxio"
          className="h-6 md:h-7 opacity-70"
        />
      </motion.div>

      {/* Main title — editorial large type */}
      <div className="flex-1 flex flex-col justify-center py-12 md:py-20">
        <motion.h1
          className="font-quicksand font-bold leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "clamp(3.5rem, 12vw, 11rem)" }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-white block">Brand</span>
          <motion.span
            className="block"
            style={{ color: "hsl(var(--muted-foreground) / 0.45)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            guidelines
          </motion.span>
        </motion.h1>
      </div>

      {/* Bottom metadata table */}
      <motion.div
        className="w-full max-w-2xl ml-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        {metaRows.map((row, i) => (
          <motion.div
            key={row.label}
            className="flex items-center justify-between py-3 font-inter text-[13px] md:text-sm tracking-wide"
            style={{
              borderTop: "1px solid hsl(var(--muted-foreground) / 0.15)",
              color: "hsl(var(--muted-foreground) / 0.5)",
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
          >
            <span>{row.label}</span>
            <span className="text-white/80 font-medium">{row.value}</span>
          </motion.div>
        ))}
        <div style={{ borderTop: "1px solid hsl(var(--muted-foreground) / 0.15)" }} />
      </motion.div>

      {/* Scroll hint */}
      <motion.button
        onClick={() => {
          const el = document.getElementById("introducao");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-8 md:left-16 lg:left-24 flex flex-col items-center gap-2 font-inter text-[11px] font-medium tracking-[0.15em] uppercase"
        style={{ color: "hsl(var(--muted-foreground) / 0.3)" }}
        whileHover={{ color: "hsl(var(--muted-foreground) / 0.7)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </motion.svg>
      </motion.button>
    </section>
  );
};

export default SectionHero;

