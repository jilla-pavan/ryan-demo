import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import Container from '@/components/ui/Container'
import { NAV_LINKS, COMPANY, CERTIFICATIONS } from '@/lib/siteData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-navy text-white/90 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid-dark pointer-events-none" aria-hidden="true" />

      <Container className="relative py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5 mb-5" aria-label="Ryan Technology India — Home">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-navy">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 12h4l2-6 4 12 2-6h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-display font-semibold text-white leading-none">
                Ryan Technology
                <span className="block mono-tag text-[10px] font-normal text-white/50 mt-0.5">INDIA</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">{COMPANY.tagline}</p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-colors"
              aria-label="Ryan Technology India on LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.5V23h-4.5V8.25zM8.5 8.25h4.31v2.01h.06c.6-1.13 2.07-2.33 4.26-2.33 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23h-4.5V8.25z" />
              </svg>
            </a>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mono-tag text-xs uppercase text-white/40 mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mono-tag text-xs uppercase text-white/40 mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/careers" className="text-white/70 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="mono-tag text-xs uppercase text-white/40 mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-white/40" aria-hidden="true" />
                <span className="text-white/70">{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-white/40" aria-hidden="true" />
                <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="text-white/70 hover:text-white transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-white/40" aria-hidden="true" />
                <a href={`mailto:${COMPANY.email}`} className="text-white/70 hover:text-white transition-colors">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-3">
          {CERTIFICATIONS.map((cert) => (
            <span key={cert.code} className="mono-tag text-[11px] text-white/40 uppercase">
              {cert.code}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/40">
          <p>© {year} {COMPANY.legalName}. All rights reserved.</p>
          <p className="mono-tag">Engineered in Bengaluru, India</p>
        </div>
      </Container>
    </footer>
  )
}
