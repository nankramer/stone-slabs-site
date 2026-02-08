import type { Metadata, Viewport } from "next"
import { Instrument_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600", "700"],
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Stone Slabs Durban — Premium Stone Surfaces",
  description:
    "Stone Slabs Durban — Premium granite, marble, quartz & sintered stone surfaces. Supplied, fabricated and installed across KwaZulu-Natal.",
  keywords:
    "stone slabs, kitchen countertops, quartz countertops, sintered stone, Neolith, Caesarstone, Durban, KwaZulu-Natal, stone cladding, vanity tops, staircases",
  openGraph: {
    title: "Stone Slabs Durban — Premium Stone Surfaces",
    description:
      "Granite, marble, quartz & sintered stone — supplied, fabricated and installed across KwaZulu-Natal.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#1A1610",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${playfairDisplay.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
