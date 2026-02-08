"use client"

import { useState, useRef, useEffect } from "react"
import { PhoneReveal } from "./phone-reveal"

export function QuoteForm({
  preselect = {},
  embedded = false,
}: {
  preselect?: { type?: string; material?: string }
  embedded?: boolean
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: preselect.type || "",
    area: "",
    material: preselect.material || "",
    notes: "",
    source: "",
  })
  const [files, setFiles] = useState<File[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitError, setSubmitError] = useState<string | false>(false)
  const [submitting, setSubmitting] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (preselect.material) setForm((f) => ({ ...f, material: preselect.material! }))
    if (preselect.type) setForm((f) => ({ ...f, type: preselect.type! }))
  }, [preselect.material, preselect.type])

  const update = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }))
    setErrors((e) => {
      const copy = { ...e }
      delete copy[k]
      return copy
    })
  }

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = "Required"
    if (!form.phone.trim()) e.phone = "Required"
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required"
    if (!form.area.trim()) e.area = "Required"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = async () => {
    if (!validate()) return
    setSubmitting(true)
    setSubmitError(false)
    try {
      const formData = new FormData()
      Object.entries(form).forEach(([k, v]) => formData.append(k, v))
      files.forEach((f) => formData.append("attachment", f))
      const res = await fetch("https://formspree.io/f/mqedkrow", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        const err = await res.json().catch(() => ({}))
        setSubmitError(err.error || "Something went wrong. Please try again or call us directly.")
      }
    } catch {
      setSubmitError("Something went wrong. Please try again or call us directly.")
    }
    setSubmitting(false)
  }

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || [])
    setFiles((f) => [...f, ...newFiles].slice(0, 10))
  }

  if (submitted) {
    return (
      <div className={`${embedded ? "py-12" : "p-12"} text-center`}>
        <div className="text-5xl mb-4">&#10003;</div>
        <h3 className="font-serif text-2xl mb-3 text-stone-800">We&apos;ve received your request</h3>
        <p className="text-stone-500 leading-relaxed max-w-[400px] mx-auto">
          Thanks, {form.name.split(" ")[0]}. We&apos;ll review your project details and get back to you
          within 24 hours. For anything urgent, call us on{" "}
          <PhoneReveal className="font-semibold" />.
        </p>
      </div>
    )
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 border rounded-lg text-sm font-sans bg-white outline-none transition-colors duration-200 text-stone-800 ${
      errors[field] ? "border-[#c44]" : "border-stone-200"
    }`

  return (
    <div className={embedded ? "" : "p-8"}>
      {!embedded && (
        <div className="mb-8">
          <h3 className="font-serif text-[28px] text-stone-800 mb-2">Get a Free Quote</h3>
          <p className="text-stone-500 text-sm leading-relaxed">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      )}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        <div>
          <label className="text-xs font-semibold text-stone-600 mb-1.5 block tracking-wide uppercase">
            Full Name *
          </label>
          <input className={inputClass("name")} value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your full name" />
          {errors.name && <div className="text-[11px] text-[#c44] mt-1">{errors.name}</div>}
        </div>
        <div>
          <label className="text-xs font-semibold text-stone-600 mb-1.5 block tracking-wide uppercase">Phone *</label>
          <input className={inputClass("phone")} type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="082 000 0000" />
          {errors.phone && <div className="text-[11px] text-[#c44] mt-1">{errors.phone}</div>}
        </div>
        <div>
          <label className="text-xs font-semibold text-stone-600 mb-1.5 block tracking-wide uppercase">Email *</label>
          <input className={inputClass("email")} type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" />
          {errors.email && <div className="text-[11px] text-[#c44] mt-1">{errors.email}</div>}
        </div>
        <div>
          <label className="text-xs font-semibold text-stone-600 mb-1.5 block tracking-wide uppercase">Project Type *</label>
          <select
            className={`${inputClass("type")} ${form.type ? "text-stone-800" : "text-stone-400"}`}
            value={form.type}
            onChange={(e) => update("type", e.target.value)}
          >
            <option value="">Select type...</option>
            <option>Kitchen</option>
            <option>Vanity / Bathroom</option>
            <option>Staircase</option>
            <option>Cladding</option>
            <option>Commercial</option>
            <option>Other</option>
          </select>
          {errors.type && <div className="text-[11px] text-[#c44] mt-1">{errors.type}</div>}
        </div>
        <div>
          <label className="text-xs font-semibold text-stone-600 mb-1.5 block tracking-wide uppercase">City / Area *</label>
          <input className={inputClass("area")} value={form.area} onChange={(e) => update("area", e.target.value)} placeholder="e.g. Umhlanga, Ballito, Hillcrest" />
          {errors.area && <div className="text-[11px] text-[#c44] mt-1">{errors.area}</div>}
        </div>
        <div>
          <label className="text-xs font-semibold text-stone-600 mb-1.5 block tracking-wide uppercase">Preferred Material</label>
          <input className={inputClass("material")} value={form.material} onChange={(e) => update("material", e.target.value)} placeholder="e.g. Neolith Estatuario" />
        </div>
      </div>
      <div className="mt-4">
        <label className="text-xs font-semibold text-stone-600 mb-1.5 block tracking-wide uppercase">Notes / Comments</label>
        <textarea
          className={`${inputClass("notes")} min-h-[80px] resize-y`}
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          placeholder="Tell us about your project \u2014 dimensions, layout, special requirements..."
        />
      </div>
      <div className="mt-4">
        <label className="text-xs font-semibold text-stone-600 mb-1.5 block tracking-wide uppercase">Attach Drawings or Photos</label>
        <div
          onClick={() => fileRef.current?.click()}
          className="border-2 border-dashed border-stone-200 rounded-[10px] px-4 py-6 text-center cursor-pointer transition-colors duration-200 bg-white/50"
        >
          <div className="text-2xl mb-2 opacity-40">&#128206;</div>
          <div className="text-[13px] text-stone-500">
            Drag files here or tap to browse &mdash; PDF, JPG, PNG, DXF, DWG (max 25 MB)
          </div>
          <input ref={fileRef} type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.dxf,.dwg" onChange={handleFiles} className="hidden" />
        </div>
        {files.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {files.map((f, i) => (
              <div key={i} className="text-xs bg-stone-100 px-3 py-1.5 rounded-md flex items-center gap-1.5">
                {f.name}{" "}
                <span onClick={() => setFiles((fs) => fs.filter((_, j) => j !== i))} className="cursor-pointer opacity-50">
                  &#10005;
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-4">
        <label className="text-xs font-semibold text-stone-600 mb-1.5 block tracking-wide uppercase">How did you hear about us?</label>
        <select
          className={`${inputClass("source")} ${form.source ? "text-stone-800" : "text-stone-400"}`}
          value={form.source}
          onChange={(e) => update("source", e.target.value)}
        >
          <option value="">Optional</option>
          <option>Google</option>
          <option>Instagram</option>
          <option>Referral</option>
          <option>Architect / Designer</option>
          <option>Returning Client</option>
          <option>Other</option>
        </select>
      </div>
      {submitError && (
        <div className="mt-3 text-[#c44] text-[13px] text-center">
          {typeof submitError === "string" ? submitError : "Something went wrong. Please try again or call us directly."}
        </div>
      )}
      <button
        onClick={submit}
        disabled={submitting}
        className="mt-6 w-full py-4 text-white border-none rounded-[10px] text-[15px] font-semibold font-sans tracking-wide transition-colors duration-200"
        style={{
          background: submitting ? "var(--stone-400)" : "var(--stone-800)",
          cursor: submitting ? "wait" : "pointer",
        }}
      >
        {submitting ? "Sending..." : "Get My Quote \u2192"}
      </button>
    </div>
  )
}
