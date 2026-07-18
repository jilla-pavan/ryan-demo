import { Cable, Box, CircuitBoard, Ruler, CheckCircle2 } from 'lucide-react'
import SEO from '@/components/ui/SEO'
import PageHero from '@/components/ui/PageHero'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { CAPABILITIES, PROCESS_STEPS } from '@/lib/siteData'

const ICONS = { 'cable-harness': Cable, 'box-build': Box, 'pcb-assembly': CircuitBoard, engineering: Ruler }

export default function Capabilities() {
  return (
    <>
      <SEO
        title="Manufacturing Capabilities"
        description="Cable harness assembly, box build & system integration, PCB assembly, and engineering support — all under one roof."
        path="/capabilities"
      />
      <PageHero
        eyebrow="Capabilities"
        title="Everything between your drawing and a finished unit."
        description="Four core disciplines, run on the same floor, backed by the same quality system — so nothing gets lost in a handoff between vendors."
      />

      <section className="py-24 lg:py-32 bg-surface">
        <Container>
          <div className="space-y-16">
            {CAPABILITIES.map((cap, i) => {
              const Icon = ICONS[cap.id]
              const reverse = i % 2 === 1
              return (
                <Reveal key={cap.id}>
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${reverse ? 'lg:[direction:rtl]' : ''}`}>
                    <div className={`lg:col-span-7 ${reverse ? '[direction:ltr]' : ''}`}>
                      <div className="flex items-center gap-3">
                        <Icon className="h-7 w-7 text-blue" strokeWidth={1.5} aria-hidden="true" />
                        <span className="mono-tag text-xs text-navy/30">{String(i + 1).padStart(2, '0')} / {String(CAPABILITIES.length).padStart(2, '0')}</span>
                      </div>
                      <h2 className="font-display font-semibold text-navy text-2xl sm:text-3xl mt-5 tracking-tight">{cap.title}</h2>
                      <p className="text-navy/60 leading-relaxed mt-4 max-w-xl">{cap.summary}</p>
                    </div>
                    <div className={`lg:col-span-5 ${reverse ? '[direction:ltr]' : ''}`}>
                      <ul className="space-y-3 rounded-2xl border border-navy/10 bg-background p-6">
                        {cap.specs.map((spec) => (
                          <li key={spec} className="flex items-start gap-3 text-sm text-navy/70">
                            <CheckCircle2 className="h-4 w-4 text-teal shrink-0 mt-0.5" aria-hidden="true" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-dark pointer-events-none" aria-hidden="true" />
        <Container className="relative">
          <Reveal>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight max-w-xl">
              How a build moves through our floor.
            </h2>
          </Reveal>
          <ol className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.06} as="li">
                <span className="mono-tag text-xs text-blue">{step.step}</span>
                <h3 className="font-display font-semibold mt-3">{step.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mt-2">{step.description}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={0.2} className="mt-14">
            <Button to="/contact" variant="gold">Discuss Your Project</Button>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
