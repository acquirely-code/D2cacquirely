"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Star, ArrowDown, ArrowUp, Shield, Pointer } from "lucide-react";

import logo from "@/app/assests/logo.png";
import Client1 from "@/app/assests/founder1.png";
import Client2 from "@/app/assests/founder2.png";
import Client3 from "@/app/assests/founder3.png";
import Client4 from "@/app/assests/founder4.png";

const heroHighlights = [
  "We build the growth engine. You scale.",
  "Most D2C brands run ads, watch ROAS fluctuate, and blame the algorithm. We build the A3 Flywheel — a structured test-scale-optimise system that compounds performance every month.",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(115.83deg,#0F0C29_0%,#1A1560_40%,#24243E_100%)] text-white">
      <div className="mx-auto max-w-[1440px] px-4 pb-12 pt-7 sm:px-6 lg:px-20 lg:pb-12 lg:pt-[35px]">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Acquirely logo" width={100} height={24} className="h-6 w-auto" />
        </div>

        <div className="mt-8 grid grid-cols-1 lg:mt-[43px] lg:grid-cols-[598px_1fr] lg:items-start lg:gap-x-10">
          <div className="order-1 flex max-w-[598px] flex-col lg:col-start-1 lg:row-start-1">
            <div className="inline-flex min-h-[34px] w-fit max-w-full items-center gap-2 border border-[#4338CA] bg-[#312E81] px-3 py-2 text-[9px] font-semibold uppercase tracking-[1.2px] text-[#A5B4FC] sm:gap-3 sm:px-[10px] sm:text-[12px]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#34D399] sm:h-2 sm:w-2" />
              Accepting 2 new D2C brands this month - North America
            </div>

         <h1 className="mt-5 font-Montserrat text-[28px] font-bold leading-[1.2] text-white sm:mt-6 sm:text-[40px] sm:leading-[1.3] lg:text-[48px] lg:leading-[48px] lg:tracking-[-0.5px]">
  <span className="block">Your Ads Aren't</span>
  <span className="bg-[linear-gradient(90deg,#818CF8_0%,#C084FC_25%,#F97316_80%)] bg-clip-text text-transparent">
    the Problem.
  </span>
  <span className=" lg:inline"> Your System Is.</span>
</h1>
          </div>

          {/* CUSTOM DATA WIDGET REPLACING IMAGE */}
          <div className="order-2 mt-8 w-full lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:ml-8 lg:mt-0 lg:pt-[40px]">
            <div className="mx-auto flex w-full max-w-[600px] flex-col gap-2 font-['Open_Sans'] sm:gap-3">
              
              {/* Before Section */}
              <div className="rounded-2xl border border-[#3a1c1c] bg-[#14080a]/80 p-3 shadow-xl backdrop-blur-sm sm:p-5">
                <div className="mb-3 flex items-center justify-between sm:mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#ff4d4d]"></div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#ff4d4d] sm:text-xs">Before A3 System</span>
                  </div>
                  <span className="text-[9px] text-[#64748B] sm:text-[10px]">Gaming Brand • Real Data</span>
                </div>
                {/* Fixed: Forced grid-cols-3 on mobile to prevent massive vertical stacking */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="rounded-xl border border-white/5 bg-white/5 p-2 sm:p-3">
                    <div className="text-[8px] font-semibold uppercase leading-tight tracking-tight text-gray-400 sm:text-[10px] sm:tracking-wider">Monthly Rev</div>
                    <div className="my-1 text-lg font-bold text-white sm:my-1.5 sm:text-3xl">$6K</div>
                    <div className="inline-flex w-full items-center justify-center rounded border border-[#4a1c1c] bg-[#3a0a0a]/50 px-1 py-0.5 text-center text-[8px] font-medium text-[#ff4d4d] sm:w-auto sm:justify-start sm:px-2 sm:text-[10px]">Plateaued</div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/5 p-2 sm:p-3">
                    <div className="text-[8px] font-semibold uppercase leading-tight tracking-tight text-gray-400 sm:text-[10px] sm:tracking-wider">ROAS</div>
                    <div className="my-1 text-lg font-bold text-white sm:my-1.5 sm:text-3xl">2.5X</div>
                    <div className="inline-flex w-full items-center justify-center rounded border border-[#4a1c1c] bg-[#3a0a0a]/50 px-1 py-0.5 text-center text-[8px] font-medium text-[#ff4d4d] sm:w-auto sm:justify-start sm:px-2 sm:text-[10px]">Couldn't scale</div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/5 p-2 sm:p-3">
                    <div className="text-[8px] font-semibold uppercase leading-tight tracking-tight text-gray-400 sm:text-[10px] sm:tracking-wider">Conv. Rate</div>
                    <div className="my-1 text-lg font-bold text-white sm:my-1.5 sm:text-3xl">1.5%</div>
                    <div className="inline-flex w-full items-center justify-center rounded border border-[#4a1c1c] bg-[#3a0a0a]/50 px-1 py-0.5 text-center text-[8px] font-medium text-[#ff4d4d] sm:w-auto sm:justify-start sm:px-2 sm:text-[10px]">Leaking spend</div>
                  </div>
                </div>
              </div>

              {/* Middle Divider */}
              <div className="my-1 flex flex-col items-center justify-center gap-1.5 sm:gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#4a1c1c] bg-[#1a0a0a] sm:h-7 sm:w-7">
                  <ArrowDown className="h-3 w-3 text-[#ff4d4d] sm:h-3.5 sm:w-3.5" strokeWidth={3} />
                </div>
                <div className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#64748b] sm:text-[10px]">
                  90 Days With The A3 Flywheel
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#0f4a2b] bg-[#0a1a10] sm:h-7 sm:w-7">
                  <ArrowDown className="h-3 w-3 text-[#00E599] sm:h-3.5 sm:w-3.5" strokeWidth={3} />
                </div>
              </div>

              {/* After Section */}
              <div className="rounded-2xl border border-[#0f4a2b] bg-[#07160e]/80 p-3 shadow-xl backdrop-blur-sm sm:p-5">
                <div className="mb-3 flex items-center gap-2 sm:mb-4">
                  <div className="h-2 w-2 rounded-full bg-[#00E599]"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#00E599] sm:text-xs">After A3 System</span>
                </div>
                {/* Fixed: Forced grid-cols-3 on mobile */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="rounded-xl border border-white/5 bg-white/5 p-2 sm:p-3">
                    <div className="text-[8px] font-semibold uppercase leading-tight tracking-tight text-gray-400 sm:text-[10px] sm:tracking-wider">Monthly Rev</div>
                    <div className="my-1 text-lg font-bold text-white sm:my-1.5 sm:text-3xl">$18K</div>
                    <div className="inline-flex w-full items-center justify-center gap-0.5 rounded border border-[#0f4a2b] bg-[#0a2a1a]/50 px-1 py-0.5 text-center text-[8px] font-medium text-[#00E599] sm:w-auto sm:justify-start sm:gap-1 sm:px-2 sm:text-[10px]">
                      <ArrowUp className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> 3x growth
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/5 p-2 sm:p-3">
                    <div className="text-[8px] font-semibold uppercase leading-tight tracking-tight text-gray-400 sm:text-[10px] sm:tracking-wider">ROAS</div>
                    <div className="my-1 text-lg font-bold text-white sm:my-1.5 sm:text-3xl">4.39X</div>
                    <div className="inline-flex w-full items-center justify-center gap-0.5 rounded border border-[#0f4a2b] bg-[#0a2a1a]/50 px-1 py-0.5 text-center text-[8px] font-medium text-[#00E599] sm:w-auto sm:justify-start sm:gap-1 sm:px-2 sm:text-[10px]">
                      <ArrowUp className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> 75% lift
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/5 p-2 sm:p-3">
                    <div className="text-[8px] font-semibold uppercase leading-tight tracking-tight text-gray-400 sm:text-[10px] sm:tracking-wider">Conv. Rate</div>
                    <div className="my-1 text-lg font-bold text-white sm:my-1.5 sm:text-3xl">4.8%</div>
                    <div className="inline-flex w-full items-center justify-center gap-0.5 rounded border border-[#0f4a2b] bg-[#0a2a1a]/50 px-1 py-0.5 text-center text-[8px] font-medium text-[#00E599] sm:w-auto sm:justify-start sm:gap-1 sm:px-2 sm:text-[10px]">
                      <ArrowUp className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> 3.1x jump
                    </div>
                  </div>
                </div>
              </div>

              {/* Risk Reversal Banner */}
              <div className="mt-2 flex items-start gap-3 rounded-xl border border-[#2e2b5c] bg-[#110e2b]/80 p-3 shadow-xl backdrop-blur-sm sm:items-center sm:gap-4 sm:p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#4338CA] bg-[#312E81]/40 text-[#818CF8] sm:h-10 sm:w-10">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-white sm:text-sm">90-Day Risk Reversal</h4>
                  <p className="mt-1 text-[11px] leading-relaxed text-[#94a3b8] sm:text-[13px]">
                    No improvement in ROAS or revenue after 90 days? We work the next month <span className="font-semibold text-[#818CF8]">free</span> — or you exit with full campaign learnings. Zero lock-in.
                  </p>
                </div>
              </div>

            </div>
          </div>


           <div className="order-3 lg:col-start-1 lg:row-start-2">
        <h2 className="mt-2 font-['Open_Sans'] text-xl font-semibold text-white sm:m-0 sm:text-2xl">We build the growth engine. You scale.</h2>
        <p className="mt-2 max-w-[530px] font-['Open_Sans'] text-[15px] leading-6 text-white sm:text-base sm:leading-7 lg:text-lg lg:leading-[29px]">
        Most D2C brands run ads, watch ROAS fluctuate, and blame the algorithm. We build the A3 Flywheel — a structured test-scale-optimise system that compounds performance every month.
        </p>
        
        <Link href="https://booknow.acquirely.in/#/FRCNA">
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

          {/* <div className="order-3 mt-8 flex max-w-[598px] flex-col lg:col-start-1 lg:row-start-2 lg:mt-0">
            <div className="space-y-4 sm:space-y-3">
              <p>We build the growth engine. You scale.</p>
              {heroHighlights.map((highlight) => (
                <div key={highlight} className="flex gap-3 sm:gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-[#818CF8] sm:mt-2" />
                  <p className="font-opensans text-[15px] leading-relaxed text-white/90 sm:mt-1 sm:text-[17px] lg:text-[18px] lg:leading-[29px]">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="https://booknow.acquirely.in/#/FRCNA"
              className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[14px] bg-[linear-gradient(102.78deg,#6366F1_0%,#4F46E5_100%)] px-5 text-center font-opensans text-[15px] font-bold leading-6 text-white transition hover:brightness-110 sm:min-h-[56px] sm:max-w-[351px] sm:text-[18px]"
            >
              Book Your Free Growth Audit
              <ArrowRight className="h-4 w-4" />
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
          </div> */}
        </div>
      </div>
    </section>
  );
}