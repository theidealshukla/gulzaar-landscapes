export interface Project {
  slug: string;
  title: string;
  category: string;
  client: string;
  duration: string;
  description: string;
  challenge: string;
  solution: string;
  mainImage: string;
  gallery: string[];
  colSpan?: string;
  rowSpan?: string;
}

export const projects: Project[] = [
  {
    slug: "the-balcony-garden",
    title: "Project One – The Balcony Garden",
    category: "Balcony Gardens",
    client: "Private Residence",
    duration: "3 Weeks",
    description: "A compact urban balcony transformed into an intimate, lush tropical retreat using vertical gardening techniques and premium potted palms.",
    challenge: "Limited floor space, high wind exposure, and lack of direct sunlight made traditional planting impossible.",
    solution: "We engineered a vertical living wall system to maximize greenery without consuming floor space. Wind-resistant native species and shade-loving tropicals were curated to thrive in this specific microclimate.",
    mainImage: "https://images.unsplash.com/photo-1524247108137-732e0f642303?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=800&auto=format&fit=crop"
    ],
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-2",
  },
  {
    slug: "farm-house-retreat",
    title: "Farm House Retreat",
    category: "Farmhouse Designs",
    client: "Boutique Estate",
    duration: "4 Months",
    description: "An expansive 5-acre estate designed with rolling lawns, a custom fruit orchard, and elegant stone pathways connecting architectural elements.",
    challenge: "The property suffered from severe soil erosion and lacked a cohesive transition between the main house and the natural forest edge.",
    solution: "We implemented large-scale retaining walls crafted from natural local stone, introduced deep-rooting native grasses to stabilize the soil, and designed gravel pathways that seamlessly blend the manicured lawns into the wild forest.",
    mainImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=800&auto=format&fit=crop"
    ],
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    slug: "urban-terrace-reborn",
    title: "Urban Terrace Reborn",
    category: "Terrace Gardens",
    client: "Penthouse Owners",
    duration: "6 Weeks",
    description: "Bringing the ground-level garden experience to the 15th floor with integrated seating and custom planters.",
    challenge: "Extreme rooftop heat, weight limits on the terrace structure, and high wind velocity.",
    solution: "We utilized ultra-lightweight fiberglass planters, drought-tolerant Mediterranean plant varieties, and built a custom wooden pergola to provide shade and reduce wind impact.",
    mainImage: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1524247108137-732e0f642303?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop"
    ],
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    slug: "rooftop-oasis",
    title: "Rooftop Oasis",
    category: "Terrace Gardens",
    client: "Commercial Hub",
    duration: "2 Months",
    description: "A corporate rooftop converted into an employee wellness garden, featuring Zen spaces and biophilic meeting zones.",
    challenge: "Creating distinct, private zones in a completely open, barren concrete rooftop while maintaining fire safety codes.",
    solution: "Used modular bamboo screens and large potted bamboos to create sound-damped meeting zones. Introduced fire-rated composite decking and low-maintenance succulents.",
    mainImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=800&auto=format&fit=crop"
    ],
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    slug: "the-green-lawn-renewed",
    title: "The Green Lawn Renewed",
    category: "Lawn Care",
    client: "Heritage Home",
    duration: "1 Month",
    description: "Restoring a decades-old dead lawn into a vibrant, perfectly leveled green carpet using advanced turfing methods.",
    challenge: "Compacted, nutrient-dead soil and significant water pooling issues during rain.",
    solution: "Excavated topsoil and introduced a sophisticated French drain system. Re-layered with rich compost-infused soil and installed premium hybrid Bermuda grass for extreme durability.",
    mainImage: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop"
    ],
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1",
  }
];
