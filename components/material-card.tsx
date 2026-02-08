import Link from "next/link"
import Image from "next/image"
import type { Material } from "@/lib/data"
import { BRANDS } from "@/lib/data"

export function MaterialCard({ m }: { m: Material }) {
  const brand = BRANDS.find((b) => b.slug === m.brand)
  const isGradient = m.img.startsWith("linear-gradient")

  return (
    <Link
      href={`/material/${m.id}`}
      className="group block rounded-xl overflow-hidden bg-card border border-stone-100 transition-all duration-300 no-underline hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
    >
      <div className="relative h-[200px] bg-stone-100">
        {isGradient ? (
          <div className="w-full h-full" style={{ background: m.img }} />
        ) : (
          <Image
            src={`/${m.img}`}
            alt={m.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        )}
        <div className="absolute bottom-2.5 left-2.5 bg-black/60 text-white text-[10px] px-2.5 py-1 rounded-full font-semibold tracking-wide uppercase">
          {m.type}
        </div>
      </div>
      <div className="p-4">
        <div className="font-semibold text-[15px] text-stone-800 mb-1">{m.name}</div>
        <div className="text-xs text-stone-400 uppercase tracking-wide">
          {brand?.name}
          {m.code ? ` \u00B7 ${m.code}` : ""}
        </div>
      </div>
    </Link>
  )
}
