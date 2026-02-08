import { getService } from "@/lib/data"
import { ServicePageContent } from "@/components/service-page-content"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Stone Staircases & Treads | Stone Slabs Durban",
  description: "Precision-fabricated stone treads, risers, and cladding for staircases that make a statement.",
}

export default function StaircasesPage() {
  const service = getService("staircases")
  if (!service) return notFound()
  return <ServicePageContent service={service} />
}
