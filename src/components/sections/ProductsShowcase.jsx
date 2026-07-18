import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Eyebrow from '@/components/ui/Eyebrow'
import { PRODUCTS } from '@/lib/siteData'

export default function ProductsShowcase() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Products</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display font-semibold text-navy text-3xl sm:text-4xl mt-5 tracking-tight text-balance">
                What we build, on repeat, at scale.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <Link to="/products" className="inline-flex items-center gap-2 text-sm font-medium text-blue hover:gap-3 transition-all">
              View all products <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.08}>
              <Link
                to="/products"
                className="group flex items-center justify-between gap-6 rounded-2xl border border-navy/10 bg-surface p-8 hover:border-navy/30 transition-colors"
              >
                <div>
                  <h3 className="font-display font-semibold text-navy text-lg">{product.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed mt-2 max-w-sm">{product.description}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-navy/30 shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-blue" aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
