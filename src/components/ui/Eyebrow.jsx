export default function Eyebrow({ children, tone = 'blue' }) {
  const toneMap = {
    blue: 'text-blue border-blue/25 bg-blue/5',
    teal: 'text-teal border-teal/25 bg-teal/5',
    gold: 'text-gold border-gold/30 bg-gold/5',
    light: 'text-white/80 border-white/20 bg-white/5',
  }
  return (
    <span
      className={`mono-tag inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] uppercase ${toneMap[tone]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  )
}
