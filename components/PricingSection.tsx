import React from 'react';
import { Check, Shield, ArrowRight } from 'lucide-react';

const growthFeatures = [
  "A3 Flywheel — structured test → scale system",
  "Meta campaign management (FB + Instagram)",
  "Weekly creative variations + UGC editing",
  "ROAS, CPP, CPM Optimisation",
  "Bi-weekly performance reports"
];

const scaleFeatures = [
  "Weekly creative refresh + scaling decisions based on ROAS thresholds",
  "Multi-funnel structure: cold, warm & retargeting audiences managed separately",
  "Micro-analysis: day, hour & region redistribution",
  "Dedicated Whatsapp group - real time communication",
  "Monthly CAC/LTV review + next 30-day growth plan"
];

export default function PricingSection() {
  return (
    <section className="bg-white px-4 py-8 font-sans md:py-16 lg:py-24">
      <div className="mx-auto max-w-[1080px]">
        
        {/* Header Section */}
        <div className="mb-12 text-center md:mb-16">
          <div className="inline-flex h-[30px] items-center gap-2 rounded-[4px] border border-[#CFD5FD] bg-[#EDEFFF] px-3 md:h-[34px]">
            <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
            <span className="text-[10px] font-semibold uppercase tracking-[1.2px] text-[#5332E2] md:text-[12px]">
              Pricing
            </span>
          </div>

          <h2 className="mt-4 font-Montserrat text-[32px] font-bold leading-tight tracking-tight text-black md:mt-6 md:text-[44px] lg:text-[52px]">
            Simple, <span className="bg-[linear-gradient(90deg,#818CF8_0%,#F97316_100%)] bg-clip-text text-transparent">Outcome-Based</span> Pricing
          </h2>

          <p className="mx-auto mt-4 max-w-[600px] font-opensans text-[15px] leading-[24px] text-[#7B8BA0] md:text-[16px]">
            Month-to-month after your 90-day onboarding. No lock-ins.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          
          {/* GROWTH CARD */}
          <div className="flex flex-col rounded-[16px] border border-[#CFD5FD] bg-[#F4F7FF] p-6 shadow-sm md:p-8 lg:p-10">
            <div className="mb-8 border-b border-[#CFD5FD]/50 pb-8">
              <h3 className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#5332E2]">Growth</h3>
              <p className="mt-2 text-[14px] text-[#7B8BA0]">For ad spend <span className="font-semibold text-[#4C5A72]">$5,000 – $30,000/mo</span></p>
              
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-[40px] font-bold leading-none text-black md:text-[48px]">$2,500</span>
                <span className="text-[15px] font-medium text-[#7B8BA0]">USD / month</span>
              </div>
              <p className="mt-2 text-[12px] text-[#7B8BA0]">≈ $3,000 CAD • Tax additional</p>
            </div>

            <div className="mb-10 flex-grow">
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[1.5px] text-[#7B8BA0]">What's Included</p>
              <ul className="space-y-4">
                {growthFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-snug text-[#4C5A72] md:text-[15px]">
                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#10B981]/10">
                      <Check className="h-3 w-3 text-[#10B981]" strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-[8px] border border-[#5332E2] bg-transparent py-4 text-[15px] font-semibold text-[#5332E2] transition-colors hover:bg-[#5332E2]/5">
              Book a Funnel Audit <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* SCALE CARD */}
          <div className="relative flex flex-col rounded-[16px] border-2 border-[#5332E2] bg-[#F0FFF5] p-6 shadow-[0_12px_30px_rgba(83,50,226,0.12)] md:p-8 lg:p-10">
            <div className="absolute -top-4 right-6 rounded-full bg-[#5332E2] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white md:right-10">
              Most Popular
            </div>
            
            <div className="mb-8 border-b border-[#CFD5FD]/50 pb-8">
              <h3 className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#5332E2]">Scale</h3>
              <p className="mt-2 text-[14px] text-[#7B8BA0]">For ad spend <span className="font-semibold text-[#4C5A72]">$30,000+/mo</span></p>
              
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-[40px] font-bold leading-none text-black md:text-[48px]">10%</span>
                <span className="text-[15px] font-medium text-[#7B8BA0]">of monthly ad spend</span>
              </div>
              <p className="mt-2 text-[12px] text-[#7B8BA0]">Billed in USD • CAD available on request</p>
            </div>

            <div className="mb-10 flex-grow">
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[1.5px] text-[#7B8BA0]">Everything In Growth, Plus</p>
              <ul className="space-y-4">
                {scaleFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-snug text-[#4C5A72] md:text-[15px]">
                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#10B981]/20">
                      <Check className="h-3 w-3 text-[#059669]" strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#5332E2] py-4 text-[15px] font-semibold text-white transition-colors hover:bg-[#4326C2]">
              Book a Funnel Audit <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Small Footer Text */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-center text-[13px] text-[#7B8BA0] md:gap-4">
          <span>Month-to-month after 90-day onboarding</span>
          <span className="hidden h-1 w-1 rounded-full bg-[#CFD5FD] sm:block"></span>
          <span>No setup fees</span>
          <span className="hidden h-1 w-1 rounded-full bg-[#CFD5FD] sm:block"></span>
          <span>Full data handover if you exit</span>
        </div>

        {/* The Guarantee Box */}
        <div className="mt-12 rounded-[16px] border border-[#CFD5FD] bg-[#FAFBFF] p-6 shadow-sm md:mt-16 md:flex md:items-start md:gap-6 md:p-8">
          <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EDEFFF] text-[#5332E2] md:mb-0">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-Montserrat text-[18px] font-bold text-black md:text-[20px]">
              If we don't improve your lead economics — we work free.
            </h4>
            <p className="mt-2 text-[14px] leading-[24px] text-[#4C5A72] md:text-[15px]">
              After the 90-day stabilisation period, if there’s no clear improvement in ROAS or revenue at consistent CAC, we work the next month at <span className="font-bold text-black">zero management fee</span> — or you exit with a full campaign handover and zero lock-in.
            </p>
            
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#10B981]/30 bg-[#10B981]/5 px-3 py-1.5 text-[12px] font-semibold text-[#059669]">
                <Check className="h-3 w-3" /> No lock-in contracts
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#10B981]/30 bg-[#10B981]/5 px-3 py-1.5 text-[12px] font-semibold text-[#059669]">
                <Check className="h-3 w-3" /> Full data ownership
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#10B981]/30 bg-[#10B981]/5 px-3 py-1.5 text-[12px] font-semibold text-[#059669]">
                <Check className="h-3 w-3" /> 90-day risk reversal
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}