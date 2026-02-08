export function Hero({
  headline,
  sub,
  cta,
  ctaHref,
  secondary,
  secondaryHref,
  dark = true,
  children,
}: {
  headline: React.ReactNode
  sub: string
  cta?: string
  ctaHref?: string
  secondary?: string
  secondaryHref?: string
  dark?: boolean
  children?: React.ReactNode
}) {
  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{
        minHeight: dark ? "85vh" : "60vh",
        background: "linear-gradient(135deg, #1a1610 0%, #2d261c 40%, #1a1610 100%)",
      }}
    >
      {dark && <div className="noise absolute inset-0" />}
      <div className="relative z-2 max-w-[1200px] mx-auto px-6 pt-[120px] pb-20 w-full">
        <div className="fade-up max-w-[700px]">
          <h1
            className="font-serif font-normal leading-[1.1] mb-5 text-[clamp(36px,5vw,64px)] text-white"
          >
            {headline}
          </h1>
          <p
            className="text-[clamp(16px,1.8vw,19px)] leading-relaxed mb-9 max-w-[540px]"
            style={{ color: dark ? "rgba(255,255,255,0.6)" : "var(--stone-500)" }}
          >
            {sub}
          </p>
          <div className="flex flex-wrap gap-3">
            {cta && (
              <a
                href={ctaHref || "#"}
                className="px-9 py-4 bg-white text-stone-900 rounded-[10px] text-[15px] font-semibold font-sans tracking-wide no-underline transition-transform hover:scale-[1.02] inline-block"
              >
                {cta}
              </a>
            )}
            {secondary && (
              <a
                href={secondaryHref || "#"}
                className="px-9 py-4 bg-transparent rounded-[10px] text-[15px] font-medium font-sans transition-all no-underline inline-block"
                style={{
                  color: dark ? "rgba(255,255,255,0.7)" : "var(--stone-600)",
                  border: `1px solid ${dark ? "rgba(255,255,255,0.2)" : "var(--stone-200)"}`,
                }}
              >
                {secondary}
              </a>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  )
}
