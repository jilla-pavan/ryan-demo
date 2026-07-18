import { CheckCircle2 } from 'lucide-react'
import SEO from '@/components/ui/SEO'
import PageHero from '@/components/ui/PageHero'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import { CERTIFICATIONS, METRICS } from '@/lib/siteData'

const QMS_STAGES = [
  { title: 'Incoming Inspection', description: 'Raw materials and components are verified against spec before entering the floor.' },
  { title: 'In-Process Checks', description: 'Operators verify critical dimensions and continuity at defined checkpoints on the line.' },
  { title: 'Automated Optical Inspection', description: 'AOI systems catch placement and solder defects that are invisible to the eye.' },
  { title: 'Functional Test', description: 'Every unit is powered and tested against its functional specification before release.' },
  { title: 'Final Audit', description: 'A sample of each batch is pulled for a documented final quality audit.' },
  { title: 'Traceability Record', description: 'Lot, operator, and station data are logged against every serialized unit.' },
]

export default function Quality() {
  return (
    <>
      <SEO
        title="Quality System"
        description="ISO 9001:2015 certified quality management system with in-line inspection, functional test, and full build traceability."
        path="/quality"
      />
      <PageHero
        eyebrow="Quality"
        title="A quality system you can audit, not just trust."
        description="Every claim on this page is backed by a certificate, a checkpoint, or a record we can show you during a facility visit."
        tone="teal"
      />

      <section className="py-24 lg:py-32 bg-surface">
        <Container>
          <Reveal>
            <h2 className="font-display font-semibold text-navy text-2xl sm:text-3xl tracking-tight max-w-xl">
              Six checkpoints, on every build.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {QMS_STAGES.map((stage, i) => (
              <Reveal key={stage.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-navy/10 bg-background p-7">
                  <CheckCircle2 className="h-6 w-6 text-teal" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="font-display font-semibold text-navy mt-4">{stage.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed mt-2">{stage.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-dark pointer-events-none" aria-hidden="true" />
        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight">Certifications on file</h2>
              </Reveal>
              <Reveal delay={0.08} className="mt-6 grid grid-cols-2 gap-4">
                {METRICS.map((m) => (
                  <div key={m.label}>
                    <div className="font-mono text-2xl font-semibold text-blue">{m.value}</div>
                    <div className="text-xs text-white/50 mt-1">{m.label}</div>
                  </div>
                ))}
              </Reveal>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, i) => (
                <Reveal key={cert.code} delay={i * 0.05} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="mono-tag text-xs text-white/40 uppercase">{cert.code}</div>
                  <div className="text-sm text-white/80 font-medium mt-2">{cert.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
