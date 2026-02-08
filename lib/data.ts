export type Brand = {
  slug: string
  name: string
  tagline: string
  desc: string
}

export type Material = {
  id: number
  name: string
  brand: string
  type: string
  colour: string
  pattern: string
  finish: string[]
  apps: string[]
  img: string
  code?: string
  range?: string
}

export type Project = {
  id: number
  slug: string
  title: string
  type: string
  material: string
  brand: string
  location: string
  desc: string
  img: string
}

export type Service = {
  slug: string
  name: string
  headline: string
  subhead: string
  intro: string
  icon: string
  apps: string[]
  faq: { q: string; a: string }[]
}

export const BRANDS: Brand[] = [
  { slug: "neolith", name: "Neolith", tagline: "Ultra-compact sintered stone surfaces from Spain", desc: "Neolith is a revolutionary sintered stone surface made from 100% natural raw materials. With a wide range of colours spanning elegant Calacattas, dramatic blacks, industrial metals, and natural stone effects, Neolith is resistant to UV, scratches, chemicals, and extreme temperatures — ideal for kitchens, cladding, flooring, and facades." },
  { slug: "eezi-quartz", name: "Eezi Quartz", tagline: "Engineered quartz surfaces", desc: "Eezi Quartz combines natural quartz crystals with advanced polymer resins to create surfaces that are hard-wearing, low-maintenance, and available in a wide spectrum of colours and patterns. Ideal for kitchens and bathrooms where durability meets design." },
  { slug: "infinity", name: "Infinity", tagline: "Sintered stone surfaces", desc: "Infinity sintered stone surfaces offer the beauty of natural stone with the performance advantages of advanced ceramics. UV-stable, scratch-resistant, and available in large formats up to 1600\u00D73200mm, the range spans marble book-match, onyx crystal, stone effect, concrete, solid colour, and metal effect collections — perfect for seamless cladding and countertop applications." },
  { slug: "estrella", name: "Estrella", tagline: "Sintered stone surfaces", desc: "Estrella sintered stone surfaces combine quality with design, offering a curated range of 25 colours and patterns — from dramatic veined Calacattas and bold blacks to warm beiges and statement blues — suited to both residential and commercial projects." },
  { slug: "lutum", name: "Lutum", tagline: "Sintered stone surfaces", desc: "Lutum sintered stone surfaces are manufactured using cutting-edge technology to produce ultra-compact slabs with exceptional durability, heat resistance, and design versatility. The 10-colour range spans dramatic veined marbles, rich greens, deep blacks, warm travertines, and industrial concretes." },
  { slug: "marble", name: "Marble", tagline: "Natural marble surfaces", desc: "Natural marble is the ultimate expression of luxury in stone. Each slab is unique — formed over millions of years with distinctive veining, colour variation, and depth that no engineered surface can replicate. Our curated marble collection includes classic Italian Nero Marquinas, rich Emperadors, striking Iceberg blues, and rare greens — sourced from quarries worldwide and available in polished, honed, and leather finishes." },
  { slug: "quartzite", name: "Quartzite", tagline: "Natural quartzite surfaces", desc: "Quartzite is one of the hardest natural stones available — harder than granite and far more durable than marble. Formed from sandstone under intense heat and pressure, quartzite combines the dramatic veining and translucency of marble with exceptional scratch, heat, and UV resistance. Our collection features rare and exotic slabs from Brazil and beyond, available in polished, honed, and leather finishes." },
  { slug: "granite", name: "Granite", tagline: "Natural granite surfaces", desc: "Granite is the world's most popular natural stone for kitchen countertops — and for good reason. Formed from cooled magma deep within the earth, granite is exceptionally hard, heat-resistant, and scratch-resistant. Each slab features unique mineral patterns and colour variations. Our granite collection spans classic blacks, warm ivories, dramatic cosmopolitans, and exotic crystals — all polished or leathered to perfection." },
]

