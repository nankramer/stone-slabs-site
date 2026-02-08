"use client"

import Link from "next/link"
import { PhoneReveal } from "./phone-reveal"

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 px-4 py-3 bg-[rgba(26,22,16,0.95)] backdrop-blur-lg z-[90] lg:hidden">
      <div className="flex gap-3 items-center justify-between">
        <PhoneReveal className="text-white text-[13px] no-underline flex items-center gap-1.5" prefix="Tel: " />
        <Link
          href="/quote"
          className="flex-1 max-w-[200px] py-3 bg-white text-stone-900 border-none rounded-lg text-sm font-semibold text-center no-underline font-sans"
        >
          Get Quote
        </Link>
      </div>
    </div>
  )
}
