import { Target, Cpu, ShieldCheck } from 'lucide-react'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Eyebrow from '@/components/ui/Eyebrow'

const PILLARS = [
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'Every harness and assembly is built to documented tolerances, verified at each station rather than inspected only at the end.',
  },
  {
    icon: Cpu,
    title: 'Process Innovation',
    description: 'We invest in fixturing, automation, and test equipment that removes variability before it reaches your product.',
  },
  {
    icon: ShieldCheck,
    title: 'Built-In Reliability',
    description: 'Traceability from raw material to finished unit means every assembly can be traced back to its exact build record.',
  },
]

export default function EngineeringExcellence() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow tone="teal">Engineering Excellence</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display font-semibold text-navy text-3xl sm:text-4xl mt-5 tracking-tight text-balance">
              Manufacturing discipline, applied at every stage.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-navy/8 rounded-2xl overflow-hidden border border-navy/8">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1} className="bg-surface p-8 lg:p-10 h-full">
              <pillar.icon className="h-8 w-8 text-blue" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-display font-semibold text-navy text-lg mt-6">{pillar.title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed mt-3">{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
