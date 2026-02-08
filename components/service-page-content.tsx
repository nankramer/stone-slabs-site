import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Hero } from "@/components/hero"
import { Section, SectionTitle } from "@/components/section"
import { MaterialCard } from "@/components/material-card"
import { ProjectCard } from "@/components/project-card"
import { QuoteForm } from "@/components/quote-form"
import { FAQItem } from "@/components/faq-item"
import { MATERIALS, PROJECTS, type Service } from "@/lib/data"
import Link from "next/link"

export function ServicePageContent({ service }: { service: Service }) {
  const s = service
  const relatedMaterials = MATERIALS.filter((m) =>
    m.apps.some((a) => s.apps.includes(a))
  ).slice(0, 6)

  const relatedProjects = PROJECTS.filter((p) => {
    if (s.slug === "kitchens") return p.type === "Kitchen"
    if (s.slug === "vanities") return p.type === "Bathroom"
    if (s.slug === "staircases") return p.type === "Staircase"
    if (s.slug === "cladding") return p.type === "Cladding"
    return false
  })

  return (
    <>
      <Nav />
      <main>
        <Hero
          headline={s.headline}
          sub={s.subhead}
          cta={`Get a ${s.name} Quote`}
          ctaHref="/quote"
        />

        <Section bg="white">
          <div className="max-w-[720px] mx-auto">
            <p className="text-[17px] leading-[1.8] text-stone-600">{s.intro}</p>
          </div>
        </Section>

        <Section>
          <SectionTitle label={`Materials for ${s.name}`} title="Popular Surfaces" />
          <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
            {relatedMaterials.map((m) => (
              <MaterialCard key={m.id} m={m} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/materials"
              className="inline-block px-8 py-3 bg-transparent border border-stone-300 rounded-lg text-sm font-semibold font-sans text-stone-600 no-underline"
            >
              Browse All Materials &rarr;
            </Link>
          </div>
        </Section>

        {/* Process */}
        <Section bg="white">
          <SectionTitle label="Our Process" title="How It Works" />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
            {[
              "Consult & Quote \u2014 Send us your drawings or measurements. We'll recommend materials and provide a detailed quote.",
              "Template \u2014 Our team visits your site for precision laser templating.",
              "Fabricate \u2014 CNC-cut and hand-finished in our Durban workshop.",
              "Install \u2014 Professional fitting with sealing and quality check.",
            ].map((step, i) => (
              <div key={i} className="p-6 rounded-xl border border-stone-100">
                <div className="font-serif text-[32px] text-stone-300 mb-3">
                  0{i + 1}
                </div>
                <div className="text-sm text-stone-600 leading-relaxed">{step}</div>
              </div>
            ))}
          </div>
        </Section>

        {relatedProjects.length > 0 && (
          <Section>
            <SectionTitle label="Our Work" title={`${s.name} Projects`} />
            <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-5">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.id} p={p} />
              ))}
            </div>
          </Section>
        )}

        {/* FAQ */}
        {s.faq && s.faq.length > 0 && (
          <Section bg="white">
            <SectionTitle label="FAQ" title="Common Questions" />
            <div className="max-w-[720px] mx-auto">
              {s.faq.map((f, i) => (
                <FAQItem key={i} q={f.q} a={f.a} />
              ))}
            </div>
          </Section>
        )}

        <Section bg="var(--stone-100)" padY={80}>
          <div className="bg-card rounded-2xl p-8 max-w-[680px] mx-auto shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <QuoteForm preselect={{ type: s.name }} embedded />
          </div>
        </Section>
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
