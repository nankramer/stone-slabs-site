import { getService } from "@/lib/data"
import { ServicePageContent } from "@/components/service-page-content"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kitchen Countertops & Surfaces | Stone Slabs Durban",
  description: "From engineered quartz to sintered stone — we supply, fabricate, and install kitchen surfaces built to last.",
}

export default function KitchensPage() {
  const service = getService("kitchens")
  if (!service) return notFound()
  return <ServicePageContent service={service} />
}
