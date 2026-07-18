import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import { CERTIFICATIONS } from '@/lib/siteData'

export default function TrustBar() {
  return (
    <section className="border-y border-navy/8 bg-surface py-8" aria-label="Certifications">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4">
            <span className="mono-tag text-[11px] uppercase text-navy/40 shrink-0">
              Certified &amp; Compliant
            </span>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert.code} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
                  <span className="text-sm font-medium text-navy/70">{cert.code}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
