import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Hero } from "@/components/hero"
import { Section, SectionTitle } from "@/components/section"
import { MaterialCard } from "@/components/material-card"
import { ProjectCard } from "@/components/project-card"
import { QuoteForm } from "@/components/quote-form"
import { PhoneReveal } from "@/components/phone-reveal"
import { SERVICES, BRANDS, PROJECTS, sampleMaterials } from "@/lib/data"
import Link from "next/link"

export default function HomePage() {
  const featuredMaterials = sampleMaterials(8, (m) => !m.img.startsWith("linear"))

  return (
    <>
      <Nav />
      <main>
        <Hero
          headline="Stone Surfaces, Crafted to Perfection"
          sub="Sintered stone & quartz surfaces — supplied, fabricated and installed across KwaZulu-Natal. From kitchen countertops to architectural cladding, we bring your vision to life."
          cta="Get a Free Quote"
          ctaHref="/quote"
          secondary="Explore Materials \u2192"
          secondaryHref="/materials"
        />

        {/* Service Cards */}
        <Section bg="white">
          <SectionTitle
            label="What we do"
            title="Supply. Fabricate. Install."
            sub="End-to-end stone surface solutions for residential and commercial projects."
          />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="fade-up block p-8 rounded-[14px] bg-stone-50 border border-stone-100 no-underline transition-all duration-300 hover:border-stone-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-[28px] mb-4 opacity-30">{s.icon}</div>
                <div className="font-serif text-[22px] text-stone-800 mb-2">{s.name}</div>
                <div className="text-sm text-stone-500 leading-relaxed mb-4">{s.subhead}</div>
                <div className="text-[13px] font-semibold text-stone-500 tracking-wide">
                  Learn more &rarr;
                </div>
              </Link>
            ))}
          </div>
        </Section>

        {/* Trust Strip */}
        <Section bg="var(--stone-900)" padY={60}>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 text-center">
            {[
              ["14+", "Years of Expertise", "Established 2011"],
              ["48hr", "Quote Turnaround", "Detailed pricing, fast"],
              ["1", "Team, Start to Finish", "Supply, fabricate, install"],
              ["\u221E", "Spec Support", "For architects & designers"],
            ].map(([num, title, sub]) => (
              <div key={title} className="p-4">
                <div className="font-serif text-4xl text-stone-400 mb-2">{num}</div>
                <div className="font-semibold text-sm text-white mb-1">{title}</div>
                <div className="text-[13px] text-white/40">{sub}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Featured Materials */}
        <Section>
          <SectionTitle
            label="Materials"
            title="Featured Surfaces"
            sub="A selection from our range of natural and engineered stone."
          />
          <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
            {featuredMaterials.map((m) => (
              <MaterialCard key={m.id} m={m} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/materials"
              className="inline-block px-9 py-3.5 bg-transparent border border-stone-300 rounded-[10px] text-sm font-semibold font-sans text-stone-600 no-underline transition-all duration-200 hover:border-stone-500 hover:text-stone-800"
            >
              Browse All Materials &rarr;
            </Link>
          </div>
        </Section>

        {/* Brands */}
        <Section bg="white" padY={60}>
          <SectionTitle label="Brands" title="Trusted Partners" />
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {BRANDS.map((b) => (
              <Link
                key={b.slug}
                href={`/brand/${b.slug}`}
                className="px-5 py-3 text-sm font-semibold text-stone-400 tracking-[1px] uppercase no-underline transition-colors duration-200 border-b-2 border-transparent hover:text-stone-700 hover:border-b-stone-400"
              >
                {b.name}
              </Link>
            ))}
          </div>
        </Section>

        {/* Featured Projects */}
        <Section>
          <SectionTitle
            label="Projects"
            title="Recent Work"
            sub="A selection of completed residential and commercial installations."
          />
          <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-5">
            {PROJECTS.slice(0, 3).map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-block px-9 py-3.5 bg-transparent border border-stone-300 rounded-[10px] text-sm font-semibold font-sans text-stone-600 no-underline"
            >
              See All Projects &rarr;
            </Link>
          </div>
        </Section>

        {/* Embedded Quote Form */}
        <Section bg="var(--stone-100)" padY={80}>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[60px] items-start">
            <div>
              <SectionTitle
                label="Get Started"
                title="Tell Us About Your Project"
                sub="Share your project details and we'll provide a detailed quote within 24 hours. Upload drawings or photos for the most accurate pricing."
              />
              <div className="text-sm text-stone-500 leading-relaxed mt-5">
                Not sure where to start? Call us on{" "}
                <PhoneReveal className="text-stone-700 font-bold" /> or visit our showroom in
                Springfield Park, Durban.
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <QuoteForm embedded />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
