"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Check, CheckCircle2, DollarSign, Quote, XCircle } from "lucide-react";
import flywheelImage from "@/app/assests/flywheelmodel.png";
import kunalImage from "@/app/assests/kunalmondal.png";
import mausamImage from "@/app/assests/mausamarora.png";
import { Target, BarChart3, ClipboardEdit, IndianRupee ,ArrowDown ,ArrowUp } from "lucide-react";
import { ArrowRight, MousePointer2 } from 'lucide-react';
import { ShieldCheck, TrendingUp, UserCheck, Zap } from "lucide-react";
import { Pointer } from 'lucide-react';
import logo from "@/app/assests/logo.png";
  import React from "react";


import {
  MousePointerClick,

  FlaskConical,
  Trophy,
} from "lucide-react";


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

const hiddenCostLeft = [
  { 
    label: "Cost per lead (CPL)", 
    icon: <Target className="h-4 w-4 text-[#FF6467]" /> 
  },
  { 
    label: "Lead volume", 
    icon: <BarChart3 className="h-4 w-4 text-[#FF6467]" /> 
  },
  { 
    label: "Form fills", 
    icon: <ClipboardEdit className="h-4 w-4 text-[#FF6467]" /> 
  },
  { 
    label: "Daily spend", 
    icon: <DollarSign className="h-4 w-4 text-[#FF6467]" /> 
  },
];
const inHouseRoles = [
  { role: "Meta Performance Marketer", cost: "$6,500" },
  { role: "Creative Strategist", cost: "$5,000" },
  { role: "Video Editor", cost: "$3,500" },
  { role: "Graphic Designer", cost: "$3,500" },
];

const additionalFeatures = [
  "A proven scaling\nframework",
  "A structured creative\ntesting system",
  "Performance optimisation\nworkflows",
];

const hiddenCostRight = [
  { 
    label: "Cost per qualified lead (CPQL)", 
    icon: <ShieldCheck className="h-4 w-4 text-[#10B981]" /> 
  },
  { 
    label: "Lead-to-close rate", 
    icon: <TrendingUp className="h-4 w-4 text-[#10B981]" /> 
  },
  { 
    label: "Sales-accepted leads", 
    icon: <UserCheck className="h-4 w-4 text-[#10B981]" /> 
  },
  { 
    label: "Predictable pipeline", 
    icon: <Zap className="h-4 w-4 text-[#10B981]" /> 
  },
];

const marketShiftItems = [
  "Minor creative tweaks",
  "Changing audience interests blindly",
  "Increasing budgets without a system",
  "Switching Campaigns on & off",
];

const flywheelCards = [
  {
    badge: "A1",
    badgeClass: "from-[#686CF2] to-[#7A84F6]",
    title: "🔰 A1 — Testing → Scale",
    body: "Launch structured tests: multiple creatives, offers, regional angles. Winners flow immediately to a dedicated scale campaign.",
    goalColor: "text-[#2563EB]",
    goal: "Find lead magnets that convert. Isolate. Pour budget.",
  },
  {
    badge: "A2",
    badgeClass: "from-[#FA781C] to-[#FA8D36]",
    title: "⚙️ A2 — Lock & Scale Aggressively",
    body: "After ~90 days, we lock cost per qualified lead. No more fluctuations. Then drastically scale ad spend across regions.",
    goalColor: "text-[#7C3AED]",
    goal: "Predictable volume. Aggressive growth.",
  },
  {
    badge: "A3",
    badgeClass: "from-[#2ECF95] to-[#14BC84]",
    title: "🔬 A3 — Micro Analysis & Redistribution",
    body: "Analyze by day of week, hour, region. Redistribute budget to high-performing segments daily.",
    goalColor: "text-[#10B981]",
    goal: "Squeeze every dollar from your lead budget.",
  },
];

const caseStudies = [
  {
    title: "Financial Services Brand Loan Lead Generation",
    afterLabel: "AFTER (90 DAYS)",
    rows: [
      ["Monthly lead volume", "1,200", "2,880 (+140%)", "text-[#10B981]"],
      ["Cost per lead", "Baseline", "Down 32%", "text-[#10B981]"],
      ["Qualified lead rate", "28%", "41% (stable)", "text-[#10B981]"],
      ["Ad spend", "Baseline", "2.75x scaled", "text-[#2563EB]"],
    ],
    quote:
      "\"Acquirely didn't just run ads. They built a system that lets us predict how many qualified leads we'll get at what cost. That's rare.\"",
    author: "- Founder, Financial Services Brand",
  },
  {
    title: "International Education Brand (9 Regions, SGD 3K/day)",
    afterLabel: "AFTER (6 MONTHS)",
    rows: [
      ["Active regions", "4", "9", "text-[#10B981]"],
      ["Cost per lead (avg)", "$18", "$13 (-28%)", "text-[#10B981]"],
      ["Daily ad spend", "SGD 1K", "SGD 3K (scaled)", "text-[#2563EB]"],
      ["Inquiry-to-enrollment", "Baseline", "+22%", "text-[#10B981]"],
    ],
    quote:
      "\"We were spending SGD 90K/month with no predictability. Now we know exactly what each region delivers.\"",
    author: "- CMO, International Education Brand",
  },
  {
    title: "Professional Training Brand High-Ticket Program ($55K-$75K CAD)",
    afterLabel: "AFTER (4 MONTHS)",
    rows: [
      ["Qualified leads/month", "18", "30 (+67%)", "text-[#10B981]"],
      ["Cost per qualified lead", "Baseline", "Down 41%", "text-[#10B981]"],
      ["Enrollment inquiries", "6", "18 (3x)", "text-[#10B981]"],
      ["Ad spend", "Baseline", "4x scaled", "text-[#2563EB]"],
    ],
    quote:
      "\"Selling a high-ticket program via Facebook? Everyone said it's impossible. Acquirely built a system that actually works.\"",
    author: "- Founder, Professional Training Brand",
  },
];


