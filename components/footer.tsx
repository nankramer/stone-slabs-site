"use client"

import { useState } from "react"
import Link from "next/link"

export function Footer() {
  const [callbackName, setCallbackName] = useState("")
  const [callbackPhone, setCallbackPhone] = useState("")
  const [callbackSent, setCallbackSent] = useState(false)

  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--stone-900)", color: "rgba(255,255,255,0.5)", padding: "80px 24px 40px" }}>
      <div className="noise absolute inset-0" />
      <div className="max-w-[1200px] mx-auto relative z-2">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12 mb-[60px]">
          <div>
            <div className="text-white font-bold text-[13px] tracking-[3px] mb-6 uppercase">Services</div>
            {(["kitchens", "vanities", "staircases", "cladding"] as const).map((s) => (
              <Link
                key={s}
                href={`/${s}`}
                className="block mb-3 text-sm no-underline transition-colors duration-200 hover:text-white/80"
                style={{ color: "inherit" }}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </Link>
            ))}
          </div>
          <div>
            <div className="text-white font-bold text-[13px] tracking-[3px] mb-6 uppercase">Explore</div>
            {[
              ["/materials", "Materials Gallery"],
              ["/brands", "Brands"],
              ["/designers", "For Designers"],
              ["/studio-marbella", "Studio Marbella"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="block mb-3 text-sm no-underline transition-colors duration-200 hover:text-white/80"
                style={{ color: "inherit" }}
              >
                {label}
              </Link>
            ))}
          </div>
          <div>
            <div className="text-white font-bold text-[13px] tracking-[3px] mb-6 uppercase">Company</div>
            {[
              ["/projects", "Projects"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="block mb-3 text-sm no-underline transition-colors duration-200 hover:text-white/80"
                style={{ color: "inherit" }}
              >
                {label}
              </Link>
            ))}
            <div className="mb-3 text-sm">Privacy Policy</div>
            <div className="text-sm">Terms</div>
          </div>
          <div>
            <div className="text-white font-bold text-[13px] tracking-[3px] mb-6 uppercase">Quick Callback</div>
            {!callbackSent ? (
              <div className="flex flex-col gap-2">
                <input
                  value={callbackName}
                  onChange={(e) => setCallbackName(e.target.value)}
                  placeholder="Your name"
                  className="p-2.5 bg-white/[0.06] border border-white/10 rounded-md text-white text-[13px] font-sans outline-none placeholder:text-white/30"
                />
                <input
                  value={callbackPhone}
                  onChange={(e) => setCallbackPhone(e.target.value)}
                  placeholder="Your phone number"
                  className="p-2.5 bg-white/[0.06] border border-white/10 rounded-md text-white text-[13px] font-sans outline-none placeholder:text-white/30"
                />
                <button
                  onClick={() => callbackName && callbackPhone && setCallbackSent(true)}
                  className="p-2.5 bg-stone-500 text-white border-none rounded-md text-[13px] font-semibold cursor-pointer font-sans"
                >
                  Call Me Back
                </button>
              </div>
            ) : (
              <div className="text-[13px] text-stone-400">
                {"\\u2713"} We&apos;ll call you back shortly.
              </div>
            )}
          </div>
        </div>
        <div className="border-t border-white/[0.06] pt-8 flex flex-wrap justify-between items-center gap-4">
          <div>
            <div className="text-white font-bold text-xs tracking-[3px] mb-1 uppercase">Stone Slabs</div>
            <div className="text-[13px]">Premium stone surfaces, crafted in Durban since 2011.</div>
          </div>
          <div className="text-xs">&copy; 2026 Goldtop Quartz (Pty) Ltd t/a Stone Slabs. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
