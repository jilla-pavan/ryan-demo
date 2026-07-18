import SEO from '@/components/ui/SEO'
import PageHero from '@/components/ui/PageHero'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import { COMPANY } from '@/lib/siteData'

const SECTIONS = [
  {
    title: 'Information we collect',
    body: 'When you submit a contact or quote request, we collect your name, company, email address, phone number, and any project details you choose to share. We do not collect this information through any other means on this site.',
  },
  {
    title: 'How we use it',
    body: 'Information submitted through our contact form is used solely to respond to your enquiry and, where relevant, to prepare a manufacturing quote. We do not sell or rent this information to third parties.',
  },
  {
    title: 'Data retention',
    body: 'Enquiry records are retained for as long as needed to support an active business relationship or as required by applicable record-keeping regulations, after which they are securely deleted.',
  },
  {
    title: 'Your rights',
    body: `You may request access to, correction of, or deletion of any personal information we hold about you by contacting us at ${COMPANY.email}.`,
  },
  {
    title: 'Cookies',
    body: 'This site does not use tracking or advertising cookies. Any strictly necessary technical storage is limited to what is required for the site to function.',
  },
  {
    title: 'Contact',
    body: `Questions about this policy can be directed to ${COMPANY.email} or ${COMPANY.phone}.`,
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="How Ryan Technology India collects, uses, and protects information submitted through this website."
        path="/privacy-policy"
      />
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated January 2026." />

      <section className="py-24 lg:py-32 bg-surface">
        <Container className="max-w-[760px]">
          <div className="space-y-12">
            {SECTIONS.map((section, i) => (
              <Reveal key={section.title} delay={i * 0.04}>
                <h2 className="font-display font-semibold text-navy text-xl">{section.title}</h2>
                <p className="text-navy/65 leading-relaxed mt-3">{section.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
