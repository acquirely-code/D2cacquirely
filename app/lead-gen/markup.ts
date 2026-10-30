import { withImgDims } from "@/lib/img-dims";
import { BOOK, ext, ARROW, TICK, SHIELD, P, icon, nav, hub, a3Section, metricTable, quote, inHouse, faqList, person, footer, mcta } from "@/app/ecommerce/shared";
// Page markup for /lead-gen, rendered by Landing (app/ecommerce/Landing.tsx).

const optimizeFor: [string, string][] = [
  [P.target, "Cost per lead (CPL)"],
  [P.bars, "Lead volume"],
  [P.form, "Form fills"],
  [P.dollar, "Daily spend"],
];
const actuallyMatters: [string, string][] = [
  [P.shield, "Cost per qualified lead (CPQL)"],
  [P.trend, "Lead-to-close rate"],
  [P.user, "Sales-accepted leads"],
  [P.zap, "Predictable pipeline"],
];

const marketShift = [
  "Minor creative tweaks",
  "Changing audience interests blindly",
  "Increasing budgets without a system",
  "Switching Campaigns on &amp; off",
];

// [title, chip, result, result label, after label, rows, quote, author]
const cases: [string, string, string, string, string, [string, string, string][], string, string][] = [
  ["Financial Services Brand Loan Lead Generation", "Financial services · Lead gen", "+140%", "Monthly lead volume in 90 days", "After (90 days)", [
    ["Monthly lead volume", "1,200", "2,880 (+140%)"],
    ["Cost per lead", "Baseline", "Down 32%"],
    ["Qualified lead rate", "28%", "41% (stable)"],
    ["Ad spend", "Baseline", "2.75x scaled"],
  ], "\"Acquirely didn't just run ads. They built a system that lets us predict how many qualified leads we'll get at what cost. That's rare.\"", "Founder, Financial Services Brand"],
  ["International Education Brand (9 Regions, SGD 3K/day)", "Education · Lead gen", "4 → 9", "Active regions in 6 months", "After (6 months)", [
    ["Active regions", "4", "9"],
    ["Cost per lead (avg)", "$18", "$13 (-28%)"],
    ["Daily ad spend", "SGD 1K", "SGD 3K (scaled)"],
    ["Inquiry-to-enrollment", "Baseline", "+22%"],
  ], "\"We were spending SGD 90K/month with no predictability. Now we know exactly what each region delivers.\"", "CMO, International Education Brand"],
  ["Professional Training Brand High-Ticket Program ($55K-$75K CAD)", "Professional training · Lead gen", "3x", "Enrollment inquiries in 4 months", "After (4 months)", [
    ["Qualified leads/month", "18", "30 (+67%)"],
    ["Cost per qualified lead", "Baseline", "Down 41%"],
    ["Enrollment inquiries", "6", "18 (3x)"],
    ["Ad spend", "Baseline", "4x scaled"],
  ], "\"Selling a high-ticket program via Facebook? Everyone said it's impossible. Acquirely built a system that actually works.\"", "Founder, Professional Training Brand"],
];

const caseCard = ([title, chip, result, label, after, rows, q, who]: (typeof cases)[number], i: number) => `
      <article class="card case reveal">
        <div class="case-data">
          <div class="k"><small>Result</small><b class="grad">${result}</b><span>${label}</span></div>
          ${quote(q, who)}
        </div>
        <div class="case-body">
          <div class="case-top"><span class="num${i % 2 ? " o" : ""}">0${i + 1}</span><span class="chip">${chip}</span></div>
          <h3>${title}</h3>
${metricTable(after, rows)}
          <a class="btn line" href="${BOOK}" ${ext}>Book Your Lead Gen Growth Audit →</a>
        </div>
      </article>`;

