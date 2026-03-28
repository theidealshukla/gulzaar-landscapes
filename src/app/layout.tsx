import type { Metadata } from "next";
import { Cormorant, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gulzaar Landscapes | Modern Farmhouse Garden Designing & Landscaping in Indore",
  description:
    "Transform your outdoor space into a masterpiece with Gulzaar Landscapes. Premium farmhouse gardens, lawn renovation, balcony & terrace gardens in Indore. Expert landscape design since 2024.",
  keywords: [
    "landscaping company Indore",
    "farmhouse garden design",
    "terrace garden ideas",
    "modern landscaping",
    "Gulzaar Landscapes",
    "garden maintenance Indore",
  ],
  openGraph: {
    title: "Gulzaar Landscapes | Where Design Meets Nature",
    description:
      "We turn outdoor spaces into captivating havens. Expert design, development, and maintenance for breathtaking landscapes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
