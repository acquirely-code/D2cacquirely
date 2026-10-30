import { withImgDims } from "@/lib/img-dims";
import { BOOK, IMG, ext, ARROW, TICK, SHIELD, P, icon, nav, hub, a3Section, metricTable, quote, inHouse, faqList, person, footer, mcta } from "./shared";
// Page markup for /ecommerce, rendered by Landing. Images live in public/ecommerce/img.

const problems: [string, string][] = [
  ["Test creatives randomly", "Creatives are tested without a clear system, leading to inconsistent and unreliable results."],
  ["Increase budgets emotionally", "Budgets are increased or reduced based on guesswork instead of actual performance data."],
  ["Pause campaigns too early", "Campaigns are paused too early, before the algorithm has enough data to optimise."],
  ["Depend on only 1-2 winning creatives", "Relying on just a few winning creatives leads to unstable performance and growth plateaus."],
];

const benefits: [string, string, string, string, string][] = [
  [P.bars, "Data Compounds", "Every creative test adds to your brand's intelligence library winning hooks, audience signals, format insights. By Month 6, your campaigns aren't guessing. They're running on 6 months of compounded performance data your competitors don't have.", "10x", "Smarter by Month 6"],
  [P.trend, "Revenue Compounds", "As the A3 system locks winning creatives and stabilises ROAS, scaling spend stops feeling like a gamble. Budgets increase with confidence because the system has already proven what works revenue grows because efficiency grows first.", "3x", "Average revenue growth in 90 days"],
  [P.dollar, "CAC Compounds Down", "Every cycle eliminates underperforming creatives and reallocates budget to proven winners. Over time, you're spending less to acquire the same customer not because of luck, but because the system gets tighter every month.", "Consistent", "CAC improvement month over month"],
];

const moreCases: [string, string, string, [string, string][], string, string][] = [
  ["Children’s Clothing Brand - Modish", "Children’s clothing · D2C", "Launched campaigns with a ROAS of 1.43, struggling to reach breakeven while scaling daily ad spend.", [
    ["A1", "Rapid creative testing across offers, visuals, and audience segments."],
    ["A2", "Stabilised ROAS at breakeven (2.34) then scaled daily budget from $2K to $15K."],
    ["A3", "Ongoing optimisation based on day‑parting and creative fatigue monitoring."],
  ], "They didn’t just run ads—they built a testing and scaling engine for us. Our ROAS improved to breakeven and we could finally scale with confidence.", "Founder, Modish"],
  ["Footwear Brand - No Strain", "Footwear · D2C", "Meta Ads account stuck at 1.57 ROAS for two years, relying mostly on catalogue ads. Scaling attempts failed despite strong product demand.", [
    ["A1", "Replaced catalogue‑only approach with angle‑based creative testing (comfort, durability, lifestyle)."],
    ["A2", "Identified winning combinations and scaled budgets while maintaining ROAS."],
    ["A3", "Continuous budget reallocation to high‑performing creatives and time slots."],
  ], "Our Meta Ads were stuck for years. Their structured testing approach finally helped us break the plateau and scale.", "Founder, No Strain"],
];

const moreCase = ([title, chip, problem, steps, q, who]: (typeof moreCases)[number], i: number) => `
      <article class="card case">
        <div class="case-data">
          <div class="k"><small>Problem</small><span>${problem}</span></div>
          ${quote(`"${q}"`, who)}
        </div>
        <div class="case-body">
          <div class="case-top"><span class="num${i ? " o" : ""}">0${i + 2}</span><span class="chip">${chip}</span></div>
          <h3>${title}</h3>
          <p class="eyebrow">Strategy Implemented</p>
          <ul class="d-steps">${steps.map(([k, v]) => `<li><b>${k}:</b><span>${v}</span></li>`).join("")}</ul>
          <a class="btn line" href="${BOOK}" ${ext}>Book Your Free Growth Audit →</a>
        </div>
      </article>`;

const trust: [string, string, string, string][] = [
  [P.shield, "#22C55E", "90-Day Guarantee", "We give your campaigns 75–90 days tostabilise and show real performance improvement.  No rushed decisions only data-backed evaluation."],
  [P.clock, "#3B82F6", "If Results Don't Improve", "If there’s no consistent ROAS growthafter the period—despite proper spendand support—we take responsibility.."],
  [P.unlock, "#A855F7", "No Lock-In Contract", "No long-term commitments. If it’s not working, you’re freeto walk away no obligations."],
  [P.trend, "#F59E0B", "Simple Rule", "We either work one extra monthfor free to improve results OR part ways with full campaignlearnings transferred."],
];

