export default function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-10 w-10">
          <span className="absolute inset-0 rounded-full border-2 border-navy/10" />
          <span className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue animate-spin" />
        </div>
        <span className="mono-tag text-xs text-navy/40 uppercase">Loading</span>
      </div>
    </div>
  )
}
