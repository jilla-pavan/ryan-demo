import { Target, Users, Globe2, Award } from 'lucide-react'
import SEO from '@/components/ui/SEO'
import PageHero from '@/components/ui/PageHero'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import { METRICS } from '@/lib/siteData'

const VALUES = [
  { icon: Target, title: 'Precision First', description: 'Tolerances are commitments, not targets. We build to the drawing, every time.' },
  { icon: Users, title: 'Partnership', description: 'We work alongside your engineering team from the first prototype, not just at handoff.' },
  { icon: Globe2, title: 'Scale Reliably', description: 'Processes designed to hold quality steady from ten units to ten thousand.' },
  { icon: Award, title: 'Own the Outcome', description: 'When something goes wrong, we find the root cause and fix the process, not just the part.' },
]

const TIMELINE = [
  { year: '1998', event: 'Founded in Bengaluru as a contract wire-harness workshop.' },
  { year: '2006', event: 'Opened our first dedicated box-build and system integration line.' },
  { year: '2013', event: 'Achieved ISO 9001 certification and expanded to a 450,000 sq. ft. facility.' },
  { year: '2019', event: 'Added IATF 16949 automotive quality certification.' },
  { year: '2024', event: 'Crossed 25 years of continuous manufacturing operations.' },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="25+ years of precision electronics manufacturing in Bengaluru, India — cable harnesses, box builds, and system integration."
        path="/about"
      />
      <PageHero
        eyebrow="About Us"
        title="Manufacturing partners since 1998."
        description="Ryan Technology India began as a small wire-harness workshop and grew into a full-service electronics manufacturer without losing the discipline that got us here."
      />

      <section className="py-24 lg:py-32 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <Reveal>
                <h2 className="font-display font-semibold text-navy text-2xl sm:text-3xl tracking-tight">
                  Built by engineers, still run by engineers.
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="text-navy/60 leading-relaxed mt-5">
                  We started with a single crimp press and a commitment to build exactly to
                  spec. That commitment scaled with us — through ISO certification, a
                  450,000 sq. ft. facility, and partnerships with manufacturers across
                  industrial, medical, automotive, and defense sectors.
                </p>
                <p className="text-navy/60 leading-relaxed mt-4">
                  Today our engineering team reviews every design before it reaches the
                  floor, because the cheapest defect to fix is the one that never gets
                  built.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {METRICS.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.06} className="rounded-2xl border border-navy/10 bg-background p-6">
                  <div className="font-mono text-3xl font-semibold text-blue">{m.value}</div>
                  <div className="text-xs text-navy/50 mt-1">{m.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32 bg-background border-y border-navy/8">
        <Container>
          <Reveal>
            <h2 className="font-display font-semibold text-navy text-2xl sm:text-3xl tracking-tight max-w-xl">
              What we hold to, regardless of order size.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <v.icon className="h-7 w-7 text-teal" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="font-display font-semibold text-navy mt-5">{v.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed mt-2">{v.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32 bg-surface">
        <Container>
          <Reveal>
            <h2 className="font-display font-semibold text-navy text-2xl sm:text-3xl tracking-tight max-w-xl">
              Twenty-five years, in five milestones.
            </h2>
          </Reveal>
          <ol className="mt-14 max-w-2xl border-l border-navy/15">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.06} as="li" className="relative pl-8 pb-10 last:pb-0">
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-blue" aria-hidden="true" />
                <span className="mono-tag text-sm text-blue">{item.year}</span>
                <p className="text-navy/70 leading-relaxed mt-1">{item.event}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>
    </>
  )
}
