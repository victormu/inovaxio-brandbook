interface SectionWrapperProps {
  id: string;
  chapterNum: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, chapterNum, children, className = "" }: SectionWrapperProps) => {
  return (
    <section id={id} className={`relative min-h-screen px-6 py-20 md:px-12 lg:px-16 ${className}`}>
      {/* Faded chapter number */}
      <span
        className="pointer-events-none absolute right-8 top-12 select-none font-inter text-[180px] font-black leading-none md:text-[240px]"
        style={{ color: "rgba(255,255,255,0.03)" }}
      >
        {chapterNum}
      </span>
      <div className="relative z-10 max-w-5xl">{children}</div>
    </section>
  );
};

export default SectionWrapper;
