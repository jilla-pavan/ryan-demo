import SEO from '@/components/ui/SEO'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist or has moved." path="/404" />
      <section className="relative overflow-hidden bg-background min-h-[70vh] flex items-center pt-32 pb-24">
        <div className="absolute inset-0 blueprint-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" aria-hidden="true" />
        <Container className="relative text-center">
          <Reveal>
            <span className="mono-tag text-sm text-blue">ERROR 404</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display font-semibold text-navy text-4xl sm:text-5xl mt-4 tracking-tight">
              This connector doesn't fit.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-navy/60 mt-5 max-w-md mx-auto">
              The page you're looking for has moved or no longer exists. Let's get you back
              to the main assembly line.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-10 flex justify-center">
            <Button to="/" variant="primary">Return Home</Button>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
