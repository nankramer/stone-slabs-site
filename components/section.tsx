export function Section({
  children,
  bg,
  padY = 80,
  className,
}: {
  children: React.ReactNode
  bg?: string
  padY?: number
  className?: string
}) {
  return (
    <section
      className={`relative px-6 ${className || ""}`}
      style={{ background: bg || "var(--stone-50)", paddingTop: padY, paddingBottom: padY }}
    >
      <div className="max-w-[1200px] mx-auto">{children}</div>
    </section>
  )
}

export function SectionTitle({
  label,
  title,
  sub,
}: {
  label?: string
  title: string
  sub?: string
}) {
  return (
    <div className="mb-12">
      {label && (
        <div className="text-[11px] font-bold tracking-[3px] uppercase text-stone-400 mb-3">
          {label}
        </div>
      )}
      <h2 className="font-serif font-normal text-stone-800 text-[clamp(28px,3.5vw,40px)]">
        {title}
      </h2>
      {sub && (
        <p className="text-base text-stone-500 leading-relaxed max-w-[600px] mt-3">
          {sub}
        </p>
      )}
    </div>
  )
}