const tier = (name: string, spend: string, price: string, unit: string, fine: string, inc: string, items: string[], flag = "") => `
      <div class="card tier">
        ${flag ? `<span class="flag">${flag}</span>` : ""}
        <h3>${name}</h3>
        <span class="eyebrow">For ad spend: ${spend}</span>
        <div class="big grad">${price}<small>${unit}</small></div>
        <p class="fine-print">${fine}</p>
        <p class="inc">${inc}</p>
        <ul>${items.map((x) => `<li>${x}</li>`).join("")}</ul>
        <a class="btn" href="${BOOK}" ${ext}>Book a Funnel Audit ${ARROW}</a>
      </div>`;

const faqs: [string, string][] = [
  ["How long before I see stable cost per qualified lead?", "Typically 4–6 weeks. First two weeks are data — we're learning what your audience responds to. Weeks 3–4 we iterate fast on creatives and targeting. By week 5–6, CPL stabilises as we double down on what's converting. Complex sales cycles may take slightly longer."],
  ["Do you guarantee a specific cost per lead?", "We don't quote a number before seeing your data — that's how agencies overpromise and underdeliver. What we do guarantee is full transparency: every dollar spent, every lead generated, and exactly what we're doing to bring CPL down. Most clients hit their targets within 6–8 weeks."],
  ["What markets do you run campaigns in?", "Globally. We've run campaigns across North America, Europe, the Middle East, Southeast Asia, and South Asia. Paid media works the same everywhere — what changes is the creative angle, platform mix, and audience behaviour. We adapt accordingly."],
  ["What if lead quality drops?", "We don't optimise for volume. Every campaign is built around your ideal customer profile — right intent signals, right funnel stage. If quality drops, we trace it to the source — audience targeting, ad creative, or landing page messaging — and fix the actual leak, not just the surface numbers."],
  ["What kind of businesses do you work best with?", "B2B and B2C brands with a defined offer and a real sales process. If you have a product the market wants and a team that can close, we'll build the pipeline. If the fundamentals aren't there yet, we'll tell you before taking your money."],
  ["What if we're already working with an agency?", "Good — you'll have benchmarks to compare against. We'll audit your current performance and show you exactly where the gaps are. No pitch deck, no fluff. If we can do better, the numbers will show it."],
  ["How do we start?", "Book a call, share your current numbers and goals, and we'll tell you honestly if we're the right fit. If yes, onboarding takes 5–7 days. No long-term contracts before we've proven anything."],
];