const levers: [string, boolean, string, string][] = [
  [P.package, false, "Strong Product-Market Fit", "Your product must already be validated with real demand before scaling."],
  [P.refresh, true, "Continuous Creative Testing", "Winning ads don’t last forever constant testing keeps performance growing."],
  [P.maximize, false, "Structured Scaling System", "A clear framework (like A3 Flywheel) ensures stable and predictable growth."],
  [P.bars, true, "Data-Driven Decisions", "Every move is backed by data not guess work. This is where most brands struggle and where westep in."],
];

const faqs: [string, string][] = [
  ["How quickly can results be seen?", "Initial winners typically appear within 3–6 weeks, followed by structured scaling."],
  ["How soon do campaigns launch?", "Campaigns usually go live within 5–7 days after onboarding."],
  ["What if ROAS targets aren’t met?", "We continuously optimise strategy, creatives, and scaling systems rather than just adjusting ads."],
  ["Are creatives included?", "We guide the creative strategy and testing framework. Execution can be structured separately."],
  ["Do you offer SEO or organic social media?", "No. Our focus is purely paid performance marketing and Meta Ads scaling systems."],
  ["Do you run international campaigns?", "Yes — including US, UAE, and UK markets."],
];

const tier = (name: string, spend: string, price: string, unit: string, fine: string, inc: string, items: string[], flag = "") => `
      <div class="card tier">
        ${flag ? `<span class="flag">${flag}</span>` : ""}
        <h3>${name}</h3>
        <span class="eyebrow">For ad spend ${spend}</span>
        <div class="big grad">${price}<small>${unit}</small></div>
        <p class="fine-print">${fine}</p>
        <p class="inc">${inc}</p>
        <ul>${items.map((x) => `<li>${x}</li>`).join("")}</ul>
        <a class="btn" href="${BOOK}" ${ext}>Book a Funnel Audit ${ARROW}</a>
      </div>`;

