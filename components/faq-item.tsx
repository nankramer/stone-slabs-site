"use client"

import { useState } from "react"

export function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-stone-100 py-5">
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center cursor-pointer gap-4"
      >
        <div className="font-semibold text-[15px] text-stone-700">{q}</div>
        <div
          className="text-xl text-stone-400 transition-transform duration-200"
          style={{ transform: open ? "rotate(45deg)" : "" }}
        >
          +
        </div>
      </div>
      {open && (
        <div className="mt-3 text-sm text-stone-500 leading-relaxed">{a}</div>
      )}
    </div>
  )
}
