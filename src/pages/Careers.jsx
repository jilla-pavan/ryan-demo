import { Mail, Wrench, GraduationCap, HeartHandshake } from 'lucide-react'
import SEO from '@/components/ui/SEO'
import PageHero from '@/components/ui/PageHero'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { COMPANY } from '@/lib/siteData'

const OPENINGS = [
  { title: 'Process Engineer', dept: 'Engineering', location: 'Bengaluru, India', type: 'Full-time' },
  { title: 'SMT Line Supervisor', dept: 'Production', location: 'Bengaluru, India', type: 'Full-time' },
  { title: 'Quality Inspector', dept: 'Quality Assurance', location: 'Bengaluru, India', type: 'Full-time' },
  { title: 'Test Engineer', dept: 'Engineering', location: 'Bengaluru, India', type: 'Full-time' },
]

const PERKS = [
  { icon: Wrench, title: 'Real equipment', description: 'Work on modern SMT, AOI, and automated crimp lines — not legacy tooling.' },
  { icon: GraduationCap, title: 'Structured training', description: 'IPC certification support and internal cross-training across disciplines.' },
  { icon: HeartHandshake, title: 'Stable teams', description: "Low turnover on the floor means you're trained by people who plan to stay." },
]

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers"
        description="Open engineering, production, and quality roles at Ryan Technology India's Bengaluru manufacturing facility."
        path="/careers"
      />
      <PageHero
        eyebrow="Careers"
        title="Build things that have to work."
        description="We hire people who care about the difference between 'close enough' and 'to spec.' If that's you, we'd like to talk."
        tone="gold"
      />

      <section className="py-24 lg:py-32 bg-surface">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PERKS.map((perk, i) => (
              <Reveal key={perk.title} delay={i * 0.08}>
                <perk.icon className="h-7 w-7 text-blue" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="font-display font-semibold text-navy mt-5">{perk.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed mt-2">{perk.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32 bg-background border-y border-navy/8">
        <Container>
          <Reveal>
            <h2 className="font-display font-semibold text-navy text-2xl sm:text-3xl tracking-tight max-w-xl">
              Current openings
            </h2>
          </Reveal>
          <div className="mt-12 divide-y divide-navy/10 border-y border-navy/10">
            {OPENINGS.map((job, i) => (
              <Reveal key={job.title} delay={i * 0.05}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6">
                  <div>
                    <h3 className="font-display font-semibold text-navy">{job.title}</h3>
                    <p className="text-navy/50 text-sm mt-1">{job.dept} · {job.location} · {job.type}</p>
                  </div>
                  <a
                    href={`mailto:${COMPANY.email}?subject=Application: ${encodeURIComponent(job.title)}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue shrink-0"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" /> Apply
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-12 text-center">
            <p className="text-navy/60">Don't see a fit? We're always open to hearing from strong candidates.</p>
            <div className="mt-6 flex justify-center">
              <Button href={`mailto:${COMPANY.email}`} variant="outline">Send Your Resume</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