const markup = `
<!-- ============ NAV ============ -->
${nav([["#problem", "The Problem"], ["#flywheel", "A3 System"], ["#results", "Results"], ["#pricing", "Pricing"], ["#faq", "FAQ"]])}

<!-- ============ HERO ============ -->
<section class="hero" id="top">
  <div class="wrap hero-grid">
    <div>
      <h1><span class="ln">Stop Buying Leads.</span> <span class="ln">Start Building a <span class="grad">Growth System.</span></span></h1>
      <p class="d-sub">We build the growth engine. You scale.</p>
      <p class="lede">Most businesses run ads and get form fills that go nowhere. We build the system that turns ad spend into qualified pipeline — predictably, at scale.</p>
      <div class="hero-cta">
        <a class="btn" href="${BOOK}" ${ext}>Get Leads Your Sales Team Will Love ${ARROW}</a>
      </div>
      <div class="trust-row">
        <span>${TICK}$3.6mn+ Ad Spend Managed</span>
        <span>${TICK}9+ Regions Active</span>
        <span>${TICK}75-Day Risk Reversal</span>
      </div>
    </div>
${hub("Before Acquirely → After Acquirely", "90 Days With The A3 System", [
  ["Cost Per Lead<small>High &amp; rising before</small>", "$50", "$18", "64% drop"],
  ["Qualified Rate<small>Unpredictable before</small>", "18%", "29%", "Stable"],
  ["Cost / Qual. Lead<small>Bleeding spend before</small>", "$278", "$62", "78% drop"],
])}
  </div>
</section>

<!-- ============ THE HIDDEN COST ============ -->
<section class="band white" id="problem">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">The hidden cost</span>
      <h2>Most Businesses Don't Have a Leads Problem. <span class="grad">They Have a System Problem.</span></h2>
      <p>You boosted a post. Maybe ran a campaign. Spent a few thousand dollars. Got clicks, maybe some form fills but nothing that turned into real revenue. So you stopped. Sound familiar?</p>
      <p>The issue isn't Facebook. It's that you were running ads without a structure built to convert. That's exactly what we fix.</p>
    </div>
    <div class="split">
      <div class="card">
        <h3>What Most Agencies Optimize For</h3>
        <ul class="x-list">${optimizeFor.map(([, l]) => `<li>${l}</li>`).join("")}</ul>
      </div>
      <div class="card">
        <h3>What Actually Matters</h3>
        <ul class="d-yes">${actuallyMatters.map(([, l]) => `<li>${l}</li>`).join("")}</ul>
      </div>
    </div>
    <p class="d-callout">When there's no system behind your ads, more budget just means more wasted spend.<br><b>The businesses winning on Meta in 2026 aren't the ones with the biggest budgets they're the ones with the tightest systems.</b></p>
  </div>
</section>

<!-- ============ MARKET SHIFT ============ -->
<section class="band">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Market shift</span>
      <h2>Meta's Algorithm Made Lead Gen Harder. <span class="grad">We Made It Smarter.</span></h2>
      <p>With updates like Andromeda, Meta's AI now prioritizes creative signals over interest targeting. Lead forms still work - but scaling without structure now kills lead quality.</p>
    </div>
    <div class="split">
      <div class="card">
        <h3>Most brands kept doing the same:</h3>
        <ul class="x-list">${marketShift.map((l) => `<li>${l}</li>`).join("")}</ul>
      </div>
      <div class="andro">
        <span class="tag">${icon(P.zap, "currentColor", 16)}The A3 Flywheel</span>
        <h3>The game changed. We leaned in.</h3>
        <p>After analyzing $3.6mn+ in lead gen ad spend (across loans, education, aviation, real estate), we built the <b>A3 Flywheel</b> - a lead intelligence engine for the new Meta era.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============ A3 SYSTEM ============ -->
${a3Section("flywheel", "band white")}

<!-- ============ CLIENT RESULTS ============ -->
<section class="band" id="results">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Client results</span>
      <h2>From "No system" to <span class="grad">Predictable Pipelines.</span></h2>
    </div>
    <div class="cases">${cases.map(caseCard).join("")}
    </div>
  </div>
</section>

<!-- ============ PRICING ============ -->
<section class="band white" id="pricing">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Pricing</span>
      <h2>Simple, <span class="grad">Outcome-Based</span> Pricing</h2>
      <p>Month-to-month after your 30-day onboarding. No lock-ins.</p>
    </div>
    <div class="price">${tier("Growth", "$5,000 - $30,000/mo", "$2,500", "USD / month", "≈ $3,000 CAD • Tax additional", "What's Included:", [
      "A3 System - structured test + scale system",
      "Structured Meta Management (FB + Instagram)",
      "Weekly creative variations &amp; UGC editing",
      "Lead quality monitoring &amp; CPQL optimization",
      "In-depth weekly performance reports",
    ])}${tier("Scale", "$30,000+/mo", "10%", "of monthly ad spend", "Billed in USD • CAD available on request", "Everything in Growth, Plus:", [
      "Weekly creative refresh + scaling decisions based on CPQL thresholds",
      "Multi-funnel structure: cold, warm &amp; retargeting audiences managed separately",
      "Micro-analysis: day, hours &amp; region redistribution",
      "Dedicated Whatsapp group - real time communication",
      "Monthly review + next 30-day growth plan",
    ], "Most Popular")}
    </div>
    <div class="promise-top">
      <span class="ic">${SHIELD}</span>
      <div>
        <b>If we don't improve your lead economics—we work free.</b>
        <span>Until we hit the target CPQL or lead volume. You exit with a full learning handover.</span>
        <p class="d-chks"><span>✓ No lock-in contracts</span><span>✓ Full data ownership</span><span>✓ 90-day risk reversal</span></p>
      </div>
    </div>
  </div>
</section>

<!-- ============ IN-HOUSE COST ============ -->
${inHouse()}

<!-- ============ NOT FOR EVERYONE ============ -->
<section class="band">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Not for everyone</span>
      <h2>We Work With Businesses Ready to Scale. Not Businesses Still Testing the Waters.</h2>
    </div>
    <div class="fit">
      <div class="card yes">
        <h3>This is for you</h3>
        <ul>
          <li>You have a real sales process and someone following up on leads</li>
          <li><span>You're ready to spend seriously on ads — not just test the waters (<strong>real estate teams, mortgage brokers, med spas, professional services, home services</strong>)</span></li>
          <li>You've run ads before and know the problem isn't the platform</li>
          <li>You want predictable pipeline, not a one-month spike</li>
        </ul>
      </div>
      <div class="card no">
        <h3>Not for you</h3>
        <ul>
          <li>You want leads fast with no system behind them</li>
          <li>You don't have a CRM or follow-up process</li>
          <li>You're looking for the cheapest option in the room</li>
          <li>You want to try it for a month and see</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ============ FOUNDERS ============ -->
<section class="band white">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Meet the founders</span>
      <h2>The Minds Behind Acquirely</h2>
      <p>Built by Operators - Not Just Agency Owners</p>
    </div>
    <div class="team">${person("mausam-arora.jpg", "Mausam Arora", "Founder, Acquirely", "Growth &amp; Strategy Head",
      "For 11 years, Mausam scaled his own business the hard way — cold calls, trade shows, relationship by relationship. Then one insight changed everything: businesses that make the right people come to them grow differently. Predictably. At scale. That obsession with inbound systems is what Acquirely is built on. He's not an agency guy who learned ads — he's a founder who needed this system, built it, and now builds it for others.",
      ["Founder-level understanding of what happens before and after the click", "Managed $3mn+ in annual ad spend", "Specialises in funnel strategy, GTM thinking, and scaling systems"],
      "https://in.linkedin.com/in/mausamarora")}${person("kunal-mondal.jpg", "Kunal Mondal", "Founder, Acquirely", "Performance Marketing Lead",
      "Kunal has managed over $3mn+ in ad spend across 30+ brands in E-Commerce, EdTech, and Real Estate. He builds acquisition systems that drive predictable revenue, not just traffic. His hands-on approach ensures the A3 Flywheel runs without friction.",
      ["Hands-on Meta and Growth strategist", "Full-funnel acquisition systems using Google &amp; Meta", "ROAS-focused scaling without wasted spend"],
      "https://in.linkedin.com/in/kunal-meta-ads")}
    </div>
  </div>
</section>

<!-- ============ FAQ ============ -->
<section class="band" id="faq">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Got questions?</span>
      <h2>Frequently Asked Questions</h2>
    </div>
    ${faqList(faqs)}
  </div>
</section>

<!-- ============ FINAL CTA ============ -->
<section class="band white" id="book">
  <div class="wrap">
    <div class="dcard">
      <div>
        <h2>Ready to Turn "No system" <span class="grad">Into a Predictable Pipeline?</span></h2>
        <p style="margin-top:12px">If you're a Vancouver-area or North American business that's tried Facebook ads, spent real money, and didn't see the return you expected the system was the problem, not the platform.</p>
        <p style="margin-top:10px;color:#fff;font-weight:600">Let's fix it.</p>
      </div>
      <div style="display:grid;align-content:center">
        <span class="eyebrow">Your move</span>
        <a class="btn blue" href="${BOOK}" ${ext} style="margin-top:16px;width:100%;padding:16px 22px;font-size:16px">Book Your Lead Gen Growth Audit ${ARROW}</a>
        <p class="d-terms"><span>${TICK}No lock-in</span><span>${TICK}75-day risk reversal</span><span>${TICK}Full transparency</span></p>
      </div>
    </div>
  </div>
</section>

${footer([["#results", "Client Results"], ["#pricing", "Pricing"], ["#faq", "FAQ"]])}

${mcta("Book Your Lead Gen Growth Audit")}
`;

export default withImgDims(markup);
