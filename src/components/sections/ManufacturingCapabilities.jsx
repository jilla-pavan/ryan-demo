import { Cable, Box, CircuitBoard, Ruler } from 'lucide-react'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Eyebrow from '@/components/ui/Eyebrow'
import { CAPABILITIES } from '@/lib/siteData'

const ICONS = { 'cable-harness': Cable, 'box-build': Box, 'pcb-assembly': CircuitBoard, engineering: Ruler }

export default function ManufacturingCapabilities() {
  return (
    <section className="py-24 lg:py-32 bg-surface border-y border-navy/8" id="capabilities">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Manufacturing Capabilities</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display font-semibold text-navy text-3xl sm:text-4xl mt-5 tracking-tight text-balance">
                One partner, from schematic to shipped assembly.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((cap, i) => {
            const Icon = ICONS[cap.id]
            return (
              <Reveal key={cap.id} delay={i * 0.08} className="h-full">
                <div className="group h-full rounded-2xl border border-navy/10 bg-background p-8 lg:p-10 transition-colors hover:border-blue/30">
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="h-8 w-8 text-blue" strokeWidth={1.5} aria-hidden="true" />
                    <span className="mono-tag text-xs text-navy/30">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-display font-semibold text-navy text-xl mt-6">{cap.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed mt-3">{cap.summary}</p>
                  <ul className="mt-6 space-y-2 border-t border-navy/8 pt-5">
                    {cap.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-xs text-navy/55">
                        <span className="h-1 w-1 rounded-full bg-teal shrink-0" aria-hidden="true" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
