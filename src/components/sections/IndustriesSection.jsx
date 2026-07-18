import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Eyebrow from '@/components/ui/Eyebrow'
import { INDUSTRIES } from '@/lib/siteData'

export default function IndustriesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow tone="gold">Industries</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display font-semibold text-navy text-3xl sm:text-4xl mt-5 tracking-tight text-balance">
              Trusted where failure is not an option.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry, i) => (
            <Reveal key={industry.id} delay={(i % 3) * 0.08} className="h-full">
              <div className="h-full rounded-2xl border border-navy/10 bg-surface p-7 hover:shadow-[0_1px_24px_rgba(15,23,42,0.06)] transition-shadow">
                <h3 className="font-display font-semibold text-navy text-base">{industry.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed mt-3">{industry.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
