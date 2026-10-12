const inHouseRoles = [
  { role: "A Standard Meta Ads Specialist", cost: "$6.5K" },
  { role: "A Conventional Creative Strategist", cost: "$5K" },
  { role: "A Junior Video Editor", cost: "$3.5K" },
  { role: "A Basic Graphic Designer", cost: "$3.5K" },
];

export default function InHouseCostSection() {
  return (
    <section className="bg-white px-4 py-8 md:py-16">
      <div className="mx-auto max-w-[1080px] rounded-[20px] border border-[#E5E5E5] bg-white p-5 shadow-sm md:rounded-[24px] md:p-12">
        <h2 className="font-Montserrat text-[24px] font-bold leading-tight text-black md:text-[40px]">
          Compare That to Hiring In-House
        </h2>

        <div className="mt-6 flex justify-between px-4 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#A3A3A3] md:mt-10 md:px-6 md:text-[13px]">
          <span>Role</span>
          <span>Monthly Cost</span>
        </div>

        <div className="mt-3 space-y-3 md:mt-4 md:space-y-4">
          {inHouseRoles.map((item) => (
            <div
              key={item.role}
              className="flex items-center justify-between gap-4 rounded-lg bg-[#FAFAFA] px-4 py-4 md:px-6 md:py-6"
            >
              <span className="font-opensans text-[14px] text-[#171717] md:text-[20px]">{item.role}</span>
              <span className="shrink-0 font-Montserrat text-[15px] font-medium text-[#171717] md:text-[22px]">{item.cost}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 rounded-lg bg-[#FDF2F2] px-4 py-6 md:mt-10 md:px-9 md:py-10">
          <span className="font-opensans text-[18px] font-bold text-[#B91C1C] md:text-[32px]">Total In-House Cost</span>
          <div className="shrink-0 text-right">
            <p className="font-opensans text-[26px] font-bold leading-none text-[#B91C1C] md:text-[48px]">$18.5K+</p>
            <p className="mt-1 font-opensans text-[13px] text-[#B91C1C] md:mt-2 md:text-[20px]">per month</p>
          </div>
        </div>
      </div>
    </section>
  );
}
