import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import { METRICS, CERTIFICATIONS } from '@/lib/siteData'

export default function CertificationsMetrics() {
  return (
    <section className="py-20 bg-surface border-y border-navy/8">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display font-semibold text-navy text-2xl tracking-tight">
                A track record measured in numbers, not adjectives.
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {METRICS.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.06}>
                  <div className="font-mono text-3xl font-semibold text-blue">{m.value}</div>
                  <div className="text-xs text-navy/50 mt-1">{m.label}</div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.code} className="rounded-xl border border-navy/10 bg-background p-5">
                    <div className="mono-tag text-xs text-navy/40 uppercase">{cert.code}</div>
                    <div className="text-sm text-navy/75 font-medium mt-2">{cert.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