const markup = `
<!-- ============ NAV ============ -->
${nav([["#problem", "The Problem"], ["#flywheel", "A3 Flywheel"], ["#results", "Results"], ["#pricing", "Pricing"], ["#faq", "FAQ"]])}

<!-- ============ HERO ============ -->
<section class="hero" id="top">
  <div class="wrap hero-grid">
    <div>
      <span class="audience"><b>North America</b><span>Accepting <strong>2 new D2C brands</strong> this month</span></span>
      <h1><span class="ln">Your Ads Aren't <span class="grad">the Problem.</span></span> <span class="ln">Your System Is.</span></h1>
      <p class="d-sub">We build the growth engine. You scale.</p>
      <p class="lede">Most D2C brands run ads, watch ROAS fluctuate, and blame the algorithm. We build the A3 Flywheel — a structured test-scale-optimise system that compounds performance every month.</p>
      <div class="hero-cta">
        <a class="btn" href="${BOOK}" ${ext}>Get Leads Your Sales Team Will Love ${ARROW}</a>
      </div>
      <div class="trust-row">
        <span>${TICK}$3.6mn+ Ad Spend Managed</span>
        <span>${TICK}9+ Regions Active</span>
        <span>${TICK}75-Day Risk Reversal</span>
      </div>
    </div>
${hub("Before A3 System → After A3 System", "Gaming Brand • Real Data · 90 Days With The A3 Flywheel", [
  ["Monthly Rev<small>Plateaued before</small>", "$6K", "$18K", "3x growth"],
  ["ROAS<small>Couldn't scale before</small>", "2.5X", "4.39X", "75% lift"],
  ["Conv. Rate<small>Leaking spend before</small>", "1.5%", "4.8%", "3.1x jump"],
], `
      <div class="hub-note"><span class="ic">${icon(P.shield, "#4F46E5", 20)}</span><div><b>90-Day Risk Reversal</b><p>No improvement in ROAS or revenue after 90 days? We work the next month <strong>free</strong> — or you exit with full campaign learnings. Zero lock-in.</p></div></div>`)}
  </div>
</section>

<!-- ============ THE REAL PROBLEM ============ -->
<section class="band white" id="problem">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">The real problem</span>
      <h2><span class="grad">You Don't Have an Ads Problem.</span> You Have a Growth System Problem.</h2>
      <p>Most brands approach advertising without a structured scaling framework. Here’s what actually Happens</p>
    </div>
    <div class="split">
      <div class="card">
        <h3>Sound familiar?</h3>
        <ul class="x-list">${problems.map(([t, d]) => `<li><span><b>${t}</b><span>${d}</span></span></li>`).join("")}</ul>
      </div>
      <div class="andro">
        <span class="tag"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/></svg>What changed with Andromeda</span>
        <h3>Then Meta Changed the Game</h3>
        <p>With updates like Andromeda, Meta's AI now prioritises creative signals over targeting signals. Interest stacking is weaker. Budget scaling often breaks performance. Yet, most brands kept tweaking audiences while ignoring the real shift: creative-driven performance marketing.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============ A3 FLYWHEEL ============ -->
${a3Section("flywheel", "band")}

<!-- ============ WHY THE FLYWHEEL WINS (dark) ============ -->
<section class="band dark">
  <div class="wrap">
    <div class="head">
      <h2>Why the Flywheel Wins Every Time</h2>
      <p>Each phase amplifies the next. The longer it spins, the harder it is to stop.</p>
    </div>
    <div class="stats three">${benefits.map(([ic, t, d, v, l]) => `
      <div class="stat reveal">${icon(ic, "#F97316", 24)}<h3>${t}</h3><p>${d}</p><div class="d-val"><b>${v}</b><span>${l}</span></div></div>`).join("")}
    </div>
  </div>
</section>

<!-- ============ RESULTS ============ -->
<section class="band" id="results">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Real client. Real numbers. Real proof.</span>
      <h2>Real Results from the <span class="grad">A3 Flywheel Model</span></h2>
    </div>
    <div class="cases">
      <article class="card case reveal">
        <div class="case-data">
          <div class="k"><small>Result</small><b class="grad">3x</b><span>Monthly revenue, $6K → $18K in 90 days</span></div>
          <div class="proofs">
            <figure class="proof-shot"><video src="/video.mp4" poster="${IMG}/meta-ads-manager.png" autoplay loop muted playsinline controls preload="none"></video><figcaption><b>Meta Ads Manager</b> Gaming brand account</figcaption></figure>
            <figure class="proof-shot"><img src="${IMG}/shopify-dashboard.png" alt="Shopify dashboard for the gaming brand" loading="lazy"><figcaption><b>Shopify Dashboard</b> Gaming brand store</figcaption></figure>
            <p class="proof-hint">Tap the screenshot to enlarge</p>
          </div>
        </div>
        <div class="case-body">
          <div class="case-top"><span class="num">01</span><span class="chip">Gaming · D2C</span></div>
          <h3>Case Study 1: Gaming Brand</h3>
          <dl class="facts" style="grid-template-columns:1fr 1fr">
            <div><dt>Problem</dt><dd>Revenue stuck at $6K/month with ROAS 2.5x - couldn't scale without breaking performance</dd></div>
            <div><dt>Strategy Implemented</dt><dd><b>A3 Flywheel Model + Structured Creative Testing Engine</b></dd></div>
          </dl>
          <p class="eyebrow">Results After 90 Days</p>
${metricTable("After 90 Days", [["Revenue", "$6K/mo", "$18K/mo (+3x)"], ["ROAS", "2.5x", "4.39x (+75%)"], ["Cost Per Click", "Baseline", "Down 58%"], ["Conv. Rate", "1.5%", "4.8% (+3.1x)"]])}
          ${quote('"Finally an agency that thinks in systems, not campaigns. We stopped guessing and started scaling."', "Founder, Gaming Brand")}
          <a class="btn line" href="${BOOK}" ${ext}>Book Your Free Growth Audit →</a>
        </div>
      </article>
    </div>
    <details class="d-more">
      <summary><span><span class="when-closed">Explore More Case Studies</span><span class="when-open">Hide Case Studies</span></span></summary>
      <div class="cases">${moreCases.map(moreCase).join("")}
      </div>
    </details>
  </div>
</section>

<!-- ============ PRICING ============ -->
<section class="band white" id="pricing">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Pricing</span>
      <h2>Simple, <span class="grad">Outcome-Based</span> Pricing</h2>
      <p>Month-to-month after your 90-day onboarding. No lock-ins.</p>
    </div>
    <div class="price">${tier("Growth", "$5,000 – $30,000/mo", "$2,500", "USD / month", "≈ $3,000 CAD • Tax additional", "What's Included", [
      "A3 Flywheel — structured test → scale system",
      "Meta campaign management (FB + Instagram)",
      "Weekly creative variations + UGC editing",
      "ROAS, CPP, CPM Optimisation",
      "Bi-weekly performance reports",
    ])}${tier("Scale", "$30,000+/mo", "10%", "of monthly ad spend", "Billed in USD • CAD available on request", "Everything In Growth, Plus", [
      "Weekly creative refresh + scaling decisions based on CPQL thresholds",
      "Multi-funnel structure: cold, warm &amp; retargeting audiences managed separately",
      "Micro-analysis: day, hour &amp; region redistribution",
      "Dedicated Whatsapp group - real time communication",
      "Monthly review + next 30-day growth plan",
    ], "Most Popular")}
    </div>
    <p class="d-terms"><span>${TICK}Month-to-month after 90-day onboarding</span><span>${TICK}No setup fees</span><span>${TICK}Full data handover if you exit</span></p>
    <div class="promise-top">
      <span class="ic">${SHIELD}</span>
      <div>
        <b>If we don't improve your lead economics — we work free.</b>
        <span>After the 90-day stabilisation period, if there’s no clear improvement in ROAS or revenue at consistent CAC, we work the next month at <strong>zero management fee</strong> — or you exit with a full campaign handover and zero lock-in.</span>
        <p class="d-chks"><span>✓ No lock-in contracts</span><span>✓ Full data ownership</span><span>✓ 90-day risk reversal</span></p>
      </div>
    </div>
  </div>
</section>

<!-- ============ IN-HOUSE COST ============ -->
${inHouse()}

<!-- ============ ACCOUNTABILITY (dark) ============ -->
<section class="band dark">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Zero risk commitment</span>
      <h2>Built on Accountability <span class="grad">Not Empty Promises</span></h2>
      <p>We don't offer unrealistic guarantees. But we do take full responsibility for results.</p>
    </div>
    <div class="promise">${trust.map(([ic, c, t, d]) => `
      <div class="stat reveal"><span class="ic">${icon(ic, c, 20)}</span><b style="font-size:18px">${t}</b><span>${d}</span></div>`).join("")}
    </div>
  </div>
</section>

<!-- ============ FOUNDERS ============ -->
<section class="band">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Meet the founders</span>
      <h2>The Minds Behind Acquirely</h2>
      <p>Two seasoned strategists with decades of combined experience building brands that dominate their markets.</p>
    </div>
    <div class="team">${person("mausam-arora.jpg", "Mausam Arora", "Founder, Acquirely", "Growth &amp; Strategy Head, UMG",
      "For 11 years, Mausam scaled his own business the hard way — cold calls, trade shows, relationship by relationship. Then one insight changed everything: businesses that make the right people come to them grow differently. Predictably. At scale. That obsession with inbound systems is what Acquirely is built on. He's not an agency guy who learned ads — he's a founder who needed this system, built it, and now builds it for others.",
      ["Founder-level understanding of what happens before and after the click", "Managed $3.5M+ in annual ad spend", "Specialises in funnel strategy, GTM thinking, and scaling systems"],
      "https://in.linkedin.com/in/mausamarora")}${person("kunal-mondal.jpg", "Kunal Mondal", "Founder, Acquirely", "Performance Marketing Specialist",
      "Kunal has managed over $3.5M in ad spend across 30+ brands in E-Commerce, EdTech, and Real Estate. He builds acquisition systems that drive predictable revenue, not just traffic. His hands-on approach ensures the A3 Flywheel runs without friction.",
      ["Hands-on Meta Ads strategist", "Full-funnel acquisition systems using Google &amp; Meta", "ROAS-focused scaling without wasted spend"],
      "https://in.linkedin.com/in/kunal-meta-ads")}
    </div>
  </div>
</section>

<!-- ============ FAQ ============ -->
<section class="band white" id="faq">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Got questions?</span>
      <h2>Frequently Asked Questions</h2>
      <p>Everything DTC founders ask before partnering with us. Can't find your answer? <a href="${BOOK}" ${ext} style="color:var(--indigo-2);font-weight:600">Talk to us directly.</a></p>
    </div>
    ${faqList(faqs)}
  </div>
</section>

<!-- ============ SCALING FRAMEWORK ============ -->
<section class="band">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">Scaling Framework</span>
      <h2>What Does It Take to Scale From <span class="grad">$10K to $100K+?</span></h2>
      <p>Four critical levers separate stagnant brands from scalable ones.</p>
    </div>
    <div class="d-cards four">${levers.map(([ic, o, t, d]) => `
      <div class="card d-card reveal"><span class="ic${o ? " o" : ""}">${icon(ic, o ? "#F37513" : "#2B7FFF")}</span><h3>${t}</h3><p>${d}</p></div>`).join("")}
    </div>
  </div>
</section>

<!-- ============ FINAL CTA ============ -->
<section class="band white" id="book">
  <div class="wrap">
    <div class="dcard">
      <div>
        <h2>Ready to Break Past <span class="grad">$10K per Month?</span></h2>
        <p style="margin-top:12px">If you're serious about building a predictable revenue engine with scalable Meta Ads, let's talk.</p>
      </div>
      <div style="display:grid;align-content:center">
        <span class="eyebrow">Your move</span>
        <a class="btn blue" href="${BOOK}" ${ext} style="margin-top:16px;width:100%;padding:16px 22px;font-size:16px">Book Your Free Growth Audit ${ARROW}</a>
      </div>
    </div>
  </div>
</section>

${footer([["#results", "Case Studies"], ["#pricing", "Pricing"], ["#faq", "FAQ"]])}

${mcta("Book Your Free Growth Audit")}
`;

export default withImgDims(markup);
