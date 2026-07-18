import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid-dark pointer-events-none" aria-hidden="true" />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl tracking-tight text-balance max-w-3xl mx-auto">
            Ready to move your build from spec to production?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-white/60 mt-6 max-w-lg mx-auto leading-relaxed">
            Send us your drawings or requirements and our engineering team will respond
            with a manufacturing plan within two business days.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button to="/contact" variant="gold">Request a Quote</Button>
          <Button to="/capabilities" variant="ghost">Explore Capabilities</Button>
        </Reveal>
      </Container>
    </section>
  )
}
