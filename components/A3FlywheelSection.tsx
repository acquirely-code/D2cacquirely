"use client";
import flywheelmodel from "@/app/assests/flywheelmodel.png";
import Image from "next/image";
import { useState } from "react";

  import React from "react";




interface PhaseDetailCard {
  label: string;
  title: string;
  desc: string;
}


import {
  ArrowRight,

  FlaskConical,
  Trophy,
   X,
   TrendingUp,
} from "lucide-react";


interface PhaseDetail {
  title: string;
  sub: string;
  cards: PhaseDetailCard[];
}

const a3Phases = [
  {
    id: 1,
    phase: "PHASE 1",
    title: "Test",
    desc: "Run 15+ creative variants across audiences. Let data pick — not opinions.",
    badge: "15+ creatives/month",
    icon: <FlaskConical className="h-5 w-5 text-[#818CF8]" />
  },
  {
    id: 2,
    phase: "PHASE 2",
    title: "Winners",
    desc: "Proven creatives graduate to dedicated scale campaigns. Zero guesswork.",
    badge: "Top 20% move forward",
    icon: <Trophy className="h-5 w-5 text-[#F97316]" />
  },
  {
    id: 3,
    phase: "PHASE 3",
    title: "Scale",
    desc: "Budget flows to what's working. Interests stacked, spend compounded.",
    badge: "ROAS 2x-4x in 90 days",
    icon: <TrendingUp className="h-5 w-5 text-[#10B981]" />
  }
];

const phaseDetails: Record<number, PhaseDetail> = {
  1: {
    title: "Phase 1 — Test campaign structure",
    sub: "Campaign 1 is our structured testing ground. Multiple creative packs, one mission: find your winners.",
    cards: [
      { label: "Campaign structure", title: "Broad audience targeting", desc: "We start wide — no interest stacking. Let Meta find who converts first." },
      { label: "Creative packs", title: "3–4 packs, 3–5 ads each", desc: "Each pack tests a different angle — UGC, static, motion. 15+ ads minimum per month." },
      { label: "Budget logic", title: "$5k–$30k/day test budget", desc: "Enough data to reach statistical significance in 7–10 days per creative." },
      { label: "Decision rule", title: "CPA + ROAS threshold", desc: "Any creative hitting our ROAS floor and CPM target moves to Phase 2." },
    ],
  },
  2: {
    title: "Phase 2 — Winners campaign structure",
    sub: "Proven creatives get their own campaign with controlled budgets. No more competing with fresh tests.",
    cards: [
      { label: "Campaign structure", title: "Isolated winner campaigns", desc: "Each proven creative runs in its own ad set — no cannibalisation from testing." },
      { label: "Audience layer", title: "Interest stacking begins", desc: "Winners get interest-stacked audiences added progressively to expand reach." },
      { label: "Budget logic", title: "Budget follows performance", desc: "We increase spend 20–30% every 3 days if ROAS holds. No random hikes." },
      { label: "Creative refresh", title: "Iteration on winners", desc: "Top performers get 2–3 angle variations tested alongside to extend their life." },
    ],
  },
  3: {
    title: "Phase 3 — Scale campaign structure",
    sub: "Maximum budget on maximum proof. Broad + interest stacked + lookalikes — all feeding from the same winner pool.",
    cards: [
      { label: "Campaign structure", title: "Aggressive scaling mode", desc: "Scale campaigns run CBO with proven creatives only. No experiments here." },
      { label: "Audience layer", title: "Lookalike + broad + interest", desc: "Three audience types running simultaneously — we find the cheapest converts." },
      { label: "Budget logic", title: "$300+/day when ready", desc: "Scale triggers only when ROAS is predictable across 14+ days of data." },
      { label: "Loop back", title: "Phase 1 keeps running", desc: "Testing never stops. New creatives constantly refresh the winner pool below." },
    ],
  },
};
// const flywheelPhases = [
//   {
//     code: "A1",
//     title: "Testing Phase",
//     timeframe: "Month 1-2",
//     description:
//       "We deploy a structured creative testing matrix - 15-20 ad variations across hooks, angles, and formats. Every dollar generates data, not just impressions.",
//     tags: ["Hook Testing", "Audience Mapping", "Funnel Validation"],
//     accent: "from-[#686CF2] to-[#7A84F6]",
//     badgeClass: "border-[#CFD5FD] bg-[#EDEFFF] text-[#4F49E9]",
//     tagBorder: "border-[#CFD5FD]",
//   },
//   {
//     code: "A2",
//     title: "Scaling Phase",
//     timeframe: "Month 2-4",
//     description:
//       "Winners from A1 get scaled using data-driven budget rules - not emotion. We use ROAS thresholds, frequency caps, and audience expansion signals to scale without killing performance.",
//     tags: ["ROAS-Based Scaling", "Lookalike Expansion"],
//     accent: "from-[#FA781C] to-[#FA8D36]",
//     badgeClass: "border-[#FEDFBA] bg-[#FFF7ED] text-[#EA580C]",
//     tagBorder: "border-[#FEDFBA]",
//   },
//   {
//     code: "A3",
//     title: "Optimization Phase",
//     timeframe: "Ongoing",
//     description:
//       "Insights from scaling feed back into new creative briefs. The flywheel compounds - each cycle produces better creatives, lower CAC, and higher ROAS than the last.",
//     tags: ["Creative Iteration", "CAC Reduction", "LTV Maximization"],
//     accent: "from-[#2ECF95] to-[#14BC84]",
//     badgeClass: "border-[#BEF6DD] bg-[#ECFDF5] text-[#047A57]",
//     tagBorder: "border-[#BEF6DD]",
//   },
// ];

