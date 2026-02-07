import { useState, useEffect, useRef, useCallback } from "react";
import * as _ from "lodash";

// ============================================================
// DATA
// ============================================================
const BRANDS = [
  { slug: "neolith", name: "Neolith", tagline: "Ultra-compact sintered stone surfaces from Spain", desc: "Neolith is a revolutionary sintered stone surface made from 100% natural raw materials. With a wide range of colours spanning elegant Calacattas, dramatic blacks, industrial metals, and natural stone effects, Neolith is resistant to UV, scratches, chemicals, and extreme temperatures — ideal for kitchens, cladding, flooring, and facades." },
  { slug: "eezi-quartz", name: "Eezi Quartz", tagline: "Engineered quartz surfaces", desc: "Eezi Quartz combines natural quartz crystals with advanced polymer resins to create surfaces that are hard-wearing, low-maintenance, and available in a wide spectrum of colours and patterns. Ideal for kitchens and bathrooms where durability meets design." },
  { slug: "infinity", name: "Infinity", tagline: "Sintered stone surfaces", desc: "Infinity sintered stone surfaces offer the beauty of natural stone with the performance advantages of advanced ceramics. UV-stable, scratch-resistant, and available in large formats up to 1600×3200mm, the range spans marble book-match, onyx crystal, stone effect, concrete, solid colour, and metal effect collections — perfect for seamless cladding and countertop applications." },
  { slug: "estrella", name: "Estrella", tagline: "Sintered stone surfaces", desc: "Estrella sintered stone surfaces combine quality with design, offering a curated range of 25 colours and patterns — from dramatic veined Calacattas and bold blacks to warm beiges and statement blues — suited to both residential and commercial projects." },
  { slug: "lutum", name: "Lutum", tagline: "Sintered stone surfaces", desc: "Lutum sintered stone surfaces are manufactured using cutting-edge technology to produce ultra-compact slabs with exceptional durability, heat resistance, and design versatility. The 10-colour range spans dramatic veined marbles, rich greens, deep blacks, warm travertines, and industrial concretes." },
];

