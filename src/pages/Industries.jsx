import SEO from '@/components/ui/SEO'
import PageHero from '@/components/ui/PageHero'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { INDUSTRIES } from '@/lib/siteData'

export default function Industries() {
  return (
    <>
      <SEO
        title="Industries We Serve"
        description="Cable harness and box build manufacturing for industrial automation, medical devices, automotive, energy, telecom, and defense sectors."
        path="/industries"
      />
      <PageHero
        eyebrow="Industries"
        title="Sector-specific experience, one manufacturing standard."
        description="Different industries carry different compliance burdens. Our quality system flexes to meet them without changing how carefully we build."
      />

      <section className="py-24 lg:py-32 bg-surface">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {INDUSTRIES.map((industry, i) => (
              <Reveal key={industry.id} delay={(i % 2) * 0.08}>
                <div className="h-full rounded-2xl border border-navy/10 bg-background p-8">
                  <span className="mono-tag text-xs text-navy/30">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="font-display font-semibold text-navy text-xl mt-4">{industry.title}</h2>
                  <p className="text-navy/60 text-sm leading-relaxed mt-3">{industry.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-16 text-center">
            <p className="text-navy/60">Don't see your industry listed?</p>
            <div className="mt-6 flex justify-center">
              <Button to="/contact" variant="outline">Tell Us About Your Build</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