function FlywheelDiagramPlaceholder() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div className="rounded-[14px] bg-white p-3 md:shadow-[0px_0px_4px_rgba(0,0,0,0.18)] sm:p-5 cursor-pointer" onClick={() => setIsZoomed(true)}>
        <Image className="md:h-full h-[240px]" src={flywheelmodel} alt="Flywheel Model" />
      </div>

      {isZoomed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4" onClick={() => setIsZoomed(false)}>
          <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={flywheelmodel} 
              alt="Flywheel Model Zoomed" 
              className="w-full h-auto"
            />
            <button 
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default function A3FlywheelSection() {
   const [activePhase, setActivePhase] = useState<number | null>(2); 
  
      const handlePhaseToggle = (id: number) => {
      setActivePhase(activePhase === id ? null : id);
    };
  
     // Default to middle card
    const activePhaseData = activePhase ? phaseDetails[activePhase] : null;
  return (



     <section className="bg-white px-4 py-12 sm:px-5 md:py-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center md:text-left">
            <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#6366F1] md:text-xs">
              HOW WE HELP YOU GROW
            </p>
            <h2 className="font-Montserrat mt-4 text-3xl font-extrabold leading-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-[56px]">
              The A3 system that<br className="hidden md:block" /> <span className="text-[#EA580C]">compounds.</span>
            </h2>
            <p className="font-opensans mt-4 text-sm text-[#475569] md:text-base lg:text-lg">
              Test everything → keep what wins → scale relentlessly. Three phases, one flywheel.
            </p>
          </div>

          {/* Phase Cards */}
          <div className="mt-10 flex flex-col items-center gap-5 md:mt-12 lg:flex-row lg:items-stretch lg:justify-between lg:gap-4">
            {a3Phases.map((phase, index) => {
              const isActive = activePhase === phase.id;
              return (
                <React.Fragment key={phase.id}>
                  <div
                    onClick={() => handlePhaseToggle(phase.id)}
                    className={`relative w-full cursor-pointer rounded-[24px] border p-5 transition-all duration-300 sm:p-6 md:p-8 lg:w-1/3 ${
                      isActive
                        ? "scale-[1.02] border-[#E2E8F0] bg-white shadow-xl ring-2 ring-[#6366F1]/20"
                        : "border-[#F1F5F9] bg-[#FAFAFA] hover:border-[#E2E8F0] hover:bg-white hover:shadow-md"
                    }`}
                  >
                    <span className="absolute right-4 top-4 font-Montserrat text-4xl font-black leading-none tracking-tighter text-[#0F172A]/[0.03] sm:right-6 sm:top-6 sm:text-5xl md:text-[64px]">
                      {phase.id}
                    </span>

                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#F1F5F9] bg-white shadow-sm sm:mb-5 md:mb-6 md:h-12 md:w-12">
                      {phase.icon}
                    </div>

                    <p className="font-Montserrat text-[11px] font-bold uppercase tracking-widest text-[#6366F1] md:text-xs">
                      {phase.phase}
                    </p>
                    <h3 className="font-Montserrat mb-2 mt-1 text-lg font-black text-[#0F172A] sm:text-xl md:mb-3 md:text-2xl">
                      {phase.title}
                    </h3>
                    <p className="font-opensans mb-5 text-xs leading-relaxed text-[#475569] sm:mb-6 md:mb-8 md:text-sm">
                      {phase.desc}
                    </p>
                    <div className="inline-flex flex-wrap rounded-full border border-[#FFEDD5] bg-[#FFF7ED] px-3 py-1.5 text-[10px] font-semibold text-[#EA580C] sm:text-[11px] md:px-4 md:py-2 md:text-xs">
                      {phase.badge}
                    </div>
                  </div>

                  {index < a3Phases.length - 1 && (
                    <div className="hidden shrink-0 items-center justify-center lg:flex">
                      <ArrowRight className="h-6 w-6 text-[#CBD5E1]" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Expandable Details Panel */}
          <div
            className={`mt-8 overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-[#FAFAFA] transition-all duration-500 ease-in-out ${
              activePhase ? "max-h-[1200px] opacity-100" : "max-h-0 border-transparent opacity-0"
            }`}
          >
            {activePhaseData && (
              <div className="p-5 sm:p-6 md:p-8">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-Montserrat text-base font-black text-[#0F172A] sm:text-lg md:text-xl">
                      {activePhaseData.title}
                    </h4>
                    <p className="font-opensans mt-2 text-xs text-[#475569] sm:text-sm">
                      {activePhaseData.sub}
                    </p>
                  </div>
                  <button
                    onClick={() => setActivePhase(null)}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] text-[#64748B] transition-colors hover:bg-white hover:text-[#0F172A]"
                    aria-label="Close detail panel"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {activePhaseData.cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-[#E2E8F0] bg-white p-4 sm:p-5"
                    >
                      <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-[#94A3B8] sm:text-[11px]">
                        {card.label}
                      </div>
                      <div className="mb-2 font-Montserrat text-xs font-bold text-[#0F172A] sm:text-sm">
                        {card.title}
                      </div>
                      <div className="font-opensans text-xs leading-relaxed text-[#475569] sm:text-sm">
                        {card.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    // <section className="bg-white">
    //   <div className="mx-auto max-w-[1440px] px-5 md:py-16 py-4 sm:px-6 lg:px-20 lg:py-[84px]">
    //     <div className="mx-auto max-w-[687px] text-center">
    //       <div className="inline-flex h-[34px] items-center gap-2 rounded-[4px] border border-[#CFD5FD] bg-[#EDEFFF] px-[10px]">
    //         <span className="text-base">🚀</span>
    //         <span className="text-[11px] font-semibold uppercase tracking-[1.2px] text-[#5332E2] sm:text-[12px]">
    //           The A3 Flywheel Solution
    //         </span>
    //       </div>

    //       <h2 className="mt-8 font-Montserrat text-[26px] md:text-[31px] leading-[1.08] text-black sm:text-[36px] lg:text-[40px] lg:leading-[44px]">
    //         <span className="block">The Growth System Built for the</span>
    //         <span className="block bg-[linear-gradient(90deg,#818CF8_0%,#F97316_42.79%)] bg-clip-text text-transparent">
    //           New Meta Ads Era
    //         </span>
    //       </h2>

    //       <p className="mx-auto font-opensans mt-5 max-w-[662px] text-[16px] leading-7 text-[#7B8BA0] sm:text-[18px]">
    //         After analysing $3.5M+ in Meta ad spend, we developed a structured paid acquisition framework designed for sustainable scaling.
    //       </p>
    //     </div>

    //     <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[480px_minmax(0,1fr)] lg:items-start lg:gap-12">
    //       <div className="space-y-10">
    //         {flywheelPhases.map((phase) => (
    //           <div key={phase.code} className="flex items-start gap-4 sm:gap-[29px]">
    //             <div
    //               className={`grid h-[53px] w-[53px] shrink-0 place-items-center rounded-[10px] bg-gradient-to-br ${phase.accent}`}
    //             >
    //               <span className="text-[26px] font-extrabold leading-[44px] text-white">
    //                 {phase.code}
    //               </span>
    //             </div>

    //             <div className="pt-1">
    //               <div className="flex flex-wrap items-center gap-2">
    //                 <h3 className="text-[16px] font-semibold leading-7 text-black">
    //                   {phase.title}
    //                 </h3>
    //                 <span
    //                   className={`rounded-[4px] border px-[7px] py-[2px] text-[12px] font-semibold leading-[17px] sm:text-[14px] ${phase.badgeClass}`}
    //                 >
    //                   {phase.timeframe}
    //                 </span>
    //               </div>

    //               <p className="mt-1 max-w-[433px] text-[14px] font-medium leading-6 text-[#7B8BA0] sm:text-[15px] sm:leading-5">
    //                 {phase.description}
    //               </p>

    //               <div className="mt-4 flex flex-wrap gap-2">
    //                 {phase.tags.map((tag) => (
    //                   <span
    //                     key={tag}
    //                     className={`rounded-[4px] border bg-white px-[7px] py-[3px] text-[11px] leading-4 text-[#7B8BA0] sm:text-[12px] ${phase.tagBorder}`}
    //                   >
    //                     {tag}
    //                   </span>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>

    //       <div className="lg:pt-4">
    //         <FlywheelDiagramPlaceholder />
    //       </div>
    //     </div>
    //   </div>




    // </section>
  );
}