const MATERIALS = [
  // --- Neolith (Sintered Stone) ---
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
  { id: 4, name: "Atlantic Grey", brand: "eezi-quartz", type: "Quartz", colour: "Grey", pattern: "Speckled", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms", "Staircases"], range: "Saver", img: "images/eezi-quartz/Atlantic_Grey.jpg" },
  { id: 10, name: "Arctic White", brand: "eezi-quartz", type: "Quartz", colour: "White", pattern: "Solid", finish: ["Polished", "Honed"], apps: ["Kitchens", "Bathrooms"], range: "Saver", img: "images/eezi-quartz/Arctic_White.jpg" },
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
  // --- Lutum (Sintered Stone) ---
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
  // --- Estrella (Sintered Stone) ---
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
  // --- Infinity (Sintered Stone) ---
  // Marble Book Match Series
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
  // Onyx Crystal Series
  { id: 112, name: "Crystal Ice", code: "OC01", brand: "infinity", type: "Sintered Stone", colour: "Beige", pattern: "Veined", finish: ["Polished"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/infinity/CrystalAmber-OC02-1.jpg" },
  { id: 113, name: "Ocean Blue", code: "OC03", brand: "infinity", type: "Sintered Stone", colour: "Blue", pattern: "Veined", finish: ["Polished"], apps: ["Cladding", "Bathrooms"], img: "images/infinity/Infinity_OC03_Ocean-Blue_400x800.jpg" },
  { id: 114, name: "Magellano", code: "OC04", brand: "infinity", type: "Sintered Stone", colour: "Beige", pattern: "Veined", finish: ["Polished"], apps: ["Cladding", "Bathrooms"], img: "images/infinity/OC04-Magellano_400x800.jpg" },
  { id: 115, name: "Thunderstorm", code: "OC05", brand: "infinity", type: "Sintered Stone", colour: "Blue", pattern: "Textured", finish: ["Pearl"], apps: ["Cladding", "Bathrooms"], img: "images/infinity/OC05-Thunderstorm_400x800.jpg" },
  // Stone Effect Series
  { id: 116, name: "Chianca di Ostuni", code: "SE01", brand: "infinity", type: "Sintered Stone", colour: "Beige", pattern: "Textured", finish: ["Honed"], apps: ["Cladding", "Bathrooms", "Outdoor"], img: "images/infinity/Infinity_SE01_Chianca_di_Ostuni_160x320_12mm.jpg" },
  { id: 117, name: "Milan Stone", code: "SE03", brand: "infinity", type: "Sintered Stone", colour: "Grey", pattern: "Speckled", finish: ["Honed"], apps: ["Cladding", "Kitchens", "Outdoor"], img: "images/infinity/Infinity_SE03_Milan_Stone_160x320_12mm.jpg" },
  { id: 118, name: "Travertino Grey", code: "SE06", brand: "infinity", type: "Sintered Stone", colour: "Grey", pattern: "Veined", finish: ["Honed"], apps: ["Cladding", "Bathrooms", "Outdoor"], img: "images/infinity/TravertinoGrey-SE06.jpg" },
  { id: 119, name: "Buxy Select", code: "SE07", brand: "infinity", type: "Sintered Stone", colour: "Grey", pattern: "Textured", finish: ["Honed"], apps: ["Cladding", "Kitchens", "Outdoor"], img: "images/infinity/BuxySelect_SE07.jpg" },
  // Concrete Effect Series
  { id: 120, name: "Concrete Light", code: "CE01", brand: "infinity", type: "Sintered Stone", colour: "Beige", pattern: "Solid", finish: ["Honed"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/infinity/Infinity_CE01_Concrete_Light_400x800.jpg" },
  { id: 121, name: "Concrete Grey", code: "CE02", brand: "infinity", type: "Sintered Stone", colour: "Grey", pattern: "Solid", finish: ["Honed"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/infinity/Infinity_CE02_Concrete_Grey_160x320_12mm.jpg" },
  // Solid Colour Series
  { id: 122, name: "Absolute White", code: "SC01", brand: "infinity", type: "Sintered Stone", colour: "White", pattern: "Solid", finish: ["Polished"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/infinity/Infinity_SC01_Absolute_White_160x320_12mm.jpg" },
  { id: 123, name: "Absolute Black", code: "SC02", brand: "infinity", type: "Sintered Stone", colour: "Black", pattern: "Solid", finish: ["Polished"], apps: ["Kitchens", "Cladding", "Bathrooms"], img: "images/infinity/Infinity_SC02_Absolute_Black_400x800-2.jpg" },
  // Metal Effect Series
  { id: 124, name: "Metal Silver", code: "ME01", brand: "infinity", type: "Sintered Stone", colour: "Grey", pattern: "Textured", finish: ["Honed"], apps: ["Cladding", "Kitchens"], img: "images/infinity/Infinity_ME01_Metal_Silver_400x800.jpg" },
  { id: 125, name: "Metal Dark", code: "ME02", brand: "infinity", type: "Sintered Stone", colour: "Black", pattern: "Textured", finish: ["Honed"], apps: ["Cladding", "Kitchens"], img: "images/infinity/Infinity_ME02_Metal_Dark_160x320_12mm.jpg" },
];

const PROJECTS = [
  { id: 1, slug: "umhlanga-modern-kitchen", title: "Umhlanga Modern Kitchen", type: "Kitchen", material: "Estatuario", brand: "Neolith", location: "Umhlanga", desc: "A sweeping 4.2m island in Neolith Estatuario with waterfall edges, paired with a matching perimeter countertop and integrated splashback. The veined pattern was bookmatched across the waterfall for visual continuity.", img: "linear-gradient(135deg, #2a2420 0%, #4a4035 40%, #3a3028 100%)" },
  { id: 2, slug: "ballito-bathroom-suite", title: "Ballito Bathroom Suite", type: "Bathroom", material: "Bianco Cloud", brand: "Eezi Quartz", location: "Ballito", desc: "Full bathroom renovation including double vanity top, shower niche shelving, and a freestanding bath surround. Eezi Quartz Bianco Cloud selected for its subtle movement and water resistance.", img: "linear-gradient(135deg, #e8e4dc 0%, #d4cfc5 50%, #e8e4dc 100%)" },
  { id: 3, slug: "hillcrest-staircase", title: "Hillcrest Residence Staircase", type: "Staircase", material: "Nero Venato", brand: "Eezi Quartz", location: "Hillcrest", desc: "A dramatic floating staircase clad in Eezi Quartz Nero Venato. 14 treads with bullnose edges, precision-templated on site and fabricated to 0.5mm tolerance. Structural coordination with the builder was critical.", img: "linear-gradient(135deg, #4a3628 0%, #3d2a1e 50%, #5c4435 100%)" },
  { id: 4, slug: "durban-north-cladding", title: "Durban North Feature Wall", type: "Cladding", material: "Basalt Black", brand: "Neolith", location: "Durban North", desc: "A 12m\u00B2 feature wall in Neolith Basalt Black with a leathered finish. The large-format sintered stone panels were installed with minimal visible joints, creating a monolithic textured surface in this contemporary living room.", img: "linear-gradient(135deg, #222222 0%, #333333 50%, #1a1a1a 100%)" },
  { id: 5, slug: "umhlanga-commercial-reception", title: "Umhlanga Office Reception", type: "Commercial", material: "Calacatta Gold", brand: "Estrella", location: "Umhlanga", desc: "Reception desk and full-height wall cladding in Estrella Calacatta Gold for a professional services firm. The veined pattern was carefully aligned across the desk front and wall panels for a seamless visual effect.", img: "linear-gradient(135deg, #faf8f4 0%, #e8ddd0 50%, #f5f0e8 100%)" },
];

const SERVICES = [
  { slug: "kitchens", name: "Kitchens", headline: "Kitchen Countertops & Surfaces", subhead: "From engineered quartz to sintered stone — we supply, fabricate, and install kitchen surfaces built to last.", intro: "Your kitchen countertop is the hardest-working surface in your home — and it should look the part. We supply, fabricate, and install stone surfaces for kitchens of every size and style, from compact apartment counters to expansive island installations. Choose from engineered quartz or sintered stone. Every piece is precision-templated on site, CNC-fabricated in our Durban workshop, and installed by our own team.", icon: "◻", apps: ["Kitchens"], faq: [
    { q: "What materials are best for kitchen countertops?", a: "Quartz and sintered stone are the most popular choices for kitchens due to their durability, stain resistance, and low maintenance. We'll help you choose based on your usage, aesthetic preference, and budget." },
    { q: "How long does a kitchen countertop installation take?", a: "From confirmed order to installation, typical turnaround is 2–3 weeks. The installation itself usually takes a single day for a standard kitchen." },
    { q: "Do you fabricate and install splashbacks?", a: "Yes. We fabricate matching stone splashbacks, including full-height panels behind cooktops and sinks. These are templated and installed with the countertops." },
  ]},
  { slug: "vanities", name: "Vanities", headline: "Bathroom Vanity Tops & Surfaces", subhead: "Elegant, durable surfaces for bathrooms — vanity tops, shower walls, bath surrounds, and shelving.", intro: "A beautifully finished vanity top elevates your entire bathroom. We fabricate and install stone surfaces for vanity tops, shower walls, bath surrounds, and shelving — in materials chosen for water resistance, durability, and visual impact. Whether it's a single guest bathroom or a full residential fit-out, we handle the full scope from slab selection to final installation.", icon: "◻", apps: ["Bathrooms"], faq: [
    { q: "Are stone vanity tops waterproof?", a: "Quartz and sintered stone are non-porous and highly water-resistant. We advise on the best material for your bathroom environment." },
    { q: "Can you do undermount basins?", a: "Yes. We cut precise openings for undermount, drop-in, and vessel basins. We can work with your basin supplier or recommend options that suit your chosen stone." },
  ]},
  { slug: "staircases", name: "Staircases", headline: "Stone Staircases & Treads", subhead: "Precision-fabricated stone treads, risers, and cladding for staircases that make a statement.", intro: "A stone staircase makes a statement. We fabricate precision-cut treads, risers, and landing slabs in sintered stone and engineered quartz. Every component is templated to your exact dimensions, finished to your chosen edge profile, and installed to deliver a seamless result. We work closely with builders and structural engineers to ensure weight, support, and fit are exactly right.", icon: "△", apps: ["Staircases"], faq: [
    { q: "What edge profiles are available for staircase treads?", a: "We offer bullnose, pencil round, bevelled, and square edge profiles. Bullnose is the most popular for staircases as it provides a smooth, comfortable edge." },
    { q: "Do you coordinate with the builder?", a: "Yes. We work directly with your builder or contractor on structural requirements, dimensions, and installation scheduling." },
  ]},
  { slug: "cladding", name: "Cladding", headline: "Sintered Stone & Quartz Cladding", subhead: "Interior and exterior wall cladding in sintered stone and engineered quartz surfaces.", intro: "Sintered stone cladding transforms walls into features. We supply and install interior and exterior cladding in sintered stone and engineered quartz surfaces like Neolith. Large-format panels create clean, contemporary lines. We advise on material suitability for your specific environment — UV exposure, moisture, traffic, and structural load.", icon: "▮", apps: ["Cladding"], faq: [
    { q: "Can sintered stone cladding be used outdoors?", a: "Yes. Sintered stone surfaces (such as Neolith) are UV-stable, frost-resistant, and suitable for exterior cladding." },
    { q: "What panel sizes are available?", a: "Sintered stone slabs are available in large formats up to 3.2m x 1.5m, allowing for minimal joints. We'll advise on the best format for your wall dimensions." },
  ]},
];

// ============================================================
// STYLES
// ============================================================
const FONT = `'Instrument Sans', 'DM Sans', -apple-system, sans-serif`;
const DISPLAY = `'Playfair Display', 'Instrument Serif', Georgia, serif`;

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

:root {
  --stone-50: #FAF8F5;
  --stone-100: #F2EDE6;
  --stone-200: #E5DDD2;
  --stone-300: #D4C9B8;
  --stone-400: #B8A88E;
  --stone-500: #8B7355;
  --stone-600: #6B5740;
  --stone-700: #4A3D2E;
  --stone-800: #2D261C;
  --stone-900: #1A1610;
  --font-body: ${FONT};
  --font-display: ${DISPLAY};
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { }
body { font-family: var(--font-body); color: var(--stone-800); background: var(--stone-50); -webkit-font-smoothing: antialiased; }

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--stone-100); }
::-webkit-scrollbar-thumb { background: var(--stone-400); border-radius: 3px; }

/* Animations */
@keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideDown { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
.fade-up { animation: fadeUp 0.6s ease both; }
.fade-in { animation: fadeIn 0.5s ease both; }

/* Noise texture overlay */
.noise::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1;
}
`;

// --- IMAGE HELPER ---
// Resolves img property: if it starts with 'linear-gradient' use as-is, otherwise treat as image URL
const bgStyle = (img, height) => {
  const isGradient = img && img.startsWith('linear-gradient');
  return {
    height: height || 200,
    background: isGradient ? img : `url(${img}) center/cover no-repeat`,
    backgroundColor: isGradient ? undefined : 'var(--stone-100)',
    position: 'relative',
  };
};

// ============================================================
// COMPONENTS
// ============================================================

// --- NAVIGATION ---
function Nav({ current, onNavigate, onQuote }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const nav = (page) => { onNavigate(page); setOpen(false); setDropdown(null); };

  const navItems = [
    { label: "Kitchens", page: "kitchens" },
    { label: "Vanities", page: "vanities" },
    { label: "Staircases", page: "staircases" },
    { label: "Cladding", page: "cladding" },
    { label: "Materials", page: "materials" },
    { label: "Brands", page: "brands", children: BRANDS.map(b => ({ label: b.name, page: `brand-${b.slug}` })) },
    { label: "Projects", page: "projects" },
    { label: "For Designers", page: "designers" },
  ];

  return (
    <>
      <style>{`
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; transition: all 0.3s ease; }
        .nav.scrolled { background: rgba(26,22,16,0.95); backdrop-filter: blur(12px); box-shadow: 0 1px 0 rgba(255,255,255,0.05); }
        .nav:not(.scrolled) { background: transparent; }
        .nav-inner { max-width: 1320px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; height: 72px; }
        .nav-logo { font-family: var(--font-body); font-weight: 700; font-size: 13px; letter-spacing: 4px; text-transform: uppercase; color: white; cursor: pointer; white-space: nowrap; }
        .nav-logo span { color: var(--stone-400); }
        .nav-links { display: flex; gap: 4px; align-items: center; }
        .nav-link { font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.7); padding: 8px 14px; border-radius: 6px; cursor: pointer; transition: all 0.2s; position: relative; letter-spacing: 0.3px; background: none; border: none; font-family: var(--font-body); }
        .nav-link:hover, .nav-link.active { color: white; background: rgba(255,255,255,0.08); }
        .nav-dropdown { position: absolute; top: 100%; left: 0; background: rgba(26,22,16,0.97); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 8px; min-width: 200px; animation: slideDown 0.2s ease; }
        .nav-dropdown-item { padding: 10px 14px; color: rgba(255,255,255,0.7); font-size: 13px; border-radius: 6px; cursor: pointer; transition: all 0.15s; font-family: var(--font-body); }
        .nav-dropdown-item:hover { background: rgba(255,255,255,0.08); color: white; }
        .nav-cta { font-size: 13px; font-weight: 600; color: var(--stone-900); background: var(--stone-200); padding: 10px 22px; border-radius: 8px; cursor: pointer; transition: all 0.2s; border: none; font-family: var(--font-body); letter-spacing: 0.3px; }
        .nav-cta:hover { background: white; }
        .nav-phone { color: rgba(255,255,255,0.5); font-size: 12px; letter-spacing: 0.5px; margin-right: 12px; display: none; }
        .hamburger { display: none; background: none; border: none; cursor: pointer; padding: 8px; }
        .hamburger span { display: block; width: 22px; height: 2px; background: white; margin: 5px 0; transition: all 0.3s; border-radius: 1px; }
        .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
        .mobile-menu { position: fixed; inset: 0; background: rgba(26,22,16,0.98); z-index: 99; padding: 100px 32px 32px; display: flex; flex-direction: column; gap: 4px; overflow-y: auto; animation: fadeIn 0.3s ease; }
        .mobile-link { font-size: 18px; color: rgba(255,255,255,0.7); padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.06); cursor: pointer; font-family: var(--font-body); font-weight: 500; }
        .mobile-link:hover { color: white; }
        .mobile-cta { margin-top: 24px; text-align: center; padding: 16px; background: var(--stone-200); color: var(--stone-900); font-weight: 600; border-radius: 10px; cursor: pointer; font-size: 16px; font-family: var(--font-body); }
        @media (max-width: 1024px) { 
          .nav-links, .nav-cta, .nav-phone { display: none !important; } 
          .hamburger { display: block; } 
        }
        @media (min-width: 1025px) { .nav-phone { display: block; } }
      `}</style>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => nav("home")}>Stone Slabs <span>Durban</span></div>
          <div className="nav-links">
            {navItems.map(item => (
              <div key={item.page} style={{ position: 'relative' }}
                onMouseEnter={() => item.children && setDropdown(item.page)}
                onMouseLeave={() => setDropdown(null)}>
                <button className={`nav-link ${current === item.page ? 'active' : ''}`}
                  onClick={() => !item.children ? nav(item.page) : nav(item.page)}>
                  {item.label}
                </button>
                {item.children && dropdown === item.page && (
                  <div className="nav-dropdown">
                    {item.children.map(c => (
                      <div key={c.page} className="nav-dropdown-item" onClick={() => nav(c.page)}>{c.label}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="nav-phone">031 XXX XXXX</span>
            <button className="nav-cta" onClick={onQuote}>Get Quote</button>
          </div>
          <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>
      {open && (
        <div className="mobile-menu">
          {navItems.map(item => (
            <div key={item.page}>
              <div className="mobile-link" onClick={() => nav(item.page)}>{item.label}</div>
              {item.children && item.children.map(c => (
                <div key={c.page} className="mobile-link" style={{ paddingLeft: 24, fontSize: 15, opacity: 0.7 }} onClick={() => nav(c.page)}>{c.label}</div>
              ))}
            </div>
          ))}
          <div className="mobile-link" onClick={() => nav("marble-objet")}>Studio Marbella</div>
          <div className="mobile-link" onClick={() => nav("contact")}>Contact</div>
          <div className="mobile-cta" onClick={() => { setOpen(false); onQuote(); }}>Get a Free Quote</div>
        </div>
      )}
    </>
  );
}

// --- QUICK QUOTE FORM ---
function QuoteForm({ preselect = {}, embedded = false, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', type: preselect.type || '', area: '', material: preselect.material || '', notes: '', source: '' });
  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const fileRef = useRef();

  const update = (k, v) => { setForm(f => ({ ...f, [k]: v })); setErrors(e => ({ ...e, [k]: null })); };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.type) e.type = "Select a project type";
    if (!form.area.trim()) e.area = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => { if (validate()) setSubmitted(true); };

  const handleFiles = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles(f => [...f, ...newFiles].slice(0, 10));
  };

  if (submitted) {
    return (
      <div style={{ padding: embedded ? '48px 0' : 48, textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, marginBottom: 12, color: 'var(--stone-800)' }}>We've received your request</h3>
        <p style={{ color: 'var(--stone-500)', lineHeight: 1.7, maxWidth: 400, margin: '0 auto' }}>
          Thanks, {form.name.split(' ')[0]}. We'll review your project details and get back to you within 24 hours. For anything urgent, call us on 031 XXX XXXX.
        </p>
        {onClose && <button onClick={onClose} style={{ marginTop: 24, padding: '10px 24px', background: 'var(--stone-800)', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600 }}>Close</button>}
      </div>
    );
  }

  const inputStyle = (field) => ({
    width: '100%', padding: '12px 16px', border: `1px solid ${errors[field] ? '#c44' : 'var(--stone-200)'}`,
    borderRadius: 8, fontSize: 14, fontFamily: 'var(--font-body)', background: 'white',
    outline: 'none', transition: 'border-color 0.2s', color: 'var(--stone-800)'
  });
  const labelStyle = { fontSize: 12, fontWeight: 600, color: 'var(--stone-600)', marginBottom: 6, display: 'block', letterSpacing: '0.5px', textTransform: 'uppercase' };
  const errStyle = { fontSize: 11, color: '#c44', marginTop: 4 };

  return (
    <div style={{ padding: embedded ? 0 : '32px' }}>
      {!embedded && (
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--stone-800)', marginBottom: 8 }}>Get a Free Quote</h3>
          <p style={{ color: 'var(--stone-500)', fontSize: 14, lineHeight: 1.6 }}>Tell us about your project and we'll get back to you within 24 hours.</p>
        </div>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input style={inputStyle('name')} value={form.name} onChange={e => update('name', e.target.value)} placeholder="Your full name" />
          {errors.name && <div style={errStyle}>{errors.name}</div>}
        </div>
        <div>
          <label style={labelStyle}>Phone *</label>
          <input style={inputStyle('phone')} type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="082 000 0000" />
          {errors.phone && <div style={errStyle}>{errors.phone}</div>}
        </div>
        <div>
          <label style={labelStyle}>Email *</label>
          <input style={inputStyle('email')} type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="you@example.com" />
          {errors.email && <div style={errStyle}>{errors.email}</div>}
        </div>
        <div>
          <label style={labelStyle}>Project Type *</label>
          <select style={{ ...inputStyle('type'), color: form.type ? 'var(--stone-800)' : 'var(--stone-400)' }} value={form.type} onChange={e => update('type', e.target.value)}>
            <option value="">Select type...</option>
            <option>Kitchen</option><option>Vanity / Bathroom</option><option>Staircase</option><option>Cladding</option><option>Commercial</option><option>Other</option>
          </select>
          {errors.type && <div style={errStyle}>{errors.type}</div>}
        </div>
        <div>
          <label style={labelStyle}>City / Area *</label>
          <input style={inputStyle('area')} value={form.area} onChange={e => update('area', e.target.value)} placeholder="e.g. Umhlanga, Ballito, Hillcrest" />
          {errors.area && <div style={errStyle}>{errors.area}</div>}
        </div>
        <div>
          <label style={labelStyle}>Preferred Material</label>
          <input style={inputStyle('material')} value={form.material} onChange={e => update('material', e.target.value)} placeholder="e.g. Neolith Estatuario" />
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <label style={labelStyle}>Notes / Comments</label>
        <textarea style={{ ...inputStyle('notes'), minHeight: 80, resize: 'vertical' }} value={form.notes} onChange={e => update('notes', e.target.value)} placeholder="Tell us about your project — dimensions, layout, special requirements..." />
      </div>
      <div style={{ marginTop: 16 }}>
        <label style={labelStyle}>Attach Drawings or Photos</label>
        <div onClick={() => fileRef.current?.click()} style={{ border: '2px dashed var(--stone-200)', borderRadius: 10, padding: '24px 16px', textAlign: 'center', cursor: 'pointer', transition: 'border-color 0.2s', background: 'rgba(255,255,255,0.5)' }}>
          <div style={{ fontSize: 24, marginBottom: 8, opacity: 0.4 }}>📎</div>
          <div style={{ fontSize: 13, color: 'var(--stone-500)' }}>Drag files here or tap to browse — PDF, JPG, PNG, DXF, DWG (max 25 MB)</div>
          <input ref={fileRef} type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.dxf,.dwg" onChange={handleFiles} style={{ display: 'none' }} />
        </div>
        {files.length > 0 && (
          <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {files.map((f, i) => (
              <div key={i} style={{ fontSize: 12, background: 'var(--stone-100)', padding: '6px 12px', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
                {f.name} <span onClick={() => setFiles(fs => fs.filter((_, j) => j !== i))} style={{ cursor: 'pointer', opacity: 0.5 }}>✕</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div style={{ marginTop: 16 }}>
        <label style={labelStyle}>How did you hear about us?</label>
        <select style={{ ...inputStyle('source'), color: form.source ? 'var(--stone-800)' : 'var(--stone-400)' }} value={form.source} onChange={e => update('source', e.target.value)}>
          <option value="">Optional</option>
          <option>Google</option><option>Instagram</option><option>Referral</option><option>Architect / Designer</option><option>Returning Client</option><option>Other</option>
        </select>
      </div>
      <button onClick={submit} style={{ marginTop: 24, width: '100%', padding: '16px', background: 'var(--stone-800)', color: 'white', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)', letterSpacing: '0.3px', transition: 'background 0.2s' }}>
        Get My Quote →
      </button>
    </div>
  );
}

// --- QUOTE MODAL ---
function QuoteModal({ show, onClose, preselect }) {
  if (!show) return null;
  return (
    <>
      <style>{`
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 20px; animation: fadeIn 0.2s ease; backdrop-filter: blur(4px); }
        .modal-box { background: var(--stone-50); border-radius: 16px; max-width: 680px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative; }
        .modal-close { position: absolute; top: 16px; right: 16px; background: var(--stone-100); border: none; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; font-size: 18px; display: flex; align-items: center; justify-content: center; color: var(--stone-600); z-index: 2; }
      `}</style>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-box" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>✕</button>
          <div style={{ padding: '32px' }}>
            <QuoteForm preselect={preselect || {}} onClose={onClose} />
          </div>
        </div>
      </div>
    </>
  );
}

// --- FOOTER ---
function Footer({ onNavigate, onQuote }) {
  const nav = (p) => { onNavigate(p); };
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackSent, setCallbackSent] = useState(false);

  return (
    <footer style={{ background: 'var(--stone-900)', color: 'rgba(255,255,255,0.5)', padding: '80px 24px 40px', position: 'relative', overflow: 'hidden' }}>
      <div className="noise" style={{ position: 'absolute', inset: 0 }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 60 }}>
          <div>
            <div style={{ color: 'white', fontWeight: 700, fontSize: 13, letterSpacing: 3, marginBottom: 24, textTransform: 'uppercase' }}>Services</div>
            {['kitchens', 'vanities', 'staircases', 'cladding'].map(s => (
              <div key={s} onClick={() => nav(s)} style={{ cursor: 'pointer', marginBottom: 12, fontSize: 14, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.8)'} onMouseLeave={e => e.target.style.color = ''}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </div>
            ))}
          </div>
          <div>
            <div style={{ color: 'white', fontWeight: 700, fontSize: 13, letterSpacing: 3, marginBottom: 24, textTransform: 'uppercase' }}>Explore</div>
            {[['materials', 'Materials Gallery'], ['brands', 'Brands'], ['designers', 'For Designers'], ['marble-objet', 'Studio Marbella']].map(([p, l]) => (
              <div key={p} onClick={() => nav(p)} style={{ cursor: 'pointer', marginBottom: 12, fontSize: 14, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.8)'} onMouseLeave={e => e.target.style.color = ''}>
                {l}
              </div>
            ))}
          </div>
          <div>
            <div style={{ color: 'white', fontWeight: 700, fontSize: 13, letterSpacing: 3, marginBottom: 24, textTransform: 'uppercase' }}>Company</div>
            {[['projects', 'Projects'], ['contact', 'Contact']].map(([p, l]) => (
              <div key={p} onClick={() => nav(p)} style={{ cursor: 'pointer', marginBottom: 12, fontSize: 14, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.8)'} onMouseLeave={e => e.target.style.color = ''}>
                {l}
              </div>
            ))}
            <div style={{ marginBottom: 12, fontSize: 14 }}>Privacy Policy</div>
            <div style={{ fontSize: 14 }}>Terms</div>
          </div>
          <div>
            <div style={{ color: 'white', fontWeight: 700, fontSize: 13, letterSpacing: 3, marginBottom: 24, textTransform: 'uppercase' }}>Quick Callback</div>
            {!callbackSent ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <input value={callbackName} onChange={e => setCallbackName(e.target.value)} placeholder="Your name" style={{ padding: '10px 12px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, color: 'white', fontSize: 13, fontFamily: 'var(--font-body)', outline: 'none' }} />
                <input value={callbackPhone} onChange={e => setCallbackPhone(e.target.value)} placeholder="Your phone number" style={{ padding: '10px 12px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, color: 'white', fontSize: 13, fontFamily: 'var(--font-body)', outline: 'none' }} />
                <button onClick={() => callbackName && callbackPhone && setCallbackSent(true)} style={{ padding: '10px', background: 'var(--stone-500)', color: 'white', border: 'none', borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Call Me Back</button>
              </div>
            ) : (
              <div style={{ fontSize: 13, color: 'var(--stone-400)' }}>✓ We'll call you back shortly.</div>
            )}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 32, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <div>
            <div style={{ color: 'white', fontWeight: 700, fontSize: 12, letterSpacing: 3, marginBottom: 4, textTransform: 'uppercase' }}>Stone Slabs</div>
            <div style={{ fontSize: 13 }}>Premium stone surfaces, crafted in Durban since 2011.</div>
          </div>
          <div style={{ fontSize: 12 }}>© 2026 Goldtop Quartz (Pty) Ltd t/a Stone Slabs. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

// --- HERO SECTION ---
function Hero({ headline, sub, cta, ctaAction, secondary, secondaryAction, dark = true, bg }) {
  return (
    <section style={{ position: 'relative', minHeight: dark ? '85vh' : '60vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: bg || 'var(--stone-900)' }}>
      {dark && <div className="noise" style={{ position: 'absolute', inset: 0 }} />}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '120px 24px 80px', width: '100%' }}>
        <div className="fade-up" style={{ maxWidth: 700 }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 400, color: dark ? 'white' : 'var(--stone-800)', lineHeight: 1.1, marginBottom: 20 }}>
            {headline}
          </h1>
          <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: dark ? 'rgba(255,255,255,0.6)' : 'var(--stone-500)', lineHeight: 1.7, marginBottom: 36, maxWidth: 540 }}>
            {sub}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <button onClick={ctaAction} style={{ padding: '16px 36px', background: dark ? 'white' : 'var(--stone-800)', color: dark ? 'var(--stone-900)' : 'white', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)', letterSpacing: '0.3px', transition: 'transform 0.2s' }}>{cta}</button>
            {secondary && (
              <button onClick={secondaryAction} style={{ padding: '16px 36px', background: 'transparent', color: dark ? 'rgba(255,255,255,0.7)' : 'var(--stone-600)', border: `1px solid ${dark ? 'rgba(255,255,255,0.2)' : 'var(--stone-200)'}`, borderRadius: 10, fontSize: 15, fontWeight: 500, cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'all 0.2s' }}>{secondary}</button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- SECTION WRAPPER ---
function Section({ children, bg, padY = 80 }) {
  return (
    <section style={{ background: bg || 'var(--stone-50)', padding: `${padY}px 24px`, position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>{children}</div>
    </section>
  );
}

function SectionTitle({ label, title, sub }) {
  return (
    <div style={{ marginBottom: 48 }}>
      {label && <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--stone-400)', marginBottom: 12 }}>{label}</div>}
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 400, color: 'var(--stone-800)', marginBottom: sub ? 12 : 0 }}>{title}</h2>
      {sub && <p style={{ fontSize: 16, color: 'var(--stone-500)', lineHeight: 1.7, maxWidth: 600 }}>{sub}</p>}
    </div>
  );
}

// --- MATERIAL CARD ---
function MaterialCard({ m, onNavigate, shortlist, toggleShortlist }) {
  const isShortlisted = shortlist?.includes(m.id);
  return (
    <div style={{ cursor: 'pointer', position: 'relative', borderRadius: 12, overflow: 'hidden', background: 'white', border: '1px solid var(--stone-100)', transition: 'all 0.3s' }}
      onClick={() => onNavigate(`material-${m.id}`)}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
      <div style={bgStyle(m.img, 200)}>
        <button onClick={e => { e.stopPropagation(); toggleShortlist(m.id); }}
          style={{ position: 'absolute', top: 12, right: 12, width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s' }}>
          {isShortlisted ? '♥' : '♡'}
        </button>
        <div style={{ position: 'absolute', bottom: 10, left: 10, background: 'rgba(0,0,0,0.6)', color: 'white', fontSize: 10, padding: '4px 10px', borderRadius: 20, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>{m.type}</div>
      </div>
      <div style={{ padding: '16px' }}>
        <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--stone-800)', marginBottom: 4 }}>{m.name}</div>
        <div style={{ fontSize: 12, color: 'var(--stone-400)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{BRANDS.find(b => b.slug === m.brand)?.name}{m.code ? ` · ${m.code}` : ''}</div>
      </div>
    </div>
  );
}

// --- PROJECT CARD ---
function ProjectCard({ p, onNavigate }) {
  return (
    <div style={{ cursor: 'pointer', borderRadius: 12, overflow: 'hidden', background: 'white', border: '1px solid var(--stone-100)', transition: 'all 0.3s' }}
      onClick={() => onNavigate(`project-${p.id}`)}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
      <div style={bgStyle(p.img, 240)}>
        <div style={{ position: 'absolute', bottom: 10, left: 10, background: 'rgba(0,0,0,0.6)', color: 'white', fontSize: 10, padding: '4px 10px', borderRadius: 20, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>{p.type}</div>
      </div>
      <div style={{ padding: '20px' }}>
        <div style={{ fontWeight: 600, fontSize: 17, color: 'var(--stone-800)', marginBottom: 6 }}>{p.title}</div>
        <div style={{ fontSize: 13, color: 'var(--stone-500)', lineHeight: 1.6 }}>{p.material} · {p.location}</div>
      </div>
    </div>
  );
}

// ============================================================
// PAGES
// ============================================================

// --- HOME ---
function HomePage({ onNavigate, onQuote }) {
  return (
    <>
      <Hero
        headline="Stone Surfaces, Crafted to Perfection"
        sub="Sintered stone & quartz surfaces — supplied, fabricated and installed across KwaZulu-Natal. From kitchen countertops to architectural cladding, we bring your vision to life."
        cta="Get a Free Quote" ctaAction={onQuote}
        secondary="Explore Materials →" secondaryAction={() => onNavigate('materials')}
        bg="linear-gradient(135deg, #1a1610 0%, #2d261c 40%, #1a1610 100%)"
      />

      {/* Service Cards */}
      <Section bg="white">
        <SectionTitle label="What we do" title="Supply. Fabricate. Install." sub="End-to-end stone surface solutions for residential and commercial projects." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
          {SERVICES.map((s, i) => (
            <div key={s.slug} className="fade-up" style={{ animationDelay: `${i * 0.1}s`, padding: 32, borderRadius: 14, background: 'var(--stone-50)', border: '1px solid var(--stone-100)', cursor: 'pointer', transition: 'all 0.3s' }}
              onClick={() => onNavigate(s.slug)}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--stone-300)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--stone-100)'; e.currentTarget.style.transform = ''; }}>
              <div style={{ fontSize: 28, marginBottom: 16, opacity: 0.3 }}>{s.icon}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--stone-800)', marginBottom: 8 }}>{s.name}</div>
              <div style={{ fontSize: 14, color: 'var(--stone-500)', lineHeight: 1.6, marginBottom: 16 }}>{s.subhead}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--stone-500)', letterSpacing: '0.5px' }}>Learn more →</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Trust Strip */}
      <Section bg="var(--stone-900)" padY={60}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, textAlign: 'center' }}>
          {[
            ["14+", "Years of Expertise", "Established 2011"],
            ["48hr", "Quote Turnaround", "Detailed pricing, fast"],
            ["1", "Team, Start to Finish", "Supply, fabricate, install"],
            ["∞", "Spec Support", "For architects & designers"],
          ].map(([num, title, sub], i) => (
            <div key={i} style={{ padding: 16 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--stone-400)', marginBottom: 8 }}>{num}</div>
              <div style={{ fontWeight: 600, fontSize: 14, color: 'white', marginBottom: 4 }}>{title}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{sub}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Materials */}
      <Section>
        <SectionTitle label="Materials" title="Featured Surfaces" sub="A selection from our range of natural and engineered stone." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
          {MATERIALS.slice(0, 8).map(m => <MaterialCard key={m.id} m={m} onNavigate={onNavigate} shortlist={[]} toggleShortlist={() => {}} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <button onClick={() => onNavigate('materials')} style={{ padding: '14px 36px', background: 'transparent', border: '1px solid var(--stone-300)', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)', color: 'var(--stone-600)', transition: 'all 0.2s' }}>Browse All Materials →</button>
        </div>
      </Section>

      {/* Brands */}
      <Section bg="white" padY={60}>
        <SectionTitle label="Brands" title="Trusted Partners" />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32, alignItems: 'center' }}>
          {BRANDS.map(b => (
            <div key={b.slug} onClick={() => onNavigate(`brand-${b.slug}`)} style={{ cursor: 'pointer', padding: '12px 20px', fontSize: 14, fontWeight: 600, color: 'var(--stone-400)', letterSpacing: '1px', textTransform: 'uppercase', transition: 'color 0.2s', borderBottom: '2px solid transparent' }}
              onMouseEnter={e => { e.target.style.color = 'var(--stone-700)'; e.target.style.borderBottomColor = 'var(--stone-400)'; }}
              onMouseLeave={e => { e.target.style.color = 'var(--stone-400)'; e.target.style.borderBottomColor = 'transparent'; }}>
              {b.name}
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section>
        <SectionTitle label="Projects" title="Recent Work" sub="A selection of completed residential and commercial installations." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
          {PROJECTS.slice(0, 3).map(p => <ProjectCard key={p.id} p={p} onNavigate={onNavigate} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <button onClick={() => onNavigate('projects')} style={{ padding: '14px 36px', background: 'transparent', border: '1px solid var(--stone-300)', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)', color: 'var(--stone-600)' }}>See All Projects →</button>
        </div>
      </Section>

      {/* Embedded Quote Form */}
      <Section bg="var(--stone-100)" padY={80}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'start' }}>
          <div>
            <SectionTitle label="Get Started" title="Tell Us About Your Project" sub="Share your project details and we'll provide a detailed quote within 24 hours. Upload drawings or photos for the most accurate pricing." />
            <div style={{ fontSize: 14, color: 'var(--stone-500)', lineHeight: 1.7, marginTop: 20 }}>
              Not sure where to start? Call us on <strong style={{ color: 'var(--stone-700)' }}>031 XXX XXXX</strong> or visit our showroom in Springfield Park, Durban.
            </div>
          </div>
          <div style={{ background: 'white', borderRadius: 16, padding: 32, boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}>
            <QuoteForm embedded />
          </div>
        </div>
      </Section>
    </>
  );
}

// --- SERVICE PAGE ---
function ServicePage({ service, onNavigate, onQuote }) {
  const s = SERVICES.find(x => x.slug === service);
  if (!s) return null;
  const relatedMaterials = MATERIALS.filter(m => m.apps.some(a => s.apps.includes(a))).slice(0, 6);
  const relatedProjects = PROJECTS.filter(p => {
    if (s.slug === 'kitchens') return p.type === 'Kitchen';
    if (s.slug === 'vanities') return p.type === 'Bathroom';
    if (s.slug === 'staircases') return p.type === 'Staircase';
    if (s.slug === 'cladding') return p.type === 'Cladding';
    return false;
  });

  return (
    <>
      <Hero headline={s.headline} sub={s.subhead} cta={`Get a ${s.name} Quote`} ctaAction={() => onQuote({ type: s.name })} bg="linear-gradient(135deg, #1a1610 0%, #2d261c 40%, #1a1610 100%)" />
      
      <Section bg="white">
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--stone-600)' }}>{s.intro}</p>
        </div>
      </Section>

      <Section>
        <SectionTitle label={`Materials for ${s.name}`} title={`Popular Surfaces`} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
          {relatedMaterials.map(m => <MaterialCard key={m.id} m={m} onNavigate={onNavigate} shortlist={[]} toggleShortlist={() => {}} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <button onClick={() => onNavigate('materials')} style={{ padding: '12px 32px', background: 'transparent', border: '1px solid var(--stone-300)', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)', color: 'var(--stone-600)' }}>Browse All Materials →</button>
        </div>
      </Section>

      {/* Process */}
      <Section bg="white">
        <SectionTitle label="Our Process" title="How It Works" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
          {["Consult & Quote — Send us your drawings or measurements. We'll recommend materials and provide a detailed quote.",
            "Template — Our team visits your site for precision laser templating.",
            "Fabricate — CNC-cut and hand-finished in our Durban workshop.",
            "Install — Professional fitting with sealing and quality check."
          ].map((step, i) => (
            <div key={i} style={{ padding: 24, borderRadius: 12, border: '1px solid var(--stone-100)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--stone-300)', marginBottom: 12 }}>0{i + 1}</div>
              <div style={{ fontSize: 14, color: 'var(--stone-600)', lineHeight: 1.7 }}>{step}</div>
            </div>
          ))}
        </div>
      </Section>

      {relatedProjects.length > 0 && (
        <Section>
          <SectionTitle label="Our Work" title={`${s.name} Projects`} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
            {relatedProjects.map(p => <ProjectCard key={p.id} p={p} onNavigate={onNavigate} />)}
          </div>
        </Section>
      )}

      {/* FAQ */}
      {s.faq && s.faq.length > 0 && (
        <Section bg="white">
          <SectionTitle label="FAQ" title="Common Questions" />
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            {s.faq.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
          </div>
        </Section>
      )}

      <Section bg="var(--stone-100)" padY={80}>
        <div style={{ background: 'white', borderRadius: 16, padding: 32, maxWidth: 680, margin: '0 auto', boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}>
          <QuoteForm preselect={{ type: s.name }} embedded />
        </div>
      </Section>
    </>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--stone-100)', padding: '20px 0' }}>
      <div onClick={() => setOpen(!open)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', gap: 16 }}>
        <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--stone-700)' }}>{q}</div>
        <div style={{ fontSize: 20, color: 'var(--stone-400)', transition: 'transform 0.2s', transform: open ? 'rotate(45deg)' : '' }}>+</div>
      </div>
      {open && <div style={{ marginTop: 12, fontSize: 14, color: 'var(--stone-500)', lineHeight: 1.7 }}>{a}</div>}
    </div>
  );
}

// --- MATERIALS GALLERY ---
function MaterialsPage({ onNavigate, onQuote }) {
  const [filters, setFilters] = useState({ type: '', colour: '', brand: '', search: '' });
  const [shortlist, setShortlist] = useState([]);

  const toggleShortlist = (id) => setShortlist(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);

  const filtered = MATERIALS.filter(m => {
    if (filters.type && m.type !== filters.type) return false;
    if (filters.colour && m.colour !== filters.colour) return false;
    if (filters.brand && m.brand !== filters.brand) return false;
    if (filters.search && !m.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });

  const chipStyle = (active) => ({
    padding: '8px 16px', borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'var(--font-body)', border: 'none',
    background: active ? 'var(--stone-800)' : 'var(--stone-100)',
    color: active ? 'white' : 'var(--stone-500)',
  });

  return (
    <>
      <div style={{ paddingTop: 72 }} />
      <Section bg="white" padY={48}>
        <SectionTitle title="Materials" sub="Browse our full range of sintered stone and quartz surfaces." />
        
        {/* Filters */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32, padding: 24, background: 'var(--stone-50)', borderRadius: 14, border: '1px solid var(--stone-100)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--stone-400)', marginRight: 8, minWidth: 60 }}>Type</span>
            <button style={chipStyle(!filters.type)} onClick={() => setFilters(f => ({ ...f, type: '' }))}>All</button>
            {['Quartz', 'Sintered Stone'].map(t => (
              <button key={t} style={chipStyle(filters.type === t)} onClick={() => setFilters(f => ({ ...f, type: f.type === t ? '' : t }))}>{t}</button>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--stone-400)', marginRight: 8, minWidth: 60 }}>Colour</span>
            <button style={chipStyle(!filters.colour)} onClick={() => setFilters(f => ({ ...f, colour: '' }))}>All</button>
            {['White', 'Black', 'Grey', 'Beige', 'Brown', 'Green', 'Blue'].map(c => (
              <button key={c} style={chipStyle(filters.colour === c)} onClick={() => setFilters(f => ({ ...f, colour: f.colour === c ? '' : c }))}>{c}</button>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--stone-400)', marginRight: 8, minWidth: 60 }}>Brand</span>
            <button style={chipStyle(!filters.brand)} onClick={() => setFilters(f => ({ ...f, brand: '' }))}>All</button>
            {BRANDS.map(b => (
              <button key={b.slug} style={chipStyle(filters.brand === b.slug)} onClick={() => setFilters(f => ({ ...f, brand: f.brand === b.slug ? '' : b.slug }))}>{b.name}</button>
            ))}
          </div>
          <div>
            <input value={filters.search} onChange={e => setFilters(f => ({ ...f, search: e.target.value }))} placeholder="Search by name..." style={{ padding: '10px 16px', border: '1px solid var(--stone-200)', borderRadius: 8, fontSize: 14, fontFamily: 'var(--font-body)', width: '100%', maxWidth: 300, outline: 'none', background: 'white' }} />
          </div>
        </div>

        <div style={{ fontSize: 13, color: 'var(--stone-400)', marginBottom: 20 }}>Showing {filtered.length} of {MATERIALS.length} materials</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
          {filtered.map(m => <MaterialCard key={m.id} m={m} onNavigate={onNavigate} shortlist={shortlist} toggleShortlist={toggleShortlist} />)}
        </div>
        {filtered.length === 0 && <div style={{ textAlign: 'center', padding: 60, color: 'var(--stone-400)' }}>No materials match your filters. Try broadening your search.</div>}
      </Section>

      {/* Shortlist Bar */}
      {shortlist.length > 0 && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'var(--stone-800)', padding: '14px 24px', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ color: 'white', fontSize: 13, fontWeight: 600 }}>{shortlist.length} saved</span>
            <div style={{ display: 'flex', gap: 6 }}>
              {shortlist.slice(0, 4).map(id => {
                const m = MATERIALS.find(x => x.id === id);
                return m ? <div key={id} style={{ width: 36, height: 36, borderRadius: 6, background: m.img.startsWith('linear') ? m.img : `url(${m.img}) center/cover no-repeat`, border: '2px solid rgba(255,255,255,0.2)' }} /> : null;
              })}
            </div>
          </div>
          <button onClick={onQuote} style={{ padding: '10px 24px', background: 'white', color: 'var(--stone-900)', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
            Quote with These Materials →
          </button>
        </div>
      )}
    </>
  );
}

// --- SINGLE MATERIAL ---
function MaterialDetailPage({ id, onNavigate, onQuote }) {
  const m = MATERIALS.find(x => x.id === parseInt(id));
  if (!m) return null;
  const brand = BRANDS.find(b => b.slug === m.brand);
  const related = MATERIALS.filter(x => x.id !== m.id && (x.colour === m.colour || x.brand === m.brand)).slice(0, 4);

  return (
    <>
      <div style={{ paddingTop: 72 }} />
      <Section bg="white" padY={48}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 48 }}>
          {m.img.startsWith('linear-gradient')
            ? <div style={{ ...bgStyle(m.img, 400), borderRadius: 16 }} />
            : <img src={m.img} alt={m.name} style={{ width: '100%', height: 'auto', maxHeight: 600, objectFit: 'cover', borderRadius: 16, display: 'block' }} />
          }
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--stone-400)', marginBottom: 8, cursor: 'pointer' }} onClick={() => onNavigate(`brand-${m.brand}`)}>{brand?.name}{m.code ? ` · ${m.code}` : ''}</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--stone-800)', marginBottom: 16 }}>{m.name}</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
              <span style={{ padding: '6px 14px', background: 'var(--stone-100)', borderRadius: 20, fontSize: 12, fontWeight: 600, color: 'var(--stone-600)' }}>{m.type}</span>
              <span style={{ padding: '6px 14px', background: 'var(--stone-100)', borderRadius: 20, fontSize: 12, fontWeight: 600, color: 'var(--stone-600)' }}>{m.colour}</span>
              <span style={{ padding: '6px 14px', background: 'var(--stone-100)', borderRadius: 20, fontSize: 12, fontWeight: 600, color: 'var(--stone-600)' }}>{m.pattern}</span>
            </div>
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--stone-400)', marginBottom: 8 }}>Available Finishes</div>
              <div style={{ display: 'flex', gap: 8 }}>{m.finish.map(f => <span key={f} style={{ padding: '6px 14px', border: '1px solid var(--stone-200)', borderRadius: 20, fontSize: 12, color: 'var(--stone-600)' }}>{f}</span>)}</div>
            </div>
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--stone-400)', marginBottom: 8 }}>Suitable For</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{m.apps.map(a => <span key={a} style={{ padding: '6px 14px', border: '1px solid var(--stone-200)', borderRadius: 20, fontSize: 12, color: 'var(--stone-600)' }}>{a}</span>)}</div>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
              <button onClick={() => onQuote({ material: m.name })} style={{ padding: '14px 28px', background: 'var(--stone-800)', color: 'white', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Quote with This Material</button>
              <button onClick={() => onNavigate('contact')} style={{ padding: '14px 28px', background: 'transparent', border: '1px solid var(--stone-300)', borderRadius: 10, fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: 'var(--font-body)', color: 'var(--stone-600)' }}>Book a Slab Viewing</button>
            </div>
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section>
          <SectionTitle label="Similar" title="Related Materials" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
            {related.map(m => <MaterialCard key={m.id} m={m} onNavigate={onNavigate} shortlist={[]} toggleShortlist={() => {}} />)}
          </div>
        </Section>
      )}
    </>
  );
}

// --- BRANDS INDEX ---
function BrandsPage({ onNavigate }) {
  return (
    <>
      <Hero headline="Our Brands" sub="We supply and fabricate surfaces from the world's leading stone and engineered surface brands." cta="Browse Materials" ctaAction={() => onNavigate('materials')} bg="linear-gradient(135deg, #1a1610 0%, #2d261c 100%)" />
      <Section bg="white">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {BRANDS.map((b, i) => (
            <div key={b.slug} className="fade-up" style={{ animationDelay: `${i * 0.08}s`, padding: 32, borderRadius: 14, border: '1px solid var(--stone-100)', cursor: 'pointer', transition: 'all 0.3s' }}
              onClick={() => onNavigate(`brand-${b.slug}`)}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--stone-300)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--stone-100)'; e.currentTarget.style.transform = ''; }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--stone-800)', marginBottom: 8 }}>{b.name}</div>
              <div style={{ fontSize: 14, color: 'var(--stone-500)', lineHeight: 1.6, marginBottom: 16 }}>{b.tagline}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--stone-500)' }}>View Collection →</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

// --- SINGLE BRAND ---
function BrandPage({ slug, onNavigate, onQuote }) {
  const brand = BRANDS.find(b => b.slug === slug);
  if (!brand) return null;
  const brandMaterials = MATERIALS.filter(m => m.brand === slug);

  return (
    <>
      <Hero headline={brand.name} sub={brand.desc} cta="Get a Quote" ctaAction={onQuote} secondary="Book a Slab Viewing" secondaryAction={() => onNavigate('contact')} bg="linear-gradient(135deg, #1a1610 0%, #2d261c 100%)" />
      <Section bg="white">
        <SectionTitle label={`${brand.name} Collection`} title="Colour Catalogue" sub={`Browse the full ${brand.name} range available through Stone Slabs.`} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
          {brandMaterials.map(m => <MaterialCard key={m.id} m={m} onNavigate={onNavigate} shortlist={[]} toggleShortlist={() => {}} />)}
        </div>
        {brandMaterials.length === 0 && <div style={{ textAlign: 'center', padding: 60, color: 'var(--stone-400)' }}>Full {brand.name} catalogue coming soon. Contact us for current availability.</div>}
      </Section>
    </>
  );
}

// --- PROJECTS INDEX ---
function ProjectsPage({ onNavigate }) {
  const [filter, setFilter] = useState('');
  const filtered = filter ? PROJECTS.filter(p => p.type === filter) : PROJECTS;
  const chipStyle = (active) => ({ padding: '8px 16px', borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: 'pointer', border: 'none', background: active ? 'var(--stone-800)' : 'var(--stone-100)', color: active ? 'white' : 'var(--stone-500)', fontFamily: 'var(--font-body)' });

  return (
    <>
      <Hero headline="Our Projects" sub="A selection of completed kitchens, bathrooms, staircases, and commercial installations across KwaZulu-Natal." cta="Get a Quote" ctaAction={() => {}} bg="linear-gradient(135deg, #1a1610 0%, #2d261c 100%)" />
      <Section bg="white">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
          <button style={chipStyle(!filter)} onClick={() => setFilter('')}>All</button>
          {['Kitchen', 'Bathroom', 'Staircase', 'Cladding', 'Commercial'].map(t => (
            <button key={t} style={chipStyle(filter === t)} onClick={() => setFilter(filter === t ? '' : t)}>{t}</button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
          {filtered.map(p => <ProjectCard key={p.id} p={p} onNavigate={onNavigate} />)}
        </div>
      </Section>
    </>
  );
}

// --- SINGLE PROJECT ---
function ProjectDetailPage({ id, onNavigate, onQuote }) {
  const p = PROJECTS.find(x => x.id === parseInt(id));
  if (!p) return null;
  const related = PROJECTS.filter(x => x.id !== p.id).slice(0, 2);

  return (
    <>
      <div style={{ paddingTop: 72 }} />
      <Section bg="white" padY={48}>
        <div style={{ maxWidth: 840, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--stone-400)', marginBottom: 12 }}>{p.type} · {p.location}</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--stone-800)', marginBottom: 24 }}>{p.title}</h1>
          <div style={{ ...bgStyle(p.img, 400), borderRadius: 16, marginBottom: 32 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16, marginBottom: 32, padding: 24, background: 'var(--stone-50)', borderRadius: 12 }}>
            {[['Type', p.type], ['Material', p.material], ['Brand', p.brand], ['Location', p.location]].map(([l, v]) => (
              <div key={l}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--stone-400)', marginBottom: 4 }}>{l}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--stone-700)' }}>{v}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--stone-600)', marginBottom: 40 }}>{p.desc}</p>
          <button onClick={onQuote} style={{ padding: '14px 32px', background: 'var(--stone-800)', color: 'white', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Start Your Project →</button>
        </div>
      </Section>

      {related.length > 0 && (
        <Section>
          <SectionTitle label="More Projects" title="Related Work" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
            {related.map(p => <ProjectCard key={p.id} p={p} onNavigate={onNavigate} />)}
          </div>
        </Section>
      )}
    </>
  );
}

// --- DESIGNERS PAGE ---
function DesignersPage({ onNavigate, onQuote }) {
  return (
    <>
      <Hero
        headline="Your Specification Partner"
        sub="Technical support, material expertise, and reliable project delivery for architects, designers, and specifiers."
        cta="Submit a Specification" ctaAction={onQuote}
        secondary="Browse Materials →" secondaryAction={() => onNavigate('materials')}
        bg="linear-gradient(135deg, #1a1610 0%, #2d261c 100%)"
      />

      <Section bg="white">
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--stone-600)', marginBottom: 24 }}>
            We've worked with architects and designers across KwaZulu-Natal since 2011, and we know what professionals need: accurate information, responsive communication, and reliable delivery.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--stone-600)', marginBottom: 24 }}>
            When you submit a project to us, our team reviews your drawings and specifications in detail. We'll recommend materials that meet your design intent and budget, suggest alternatives where supply or lead times are a factor, and flag any technical issues before they become site problems.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--stone-600)', marginBottom: 24 }}>
            We aim to return detailed quotes promptly from complete submissions — and for larger or more complex scopes, we'll confirm the timeline upfront so you can plan around it.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--stone-600)' }}>
            From quote to handover, you get a single point of contact. We produce shop drawings for your approval, coordinate with your contractors and site teams, and keep you informed at every stage.
          </p>
        </div>
      </Section>

      <Section>
        <SectionTitle label="What We Offer" title="Trade Services" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {[
            ["Spec Support", "We review drawings and specifications, suggest material alternates, and support value engineering to keep projects on budget."],
            ["Material Library", "Access our full catalogue. Book a slab viewing or request physical samples delivered to your office or site."],
            ["Responsive Quoting", "Detailed quotes returned promptly from complete submissions. We confirm timelines upfront for complex projects."],
            ["Dedicated PM", "Single point of contact from quote to installation. Direct coordination with your contractors and site teams."],
            ["Shop Drawings", "We work from CAD files, PDFs, or hand sketches and produce shop drawings for your approval before fabrication."],
          ].map(([t, d], i) => (
            <div key={i} style={{ padding: 28, borderRadius: 12, border: '1px solid var(--stone-100)', background: 'white' }}>
              <div style={{ fontWeight: 600, fontSize: 16, color: 'var(--stone-800)', marginBottom: 8 }}>{t}</div>
              <div style={{ fontSize: 14, color: 'var(--stone-500)', lineHeight: 1.7 }}>{d}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="var(--stone-100)" padY={80}>
        <div style={{ background: 'white', borderRadius: 16, padding: 32, maxWidth: 680, margin: '0 auto', boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}>
          <QuoteForm preselect={{ type: 'Commercial' }} embedded />
        </div>
      </Section>
    </>
  );
}

// --- CONTACT ---
function ContactPage({ onQuote }) {
  return (
    <>
      <div style={{ paddingTop: 72 }} />
      <Section bg="white" padY={48}>
        <SectionTitle title="Get in Touch" sub="Visit our showroom, call us, or send us your project details." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48 }}>
          <div>
            <div style={{ marginBottom: 32 }}>
              {[
                ["📍", "Address", "Springfield Park, Durban, KwaZulu-Natal"],
                ["📞", "Phone", "031 XXX XXXX"],
                ["✉", "Email", "info@stoneslabs.co.za"],
                ["🕐", "Hours", "Mon–Fri 7:30–16:30 | Sat 8:00–12:00"],
              ].map(([icon, label, value]) => (
                <div key={label} style={{ display: 'flex', gap: 16, alignItems: 'start', marginBottom: 20 }}>
                  <div style={{ fontSize: 20, width: 32 }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--stone-400)', marginBottom: 4 }}>{label}</div>
                    <div style={{ fontSize: 15, color: 'var(--stone-700)' }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ height: 240, borderRadius: 12, background: 'var(--stone-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--stone-400)', fontSize: 14 }}>
              Google Map embed area
            </div>
          </div>
          <div style={{ background: 'var(--stone-50)', borderRadius: 16, padding: 32 }}>
            <QuoteForm embedded />
          </div>
        </div>
      </Section>

      <Section>
        <div id="book-visit" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <SectionTitle title="Book a Slab Viewing" sub="See and touch the materials before you decide. Book a viewing at our showroom or request samples delivered to your site." />
          <button onClick={onQuote} style={{ padding: '14px 32px', background: 'var(--stone-800)', color: 'white', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Book a Visit</button>
        </div>
      </Section>
    </>
  );
}

// --- MARBLE OBJET / STUDIO MARBELLA ---
function MarbleObjetPage() {
  const products = [
    { name: "Amoeba Coffee Table", price: "From R 14,000", img: "linear-gradient(135deg, #e8e0d4 0%, #d4c9b8 50%, #e8e0d4 100%)" },
    { name: "Drinks Coasters", price: "R 499", img: "linear-gradient(135deg, #f0ece4 0%, #e0d8cc 50%, #f0ece4 100%)" },
    { name: "Marble Quark Tray", price: "R 1,500", img: "linear-gradient(135deg, #d8d0c5 0%, #c8bfb0 50%, #d8d0c5 100%)" },
    { name: "The Peach Table", price: "From R 5,500", img: "linear-gradient(135deg, #e5ddd0 0%, #d5cbbe 50%, #e5ddd0 100%)" },
  ];

  return (
    <>
      <Hero
        headline={<><span style={{ fontStyle: 'italic' }}>Studio</span> Marbella</>}
        sub="Design objects in natural stone — curated pieces for refined spaces. Crafted in our Durban workshop with the same precision we bring to architectural stone."
        cta="Shop the Collection →"
        ctaAction={() => window.open('https://www.studiomarbella.co.za', '_blank')}
        bg="linear-gradient(135deg, #2d261c 0%, #1a1610 100%)"
      />

      <Section bg="white">
        <SectionTitle label="Featured Pieces" title="From the Collection" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
          {products.map((p, i) => (
            <div key={i} style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid var(--stone-100)', cursor: 'pointer', transition: 'all 0.3s' }}
              onClick={() => window.open('https://www.studiomarbella.co.za', '_blank')}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
              <div style={bgStyle(p.img, 240)} />
              <div style={{ padding: 20 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--stone-800)', marginBottom: 4 }}>{p.name}</div>
                <div style={{ fontSize: 14, color: 'var(--stone-500)' }}>{p.price}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="https://www.studiomarbella.co.za" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '16px 40px', background: 'var(--stone-800)', color: 'white', borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: 'none', fontFamily: 'var(--font-body)', letterSpacing: '0.3px' }}>
            Visit studiomarbella.co.za →
          </a>
        </div>
      </Section>

      <Section>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--stone-600)' }}>
            Studio Marbella is our collection of design objects crafted in natural stone. Every piece is made in our Durban workshop using offcuts and selected slabs, applying the same CNC precision and hand-finishing that goes into our architectural work. For bespoke commissions, get in touch.
          </p>
        </div>
      </Section>
    </>
  );
}


// ============================================================
// APP
// ============================================================
// --- URL ROUTING HELPERS ---
function pageToPath(page) {
  if (page === "home") return "/";
  if (page.startsWith("material-")) return "/material/" + page.replace("material-", "");
  if (page.startsWith("brand-")) return "/brand/" + page.replace("brand-", "");
  if (page.startsWith("project-")) return "/project/" + page.replace("project-", "");
  return "/" + page;
}

function pathToPage(path) {
  if (path === "/" || path === "") return "home";
  const clean = path.replace(/^\//, "").replace(/\/$/, "");
  if (clean.startsWith("material/")) return "material-" + clean.replace("material/", "");
  if (clean.startsWith("brand/")) return "brand-" + clean.replace("brand/", "");
  if (clean.startsWith("project/")) return "project-" + clean.replace("project/", "");
  return clean;
}

export default function App() {
  const [page, setPage] = useState(() => pathToPage(window.location.pathname));
  const [quoteModal, setQuoteModal] = useState(false);
  const [quotePreselect, setQuotePreselect] = useState({});

  useEffect(() => {
    const onPop = () => setPage(pathToPage(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (p) => {
    setPage(p);
    window.history.pushState(null, "", pageToPath(p));
    window.scrollTo(0, 0);
  };

  const openQuote = (preselect) => {
    setQuotePreselect(preselect || {});
    setQuoteModal(true);
  };

  const renderPage = () => {
    if (page === "home") return <HomePage onNavigate={navigate} onQuote={() => openQuote()} />;
    if (["kitchens", "vanities", "staircases", "cladding"].includes(page)) return <ServicePage service={page} onNavigate={navigate} onQuote={(p) => openQuote(p)} />;
    if (page === "materials") return <MaterialsPage onNavigate={navigate} onQuote={() => openQuote()} />;
    if (page.startsWith("material-")) return <MaterialDetailPage id={page.replace("material-", "")} onNavigate={navigate} onQuote={(p) => openQuote(p)} />;
    if (page === "brands") return <BrandsPage onNavigate={navigate} />;
    if (page.startsWith("brand-")) return <BrandPage slug={page.replace("brand-", "")} onNavigate={navigate} onQuote={() => openQuote()} />;
    if (page === "projects") return <ProjectsPage onNavigate={navigate} />;
    if (page.startsWith("project-")) return <ProjectDetailPage id={page.replace("project-", "")} onNavigate={navigate} onQuote={() => openQuote()} />;
    if (page === "designers") return <DesignersPage onNavigate={navigate} onQuote={() => openQuote()} />;
    if (page === "contact") return <ContactPage onQuote={() => openQuote()} />;
    if (page === "marble-objet") return <MarbleObjetPage />;
    return <HomePage onNavigate={navigate} onQuote={() => openQuote()} />;
  };

  return (
    <>
      <style>{styles}</style>
      <Nav current={page} onNavigate={navigate} onQuote={() => openQuote()} />
      <main>{renderPage()}</main>
      <Footer onNavigate={navigate} onQuote={() => openQuote()} />
      <QuoteModal show={quoteModal} onClose={() => setQuoteModal(false)} preselect={quotePreselect} />
      
      {/* Mobile floating CTA */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: '12px 16px', background: 'rgba(26,22,16,0.95)', backdropFilter: 'blur(8px)', zIndex: 90, display: 'none' }}>
        <style>{`@media (max-width: 1024px) { .mobile-float { display: flex !important; } }`}</style>
        <div className="mobile-float" style={{ display: 'none', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="tel:031XXXXXXX" style={{ color: 'white', fontSize: 13, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>📞 Call Us</a>
          <button onClick={() => openQuote()} style={{ flex: 1, maxWidth: 200, padding: '12px', background: 'white', color: 'var(--stone-900)', border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Get Quote</button>
        </div>
      </div>
    </>
  );
}
