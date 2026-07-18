import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Eyebrow from '@/components/ui/Eyebrow'

export default function PageHero({ eyebrow, title, description, tone = 'blue' }) {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-40 lg:pb-24 border-b border-navy/8">
      <div className="absolute inset-0 blueprint-grid [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,black,transparent)]" aria-hidden="true" />
      <Container className="relative max-w-3xl">
        <Reveal>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display font-semibold text-navy text-4xl sm:text-5xl mt-6 tracking-tight text-balance">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="text-navy/60 text-lg leading-relaxed mt-6 max-w-2xl">{description}</p>
          </Reveal>
        )}
      </Container>
    </section>
  )
}
