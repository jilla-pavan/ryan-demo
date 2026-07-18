import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '@/components/ui/SEO'
import PageHero from '@/components/ui/PageHero'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { PRODUCTS } from '@/lib/siteData'

export default function Products() {
  return (
    <>
      <SEO
        title="Products"
        description="Custom cable harnesses, connector assemblies, box build systems, and control panel assemblies built to spec."
        path="/products"
      />
      <PageHero
        eyebrow="Products"
        title="Product families we manufacture at scale."
        description="Each family below represents a repeatable, documented build process — not a one-off. Tell us your spec and we'll tell you which line it runs on."
      />

      <section className="py-24 lg:py-32 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-navy/10 bg-background p-8 lg:p-10 flex flex-col">
                  <span className="mono-tag text-xs text-navy/30">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="font-display font-semibold text-navy text-xl mt-4">{product.title}</h2>
                  <p className="text-navy/60 text-sm leading-relaxed mt-3 flex-1">{product.description}</p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue hover:gap-3 transition-all w-fit"
                  >
                    Request specification sheet <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-16 rounded-2xl border border-navy/10 bg-navy text-white p-10 lg:p-14 text-center">
            <h2 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight max-w-xl mx-auto">
              Don't see what you need? Most of our work starts as a custom spec.
            </h2>
            <div className="mt-8 flex justify-center">
              <Button to="/contact" variant="gold">Start a Conversation</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
