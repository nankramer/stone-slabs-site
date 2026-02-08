"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { BRANDS } from "@/lib/data"
import { PhoneReveal } from "./phone-reveal"

const navItems = [
  { label: "Kitchens", href: "/kitchens" },
  { label: "Vanities", href: "/vanities" },
  { label: "Staircases", href: "/staircases" },
  { label: "Cladding", href: "/cladding" },
  { label: "Materials", href: "/materials" },
  {
    label: "Brands",
    href: "/brands",
    children: BRANDS.map((b) => ({ label: b.name, href: `/brand/${b.slug}` })),
  },
  { label: "Projects", href: "/projects" },
  { label: "For Designers", href: "/designers" },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", h)
    return () => window.removeEventListener("scroll", h)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(26,22,16,0.95)] backdrop-blur-[12px] shadow-[0_1px_0_rgba(255,255,255,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-6 flex items-center justify-between h-[72px]">
          <Link
            href="/"
            className="font-sans font-bold text-[13px] tracking-[4px] uppercase text-white no-underline whitespace-nowrap"
            onClick={() => setOpen(false)}
          >
            Stone Slabs <span className="text-stone-400">Durban</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-1 items-center">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setDropdown(item.href)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-[13px] font-medium text-white/70 px-3.5 py-2 rounded-md no-underline transition-all duration-200 hover:text-white hover:bg-white/[0.08] tracking-wide font-sans block"
                >
                  {item.label}
                </Link>
                {item.children && dropdown === item.href && (
                  <div className="absolute top-full left-0 bg-[rgba(26,22,16,0.97)] backdrop-blur-[16px] border border-white/[0.08] rounded-[10px] p-2 min-w-[200px] animate-[slideDown_0.2s_ease]">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block px-3.5 py-2.5 text-white/70 text-[13px] rounded-md no-underline transition-all duration-150 hover:bg-white/[0.08] hover:text-white font-sans"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <PhoneReveal className="hidden lg:block text-white/50 text-xs tracking-wide mr-3" />
            <Link
              href="/quote"
              className="hidden lg:block text-[13px] font-semibold text-stone-900 bg-stone-200 px-5 py-2.5 rounded-lg no-underline transition-all duration-200 hover:bg-white tracking-wide font-sans"
            >
              Get Quote
            </Link>
            <button
              className={`lg:hidden bg-transparent border-none cursor-pointer p-2`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-[22px] h-0.5 bg-white my-[5px] rounded-sm transition-all duration-300 ${
                  open ? "rotate-45 translate-x-[5px] translate-y-[5px]" : ""
                }`}
              />
              <span
                className={`block w-[22px] h-0.5 bg-white my-[5px] rounded-sm transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-[22px] h-0.5 bg-white my-[5px] rounded-sm transition-all duration-300 ${
                  open ? "-rotate-45 translate-x-[5px] -translate-y-[5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-[rgba(26,22,16,0.98)] z-[99] pt-[100px] px-8 pb-8 flex flex-col gap-1 overflow-y-auto fade-in">
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="block text-lg text-white/70 py-4 border-b border-white/[0.06] no-underline font-sans font-medium hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
              {item.children &&
                item.children.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="block pl-6 text-[15px] text-white/70 py-4 border-b border-white/[0.06] no-underline font-sans font-medium opacity-70 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {c.label}
                  </Link>
                ))}
            </div>
          ))}
          <Link
            href="/studio-marbella"
            className="block text-lg text-white/70 py-4 border-b border-white/[0.06] no-underline font-sans font-medium hover:text-white"
            onClick={() => setOpen(false)}
          >
            Studio Marbella
          </Link>
          <Link
            href="/contact"
            className="block text-lg text-white/70 py-4 border-b border-white/[0.06] no-underline font-sans font-medium hover:text-white"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/quote"
            className="block mt-6 text-center py-4 bg-stone-200 text-stone-900 font-semibold rounded-[10px] no-underline text-base font-sans"
            onClick={() => setOpen(false)}
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </>
  )
}
