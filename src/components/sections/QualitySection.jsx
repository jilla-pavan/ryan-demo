import { CheckCircle2 } from 'lucide-react'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Eyebrow from '@/components/ui/Eyebrow'
import Button from '@/components/ui/Button'

const QUALITY_POINTS = [
  'In-line AOI and continuity testing at every assembly stage',
  'Full material and process traceability by lot and operator',
  'First-article inspection on every new build before production release',
  'Statistical process control on high-volume lines',
]

export default function QualitySection() {
  return (
    <section className="py-24 lg:py-32 bg-surface border-y border-navy/8">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow tone="teal">Quality</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display font-semibold text-navy text-3xl sm:text-4xl mt-5 tracking-tight text-balance">
                Quality isn't a final check. It's built into the line.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-navy/60 leading-relaxed mt-6 max-w-md">
                Our quality management system is certified to ISO 9001:2015 and audited
                annually. Every assembly carries a documented trail from incoming material
                to final test.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-8">
              <Button to="/quality" variant="outline">View Our Quality System</Button>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <ul className="space-y-4">
              {QUALITY_POINTS.map((point, i) => (
                <Reveal key={point} delay={i * 0.06} as="li">
                  <div className="flex items-start gap-4 rounded-xl border border-navy/10 bg-background p-5">
                    <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-navy/75 leading-relaxed">{point}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
