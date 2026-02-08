import Link from "next/link"
import type { Project } from "@/lib/data"

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/project/${p.id}`}
      className="group block rounded-xl overflow-hidden bg-card border border-stone-100 transition-all duration-300 no-underline hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
    >
      <div className="relative h-[240px]" style={{ background: p.img, backgroundColor: "var(--stone-100)" }}>
        <div className="absolute bottom-2.5 left-2.5 bg-black/60 text-white text-[10px] px-2.5 py-1 rounded-full font-semibold tracking-wide uppercase">
          {p.type}
        </div>
      </div>
      <div className="p-5">
        <div className="font-semibold text-[17px] text-stone-800 mb-1.5">{p.title}</div>
        <div className="text-[13px] text-stone-500 leading-relaxed">
          {p.material} &middot; {p.location}
        </div>
      </div>
    </Link>
  )
}
