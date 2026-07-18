import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { METRICS } from "@/lib/siteData";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Full-Bleed Cinematic Background Visual */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <motion.img
          src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSKPvBx1rFF4kpxGBqQC6E9E5R1M3b1pbwywBkMjDL5BIN-C9S0vzGf5s3SDQJicvwhUU-OaeLioJoYrYk"
          alt="Precision manufacturing process"
          className="w-full h-full object-cover object-center brightness-[0.4] contrast-[1.05]"
          initial={shouldReduceMotion ? {} : { scale: 1.05 }}
          animate={shouldReduceMotion ? {} : { scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Subtle geometric framing mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-transparent" />
      </div>

      <Container className="relative z-10 w-full pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Asymmetric Technical Metadata Ribbon */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-blue rounded-full" />
            <span className="mono-tag text-[10px] text-surface/60 tracking-[0.25em] font-semibold uppercase">
              AUTOMATION & MANUFACTURING CORE // IN_44
            </span>
          </motion.div>

          {/* Stark, Clean Typographic Mastery */}
          <motion.h1
            {...fadeUp(0.08)}
            className="font-display font-extrabold text-surface tracking-[-0.04em] leading-[0.95] text-4xl sm:text-6xl lg:text-[5.5rem] uppercase mt-6 text-balance"
          >
            Engineering <br />
            built to hold <br />
            <span className="text-blue">under pressure</span>
          </motion.h1>

          {/* Balanced Subtext & Call to Actions */}
          <div className="mt-8 lg:mt-12 lg:ml-24 max-w-[540px]">
            <motion.p
              {...fadeUp(0.16)}
              className="text-base sm:text-lg text-surface/75 leading-relaxed font-body font-medium"
            >
              High-compliance cable harnesses, box builds, and complex system
              assemblies engineered strictly for mission-critical industrial
              applications where deployment failure is not an option.
            </motion.p>

            <motion.div {...fadeUp(0.24)} className="mt-8 flex flex-wrap gap-4">
              <Button
                to="/contact"
                variant="primary"
                className="w-full sm:w-auto rounded-full bg-surface text-navy hover:bg-surface/90 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 shadow-lg"
              >
                Request a Quote
              </Button>
              <Button
                to="/capabilities"
                variant="outline"
                className="w-full sm:w-auto rounded-full border border-surface/30 text-surface hover:bg-surface/5 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300"
              >
                Capabilities
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Minimalist Data Strip - Anchoring the screen base flawlessly */}
        <motion.div
          {...fadeUp(0.32)}
          className="mt-24 lg:mt-32 border-t border-surface/10 pt-8 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {METRICS.slice(0, 4).map((m, index) => (
            <div
              key={m.label}
              className="relative flex flex-col pl-6 border-l border-surface/10 first:pl-0 first:border-l-0"
            >
              <span className="absolute top-0 left-0 font-mono text-[9px] text-blue font-bold">
                0{index + 1}
              </span>
              <dt className="sr-only">{m.label}</dt>
              <dd className="font-mono text-2xl lg:text-3xl font-bold text-surface tracking-tight leading-none">
                {m.value}
              </dd>
              <dd className="text-[9px] font-bold tracking-[0.15em] text-surface/40 uppercase mt-3 font-body">
                {m.label}
              </dd>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