const fitItems = [
  "You have a real sales process and someone following up on leads",
  "You're ready to spend seriously on ads — not just test the waters (real estate teams, mortgage brokers, med spas, professional services, home services)",
  "You've run ads before and know the problem isn't the platform",
  "You want predictable pipeline, not a one-month spike"
];

const notFitItems = [
  "You want leads fast with no system behind them",
  "You don't have a CRM or follow-up process",
  "You're looking for the cheapest option in the room",
  "You want to try it for a month and see"

];

const founders = [
  {
    name: "Mausam Arora",
    role: "Founder, Acquirely",
    tag: "Growth & Strategy Head",
    image: mausamImage,
    body:
      "For 11 years, Mausam scaled his own business the hard way — cold calls, trade shows, relationship by relationship. Then one insight changed everything: businesses that make the right people come to them grow differently. Predictably. At scale. That obsession with inbound systems is what Acquirely is built on. He's not an agency guy who learned ads — he's a founder who needed this system, built it, and now builds it for others.",
    bullets: [
      "Founder-level understanding of what happens before and after the click",
      "Managed $3mn+ in annual ad spend",
      "Specialises in funnel strategy, GTM thinking, and scaling systems",
    ],
  },
  {
    name: "Kunal Mondal",
    role: "Founder, Acquirely",
    tag: "Performance Marketing Lead",
    image: kunalImage,
    body:
      "Kunal has managed over $3mn+ in ad spend across 30+ brands in E-Commerce, EdTech, and Real Estate. He builds acquisition systems that drive predictable revenue, not just traffic. His hands-on approach ensures the A3 Flywheel runs without friction.",
    bullets: [
      "Hands-on Meta and Growth strategist",
      "Full-funnel acquisition systems using Google & Meta",
      "ROAS-focused scaling without wasted spend",
    ],
  },
];

const faqItems = [
  {
    question: "How long before I see stable cost per qualified lead?",
    answer: "Typically 4–6 weeks. First two weeks are data — we're learning what your audience responds to. Weeks 3–4 we iterate fast on creatives and targeting. By week 5–6, CPL stabilises as we double down on what's converting. Complex sales cycles may take slightly longer."
  },
  {
    question: "Do you guarantee a specific cost per lead?",
    answer: "We don't quote a number before seeing your data — that's how agencies overpromise and underdeliver. What we do guarantee is full transparency: every dollar spent, every lead generated, and exactly what we're doing to bring CPL down. Most clients hit their targets within 6–8 weeks."
  },
  {
    question: "What markets do you run campaigns in?",
    answer: "Globally. We've run campaigns across North America, Europe, the Middle East, Southeast Asia, and South Asia. Paid media works the same everywhere — what changes is the creative angle, platform mix, and audience behaviour. We adapt accordingly."
  },
  {
    question: "What if lead quality drops?",
    answer: "We don't optimise for volume. Every campaign is built around your ideal customer profile — right intent signals, right funnel stage. If quality drops, we trace it to the source — audience targeting, ad creative, or landing page messaging — and fix the actual leak, not just the surface numbers."
  },
  {
    question: "What kind of businesses do you work best with?",
    answer: "B2B and B2C brands with a defined offer and a real sales process. If you have a product the market wants and a team that can close, we'll build the pipeline. If the fundamentals aren't there yet, we'll tell you before taking your money."
  },
  {
    question: "What if we're already working with an agency?",
    answer: "Good — you'll have benchmarks to compare against. We'll audit your current performance and show you exactly where the gaps are. No pitch deck, no fluff. If we can do better, the numbers will show it."
  },
  {
    question: "How do we start?",
    answer: "Book a call, share your current numbers and goals, and we'll tell you honestly if we're the right fit. If yes, onboarding takes 5–7 days. No long-term contracts before we've proven anything."
  }
];

function CheckBullet({ color = "#10B981" }: { color?: string }) {
  return (
    <span className="mt-0.5 inline-flex shrink-0 items-center justify-center" style={{ color }}>
      <CheckCircle2 className="h-5 w-5" strokeWidth={2.2} />
    </span>
  );
}

function DotBullet({ color = "#EF4444" }: { color?: string }) {
  return (
    <span className="mt-0.5 inline-flex shrink-0 items-center justify-center" style={{ color }}>
      <XCircle className="h-5 w-5" strokeWidth={2.2} />
    </span>
  );
}

function SmallLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded border border-[#CFD5FD] bg-[#EDEFFF] px-4 py-2">
      <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
      <span className="font-['Inter'] text-[12px] font-semibold uppercase tracking-[1.2px] text-[#5332E2]">
        {children}
      </span>
    </div>
  );
}

