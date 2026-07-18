import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react'
import SEO from '@/components/ui/SEO'
import PageHero from '@/components/ui/PageHero'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import { COMPANY } from '@/lib/siteData'

const inputClasses =
  'w-full rounded-lg border border-navy/15 bg-surface px-4 py-3 text-sm text-navy placeholder:text-navy/35 transition-colors focus:border-blue outline-none'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()

  const onSubmit = async () => {
    // No backend is wired up in this build — simulate a submission delay
    // so the success state and validation both feel real to review.
    await new Promise((resolve) => setTimeout(resolve, 700))
    setSubmitted(true)
    reset()
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Request a quote or ask a question — Ryan Technology India's engineering team responds within two business days."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're building."
        description="Share your drawings, specs, or even a rough sketch of the problem. Our engineering team will respond within two business days."
      />

      <section className="py-24 lg:py-32 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="font-display font-semibold text-navy text-2xl tracking-tight">Reach us directly</h2>
              </Reveal>
              <Reveal delay={0.06} className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-blue shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-navy/70 text-sm leading-relaxed">{COMPANY.address}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-blue shrink-0" aria-hidden="true" />
                  <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="text-navy/70 text-sm hover:text-navy">
                    {COMPANY.phone}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-blue shrink-0" aria-hidden="true" />
                  <a href={`mailto:${COMPANY.email}`} className="text-navy/70 text-sm hover:text-navy">
                    {COMPANY.email}
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                {submitted ? (
                  <div className="rounded-2xl border border-teal/30 bg-teal/5 p-10 text-center" role="status">
                    <CheckCircle2 className="h-10 w-10 text-teal mx-auto" aria-hidden="true" />
                    <h3 className="font-display font-semibold text-navy text-xl mt-4">Request received</h3>
                    <p className="text-navy/60 text-sm mt-2 max-w-sm mx-auto">
                      Thank you — our engineering team will respond to your enquiry within two business days.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm font-medium text-blue"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-navy/80 mb-2">
                          Full name
                        </label>
                        <input
                          id="name"
                          type="text"
                          className={inputClasses}
                          aria-invalid={errors.name ? 'true' : 'false'}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          {...register('name', { required: 'Please enter your name' })}
                        />
                        {errors.name && (
                          <p id="name-error" className="text-xs text-red-600 mt-1.5">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-navy/80 mb-2">
                          Company
                        </label>
                        <input id="company" type="text" className={inputClasses} {...register('company')} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-navy/80 mb-2">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className={inputClasses}
                          aria-invalid={errors.email ? 'true' : 'false'}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          {...register('email', {
                            required: 'Please enter your email',
                            pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address' },
                          })}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-xs text-red-600 mt-1.5">{errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-navy/80 mb-2">
                          Phone
                        </label>
                        <input id="phone" type="tel" className={inputClasses} {...register('phone')} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy/80 mb-2">
                        Project details
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className={inputClasses}
                        aria-invalid={errors.message ? 'true' : 'false'}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        {...register('message', { required: 'Please describe your project' })}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-xs text-red-600 mt-1.5">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 rounded-full bg-navy text-white px-7 py-3.5 text-sm font-medium hover:bg-blue-dim transition-colors disabled:opacity-60"
                    >
                      {isSubmitting ? 'Sending…' : 'Send Request'}
                    </button>
                  </form>
                )}
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
