"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Star, ArrowDown, ArrowUp, Shield } from "lucide-react";

import logo from "@/app/assests/logo.png";
import Client1 from "@/app/assests/Client1.jpg";
import Client2 from "@/app/assests/Client2.jpg";
import Client3 from "@/app/assests/Client3.jpg";
import Client4 from "@/app/assests/Clieent4.jpg";

const heroHighlights = [
  "We do not just run Meta Ads campaigns. We build performance marketing systems.",
  "We build performance marketing systems that find winning creatives, scale them profitably, and protect your ROAS - even as Meta's algorithm keeps changing.",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(115.83deg,#0F0C29_0%,#1A1560_40%,#24243E_100%)] text-white">
      <div className="mx-auto max-w-[1440px] px-5 pb-14 pt-7 sm:px-6 lg:px-20 lg:pb-12 lg:pt-[35px]">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Acquirely logo" width={100} height={24} className="h-6 w-auto" />
        </div>

        <div className="mt-10 grid grid-cols-1 lg:mt-[43px] lg:grid-cols-[598px_1fr] lg:items-start lg:gap-x-10">
          <div className="order-1 flex max-w-[598px] flex-col lg:col-start-1 lg:row-start-1">
            <div className="inline-flex min-h-[34px] w-fit max-w-full items-center gap-3 border border-[#4338CA] bg-[#312E81] px-[10px] py-2 text-[10px] font-semibold uppercase tracking-[1.2px] text-[#A5B4FC] sm:text-[12px]">
              <span className="h-2 w-2 rounded-full bg-[#34D399]" />
              Accepting 2 new D2C brands this month - North America
            </div>

            <h1 className="mt-6 font-Montserrat text-[30px] font-bold leading-[1.3] text-white sm:text-[40px] lg:text-[48px] lg:leading-[48px] lg:tracking-[-0.5px]">
              <span className="block">Scale Your Brand from</span>
              <span className="bg-[linear-gradient(90deg,#818CF8_0%,#C084FC_25%,#F97316_80%)] bg-clip-text text-transparent">
                $10K to $100K+ Monthly on Meta
              </span>
              <span className="block lg:inline"> - Profitably</span>
            </h1>
          </div>

          {/* CUSTOM DATA WIDGET REPLACING IMAGE */}
          <div className="order-2 mt-8 w-full lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:ml-8 lg:mt-0 lg:pt-[40px]">
            <div className="mx-auto flex w-full max-w-[600px] flex-col gap-2 font-['Open_Sans'] sm:gap-3">
              
              {/* Before Section */}
              <div className="rounded-2xl border border-[#3a1c1c] bg-[#14080a]/80 p-4 shadow-xl backdrop-blur-sm sm:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#ff4d4d]"></div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#ff4d4d] sm:text-xs">Before A3 System</span>
                  </div>
                  <span className="text-[10px] text-[#64748B]">Gaming Brand • Real Data</span>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                    <div className="text-[9px] font-semibold uppercase tracking-wider text-gray-400 sm:text-[10px]">Monthly Revenue</div>
                    <div className="my-1.5 text-2xl font-bold text-white sm:text-3xl">$6K</div>
                    <div className="inline-flex items-center rounded border border-[#4a1c1c] bg-[#3a0a0a]/50 px-2 py-0.5 text-[9px] font-medium text-[#ff4d4d] sm:text-[10px]">Plateaued</div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                    <div className="text-[9px] font-semibold uppercase tracking-wider text-gray-400 sm:text-[10px]">ROAS</div>
                    <div className="my-1.5 text-2xl font-bold text-white sm:text-3xl">2.5X</div>
                    <div className="inline-flex items-center rounded border border-[#4a1c1c] bg-[#3a0a0a]/50 px-2 py-0.5 text-[9px] font-medium text-[#ff4d4d] sm:text-[10px]">Couldn&apos;t scale</div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                    <div className="text-[9px] font-semibold uppercase tracking-wider text-gray-400 sm:text-[10px]">Conv. Rate</div>
                    <div className="my-1.5 text-2xl font-bold text-white sm:text-3xl">1.5%</div>
                    <div className="inline-flex items-center rounded border border-[#4a1c1c] bg-[#3a0a0a]/50 px-2 py-0.5 text-[9px] font-medium text-[#ff4d4d] sm:text-[10px]">Leaking spend</div>
                  </div>
                </div>
              </div>

              {/* Middle Divider */}
              <div className="my-1 flex flex-col items-center justify-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#4a1c1c] bg-[#1a0a0a]">
                  <ArrowDown className="h-3.5 w-3.5 text-[#ff4d4d]" strokeWidth={3} />
                </div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#64748b] sm:text-[10px]">
                  90 Days With The A3 Flywheel
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#0f4a2b] bg-[#0a1a10]">
                  <ArrowDown className="h-3.5 w-3.5 text-[#00E599]" strokeWidth={3} />
                </div>
              </div>

              {/* After Section */}
              <div className="rounded-2xl border border-[#0f4a2b] bg-[#07160e]/80 p-4 shadow-xl backdrop-blur-sm sm:p-5">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#00E599]"></div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#00E599] sm:text-xs">After A3 System</span>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                    <div className="text-[9px] font-semibold uppercase tracking-wider text-gray-400 sm:text-[10px]">Monthly Revenue</div>
                    <div className="my-1.5 text-2xl font-bold text-white sm:text-3xl">$18K</div>
                    <div className="inline-flex items-center gap-1 rounded border border-[#0f4a2b] bg-[#0a2a1a]/50 px-2 py-0.5 text-[9px] font-medium text-[#00E599] sm:text-[10px]">
                      <ArrowUp className="h-3 w-3" /> 3x growth
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                    <div className="text-[9px] font-semibold uppercase tracking-wider text-gray-400 sm:text-[10px]">ROAS</div>
                    <div className="my-1.5 text-2xl font-bold text-white sm:text-3xl">4.39X</div>
                    <div className="inline-flex items-center gap-1 rounded border border-[#0f4a2b] bg-[#0a2a1a]/50 px-2 py-0.5 text-[9px] font-medium text-[#00E599] sm:text-[10px]">
                      <ArrowUp className="h-3 w-3" /> 75% lift
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                    <div className="text-[9px] font-semibold uppercase tracking-wider text-gray-400 sm:text-[10px]">Conv. Rate</div>
                    <div className="my-1.5 text-2xl font-bold text-white sm:text-3xl">4.8%</div>
                    <div className="inline-flex items-center gap-1 rounded border border-[#0f4a2b] bg-[#0a2a1a]/50 px-2 py-0.5 text-[9px] font-medium text-[#00E599] sm:text-[10px]">
                      <ArrowUp className="h-3 w-3" /> 3.1x jump
                    </div>
                  </div>
                </div>
              </div>

              {/* Risk Reversal Banner */}
              <div className="mt-2 flex items-start gap-4 rounded-xl border border-[#2e2b5c] bg-[#110e2b]/80 p-4 shadow-xl backdrop-blur-sm sm:items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#4338CA] bg-[#312E81]/40 text-[#818CF8]">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">90-Day Risk Reversal</h4>
                  <p className="mt-1 text-xs text-[#94a3b8] sm:text-[13px]">
                    No improvement in ROAS or revenue after 90 days? We work the next month <span className="font-semibold text-[#818CF8]">free</span> — or you exit with full campaign learnings. Zero lock-in.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="order-3 flex max-w-[598px] flex-col lg:col-start-1 lg:row-start-2">
            <div className="space-y-3">
              {heroHighlights.map((highlight) => (
                <div key={highlight} className="flex gap-2">
                  <Check className="mt-2 h-5 w-5 shrink-0" />
                  <p className="mt-1 font-opensans text-[16px] leading-7 text-white/90 sm:text-[17px] lg:text-[18px] lg:leading-[29px]">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="https://forms.acquirely.in/acquirely/form/FunnelReviewCallECom/formperma/muJYVHXbKDbQ7N3xEPr_lrjkOuBMe33JPNULGFJm9Kg"
              className="mt-8 inline-flex min-h-[56px] w-full max-w-[351px] items-center justify-center gap-2 rounded-[14px] bg-[linear-gradient(102.78deg,#6366F1_0%,#4F46E5_100%)] px-5 text-center font-opensans text-[16px] leading-6 text-white transition hover:brightness-110 sm:text-[18px]"
            >
              Book Your Free Growth Audit
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="mt-6 flex flex-col gap-5 px-3">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex items-center">
                  {[Client1, Client2, Client3, Client4].map((client, index) => (
                    <Image
                      key={index}
                      src={client}
                      alt={`Client ${index + 1}`}
                      className="-ml-3 h-12 w-12 rounded-full border border-[#3730A3] transition-transform duration-300 hover:scale-110"
                    />
                  ))}
                  <div className="relative -ml-3 grid h-10 w-10 place-items-center rounded-full border-2 border-[#3730A3] bg-[linear-gradient(135deg,#6366F1_0%,#4F46E5_100%)] text-[12px] font-bold text-white">
                    +84
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5 text-[#FFA227]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="h-4 w-4 fill-current stroke-0" />
                      ))}
                    </div>
                    <span className="text-[14px] font-semibold text-white">4.9/5</span>
                  </div>
                </div>
              </div>

              <p className="font-opensans text-[13px] uppercase tracking-[1.4px] text-white/65 sm:text-[14px]">
                Brands across North America, India &amp; Southeast Asia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}