function CaseStudyCard({
  title,
  afterLabel,
  rows,
  quote,
  author,
}: {
  title: string;
  afterLabel: string;
  rows: string[][];
  quote: string;
  author: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
      <div className="border-b border-[#E2E8F0] bg-[rgba(248,250,252,0.3)] px-4 py-5 sm:px-8 sm:py-6">
        <h3 className="text-lg font-bold text-[#1F2937] sm:text-2xl">{title}</h3>
      </div>
      <div className="grid gap-6 px-4 py-5 sm:gap-8 sm:px-8 sm:py-6 md:grid-cols-[minmax(0,559px)_minmax(280px,1fr)] md:items-start">
        <div className="overflow-hidden rounded-2xl border border-[#E2E8F0]">
          <div className="grid grid-cols-[1.5fr_1fr_1.2fr] bg-white text-left">
            <div className="border-b border-[#E2E8F0] px-4 py-4 text-xs font-bold uppercase tracking-[0.6px] text-[#64748B] sm:px-6">
              Metric
            </div>
            <div className="border-b border-[#E2E8F0] px-4 py-4 text-xs font-bold uppercase tracking-[0.6px] text-[#64748B] sm:px-6">
              Before
            </div>
            <div className="border-b border-[#E2E8F0] px-4 py-4 text-xs font-bold uppercase tracking-[0.6px] text-[#2563EB] sm:px-6">
              {afterLabel}
            </div>
          </div>
          {rows.map(([metric, before, after, color], index) => (
            <div
              key={metric}
              className={`grid grid-cols-[1.5fr_1fr_1.2fr] ${
                index !== rows.length - 1 ? "border-b border-[#E2E8F0]" : ""
              }`}
            >
              <div className="px-4 py-4 font-['Open_Sans'] text-sm text-black sm:px-6 sm:text-base">{metric}</div>
              <div className="px-4 py-4 font-['Open_Sans'] text-sm text-black sm:px-6 sm:text-base">{before}</div>
              <div className={`px-4 py-4 text-sm font-bold sm:px-6 sm:text-base ${color}`}>{after}</div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border-l-4 border-[#2563EB] bg-[rgba(37,99,235,0.05)] px-5 py-6 sm:px-6 sm:py-8">
          <Quote className="mb-5 h-9 w-9 text-[#BEDBFF]" strokeWidth={2.5} />
          <p className="font-['Open_Sans'] text-sm italic leading-6 text-[#1F2937] sm:text-lg sm:leading-[1.62]">{quote}</p>
          <p className="mt-4 text-sm font-bold text-[#1F2937] sm:mt-5 sm:text-lg">{author}</p>
        </div>
      </div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  priceBadge,
  bestFor,
  features,
  cta,
  featured = false,
}: {
  title: string;
  price: string;
  priceBadge: string;
  bestFor: string;
  features: string[];
  cta: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative flex h-full flex-col justify-between rounded-3xl bg-white p-5 shadow-sm sm:p-8 ${
        featured
          ? "border-2 border-[#007BFF] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]"
          : "border border-[#E2E8F0]"
      }`}
    >
      {featured ? (
        <div className="absolute right-0 top-0 rounded-bl-xl rounded-tr-[24px] bg-[#007BFF] px-6 py-1.5 text-sm font-bold text-white">
          SCALABLE
        </div>
      ) : null}

      <div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-bold text-[#0F172B] sm:text-2xl">{title}</h3>
            <p className="mt-1 text-sm font-bold text-[#007BFF] sm:text-base">{price}</p>
          </div>
          <div
            className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.6px] ${
              featured ? "bg-[#EEF2FF] text-[#6366F1]" : "bg-[#EFF6FF] text-[#007BFF]"
            }`}
          >
            {priceBadge}
          </div>
        </div>

        <p className="mt-6 font-['Open_Sans'] text-sm text-[#1E293B] sm:mt-8 sm:text-base">{bestFor}</p>

        <div className="mt-10">
          <div className="text-sm font-bold uppercase tracking-[1.4px] text-[#90A1B9]">What&apos;s Included:</div>
          <div className="mt-4 space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckBullet />
                <span className="font-['Open_Sans'] text-sm text-[#1E293B] sm:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`mt-8 inline-flex h-12 w-full items-center justify-center rounded-xl text-sm font-bold sm:mt-10 sm:h-14 sm:text-base ${
          featured
            ? "bg-gradient-to-r from-[#007BFF] to-[#6366F1] text-white shadow-[0_10px_15px_-3px_#BEDBFF,0_4px_6px_-4px_#BEDBFF]"
            : "border-2 border-[#007BFF] text-[#007BFF]"
        }`}
      >
        {cta}
      </button>
    </div>
  );
}

function FounderCard({
  name,
  role,
  tag,
  body,
  image,
  bullets,
}: {
  name: string;
  role: string;
  tag: string;
  body: string;
  image: any;
  bullets: string[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white shadow-[0_8px_32px_rgba(15,23,42,0.1)]">
      <div className="relative h-[300px] sm:h-[380px]">
        <Image src={image} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-70" />
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-normal">{name}</h3>
          <p className="mt-1 font-['Open_Sans'] text-sm text-white">{role}</p>
        </div>
        <div className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-md border border-white/30 bg-white/20 text-white backdrop-blur-sm">
          in
        </div>
      </div>
      <div className="p-5 sm:p-8">
        <div className="text-sm font-semibold uppercase tracking-[1.4px] text-[#4F46E5]">{tag}</div>
        <p className="mt-4 font-['Open_Sans'] text-sm leading-6 text-[#525252] sm:text-base sm:leading-[1.62]">{body}</p>
        <div className="mt-6 space-y-4">
          {bullets.map((bullet) => (
            <div key={bullet} className="flex items-start gap-3">
              <CheckBullet color="#4F46E5" />
              <span className="font-['Open_Sans'] text-sm text-[#404040]">{bullet}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white">
      {faqItems.map((item, index) => {
        const open = index === openIndex;

        return (
          <div key={item.question} className={index !== faqItems.length - 1 ? "border-b border-[#E5E7EB]" : ""}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left sm:gap-6 sm:px-8 sm:py-6"
            >
              <span className="text-sm font-normal leading-5 text-[#262626] sm:text-base sm:leading-[22px]">{item.question}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                  open ? "bg-[#EFF6FF] text-[#2563EB]" : "bg-[#F5F5F5] text-[#737373]"
                }`}
              >
                {open ? "-" : "+"}
              </span>
            </button>
            {open && item.answer ? (
              <div className="px-4 pb-5 sm:px-8 sm:pb-6">
                <p className="font-['Open_Sans'] text-sm leading-[23px] text-[#525252]">{item.answer}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default function DoneForYouLandingPage() {
    const [activePhase, setActivePhase] = useState(2); // Default to middle card

  return (
    <main className="bg-white text-[#1F2937]">
<section className="bg-[linear-gradient(115.83deg,#0F0C29_0%,#1A1560_40%,#24243E_100%)]">
  <div className="mx-auto max-w-[1440px] px-4 pb-10 pt-7 sm:px-8 sm:pb-12 lg:px-20 lg:pb-16">
    <Image src={logo} alt="Acquirely Logo" className="h-8 w-auto" />

    {/* The Container: Define areas for mobile and reset for desktop */}
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12">
      
      {/* 1. MAIN HEADING: Order 1 on Mobile */}
      <div className="order-1 lg:col-start-1">
        <h1>
          <span className="max-w-[623px] text-[32px] font-extrabold leading-[1.12] tracking-[-0.5px] text-transparent sm:text-[40px] sm:leading-[1.15] lg:text-[48px] lg:leading-[70px] bg-[linear-gradient(90deg,#818CF8_0%,#F97316_100%)] bg-clip-text">
            Stop Buying Leads.
          </span>
          <br className="hidden lg:block"/>
          <span className="max-w-[623px] pl-1.5 text-[32px] font-extrabold leading-[1.12] tracking-[-0.5px] text-white sm:pl-2 sm:text-[40px] sm:leading-[1.15] lg:text-[48px] lg:leading-[70px]">
            Start Building a
          </span>
            <span className="ml-2 max-w-[623px] text-[32px] font-extrabold leading-[1.12] tracking-[-0.5px] text-transparent sm:text-[40px] sm:leading-[1.15] lg:text-[48px] lg:leading-[70px] bg-[linear-gradient(90deg,#818CF8_0%,#F97316_100%)] bg-clip-text">
             Growth System.
            </span>
          </h1>
      </div>

      {/* 2. CUSTOM DATA COMPONENT: Order 2 on Mobile, Column 2 on Desktop */}
      <div className="order-2 mt-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0">
        <div className="mx-auto flex w-full max-w-[550px] flex-col gap-2 font-['Open_Sans'] sm:gap-3">
          
          {/* Before Section */}
          {/* FIXED: Reduced mobile padding from p-4 to p-3 */}
          <div className="rounded-2xl border border-[#4a1c1c] bg-[#14080a]/80 p-3 shadow-xl backdrop-blur-sm sm:p-5">
            <div className="mb-3 flex items-center gap-2 sm:mb-4">
              <div className="h-2 w-2 rounded-full bg-[#ff4d4d]"></div>
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#ff4d4d] sm:text-xs">Before Acquirely</span>
            </div>
            {/* FIXED: Changed grid-cols-1 to grid-cols-3 and reduced mobile gap */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {/* FIXED: Scaled down padding, text, and margins for mobile */}
              <div className="rounded-xl border border-white/5 bg-white/5 p-2 sm:p-3">
                <div className="text-[8px] font-semibold uppercase leading-tight tracking-wider text-gray-400 sm:text-[10px]">Cost Per Lead</div>
                <div className="my-1 text-lg font-bold text-white sm:text-2xl">$50</div>
                <div className="inline-flex w-full items-center justify-center rounded border border-[#4a1c1c] bg-[#3a0a0a]/50 px-1 py-0.5 text-center text-[8px] font-medium text-[#ff4d4d] sm:w-auto sm:justify-start sm:px-2 sm:text-[10px]">High & rising</div>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/5 p-2 sm:p-3">
                <div className="text-[8px] font-semibold uppercase leading-tight tracking-wider text-gray-400 sm:text-[10px]">Qualified Rate</div>
                <div className="my-1 text-lg font-bold text-white sm:text-2xl">18%</div>
                <div className="inline-flex w-full items-center justify-center rounded border border-[#4a1c1c] bg-[#3a0a0a]/50 px-1 py-0.5 text-center text-[8px] font-medium text-[#ff4d4d] sm:w-auto sm:justify-start sm:px-2 sm:text-[10px]">Unpredictable</div>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/5 p-2 sm:p-3">
                <div className="text-[8px] font-semibold uppercase leading-tight tracking-wider text-gray-400 sm:text-[10px]">Cost / Qual. Lead</div>
                <div className="my-1 text-lg font-bold text-white sm:text-2xl">$278</div>
                <div className="inline-flex w-full items-center justify-center rounded border border-[#4a1c1c] bg-[#3a0a0a]/50 px-1 py-0.5 text-center text-[8px] font-medium text-[#ff4d4d] sm:w-auto sm:justify-start sm:px-2 sm:text-[10px]">Bleeding spend</div>
              </div>
            </div>
          </div>

          {/* Middle Divider */}
          <div className="my-0.5 flex flex-col items-center justify-center sm:my-1">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#4a1c1c] bg-[#1a0a0a] sm:h-7 sm:w-7">
              <ArrowDown className="h-3 w-3 text-[#ff4d4d] sm:h-3.5 sm:w-3.5" strokeWidth={3} />
            </div>
            <div className="my-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#64748b] sm:my-2.5 sm:text-[10px]">
              90 Days With The A3 System
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#0f4a2b] bg-[#0a1a10] sm:h-7 sm:w-7">
              <ArrowDown className="h-3 w-3 text-[#00E599] sm:h-3.5 sm:w-3.5" strokeWidth={3} />
            </div>
          </div>

          {/* After Section */}
          <div className="rounded-2xl border border-[#0f4a2b] bg-[#07160e]/80 p-3 shadow-xl backdrop-blur-sm sm:p-5">
            <div className="mb-3 flex items-center gap-2 sm:mb-4">
              <div className="h-2 w-2 rounded-full bg-[#00E599]"></div>
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#00E599] sm:text-xs">After Acquirely</span>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="rounded-xl border border-white/5 bg-white/5 p-2 sm:p-3">
                <div className="text-[8px] font-semibold uppercase leading-tight tracking-wider text-gray-400 sm:text-[10px]">Cost Per Lead</div>
                <div className="my-1 text-lg font-bold text-white sm:text-2xl">$18</div>
                <div className="inline-flex w-full items-center justify-center gap-0.5 rounded border border-[#0f4a2b] bg-[#0a2a1a]/50 px-1 py-0.5 text-center text-[8px] font-medium text-[#00E599] sm:w-auto sm:justify-start sm:gap-1 sm:px-2 sm:text-[10px]">
                  <ArrowDown className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> 64% drop
                </div>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/5 p-2 sm:p-3">
                <div className="text-[8px] font-semibold uppercase leading-tight tracking-wider text-gray-400 sm:text-[10px]">Qualified Rate</div>
                <div className="my-1 text-lg font-bold text-white sm:text-2xl">29%</div>
                <div className="inline-flex w-full items-center justify-center gap-0.5 rounded border border-[#0f4a2b] bg-[#0a2a1a]/50 px-1 py-0.5 text-center text-[8px] font-medium text-[#00E599] sm:w-auto sm:justify-start sm:gap-1 sm:px-2 sm:text-[10px]">
                  <ArrowUp className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> Stable
                </div>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/5 p-2 sm:p-3">
                <div className="text-[8px] font-semibold uppercase leading-tight tracking-wider text-gray-400 sm:text-[10px]">Cost / Qual. Lead</div>
                <div className="my-1 text-lg font-bold text-white sm:text-2xl">$62</div>
                <div className="inline-flex w-full items-center justify-center gap-0.5 rounded border border-[#0f4a2b] bg-[#0a2a1a]/50 px-1 py-0.5 text-center text-[8px] font-medium text-[#00E599] sm:w-auto sm:justify-start sm:gap-1 sm:px-2 sm:text-[10px]">
                  <ArrowDown className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> 78% drop
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SUBTEXT & CTA: Order 3 on Mobile, but back to Column 1 on Desktop */}
      <div className="order-3 lg:col-start-1 lg:row-start-2">
        <h2 className="mt-2 font-['Open_Sans'] text-xl font-semibold text-white sm:m-0 sm:text-2xl">We build the growth engine. You scale.</h2>
        <p className="mt-2 max-w-[530px] font-['Open_Sans'] text-[15px] leading-6 text-white sm:text-base sm:leading-7 lg:text-lg lg:leading-[29px]">
        Most businesses run ads and get form fills that go nowhere. We build the system that turns ad spend into qualified pipeline — predictably, at scale.
        </p>
        
        <Link href="https://forms.acquirely.in/acquirely/form/LeadGenFunnelReviewCall/formperma/DEijNOw1e1C4Wd8r6luSZlNxj1zQVtObr106aUYe4-0">
          <button
            type="button"
            className="mt-7 inline-flex rounded-xl bg-[linear-gradient(102.78deg,#6366F1_0%,#4F46E5_100%)] px-5 py-3.5 text-center text-sm font-bold text-white shadow-[0_20px_25px_-5px_rgba(43,127,255,0.25),0_8px_10px_-6px_rgba(43,127,255,0.25)] sm:mt-8 sm:px-8 sm:py-4 sm:text-base lg:text-lg"
          >
             <span className="rotate-90"><Pointer/></span><span className="pl-2">Get Leads Your Sales Team Will Love</span>
          </button>
        </Link>
        
        <div className="mt-7 flex flex-col gap-2.5 font-['Open_Sans'] text-xs text-[#99A1AF] sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-6 sm:text-sm">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-[#2B7FFF]" strokeWidth={2.5} />
            <span>$3.6mn+ Ad Spend Managed</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-[#2B7FFF]" strokeWidth={2.5} />
            <span>9+ Regions Active</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-[#2B7FFF]" strokeWidth={2.5} />
            <span>75-Day Risk Reversal</span>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1440px]  py-10 sm:px-4 sm:py-12 lg:px-[120px] lg:py-16">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-4 sm:px-6 sm:gap-10">
            <SmallLabel>THE HIDDEN COST</SmallLabel>
            <div className="text-center">
              <h2 className="text-[28px] font-extrabold leading-[1.15] text-transparent sm:text-[34px] sm:leading-[1.2] lg:text-[40px] lg:leading-[40px] bg-[linear-gradient(90deg,#818CF8_0%,#F97316_100%)] bg-clip-text">
                Most Businesses Don't Have a Leads Problem. They Have a System Problem.
              </h2>
              <p className="mx-auto mt-4 max-w-[968px] font-opensans text-[15px] leading-6 text-[#1E293B] sm:text-[18px] sm:leading-7 lg:text-[20px]">
                You boosted a post. Maybe ran a campaign. Spent a few thousand dollars. Got clicks, maybe some form fills but nothing that turned into real revenue. So you stopped. Sound familiar?
                <br /><br />
                The issue isn't Facebook. It's that you were running ads without a structure built to convert. That's exactly what we fix.
              </p>
            </div>

            <div className="grid w-full gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-[#FFE2E2] bg-white p-5 shadow-sm sm:p-8">
                <div className="flex items-center gap-3">
                  <XCircle className="h-6 w-6 text-[#E7000B]" strokeWidth={2.2} />
                  <h3 className="text-base font-bold text-[#E7000B] sm:text-lg">What Most Agencies Optimize For</h3>
                </div>
                <div className="mt-6 space-y-4">
                  {hiddenCostLeft.map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-xl bg-[#F8FAFC] px-3 py-3">
                      <span className="font-['Open_Sans'] text-sm text-[#1E293B] sm:text-base">{item.label}</span>
                      <span className="text-[#FF6467]">{item.icon}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#DCFCE7] bg-white p-5 shadow-sm sm:p-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#10B981]" strokeWidth={2.2} />
                  <h3 className="text-base font-bold text-[#10B981] sm:text-lg">What Actually Matters</h3>
                </div>
                <div className="mt-6 space-y-4">
                  {hiddenCostRight.map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-xl bg-[rgba(240,253,244,0.5)] px-3 py-3">
                      <span className="font-['Open_Sans'] text-sm text-[#1E293B] sm:text-base">{item.label}</span>
                      <span className="text-[#10B981]">{item.icon}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-[900px] text-center">
              <p className="font-['Open_Sans'] text-[15px] leading-6 text-[#1E293B] sm:text-base sm:leading-7 lg:text-lg">
                When there's no system behind your ads, more budget just means more wasted spend.
              </p>
              <p className="mt-4 text-lg font-bold leading-7 text-[#1E293B] sm:text-xl">
                The businesses winning on Meta in 2026 aren't the ones with the biggest budgets they're the ones with the tightest systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-2 py-10 sm:px-8 sm:py-12 lg:px-[272px] lg:py-16">
          <div className="mx-auto max-w-[896px] px-2 text-center sm:px-6">
            <SmallLabel>MARKET SHIFT</SmallLabel>
            <h2 className="mt-10 text-[28px] font-extrabold leading-[1.15] text-transparent sm:mt-12 sm:text-[34px] sm:leading-[1.2] lg:text-[40px] lg:leading-[40px] bg-[linear-gradient(90deg,#818CF8_0%,#F97316_100%)] bg-clip-text">
              Meta&apos;s Algorithm Made Lead Gen Harder.
              <br />
             <span className="text-black"> We Made It Smarter.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-[892px] font-['Open_Sans'] text-[15px] leading-6 text-[rgba(31,41,55,0.8)] sm:mt-10 sm:text-base sm:leading-7 lg:text-lg lg:leading-[29px]">
              With updates like Andromeda, Meta&apos;s AI now prioritizes creative signals over interest targeting.
              Lead forms still work - but scaling without structure now kills lead quality.
            </p>

            <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 text-left sm:mt-10 sm:p-8">
              <h3 className="text-base font-semibold text-[#1F2937] sm:text-lg">Most brands kept doing the same:</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {marketShiftItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <DotBullet />
                    <span className="font-['Open_Sans'] text-[15px] text-[rgba(31,41,55,0.8)] sm:text-base lg:text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-[#1F2937] bg-[#161B28] px-5 py-6 sm:px-8 sm:py-8">
              <h3 className="text-lg font-semibold text-white sm:text-xl">The game changed. We leaned in.</h3>
              <p className="mt-4 font-['Open_Sans'] text-sm leading-6 text-[#94A3B8] sm:text-base sm:leading-[26px]">
                After analyzing $3.6mn+ in lead gen ad spend (across loans, education, aviation, real estate), we
                built the <span className="text-[#5332E2]
                ">A3 Flywheel</span> - a lead intelligence engine for the new Meta era.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center md:text-left">
            <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#6366F1] md:text-xs">
              HOW WE HELP YOU GROW
            </p>
            <h2 className="font-Montserrat mt-4 text-3xl font-extrabold leading-tight text-[#0F172A] md:text-5xl lg:text-[56px]">
              The A3 system that<br className="hidden md:block"/> <span className="text-[#EA580C]">compounds.</span>
            </h2>
            <p className="font-opensans mt-4 text-base text-[#475569] md:text-lg">
              Test everything → keep what wins → scale relentlessly. Three phases, one flywheel.
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center gap-6 lg:flex-row lg:items-stretch lg:justify-between lg:gap-4">
            {a3Phases.map((phase, index) => {
              const isActive = activePhase === phase.id;
              return (
                <React.Fragment key={phase.id}>
                  {/* Selectable Phase Card */}
                  <div
                    onClick={() => setActivePhase(phase.id)}
                    className={`relative w-full cursor-pointer rounded-[24px] border p-6 transition-all duration-300 md:p-8 lg:w-1/3 ${
                      isActive 
                        ? "border-[#E2E8F0] bg-white shadow-xl scale-[1.02]" 
                        : "border-[#F1F5F9] bg-[#FAFAFA] hover:border-[#E2E8F0] hover:bg-white hover:shadow-md"
                    }`}
                  >
                    {/* Watermark */}
                    <span className="absolute right-6 top-6 font-Montserrat text-[64px] font-black leading-none tracking-tighter text-[#0F172A]/[0.03]">
                      {phase.id}
                    </span>

                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm border border-[#F1F5F9]">
                      {phase.icon}
                    </div>

                    <p className="font-Montserrat text-xs font-bold uppercase tracking-widest text-[#6366F1]">
                      {phase.phase}
                    </p>
                    <h3 className="font-Montserrat mb-3 mt-1 text-2xl font-black text-[#0F172A]">
                      {phase.title}
                    </h3>
                    <p className="font-opensans mb-8 text-sm leading-relaxed text-[#475569]">
                      {phase.desc}
                    </p>
                    <div className="inline-flex rounded-full bg-[#FFF7ED] px-4 py-2 text-xs font-semibold text-[#EA580C] border border-[#FFEDD5]">
                      {phase.badge}
                    </div>
                  </div>

                  {/* Arrow between cards (Desktop only) */}
                  {index < a3Phases.length - 1 && (
                    <div className="hidden shrink-0 items-center justify-center lg:flex">
                      <ArrowRight className="h-6 w-6 text-[#CBD5E1]" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px]  py-10 sm:px-8 sm:py-12 lg:px-20 lg:py-16">
          <div className="mx-auto max-w-[1280px] px-2 sm:px-6">
            <div className="flex justify-center">
              <SmallLabel>CLIENT RESULTS</SmallLabel>
            </div>
            <h2 className="mt-8 text-center text-[28px] font-extrabold leading-[1.15] text-[#1F2937] sm:mt-10 sm:text-[34px] sm:leading-[1.2] lg:text-[40px] lg:leading-[40px]">
              <span>From </span>
              <span className="bg-[linear-gradient(90deg,#818CF8_0%,#C084FC_45%)] bg-clip-text text-transparent">
                &quot;No system&quot;
              </span>
              <span> to </span>
              <span className="bg-[linear-gradient(90deg,#C084FC_0%,#F97316_100%)] bg-clip-text text-transparent">
                Predictable Pipelines.
              </span>
            </h2>
            <div className="mt-10 space-y-8">
              {caseStudies.map((study) => (
                <CaseStudyCard key={study.title} {...study} />
              ))}
            </div>
          </div>
        </div>
      </section>

   <section className="bg-[#0B0F1A] px-4 py-16 font-sans text-white md:py-24">
      <div className="mx-auto max-w-[1200px]">
        
        {/* Header Section */}
        <div className="mb-12 text-center md:mb-20">
          <div className="inline-flex h-[30px] items-center gap-2 rounded-[4px] border border-[#CFD5FD]/20 bg-[#EDEFFF]/10 px-3 md:h-[34px]">
            <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
            <span className="text-[10px] font-semibold uppercase tracking-[1.2px] text-[#818CF8] md:text-[12px]">
              Pricing
            </span>
          </div>

          <h2 className="mt-4 font-Montserrat text-[32px] font-bold leading-tight tracking-tight md:mt-6 md:text-[48px] lg:text-[56px]">
            <span className="bg-[linear-gradient(90deg,#818CF8_0%,#F97316_100%)] bg-clip-text text-transparent">
              Simple, Outcome-Based
            </span>
            <span className="text-white"> Pricing</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[600px] font-opensans text-[15px] leading-[24px] text-gray-400 md:text-[18px]">
            Month-to-month after your 30-day onboarding. No lock-ins.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          
          {/* Growth Plan */}
          <div className="relative flex flex-col rounded-[24px] border border-white/10 bg-[#161B28] p-8 lg:p-12">
            <div className="mb-8">
              <h3 className="text-[14px] font-bold uppercase tracking-widest text-[#818CF8]">Growth</h3>
              <p className="text-sm text-gray-400">For ad spend: $5,000 - $30,000/mo</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-[48px] font-bold text-white">$2,500</span>
                <span className="text-gray-400">USD / month</span>
              </div>
            </div>

            <div className="mb-10 flex-grow">
              <p className="mb-6 text-[12px] font-bold uppercase tracking-wider text-gray-500">What's Included:</p>
              <ul className="space-y-4">
                {[
                  "A3 System - structured test + scale system",
                  "Structured Meta Management (FB + Instagram)",
                  "Weekly creative variations & UGC editing",
                  "Lead quality monitoring & CPQL optimization",
                  "In-depth weekly performance reports"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-gray-300">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#818CF8]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-4 font-bold text-white transition-all hover:bg-white/10">
              Book a Funnel Audit <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Scale Plan */}
          <div className="relative flex flex-col rounded-[24px] border-2 border-[#5332E2] bg-[#0F1424] p-8 lg:p-12 shadow-[0_0_40px_rgba(83,50,226,0.15)]">
            <div className="absolute -top-4 right-8 rounded-full bg-[#5332E2] px-4 py-1 text-[12px] font-bold uppercase tracking-wider">
              Most Popular
            </div>
            
            <div className="mb-8">
              <h3 className="text-[14px] font-bold uppercase tracking-widest text-[#818CF8]">Scale</h3>
              <p className="text-sm text-gray-400">For ad spend: $30,000+/mo</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-[48px] font-bold text-white">10%</span>
                <span className="text-gray-400">of monthly ad spend</span>
              </div>
            </div>

            <div className="mb-10 flex-grow">
              <p className="mb-6 text-[12px] font-bold uppercase tracking-wider text-gray-500">Everything in Growth, Plus:</p>
              <ul className="space-y-4">
                {[
                  "Aggressive A3 scaling cadence (Weekly)",
                  "Multi-region campaign architecture",
                  "Micro-analysis: Day, hour & region redistribution",
                  "Dedicated Slack channel - founder direct access",
                  "Monthly growth strategy session"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-gray-300">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#818CF8]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#5332E2] py-4 font-bold text-white transition-all hover:bg-[#6344ef]">
              Book a Funnel Audit <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Guarantee Bar */}
        <div className="mt-12 rounded-[20px] bg-[#161B28] p-6 lg:mt-16 lg:p-8">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            <div className="flex items-start gap-4 text-center lg:text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#22C55E]/10 text-[#22C55E]">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold md:text-xl">
                  If we don't improve your lead economics—we work free.
                </h4>
                <p className="text-sm text-gray-400">
                  Until we hit the target CPQL or lead volume. You exit with a full learning handover.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 border-t border-white/5 pt-6 lg:border-none lg:pt-0">
              <div className="flex items-center gap-2 text-[13px] text-gray-300">
                <Check className="h-4 w-4 text-[#22C55E]" /> No lock-in contracts
              </div>
              <div className="flex items-center gap-2 text-[13px] text-gray-300">
                <Check className="h-4 w-4 text-[#22C55E]" /> Full data ownership
              </div>
              <div className="flex items-center gap-2 text-[13px] text-gray-300">
                <Check className="h-4 w-4 text-[#22C55E]" /> 90-day risk reversal
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

      <section className="bg-[#F9FAFB]">
        <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-8 sm:py-12 lg:px-[167px] lg:py-16">
          <div className="flex justify-center">
            <SmallLabel>NOT FOR EVERYONE</SmallLabel>
          </div>
          <h2 className="mx-auto mt-8 max-w-[1106px] text-center text-[28px] font-extrabold leading-[1.15] text-transparent sm:mt-10 sm:text-[34px] sm:leading-[1.2] lg:text-[40px] lg:leading-[49px] bg-[linear-gradient(90deg,#818CF8_0%,#F97316_42.79%)] bg-clip-text">
            We Work With Businesses Ready to Scale. 
            <br />
            <span className="text-black">

           Not Businesses Still Testing the Waters.
            </span>
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-[rgba(16,185,129,0.2)] bg-white shadow-sm">
              <div className="rounded-t-2xl bg-[#10B981] px-6 py-5 text-sm font-semibold text-white sm:px-9 sm:py-6 sm:text-base">THIS IS FOR YOU</div>
              <div className="space-y-5 px-5 py-5 sm:space-y-6 sm:px-8 sm:py-6">
                {fitItems.map((item, index) => (
                  <div key={item}>
                    <div className="flex items-start gap-3">
                      <CheckBullet />
                      <span className="font-['Open_Sans'] text-sm text-[#1F2937] sm:text-base">{item}</span>
                    </div>
                    {index !== fitItems.length - 1 ? <div className="mt-5 border-t border-[#E2E8F0]" /> : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[rgba(239,68,68,0.2)] bg-white shadow-sm">
              <div className="rounded-t-2xl bg-[#EF4444] px-6 py-5 text-sm font-semibold text-white sm:px-9 sm:py-6 sm:text-base">NOT FOR YOU</div>
              <div className="space-y-5 px-5 py-5 sm:space-y-6 sm:px-8 sm:py-6">
                {notFitItems.map((item, index) => (
                  <div key={item}>
                    <div className="flex items-start gap-3">
                      <DotBullet />
                      <span className="font-['Open_Sans'] text-sm text-[#64748B] sm:text-base">{item}</span>
                    </div>
                    {index !== notFitItems.length - 1 ? <div className="mt-5 border-t border-[#E2E8F0]" /> : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB]">
        <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-8 sm:py-12 lg:px-[132px] lg:py-16">
          <div className="flex justify-center">
            <SmallLabel>MEET THE FOUNDERS</SmallLabel>
          </div>
          <h2 className="mt-8 text-center text-[28px] font-bold text-[#171717] sm:mt-10 sm:text-[34px] sm:leading-[1.2] lg:text-[40px] lg:leading-[60px]">
            The Minds Behind Acquirely
          </h2>
          <p className="mt-3 text-center text-[15px] text-[#737373] sm:text-base lg:text-lg">Built by Operators - Not Just Agency Owners</p>

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {founders.map((founder) => (
              <FounderCard key={founder.name} {...founder} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-8 sm:py-12 lg:px-20 lg:py-16">
          <div className="flex justify-center">
            <SmallLabel>GOT QUESTIONS?</SmallLabel>
          </div>
          <h2 className="mt-8 text-center text-[28px] font-bold text-[#171717] sm:mt-10 sm:text-[34px] sm:leading-[1.2] lg:text-[40px] lg:leading-[48px]">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-10 max-w-[768px]">
            <FaqAccordion />
          </div>
        </div>
      </section>

      <section className="bg-[#0F172A]">
        <div className="mx-auto max-w-[1640px]  py-4 sm:px-2 sm:py-16 lg:px-[170px] lg:py-4">
          <div className="px-2 py-8 sm:px-2 sm:py-12">
            <div className="mx-auto max-w-[1425px] px-2 py-6 text-center sm:px-8 sm:py-10">
            <h2 className="mx-auto max-w-[1425px] text-[22px] font-bold leading-[1.15] text-white sm:text-[38px] sm:leading-[1.15] lg:text-[48px] lg:leading-[59px]">
              <span>Ready to Turn </span>
              <span className="bg-[linear-gradient(90deg,#A78BFA_0%,#F97316_100%)] bg-clip-text text-transparent">
                &quot;No system&quot;
              </span>
              <span> Into a Predictable Pipeline?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[610px] font-['Open_Sans'] text-[12px] leading-6 text-[#DBEAFE] sm:mt-6 sm:text-[18px] sm:leading-8 lg:text-[20px] lg:leading-9">
              If you're a Vancouver-area or North American business that's tried Facebook ads, spent real money, and didn't see the return you expected the system was the problem, not the platform.
              <br className="hidden sm:block" />
              Let's fix it.
            </p>
            <Link href="https://forms.acquirely.in/acquirely/form/LeadGenFunnelReviewCall/formperma/DEijNOw1e1C4Wd8r6luSZlNxj1zQVtObr106aUYe4-0">
            
            <button
              type="button"
              className="mt-7 inline-flex min-h-[52px] items-center justify-center rounded-xl bg-white px-4 py-3.5 text-center text-[12px] font-bold text-[#0F172A] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] sm:mt-8 sm:min-h-[56px] sm:px-8 sm:py-4 sm:text-base lg:px-10 lg:text-[20px]"
            >
             <span className="rotate-90 "><Pointer/></span> <span className="pl-2">Book Your Lead Gen Growth Audit</span>
            </button>
              </Link>
            <div className="mt-5 flex flex-col items-center justify-center gap-2 text-xs text-[#BEDBFF] sm:mt-6 sm:flex-row sm:gap-8 sm:text-sm">
              <span>No lock-in</span>
              <span>75-day risk reversal</span>
              <span>Full transparency</span>
            </div>

             <div className="md:mt-6 mt-6 border-t border-white/20 pt-8 flex flex-col gap-6"></div>

            
              <div className="flex text-center mt-4 items-center justify-center gap-6 order-1 md:order-2 md:text-[16px] text-[12px] text-white/90">
            This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, This site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc.
          
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}