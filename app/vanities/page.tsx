import { getService } from "@/lib/data"
import { ServicePageContent } from "@/components/service-page-content"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bathroom Vanity Tops & Surfaces | Stone Slabs Durban",
  description: "Elegant, durable surfaces for bathrooms — vanity tops, shower walls, bath surrounds, and shelving.",
}

export default function VanitiesPage() {
  const service = getService("vanities")
  if (!service) return notFound()
  return <ServicePageContent service={service} />
}
