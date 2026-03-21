import { motion } from "framer-motion";
import logoPrincipal from "@/assets/logo-mono-branca.svg";

const SectionHero = () => {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      {/* Glow background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(46,46,254,0.18) 0%, transparent 65%)",
        }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.img
          src={logoPrincipal}
          alt="Inovaxio"
          className="h-12 md:h-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Badge */}
        <motion.span
          className="rounded-full px-4 py-1.5 font-inter text-[11px] font-semibold uppercase tracking-[0.2em]"
          style={{ background: "rgba(46,46,254,0.12)", color: "#2E2EFE", border: "1px solid rgba(46,46,254,0.2)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Brandbook · v2.0
        </motion.span>

        {/* Title */}
        <motion.h1
          className="font-inter font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Manual de
          <br />
          <span style={{ color: "#2E2EFE" }}>Identidade Visual</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="font-inter text-base md:text-lg leading-relaxed max-w-xl"
          style={{ color: "var(--brand-text-secondary)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Este documento reúne todas as diretrizes de marca da Inovaxio — logotipo,
          cores, tipografia, tom de voz e aplicações. Um guia completo para garantir
          consistência e reconhecimento em todos os pontos de contato.
        </motion.p>

        {/* Divider line */}
        <motion.div
          className="w-16 h-[2px] rounded-full"
          style={{ background: "rgba(46,46,254,0.5)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />

        {/* CTA hint */}
        <motion.button
          onClick={() => {
            const el = document.getElementById("introducao");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-4 flex flex-col items-center gap-2 font-inter text-[12px] font-medium tracking-wider uppercase transition-colors"
          style={{ color: "rgba(230,231,232,0.4)" }}
          whileHover={{ color: "rgba(230,231,232,0.8)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Explorar
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </motion.svg>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default SectionHero;
