"use client";

import { useRef } from "react";
import { Montserrat, Open_Sans } from "next/font/google";
import useLandingScripts from "./useLandingScripts";
import "./ecommerce.css";
import "./home.css";
import "./d2c.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-ecom-display" });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-ecom-body" });

// Renders a markup-driven landing page (home, /ecommerce, /lead-gen) in the acquirely.in design.
export default function Landing({ markup }: { markup: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  useLandingScripts(rootRef);

  return (
    <div
      ref={rootRef}
      className={`ecom hm ${montserrat.variable} ${openSans.variable}`}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
