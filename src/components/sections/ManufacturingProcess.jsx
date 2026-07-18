import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Eyebrow from '@/components/ui/Eyebrow'
import { PROCESS_STEPS } from '@/lib/siteData'

export default function ManufacturingProcess() {
  return (
    <section className="py-24 lg:py-32 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid-dark pointer-events-none" aria-hidden="true" />
      <Container className="relative">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow tone="light">Manufacturing Process</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display font-semibold text-white text-3xl sm:text-4xl mt-5 tracking-tight text-balance">
              A fixed sequence, refined over 25 years of builds.
            </h2>
          </Reveal>
        </div>

        <ol className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.06} as="li" className="bg-navy p-8">
              <span className="mono-tag text-xs text-blue">{step.step}</span>
              <h3 className="font-display font-semibold text-white text-lg mt-4">{step.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mt-2">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
