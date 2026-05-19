const pricingTiers = [
  {
    tier: "Tier 1",
    range: "$2,000 - $30,000/mo ad spend",
    fee: "CAD $3,000/month + applicable tax",
    cardClass: "bg-[#F4F7FF]",
  },
  {
    tier: "Tier 2",
    range: "$30,000+/mo ad spend",
    fee: "10% of total monthly ad spend",
    cardClass: "bg-[#F0FFF5]",
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

export default function PricingSection() {
  return (
    <section className="bg-white px-4 py-8 font-sans md:py-16 lg:py-24">
      <div className="mx-auto max-w-[866px]">
        <div className="mb-8 text-center md:mb-12">
          <div className="inline-flex h-[30px] items-center gap-2 rounded-[4px] border border-[#CFD5FD] bg-[#EDEFFF] px-3 md:h-[34px]">
            <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
            <span className="text-[10px] font-semibold uppercase tracking-[1.2px] text-[#5332E2] md:text-[12px]">
              Pricing
            </span>
          </div>

          <h2 className="mt-4 font-Montserrat text-[28px] font-bold leading-tight tracking-tight md:mt-6 md:text-[36px] lg:text-[40px]">
            <span className="bg-[linear-gradient(90deg,#818CF8_0%,#F97316_100%)] bg-clip-text text-transparent">
              Transparent, Performance-
            </span>
            <br className="block sm:hidden" />
            <span className="text-black">Aligned Pricing</span>
          </h2>

          <p className="mx-auto mt-3 max-w-[663px] font-opensans text-[15px] leading-[24px] text-[#7B8BA0] md:mt-4 md:text-[18px] md:leading-[28px]">
            Both plans include the full A3 Flywheel system. The difference is how fast you want to move and how much direct support you need.
          </p>

          <div className="mx-auto mt-5 max-w-[720px] rounded-[14px] border border-[#CFD5FD] bg-[#F5F7FF] px-4 py-3 font-opensans text-[14px] leading-6 text-[#4C5A72] md:text-[15px]">
            All prices in Canadian Dollars (CAD). USD pricing available on request.
          </div>
        </div>

        <div className="mb-10 grid gap-4 sm:grid-cols-2 md:mb-12 md:gap-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.tier}
              className={`rounded-[16px] border border-black/5 px-5 py-8 text-center shadow-[0_12px_30px_rgba(15,23,42,0.04)] md:px-6 md:py-10 ${tier.cardClass}`}
            >
              <p className="text-[12px] font-bold uppercase tracking-[1.6px] text-[#6366F1]">{tier.tier}</p>
              <p className="mt-4 text-[16px] font-semibold text-[#374151] md:text-[18px]">{tier.range}</p>
              <p className="mt-3 text-[28px] font-bold leading-tight text-black md:text-[34px]">{tier.fee}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[23px] border border-[#E5E5E5] bg-white p-5 shadow-[0_0_4px_rgba(0,0,0,0.05)] md:p-8 lg:p-12">
          <h3 className="mb-6 text-[22px] font-semibold text-black md:mb-8 md:text-[28px] lg:text-[32px]">
            Compare That to Hiring In-House
          </h3>

          <div className="space-y-2 md:space-y-3">
            <div className="flex justify-between px-2 pb-2 text-[11px] font-medium uppercase tracking-[1.5px] text-[#ACACC3] md:px-4 md:text-[14px] md:tracking-[2px]">
              <span>Role</span>
              <span>Monthly Cost (CAD)</span>
            </div>

            {inHouseRoles.map((item) => (
              <div
                key={item.role}
                className="flex items-center justify-between rounded-[6px] bg-[#FAFAFA] px-3 py-3 md:px-5 md:py-4"
              >
                <span className="text-[14px] text-black md:text-[18px] lg:text-[20px]">{item.role}</span>
                <span className="font-Montserrat text-[14px] font-medium text-black md:text-[18px] lg:text-[20px]">
                  {item.cost}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col justify-between rounded-[6px] bg-[#FFF4F4] px-4 py-5 sm:flex-row sm:items-center md:mt-8 md:px-6 md:py-8">
            <span className="mb-2 text-[18px] font-bold text-[#B91C1C] sm:mb-0 md:text-[24px] lg:text-[28px]">
              Total In-House Cost
            </span>
            <div className="text-left sm:text-right">
              <span className="mb-1 block text-[28px] font-bold leading-[1] text-[#B91C1C] md:text-[36px] lg:text-[40px]">
                $18,500+
              </span>
              <span className="block text-[14px] text-[#B91C1C] md:text-[16px] lg:text-[18px]">/mo</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center md:mt-16">
          <h4 className="mb-8 text-[18px] font-bold text-black md:mb-10 md:text-[22px] lg:text-[24px]">
            And that still doesn&apos;t include:
          </h4>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4 md:gap-8">
            {additionalFeatures.map((feature) => (
              <div key={feature} className="flex flex-col items-center">
                <div className="mb-3 flex h-[40px] w-[40px] items-center justify-center rounded-[6px] bg-[#FBDEDE] md:mb-5 md:h-[45px] md:w-[46px]">
                  <p className="text-[20px] font-bold text-[#F87171]">X</p>
                </div>
                <p className="whitespace-pre-line text-[15px] leading-[22px] text-black md:text-[18px] md:leading-[28px] lg:text-[20px]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-r-[8px] border-l-[4px] border-[#2D4CFF] bg-[#F4F7FF] px-5 py-5 md:mt-16 md:px-8 md:py-7">
          <h5 className="mb-1 text-[16px] font-bold text-black md:text-[18px] lg:text-[20px]">The real risk?</h5>
          <p className="text-[14px] text-black md:text-[15px] lg:text-[16px]">
            Continuing with an agency that spends budget but never learns from the data.
          </p>
        </div>
      </div>
    </section>
  );
}