export const MATERIALS: Material[] = [
  // --- Neolith ---
  { id: 400, name: "Abu Dhabi White", brand: "neolith", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/neolith/Abu_Dhabi_White.jpeg" },
  { id: 401, name: "Amazonico", brand: "neolith", type: "Sintered Stone", colour: "Green", pattern: "Veined", finish: ["Polished"], apps: ["Cladding", "Bathrooms"], img: "images/neolith/Amazonico.jpeg" },
  { id: 402, name: "Arabesque", brand: "neolith", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/neolith/Arabesque.jpeg" },
  { id: 403, name: "Arctic White", brand: "neolith", type: "Sintered Stone", colour: "White", pattern: "Solid", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms"], img: "images/neolith/Arctic_White.jpeg" },
  { id: 404, name: "Arena", brand: "neolith", type: "Sintered Stone", colour: "Beige", pattern: "Solid", finish: ["Honed"], apps: ["Kitchens", "Cladding", "Outdoor"], img: "images/neolith/Arena.jpeg" },
  { id: 405, name: "Artisan", brand: "neolith", type: "Sintered Stone", colour: "Beige", pattern: "Textured", finish: ["Honed"], apps: ["Cladding", "Kitchens"], img: "images/neolith/Artisan.jpeg" },
  { id: 406, name: "Aspen Grey", brand: "neolith", type: "Sintered Stone", colour: "Grey", pattern: "Textured", finish: ["Honed", "Leathered"], apps: ["Cladding", "Kitchens", "Outdoor"], img: "images/neolith/Aspen_Grey.jpeg" },
  { id: 407, name: "Azahar", brand: "neolith", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/neolith/Azahar.jpeg" },
  { id: 408, name: "Azure", brand: "neolith", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms"], img: "images/neolith/Azure.jpeg" },
  { id: 409, name: "Barro", brand: "neolith", type: "Sintered Stone", colour: "Brown", pattern: "Textured", finish: ["Honed"], apps: ["Cladding", "Outdoor"], img: "images/neolith/Barro.jpeg" },
  { id: 410, name: "Basalt Black", brand: "neolith", type: "Sintered Stone", colour: "Black", pattern: "Textured", finish: ["Honed", "Leathered"], apps: ["Cladding", "Outdoor", "Kitchens"], img: "images/neolith/Basalt_Black.jpeg" },
  { id: 411, name: "Basalt Grey", brand: "neolith", type: "Sintered Stone", colour: "Grey", pattern: "Textured", finish: ["Honed", "Leathered"], apps: ["Cladding", "Outdoor", "Kitchens"], img: "images/neolith/Basalt_Grey.jpeg" },
  { id: 412, name: "Beton", brand: "neolith", type: "Sintered Stone", colour: "Grey", pattern: "Textured", finish: ["Honed"], apps: ["Cladding", "Kitchens"], img: "images/neolith/Beton.jpeg" },
  { id: 413, name: "Black Obsession", brand: "neolith", type: "Sintered Stone", colour: "Black", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/neolith/Black_Obsession.jpeg" },
  { id: 414, name: "Calacatta", brand: "neolith", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms"], img: "images/neolith/Calacatta.jpeg" },
  { id: 415, name: "Calacatta Gold", brand: "neolith", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/neolith/Calacatta_Gold.jpeg" },
  { id: 416, name: "Calacatta Luxe", brand: "neolith", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/neolith/Calacatta_Luxe.jpeg" },
  { id: 417, name: "Calacatta Roma", brand: "neolith", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/neolith/Calacatta_Roma.jpeg" },
  { id: 418, name: "Calacatta Royale", brand: "neolith", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/neolith/Calacatta_Royale.jpeg" },
  { id: 419, name: "Calatorao", brand: "neolith", type: "Sintered Stone", colour: "Black", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Cladding"], img: "images/neolith/Calatorao.jpeg" },
  { id: 420, name: "Calista", brand: "neolith", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/neolith/Calista.jpeg" },
  { id: 421, name: "Cappadocia Sunset", brand: "neolith", type: "Sintered Stone", colour: "Grey", pattern: "Speckled", finish: ["Honed"], apps: ["Cladding", "Kitchens"], img: "images/neolith/Cappadocia_Sunset.jpeg" },
  { id: 422, name: "Cement", brand: "neolith", type: "Sintered Stone", colour: "Grey", pattern: "Textured", finish: ["Honed"], apps: ["Cladding", "Kitchens", "Outdoor"], img: "images/neolith/Cement.jpeg" },
  { id: 423, name: "Colorado Dunes", brand: "neolith", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms"], img: "images/neolith/Colorado_Dunes.jpeg" },
  { id: 424, name: "Creme", brand: "neolith", type: "Sintered Stone", colour: "Beige", pattern: "Textured", finish: ["Honed"], apps: ["Cladding", "Kitchens"], img: "images/neolith/Creme.jpeg" },
  { id: 425, name: "Estatuario", brand: "neolith", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/neolith/Estatuario.jpeg" },
  { id: 426, name: "Everest Sunrise", brand: "neolith", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/neolith/Everest_Sunrise.jpeg" },
  { id: 427, name: "Himalaya Crystal", brand: "neolith", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/neolith/Himalaya_Crystal.jpeg" },
  { id: 428, name: "Ignea", brand: "neolith", type: "Sintered Stone", colour: "Grey", pattern: "Textured", finish: ["Honed", "Leathered"], apps: ["Cladding", "Outdoor"], img: "images/neolith/Ignea.jpeg" },
  { id: 429, name: "Iron Copper", brand: "neolith", type: "Sintered Stone", colour: "Brown", pattern: "Textured", finish: ["Honed"], apps: ["Cladding", "Kitchens"], img: "images/neolith/Iron_Copper.jpeg" },
  { id: 430, name: "Iron Corten", brand: "neolith", type: "Sintered Stone", colour: "Brown", pattern: "Textured", finish: ["Honed"], apps: ["Cladding", "Outdoor"], img: "images/neolith/Iron_Corten.jpeg" },
  { id: 431, name: "Iron Frost", brand: "neolith", type: "Sintered Stone", colour: "Grey", pattern: "Textured", finish: ["Honed"], apps: ["Cladding", "Kitchens"], img: "images/neolith/Iron_Frost.jpeg" },
  { id: 432, name: "Iron Grey", brand: "neolith", type: "Sintered Stone", colour: "Grey", pattern: "Textured", finish: ["Honed", "Leathered"], apps: ["Cladding", "Kitchens", "Outdoor"], img: "images/neolith/Iron_Grey.jpeg" },
  { id: 433, name: "Just White", brand: "neolith", type: "Sintered Stone", colour: "White", pattern: "Solid", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms"], img: "images/neolith/Just_White.jpeg" },
  { id: 434, name: "Krater", brand: "neolith", type: "Sintered Stone", colour: "Black", pattern: "Textured", finish: ["Honed", "Leathered"], apps: ["Cladding", "Outdoor"], img: "images/neolith/Krater.jpeg" },
  { id: 435, name: "La Boheme", brand: "neolith", type: "Sintered Stone", colour: "Beige", pattern: "Wood", finish: ["Honed"], apps: ["Cladding", "Kitchens"], img: "images/neolith/La_Boheme.jpeg" },
  { id: 436, name: "Strata Argentum", brand: "neolith", type: "Sintered Stone", colour: "Beige", pattern: "Veined", finish: ["Honed"], apps: ["Cladding", "Bathrooms", "Kitchens"], img: "images/neolith/Strata_Argentum.jpeg" },
  { id: 437, name: "Summer Dala", brand: "neolith", type: "Sintered Stone", colour: "Beige", pattern: "Wood", finish: ["Honed"], apps: ["Cladding", "Kitchens"], img: "images/neolith/Summer_Dala.jpeg" },
  { id: 438, name: "Taj Mahal", brand: "neolith", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/neolith/Taj_Mahal.jpeg" },
  { id: 439, name: "Terrazo Ceppo", brand: "neolith", type: "Sintered Stone", colour: "Grey", pattern: "Speckled", finish: ["Honed"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/neolith/Terrazo_Ceppo.jpeg" },
  { id: 440, name: "Victoria", brand: "neolith", type: "Sintered Stone", colour: "Black", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/neolith/Victoria.jpeg" },
  { id: 441, name: "White Sands", brand: "neolith", type: "Sintered Stone", colour: "White", pattern: "Textured", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms"], img: "images/neolith/WhiteSands.jpeg" },
  { id: 442, name: "Wulong", brand: "neolith", type: "Sintered Stone", colour: "Grey", pattern: "Speckled", finish: ["Honed"], apps: ["Cladding", "Kitchens", "Outdoor"], img: "images/neolith/Wulong.jpeg" },
  { id: 443, name: "Zaha Stone", brand: "neolith", type: "Sintered Stone", colour: "Grey", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/neolith/Zaha_Stone.jpeg" },
  // --- Eezi Quartz ---
  { id: 500, name: "Aurelia", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Deluxe", img: "images/eezi-quartz/Aurelia.jpg" },
  { id: 501, name: "Beach", brand: "eezi-quartz", type: "Quartz", colour: "Beige", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Saver", img: "images/eezi-quartz/Beach.jpg" },
  { id: 502, name: "Bianco Calacatta", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Deluxe", img: "images/eezi-quartz/Bianco_Calacatta.jpg" },
  { id: 503, name: "Bianco Carbonio", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Deluxe", img: "images/eezi-quartz/Bianco_Carbonio.jpg" },
  { id: 504, name: "Bianco Cloud", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Choice", img: "images/eezi-quartz/Bianco_Cloud.jpg" },
  { id: 505, name: "Bianco Statuario", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms", "Cladding"], range: "Deluxe", img: "images/eezi-quartz/Bianco_Statuario.jpg" },
  { id: 506, name: "Bianco Supremo", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Deluxe", img: "images/eezi-quartz/Bianco_Supremo.jpg" },
  { id: 507, name: "Bianco Venato", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Select", img: "images/eezi-quartz/Bianco_Venato.jpg" },
  { id: 508, name: "Blanco Bronze", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Deluxe", img: "images/eezi-quartz/Blanco_Bronze.jpg" },
  { id: 509, name: "Blanco Pewter", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Select", img: "images/eezi-quartz/Blanco_Pewter.jpg" },
  { id: 510, name: "Blanco Steel", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Deluxe", img: "images/eezi-quartz/Blanco_Steel.jpg" },
  { id: 511, name: "Calacatta Fine", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Choice", img: "images/eezi-quartz/Calacatta_Fine.jpg" },
  { id: 512, name: "Calacatta Gold", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Deluxe", img: "images/eezi-quartz/Calacatta_Gold.jpg" },
  { id: 513, name: "Calacatta Zara", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms", "Cladding"], range: "Deluxe", img: "images/eezi-quartz/Calacatta_Zara.jpg" },
  { id: 514, name: "Charcoal Grey", brand: "eezi-quartz", type: "Quartz", colour: "Grey", pattern: "Solid", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Saver", img: "images/eezi-quartz/Charcoal_Grey.jpg" },
  { id: 515, name: "Cremalat", brand: "eezi-quartz", type: "Quartz", colour: "Beige", pattern: "Solid", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Choice", img: "images/eezi-quartz/Cremalat.jpg" },
  { id: 516, name: "Dazzle", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Saver", img: "images/eezi-quartz/Dazzle.jpg" },
  { id: 517, name: "Dusty Stone", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Deluxe", img: "images/eezi-quartz/Dusty_Stone.jpg" },
  { id: 518, name: "Fawn", brand: "eezi-quartz", type: "Quartz", colour: "Grey", pattern: "Textured", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Deluxe", img: "images/eezi-quartz/Fawn.jpg" },
  { id: 519, name: "Galaxy", brand: "eezi-quartz", type: "Quartz", colour: "Black", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Saver", img: "images/eezi-quartz/Galaxy.jpg" },
  { id: 520, name: "Grey River", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Deluxe", img: "images/eezi-quartz/Grey_River.jpg" },
  { id: 521, name: "Grigio Cemento", brand: "eezi-quartz", type: "Quartz", colour: "Grey", pattern: "Solid", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Select", img: "images/eezi-quartz/Grigio_Cemento.jpg" },
  { id: 522, name: "Iceberg", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Solid", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Choice", img: "images/eezi-quartz/Iceberg.jpg" },
  { id: 523, name: "Macadamia", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Saver", img: "images/eezi-quartz/Macadamia.jpg" },
  { id: 524, name: "Magnolia", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Saver", img: "images/eezi-quartz/Magnolia.jpg" },
  { id: 525, name: "Misty Pearl", brand: "eezi-quartz", type: "Quartz", colour: "Grey", pattern: "Textured", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Deluxe", img: "images/eezi-quartz/Misty_Pearl.jpg" },
  { id: 526, name: "Nero Venato", brand: "eezi-quartz", type: "Quartz", colour: "Black", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms", "Cladding"], range: "Deluxe", img: "images/eezi-quartz/Nero_Venato.jpg" },
  { id: 527, name: "Noble White", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Deluxe", img: "images/eezi-quartz/Noble_White.jpg" },
  { id: 528, name: "Pietra Tempesta", brand: "eezi-quartz", type: "Quartz", colour: "Black", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms", "Cladding"], range: "Deluxe", img: "images/eezi-quartz/Pietra_Tempesta.jpg" },
  { id: 529, name: "Platinum", brand: "eezi-quartz", type: "Quartz", colour: "Grey", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Saver", img: "images/eezi-quartz/Platinum.jpg" },
  { id: 530, name: "Sable", brand: "eezi-quartz", type: "Quartz", colour: "Black", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Saver", img: "images/eezi-quartz/Sable.jpg" },
  { id: 531, name: "Slate", brand: "eezi-quartz", type: "Quartz", colour: "Grey", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Saver", img: "images/eezi-quartz/Slate.jpg" },
  { id: 532, name: "Sparkle", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Saver", img: "images/eezi-quartz/Sparkle.jpg" },
  { id: 533, name: "Stratus", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Choice", img: "images/eezi-quartz/Stratus.jpg" },
  { id: 534, name: "Thunder", brand: "eezi-quartz", type: "Quartz", colour: "Grey", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Saver", img: "images/eezi-quartz/Thunder.jpg" },
  { id: 535, name: "Whisper", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Choice", img: "images/eezi-quartz/Whisper.jpg" },
  { id: 536, name: "Wrought Iron", brand: "eezi-quartz", type: "Quartz", colour: "Grey", pattern: "Textured", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], range: "Deluxe", img: "images/eezi-quartz/Wrought_Iron.jpg" },
  // --- Lutum ---
  { id: 300, name: "Griseo", brand: "lutum", type: "Sintered Stone", colour: "Grey", pattern: "Textured", finish: ["Honed"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/lutum/Lutum-Griseo.jpg" },
  { id: 301, name: "Nebula", brand: "lutum", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/lutum/Lutum-Nebula.jpg" },
  { id: 302, name: "Laurentia", brand: "lutum", type: "Sintered Stone", colour: "Black", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Cladding"], img: "images/lutum/Lutum-Laurentia.jpg" },
  { id: 303, name: "Aureus", brand: "lutum", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/lutum/Lutum-Aureus.jpg" },
  { id: 304, name: "Umbra", brand: "lutum", type: "Sintered Stone", colour: "Black", pattern: "Textured", finish: ["Honed", "Leathered"], apps: ["Cladding", "Kitchens", "Outdoor"], img: "images/lutum/Lutum-Umbra.jpg" },
  { id: 305, name: "Traverto", brand: "lutum", type: "Sintered Stone", colour: "Beige", pattern: "Veined", finish: ["Honed"], apps: ["Cladding", "Bathrooms", "Kitchens"], img: "images/lutum/Traverto-lutum-new.jpeg" },
  { id: 306, name: "Palati", brand: "lutum", type: "Sintered Stone", colour: "Beige", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/lutum/Lutum-Palati.jpg" },
  { id: 307, name: "Niveus", brand: "lutum", type: "Sintered Stone", colour: "Beige", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/lutum/Lutum-Niveus.jpg" },
  { id: 308, name: "Folias", brand: "lutum", type: "Sintered Stone", colour: "Green", pattern: "Veined", finish: ["Polished"], apps: ["Cladding", "Bathrooms"], img: "images/lutum/Lutum-Folias.jpg" },
  { id: 309, name: "Oculus", brand: "lutum", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/lutum/Lutum-Oculus.jpg" },
  // --- Estrella ---
  { id: 200, name: "Absolute White", brand: "estrella", type: "Sintered Stone", colour: "White", pattern: "Solid", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/estrella/Absolute_White.png" },
  { id: 201, name: "Amani Crema", brand: "estrella", type: "Sintered Stone", colour: "Beige", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/estrella/Amani_Crema.png" },
  { id: 202, name: "Amani Grey", brand: "estrella", type: "Sintered Stone", colour: "Grey", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms", "Staircases"], img: "images/estrella/Amani_Grey.png" },
  { id: 203, name: "Ankara", brand: "estrella", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/estrella/Ankara.png" },
  { id: 204, name: "Arabescato Corchia", brand: "estrella", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/estrella/Arabescato_Corchia.png" },
  { id: 205, name: "Basalt Black", brand: "estrella", type: "Sintered Stone", colour: "Black", pattern: "Solid", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/estrella/Basalt_Black.png" },
  { id: 206, name: "Brown Positano", brand: "estrella", type: "Sintered Stone", colour: "Brown", pattern: "Textured", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/estrella/Brown_Positano.png" },
  { id: 207, name: "Calacatta Black", brand: "estrella", type: "Sintered Stone", colour: "Black", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/estrella/Calacatta_Black.png" },
  { id: 208, name: "Calacatta Butterfly", brand: "estrella", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/estrella/Calacatta_Butterfly.png" },
  { id: 209, name: "Calacatta Extra", brand: "estrella", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/estrella/Calacatta_Extra.png" },
  { id: 210, name: "Calacatta Gold", brand: "estrella", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/estrella/Calacatta_Gold.png" },
  { id: 211, name: "Emperor Onyx", brand: "estrella", type: "Sintered Stone", colour: "Beige", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/estrella/Emperor_Onyx.png" },
  { id: 212, name: "Galaxy", brand: "estrella", type: "Sintered Stone", colour: "Grey", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/estrella/Galaxy.png" },
  { id: 213, name: "Galaxy Beige", brand: "estrella", type: "Sintered Stone", colour: "Beige", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/estrella/Galaxy_Beige.png" },
  { id: 214, name: "Illumina Stone", brand: "estrella", type: "Sintered Stone", colour: "Grey", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms", "Staircases"], img: "images/estrella/Illumina_Stone.png" },
  { id: 215, name: "Kylin", brand: "estrella", type: "Sintered Stone", colour: "Green", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/estrella/Kylin.png" },
  { id: 216, name: "Lassi Transparenti", brand: "estrella", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/estrella/Lassi_Transparenti.png" },
  { id: 217, name: "Luxe Firenze", brand: "estrella", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/estrella/Luxe_Firenze.png" },
  { id: 218, name: "Nero Elegance", brand: "estrella", type: "Sintered Stone", colour: "Black", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/estrella/Nero_Elegance.png" },
  { id: 219, name: "Ocean Blue", brand: "estrella", type: "Sintered Stone", colour: "Blue", pattern: "Veined", finish: ["Polished"], apps: ["Bathrooms", "Cladding"], img: "images/estrella/Ocean_Blue.png" },
  { id: 220, name: "Onice White", brand: "estrella", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/estrella/Onice_White.png" },
  { id: 221, name: "Pandora", brand: "estrella", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/estrella/Pandora.png" },
  { id: 222, name: "Savoia Antracite", brand: "estrella", type: "Sintered Stone", colour: "Grey", pattern: "Textured", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/estrella/Savoia_Antracite.png" },
  { id: 223, name: "Taj Mahal", brand: "estrella", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/estrella/Taj_Mahal.png" },
  { id: 224, name: "Travertino Classico", brand: "estrella", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/estrella/Travertino_Classico.png" },
  // --- Infinity ---
  { id: 100, name: "Sahara Noir", code: "MB10", brand: "infinity", type: "Sintered Stone", colour: "Black", pattern: "Veined", finish: ["Satin"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/infinity/MB10-Sahara-Noir_400x800.jpg" },
  { id: 101, name: "Calacatta Hermitage", code: "MB17", brand: "infinity", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Satin"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/infinity/MB17-Calacatta-Hermitage_400x800.jpg" },
  { id: 102, name: "Panda White", code: "MB18", brand: "infinity", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/infinity/MB18-Panda-White_400x800.jpg" },
  { id: 103, name: "Royal Peacock", code: "MB20", brand: "infinity", type: "Sintered Stone", colour: "Green", pattern: "Veined", finish: ["Polished"], apps: ["Cladding", "Bathrooms"], img: "images/infinity/MB20-Royal-Peacock_400x800.jpg" },
  { id: 104, name: "Renoir", code: "MB02", brand: "infinity", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/infinity/Infinity_MB02_Renoir_160x320_12mm-400x800.jpg" },
  { id: 105, name: "Classic Statuario", code: "MB03", brand: "infinity", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Satin"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/infinity/Infinity_MB03_Classic_Statuario_160x320_12mm-B-400x797.jpg" },
  { id: 106, name: "Calacatta Oro", code: "MB06", brand: "infinity", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Satin"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/infinity/Infinity_MB06_Calacatta_Oro_160x320_12mm.jpg" },
  { id: 107, name: "Calacatta Magnifico", code: "MB16", brand: "infinity", type: "Sintered Stone", colour: "White", pattern: "Veined", finish: ["Satin"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/infinity/MB16-Calacatta-Magnifico.jpg" },
  { id: 108, name: "Pietra Grey", code: "MB09", brand: "infinity", type: "Sintered Stone", colour: "Grey", pattern: "Veined", finish: ["Satin"], apps: ["Kitchens", "Cladding"], img: "images/infinity/Infinity_MB09_Pietra_Grey160x320_12mm.jpg" },
  { id: 109, name: "Nero Marquinia", code: "MB11", brand: "infinity", type: "Sintered Stone", colour: "Black", pattern: "Veined", finish: ["Polished", "Satin"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/infinity/Infinity_MB11_Spanish_Blacjk_160x320_12mm.jpg" },
  { id: 110, name: "Tundra Select", code: "MB13", brand: "infinity", type: "Sintered Stone", colour: "Beige", pattern: "Veined", finish: ["Polished", "Satin"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/infinity/TundraSelect-MB13-1.jpg" },
  { id: 111, name: "Pulpis Brown", code: "MB08", brand: "infinity", type: "Sintered Stone", colour: "Brown", pattern: "Veined", finish: ["Satin"], apps: ["Kitchens", "Cladding"], img: "images/infinity/Infinity_MB08_Pulpis_Brown_400x800.jpg" },
  { id: 112, name: "Crystal Ice", code: "OC01", brand: "infinity", type: "Sintered Stone", colour: "Beige", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/infinity/CrystalAmber-OC02-1.jpg" },
  { id: 113, name: "Ocean Blue", code: "OC03", brand: "infinity", type: "Sintered Stone", colour: "Blue", pattern: "Veined", finish: ["Polished"], apps: ["Cladding", "Bathrooms"], img: "images/infinity/Infinity_OC03_Ocean-Blue_400x800.jpg" },
  { id: 114, name: "Magellano", code: "OC04", brand: "infinity", type: "Sintered Stone", colour: "Beige", pattern: "Veined", finish: ["Polished"], apps: ["Cladding", "Bathrooms"], img: "images/infinity/OC04-Magellano_400x800.jpg" },
  { id: 115, name: "Thunderstorm", code: "OC05", brand: "infinity", type: "Sintered Stone", colour: "Blue", pattern: "Textured", finish: ["Pearl"], apps: ["Cladding", "Bathrooms"], img: "images/infinity/OC05-Thunderstorm_400x800.jpg" },
  { id: 116, name: "Chianca di Ostuni", code: "SE01", brand: "infinity", type: "Sintered Stone", colour: "Beige", pattern: "Textured", finish: ["Honed"], apps: ["Cladding", "Bathrooms", "Outdoor"], img: "images/infinity/Infinity_SE01_Chianca_di_Ostuni_160x320_12mm.jpg" },
  { id: 117, name: "Milan Stone", code: "SE03", brand: "infinity", type: "Sintered Stone", colour: "Grey", pattern: "Speckled", finish: ["Honed"], apps: ["Cladding", "Kitchens", "Outdoor"], img: "images/infinity/Infinity_SE03_Milan_Stone_160x320_12mm.jpg" },
  { id: 118, name: "Travertino Grey", code: "SE06", brand: "infinity", type: "Sintered Stone", colour: "Grey", pattern: "Veined", finish: ["Honed"], apps: ["Cladding", "Bathrooms", "Outdoor"], img: "images/infinity/TravertinoGrey-SE06.jpg" },
  { id: 119, name: "Buxy Select", code: "SE07", brand: "infinity", type: "Sintered Stone", colour: "Grey", pattern: "Textured", finish: ["Honed"], apps: ["Cladding", "Kitchens", "Outdoor"], img: "images/infinity/BuxySelect_SE07.jpg" },
  { id: 120, name: "Concrete Light", code: "CE01", brand: "infinity", type: "Sintered Stone", colour: "Beige", pattern: "Solid", finish: ["Honed"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/infinity/Infinity_CE01_Concrete_Light_400x800.jpg" },
  { id: 121, name: "Concrete Grey", code: "CE02", brand: "infinity", type: "Sintered Stone", colour: "Grey", pattern: "Solid", finish: ["Honed"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/infinity/Infinity_CE02_Concrete_Grey_160x320_12mm.jpg" },
  { id: 122, name: "Absolute White", code: "SC01", brand: "infinity", type: "Sintered Stone", colour: "White", pattern: "Solid", finish: ["Polished"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/infinity/Infinity_SC01_Absolute_White_160x320_12mm.jpg" },
  { id: 123, name: "Absolute Black", code: "SC02", brand: "infinity", type: "Sintered Stone", colour: "Black", pattern: "Solid", finish: ["Polished"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/infinity/Infinity_SC02_Absolute_Black_400x800-2.jpg" },
  { id: 124, name: "Metal Silver", code: "ME01", brand: "infinity", type: "Sintered Stone", colour: "Grey", pattern: "Textured", finish: ["Honed"], apps: ["Cladding", "Kitchens"], img: "images/infinity/Infinity_ME01_Metal_Silver_400x800.jpg" },
  { id: 125, name: "Metal Dark", code: "ME02", brand: "infinity", type: "Sintered Stone", colour: "Black", pattern: "Textured", finish: ["Honed"], apps: ["Cladding", "Kitchens"], img: "images/infinity/Infinity_ME02_Metal_Dark_160x320_12mm.jpg" },
  // --- Marble ---
  { id: 600, name: "Nero Silver", brand: "marble", type: "Natural Stone", colour: "Black", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Nero_Silver.png" },
  { id: 601, name: "Nero Marquina", brand: "marble", type: "Natural Stone", colour: "Black", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding", "Staircases"], img: "images/marble/Nero_Marquina.png" },
  { id: 602, name: "Nero Fiorito", brand: "marble", type: "Natural Stone", colour: "Black", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Nero_Fiorito.png" },
  { id: 603, name: "Nero Dorato Antique", brand: "marble", type: "Natural Stone", colour: "Black", pattern: "Veined", finish: ["Polished", "Honed", "Leathered"], apps: ["Kitchens", "Cladding", "Staircases"], img: "images/marble/Nero_Dorato_Antique.png" },
  { id: 604, name: "Monet Sky", brand: "marble", type: "Natural Stone", colour: "Blue", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Bathrooms", "Cladding", "Kitchens"], img: "images/marble/Monet_Sky.png" },
  { id: 605, name: "Matrix", brand: "marble", type: "Natural Stone", colour: "Black", pattern: "Solid", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Matrix.png" },
  { id: 606, name: "Marron Emperador Light", brand: "marble", type: "Natural Stone", colour: "Beige", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Staircases"], img: "images/marble/Marron_Emperador_Light.png" },
  { id: 607, name: "Marron Emperador Dark", brand: "marble", type: "Natural Stone", colour: "Brown", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Staircases", "Cladding"], img: "images/marble/Marron_Emperador_Dark.png" },
  { id: 608, name: "Lilac", brand: "marble", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Bathrooms", "Cladding"], img: "images/marble/Lilac.png" },
  { id: 609, name: "Iceberg Bold", brand: "marble", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Iceberg_Bold.png" },
  { id: 610, name: "Iceberg Bold Leather", brand: "marble", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Leathered"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Iceberg_Bold_Leather.png" },
  { id: 611, name: "Iceberg Blue", brand: "marble", type: "Natural Stone", colour: "Blue", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Bathrooms", "Cladding", "Kitchens"], img: "images/marble/Iceberg_Blue.png" },
  { id: 612, name: "Grey Ice", brand: "marble", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Grey_Ice.png" },
  { id: 613, name: "Golden Portoro", brand: "marble", type: "Natural Stone", colour: "Black", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding", "Staircases"], img: "images/marble/Golden_Portoro.png" },
  { id: 614, name: "Fossil", brand: "marble", type: "Natural Stone", colour: "Grey", pattern: "Textured", finish: ["Polished", "Honed"], apps: ["Cladding", "Bathrooms"], img: "images/marble/Fossil.png" },
  { id: 615, name: "Fantastic Grey", brand: "marble", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding", "Staircases"], img: "images/marble/Fantastic_Grey.png" },
  { id: 616, name: "Fantastic Grey Leather", brand: "marble", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Leathered"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Fantastic_Grey_Leather.png" },
  { id: 617, name: "Emerald Green", brand: "marble", type: "Natural Stone", colour: "Green", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Bathrooms", "Cladding", "Kitchens"], img: "images/marble/Emerald_Green.png" },
  { id: 618, name: "Elmira Grey", brand: "marble", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Elmira_Grey.png" },
  { id: 619, name: "Eider Ivory Leather", brand: "marble", type: "Natural Stone", colour: "Beige", pattern: "Veined", finish: ["Leathered"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Eider_Ivory_Leather.png" },
  { id: 620, name: "Eider Beige Leather", brand: "marble", type: "Natural Stone", colour: "Beige", pattern: "Textured", finish: ["Leathered"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Eider_Beige_Leather.png" },
  { id: 621, name: "Deep River", brand: "marble", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Bathrooms", "Cladding"], img: "images/marble/Deep_River.png" },
  { id: 622, name: "Creme Marfil", brand: "marble", type: "Natural Stone", colour: "Beige", pattern: "Solid", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Staircases", "Cladding"], img: "images/marble/Creme_Marfil.jpg" },
  { id: 623, name: "Cipollino Rosso", brand: "marble", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Bathrooms", "Cladding"], img: "images/marble/Cipollino_Rosso.png" },
  { id: 624, name: "Cipollino Rosso Leather", brand: "marble", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Leathered"], apps: ["Bathrooms", "Cladding"], img: "images/marble/Cipollino_Rosso_Leather.png" },
  { id: 625, name: "Calacatta Viola", brand: "marble", type: "Natural Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Calacatta_Viola.jpg" },
  { id: 626, name: "Calacatta Viola Leather", brand: "marble", type: "Natural Stone", colour: "White", pattern: "Veined", finish: ["Leathered"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Calacatta_Viola_Leather.jpg" },
  { id: 627, name: "Calacatta Iron", brand: "marble", type: "Natural Stone", colour: "Beige", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Calacatta_Iron.jpg" },
  { id: 628, name: "Calacatta Borghese", brand: "marble", type: "Natural Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Calacatta_Borghese.png" },
  { id: 629, name: "Calacatta Arabesque Honed", brand: "marble", type: "Natural Stone", colour: "White", pattern: "Veined", finish: ["Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Calacatta_Arabesque_Honed.jpg" },
  { id: 630, name: "Bulgari", brand: "marble", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Bathrooms", "Cladding", "Kitchens"], img: "images/marble/Bulgari.jpg" },
  { id: 631, name: "Bronze Fantasy Leather", brand: "marble", type: "Natural Stone", colour: "Brown", pattern: "Veined", finish: ["Leathered"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/marble/Bronze_Fantasy_Leather.png" },
  { id: 632, name: "Bianco Cielo", brand: "marble", type: "Natural Stone", colour: "White", pattern: "Solid", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms"], img: "images/marble/Bianco_Cielo.png" },
  { id: 633, name: "Bianco Carrara", brand: "marble", type: "Natural Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding", "Staircases"], img: "images/marble/Bianco_Carrara.png" },
  { id: 634, name: "Bardiglio Wave Leather", brand: "marble", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Leathered"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Bardiglio_Wave_Leather.png" },
  { id: 635, name: "Arctic Sky", brand: "marble", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Bathrooms", "Cladding", "Kitchens"], img: "images/marble/Arctic_Sky.png" },
  { id: 636, name: "Arabescato", brand: "marble", type: "Natural Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Arabescato.png" },
  { id: 637, name: "Appenino River Leather", brand: "marble", type: "Natural Stone", colour: "White", pattern: "Veined", finish: ["Leathered"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Appenino_River_Leather.jpg" },
  { id: 638, name: "Wooden White", brand: "marble", type: "Natural Stone", colour: "Beige", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Bathrooms", "Cladding"], img: "images/marble/Wooden_White.png" },
  { id: 639, name: "Verde Guatemala", brand: "marble", type: "Natural Stone", colour: "Green", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Bathrooms", "Cladding", "Kitchens"], img: "images/marble/Verde_Guatemala.png" },
  { id: 640, name: "Verde Bianco", brand: "marble", type: "Natural Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Bathrooms", "Cladding", "Kitchens"], img: "images/marble/Verde_Bianco.jpg" },
  { id: 641, name: "Verde Alpi", brand: "marble", type: "Natural Stone", colour: "Green", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Bathrooms", "Cladding", "Kitchens"], img: "images/marble/Verde_Alpi.jpg" },
  { id: 642, name: "Verde Alpi Leather", brand: "marble", type: "Natural Stone", colour: "Green", pattern: "Veined", finish: ["Leathered"], apps: ["Bathrooms", "Cladding", "Kitchens"], img: "images/marble/Verde_Alpi_Leather.jpg" },
  { id: 643, name: "Vanilla Ice", brand: "marble", type: "Natural Stone", colour: "Beige", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms"], img: "images/marble/Vanilla_Ice.png" },
  { id: 644, name: "Travertine Vein Cut Filled and Honed", brand: "marble", type: "Natural Stone", colour: "Beige", pattern: "Veined", finish: ["Honed"], apps: ["Cladding", "Bathrooms", "Kitchens"], img: "images/marble/Travertine_Vein_Cut_Filled_and_Honed.png" },
  { id: 645, name: "Travertine Red Crosscut Unfilled", brand: "marble", type: "Natural Stone", colour: "Red", pattern: "Textured", finish: ["Polished"], apps: ["Cladding", "Bathrooms"], img: "images/marble/Travertine_Red_Crosscut_Unfilled.png" },
  { id: 646, name: "Travertine Red Crosscut Filled", brand: "marble", type: "Natural Stone", colour: "Red", pattern: "Textured", finish: ["Polished"], apps: ["Cladding", "Bathrooms"], img: "images/marble/Travertine_Red_Crosscut_Filled.png" },
  { id: 647, name: "Travertine Red Crosscut Filled and Honed", brand: "marble", type: "Natural Stone", colour: "Red", pattern: "Textured", finish: ["Honed"], apps: ["Cladding", "Bathrooms"], img: "images/marble/Travertine_Red_Crosscut_Filled_and_Honed.jpg" },
  { id: 648, name: "Travertine Crosscut Filled and Honed", brand: "marble", type: "Natural Stone", colour: "Beige", pattern: "Textured", finish: ["Honed"], apps: ["Cladding", "Bathrooms", "Kitchens"], img: "images/marble/Travertine_Crosscut_Filled_and_Honed.png" },
  { id: 649, name: "Striato Olimpico", brand: "marble", type: "Natural Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Striato_Olimpico.png" },
  { id: 650, name: "Smyrna Grey", brand: "marble", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Smyrna_Grey.png" },
  { id: 651, name: "Silver White", brand: "marble", type: "Natural Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms"], img: "images/marble/Silver_White.png" },
  { id: 652, name: "Silver Waves", brand: "marble", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Silver_Waves.png" },
  { id: 653, name: "Silver Root", brand: "marble", type: "Natural Stone", colour: "Beige", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Silver_Root.png" },
  { id: 654, name: "Silver Root Leather", brand: "marble", type: "Natural Stone", colour: "Beige", pattern: "Veined", finish: ["Leathered"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Silver_Root_Leather.png" },
  { id: 655, name: "Silver Fantasy Breccia", brand: "marble", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Silver_Fantasy_Breccia.png" },
  { id: 656, name: "Sahara Noir", brand: "marble", type: "Natural Stone", colour: "Black", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding", "Staircases"], img: "images/marble/Sahara_Noir.png" },
  { id: 657, name: "Rosso Levanto", brand: "marble", type: "Natural Stone", colour: "Red", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Bathrooms", "Cladding"], img: "images/marble/Rosso_Levanto.png" },
  { id: 658, name: "Ravine", brand: "marble", type: "Natural Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Ravine.png" },
  { id: 659, name: "Ravine Leather", brand: "marble", type: "Natural Stone", colour: "White", pattern: "Veined", finish: ["Leathered"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Ravine_Leather.png" },
  { id: 660, name: "Rainforest Green", brand: "marble", type: "Natural Stone", colour: "Green", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Bathrooms", "Cladding"], img: "images/marble/Rainforest_Green.png" },
  { id: 661, name: "Rainforest Green Leather", brand: "marble", type: "Natural Stone", colour: "Green", pattern: "Veined", finish: ["Leathered"], apps: ["Bathrooms", "Cladding"], img: "images/marble/Rainforest_Green_Leather.png" },
  { id: 662, name: "Rainforest Brown", brand: "marble", type: "Natural Stone", colour: "Brown", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Bathrooms", "Cladding"], img: "images/marble/Rainforest_Brown.png" },
  { id: 663, name: "Rain Grey", brand: "marble", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Rain_Grey.png" },
  { id: 664, name: "Polar Rosso", brand: "marble", type: "Natural Stone", colour: "Beige", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Bathrooms", "Cladding"], img: "images/marble/Polar_Rosso.png" },
  { id: 665, name: "Pietra Grey", brand: "marble", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding", "Staircases"], img: "images/marble/Pietra_Grey.png" },
  { id: 666, name: "Picasso", brand: "marble", type: "Natural Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Bathrooms", "Cladding", "Kitchens"], img: "images/marble/Picasso.jpg" },
  { id: 667, name: "Picasso Leather", brand: "marble", type: "Natural Stone", colour: "White", pattern: "Veined", finish: ["Leathered"], apps: ["Bathrooms", "Cladding", "Kitchens"], img: "images/marble/Picasso_Leather.jpg" },
  { id: 668, name: "Panda White", brand: "marble", type: "Natural Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Panda_White.png" },
  { id: 669, name: "Olive Grey", brand: "marble", type: "Natural Stone", colour: "Beige", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Olive_Grey.png" },
  { id: 670, name: "Ocean Blue", brand: "marble", type: "Natural Stone", colour: "Blue", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Bathrooms", "Cladding", "Kitchens"], img: "images/marble/Ocean_Blue.png" },
  { id: 671, name: "Ocean Blue Honed", brand: "marble", type: "Natural Stone", colour: "Blue", pattern: "Veined", finish: ["Honed"], apps: ["Bathrooms", "Cladding", "Kitchens"], img: "images/marble/Ocean_Blue_Honed.jpg" },
  // --- Quartzite ---
  { id: 700, name: "Sky White Honed", brand: "quartzite", type: "Natural Stone", colour: "White", pattern: "Veined", finish: ["Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/quartzite/Sky_White_Honed.png" },
  { id: 701, name: "Wild Olive Leather", brand: "quartzite", type: "Natural Stone", colour: "Green", pattern: "Veined", finish: ["Leathered"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/quartzite/Wild_Olive_Leather.png" },
  { id: 702, name: "Verde Roma", brand: "quartzite", type: "Natural Stone", colour: "Green", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Bathrooms", "Cladding", "Kitchens"], img: "images/quartzite/Verde_Roma.png" },
  { id: 703, name: "Super White", brand: "quartzite", type: "Natural Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding", "Staircases"], img: "images/quartzite/Super_White.png" },
  { id: 704, name: "Serafina", brand: "quartzite", type: "Natural Stone", colour: "Brown", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/quartzite/Serafina.png" },
  { id: 705, name: "Oro Marron", brand: "quartzite", type: "Natural Stone", colour: "Brown", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/quartzite/Oro_Marron.png" },
  { id: 706, name: "Dolce Vita", brand: "quartzite", type: "Natural Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/quartzite/Dolce_Vita.png" },
  { id: 707, name: "Crystallo", brand: "quartzite", type: "Natural Stone", colour: "White", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/quartzite/Crystallo.png" },
  { id: 708, name: "Breccia Imperial Leather", brand: "quartzite", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Leathered"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/quartzite/Breccia_Imperial_Leather.png" },
  { id: 709, name: "Barcelona", brand: "quartzite", type: "Natural Stone", colour: "Beige", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/quartzite/Barcelona.png" },
  { id: 710, name: "Avocatus Leather", brand: "quartzite", type: "Natural Stone", colour: "Green", pattern: "Veined", finish: ["Leathered"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/quartzite/Avocatus_Leather.png" },
  { id: 711, name: "Antionette", brand: "quartzite", type: "Natural Stone", colour: "Beige", pattern: "Veined", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/quartzite/Antionette.png" },
  // --- Granite ---
  { id: 800, name: "Zimbabwe", brand: "granite", type: "Natural Stone", colour: "Black", pattern: "Solid", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Staircases", "Cladding"], img: "images/granite/Zimbabwe.png" },
  { id: 801, name: "Viscon White", brand: "granite", type: "Natural Stone", colour: "White", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/granite/Viscon_White.png" },
  { id: 802, name: "Vintage Crystal", brand: "granite", type: "Natural Stone", colour: "Beige", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/granite/Vintage_Crystal.png" },
  { id: 803, name: "Verde Ubatuba", brand: "granite", type: "Natural Stone", colour: "Green", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/granite/Verde_Ubatuba.png" },
  { id: 804, name: "Titanium Leather", brand: "granite", type: "Natural Stone", colour: "Black", pattern: "Veined", finish: ["Leathered"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/granite/Titanium_Leather.png" },
  { id: 805, name: "Titanium Gold Leather", brand: "granite", type: "Natural Stone", colour: "Black", pattern: "Veined", finish: ["Leathered"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/granite/Titanium_Gold_Leather.jpg" },
  { id: 806, name: "Star Galaxy", brand: "granite", type: "Natural Stone", colour: "Black", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms", "Staircases"], img: "images/granite/Star_Galaxy.png" },
  { id: 807, name: "Silver Paradiso Leather", brand: "granite", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Leathered"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/granite/Silver_Paradiso_Leather.png" },
  { id: 808, name: "Silver Paradiso", brand: "granite", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/granite/Silver_Paradiso.png" },
  { id: 809, name: "Mystic Grey Satin", brand: "granite", type: "Natural Stone", colour: "Grey", pattern: "Textured", finish: ["Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/granite/Mystic_Grey_Satin.png" },
  { id: 810, name: "Lava Oro Antique", brand: "granite", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Leathered"], apps: ["Kitchens", "Cladding"], img: "images/granite/Lava_Oro_Antique.png" },
  { id: 811, name: "Ivory White", brand: "granite", type: "Natural Stone", colour: "White", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/granite/Ivory_White.png" },
  { id: 812, name: "Ivory Pearl", brand: "granite", type: "Natural Stone", colour: "Beige", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/granite/Ivory_Pearl.png" },
  { id: 813, name: "Ivory Fantasy", brand: "granite", type: "Natural Stone", colour: "Beige", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/granite/Ivory_Fantasy.png" },
  { id: 814, name: "Giallo Ornamentalle", brand: "granite", type: "Natural Stone", colour: "Beige", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/granite/Giallo_Ornamentalle.png" },
  { id: 815, name: "Cosmopolitan", brand: "granite", type: "Natural Stone", colour: "Brown", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/granite/Cosmopolitan.png" },
  { id: 816, name: "Colonial White", brand: "granite", type: "Natural Stone", colour: "White", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/granite/Colonial_White.png" },
  { id: 817, name: "Blue Pearl", brand: "granite", type: "Natural Stone", colour: "Blue", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/granite/Blue_Pearl.png" },
  { id: 818, name: "Black Vermont", brand: "granite", type: "Natural Stone", colour: "Black", pattern: "Solid", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/granite/Black_Vermont.png" },
  { id: 819, name: "Autumn Brown", brand: "granite", type: "Natural Stone", colour: "Brown", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/granite/Autumn_Brown.png" },
  { id: 820, name: "Andromeda White", brand: "granite", type: "Natural Stone", colour: "White", pattern: "Speckled", finish: ["Polished"], apps: ["Kitchens", "Bathrooms"], img: "images/granite/Andromeda_White.png" },
  { id: 821, name: "Silver Galaxy Leather", brand: "marble", type: "Natural Stone", colour: "Grey", pattern: "Veined", finish: ["Leathered"], apps: ["Kitchens", "Bathrooms", "Cladding"], img: "images/marble/Silver_Galaxy_Leather.png" },
]

export const PROJECTS: Project[] = [
  { id: 1, slug: "umhlanga-modern-kitchen", title: "Umhlanga Modern Kitchen", type: "Kitchen", material: "Estatuario", brand: "Neolith", location: "Umhlanga", desc: "A sweeping 4.2m island in Neolith Estatuario with waterfall edges, paired with a matching perimeter countertop and integrated splashback. The veined pattern was bookmatched across the waterfall for visual continuity.", img: "linear-gradient(135deg, #2a2420 0%, #4a4035 40%, #3a3028 100%)" },
  { id: 2, slug: "ballito-bathroom-suite", title: "Ballito Bathroom Suite", type: "Bathroom", material: "Bianco Cloud", brand: "Eezi Quartz", location: "Ballito", desc: "Full bathroom renovation including double vanity top, shower niche shelving, and a freestanding bath surround. Eezi Quartz Bianco Cloud selected for its subtle movement and water resistance.", img: "linear-gradient(135deg, #e8e4dc 0%, #d4cfc5 50%, #e8e4dc 100%)" },
  { id: 3, slug: "hillcrest-staircase", title: "Hillcrest Residence Staircase", type: "Staircase", material: "Nero Venato", brand: "Eezi Quartz", location: "Hillcrest", desc: "A dramatic floating staircase clad in Eezi Quartz Nero Venato. 14 treads with bullnose edges, precision-templated on site and fabricated to 0.5mm tolerance. Structural coordination with the builder was critical.", img: "linear-gradient(135deg, #4a3628 0%, #3d2a1e 50%, #5c4435 100%)" },
  { id: 4, slug: "durban-north-cladding", title: "Durban North Feature Wall", type: "Cladding", material: "Basalt Black", brand: "Neolith", location: "Durban North", desc: "A 12m\u00B2 feature wall in Neolith Basalt Black with a leathered finish. The large-format sintered stone panels were installed with minimal visible joints, creating a monolithic textured surface in this contemporary living room.", img: "linear-gradient(135deg, #222222 0%, #333333 50%, #1a1a1a 100%)" },
  { id: 5, slug: "umhlanga-commercial-reception", title: "Umhlanga Office Reception", type: "Commercial", material: "Calacatta Gold", brand: "Estrella", location: "Umhlanga", desc: "Reception desk and full-height wall cladding in Estrella Calacatta Gold for a professional services firm. The veined pattern was carefully aligned across the desk front and wall panels for a seamless visual effect.", img: "linear-gradient(135deg, #faf8f4 0%, #e8ddd0 50%, #f5f0e8 100%)" },
]

export const SERVICES: Service[] = [
  { slug: "kitchens", name: "Kitchens", headline: "Kitchen Countertops & Surfaces", subhead: "From engineered quartz to sintered stone — we supply, fabricate, and install kitchen surfaces built to last.", intro: "Your kitchen countertop is the hardest-working surface in your home — and it should look the part. We supply, fabricate, and install stone surfaces for kitchens of every size and style, from compact apartment counters to expansive island installations. Choose from engineered quartz or sintered stone. Every piece is precision-templated on site, CNC-fabricated in our Durban workshop, and installed by our own team.", icon: "\u25FB", apps: ["Kitchens"], faq: [
    { q: "What materials are best for kitchen countertops?", a: "Quartz and sintered stone are the most popular choices for kitchens due to their durability, stain resistance, and low maintenance. We'll help you choose based on your usage, aesthetic preference, and budget." },
    { q: "How long does a kitchen countertop installation take?", a: "From confirmed order to installation, typical turnaround is 2\u20133 weeks. The installation itself usually takes a single day for a standard kitchen." },
    { q: "Do you fabricate and install splashbacks?", a: "Yes. We fabricate matching stone splashbacks, including full-height panels behind cooktops and sinks. These are templated and installed with the countertops." },
  ]},
  { slug: "vanities", name: "Vanities", headline: "Bathroom Vanity Tops & Surfaces", subhead: "Elegant, durable surfaces for bathrooms — vanity tops, shower walls, bath surrounds, and shelving.", intro: "A beautifully finished vanity top elevates your entire bathroom. We fabricate and install stone surfaces for vanity tops, shower walls, bath surrounds, and shelving — in materials chosen for water resistance, durability, and visual impact. Whether it's a single guest bathroom or a full residential fit-out, we handle the full scope from slab selection to final installation.", icon: "\u25FB", apps: ["Bathrooms"], faq: [
    { q: "Are stone vanity tops waterproof?", a: "Quartz and sintered stone are non-porous and highly water-resistant. We advise on the best material for your bathroom environment." },
    { q: "Can you do undermount basins?", a: "Yes. We cut precise openings for undermount, drop-in, and vessel basins. We can work with your basin supplier or recommend options that suit your chosen stone." },
  ]},
  { slug: "staircases", name: "Staircases", headline: "Stone Staircases & Treads", subhead: "Precision-fabricated stone treads, risers, and cladding for staircases that make a statement.", intro: "A stone staircase makes a statement. We fabricate precision-cut treads, risers, and landing slabs in sintered stone and engineered quartz. Every component is templated to your exact dimensions, finished to your chosen edge profile, and installed to deliver a seamless result. We work closely with builders and structural engineers to ensure weight, support, and fit are exactly right.", icon: "\u25B3", apps: ["Staircases"], faq: [
    { q: "What edge profiles are available for staircase treads?", a: "We offer bullnose, pencil round, bevelled, and square edge profiles. Bullnose is the most popular for staircases as it provides a smooth, comfortable edge." },
    { q: "Do you coordinate with the builder?", a: "Yes. We work directly with your builder or contractor on structural requirements, dimensions, and installation scheduling." },
  ]},
  { slug: "cladding", name: "Cladding", headline: "Sintered Stone & Quartz Cladding", subhead: "Interior and exterior wall cladding in sintered stone and engineered quartz surfaces.", intro: "Sintered stone cladding transforms walls into features. We supply and install interior and exterior cladding in sintered stone and engineered quartz surfaces like Neolith. Large-format panels create clean, contemporary lines. We advise on material suitability for your specific environment — UV exposure, moisture, traffic, and structural load.", icon: "\u25AE", apps: ["Cladding"], faq: [
    { q: "Can sintered stone cladding be used outdoors?", a: "Yes. Sintered stone surfaces (such as Neolith) are UV-stable, frost-resistant, and suitable for exterior cladding." },
    { q: "What panel sizes are available?", a: "Sintered stone slabs are available in large formats up to 3.2m x 1.5m, allowing for minimal joints. We'll advise on the best format for your wall dimensions." },
  ]},
]

export const PHONE_REAL = "031 577 9797"
export const PHONE_MASKED = "031 XXX XXXX"
export const PHONE_TEL = "tel:0315779797"

export function getBrand(slug: string) {
  return BRANDS.find(b => b.slug === slug)
}

export function getMaterial(id: number) {
  return MATERIALS.find(m => m.id === id)
}

export function getProject(id: number) {
  return PROJECTS.find(p => p.id === id)
}

export function getService(slug: string) {
  return SERVICES.find(s => s.slug === slug)
}

export function sampleMaterials(count: number, filter?: (m: Material) => boolean) {
  const pool = filter ? MATERIALS.filter(filter) : MATERIALS
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}
