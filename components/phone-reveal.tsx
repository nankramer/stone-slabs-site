"use client"

import { useState } from "react"
import { PHONE_REAL, PHONE_MASKED, PHONE_TEL } from "@/lib/data"

export function PhoneReveal({
  className,
  prefix,
}: {
  className?: string
  prefix?: string
}) {
  const [revealed, setRevealed] = useState(false)

  return (
    <a
      href={revealed ? PHONE_TEL : "#"}
      onClick={(e) => {
        if (!revealed) {
          e.preventDefault()
          setRevealed(true)
        }
      }}
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
      className={`no-underline text-inherit cursor-pointer ${className || ""}`}
    >
      {prefix}
      {revealed ? PHONE_REAL : PHONE_MASKED}
    </a>
  )
}
