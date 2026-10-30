import { withImgDims } from "@/lib/img-dims";
import { BOOK, IMG, ext, ARROW, P, icon, nav, a3Section, inHouse, footer, mcta } from "@/app/ecommerce/shared";
// Page markup for the homepage, rendered by Landing (app/ecommerce/Landing.tsx).

const socials: [string, string, string, string][] = [
  ["https://www.facebook.com/profile.php?id=61578312825291#", "#1877F2", "Facebook", '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>'],
  ["https://www.instagram.com/acquirely.in", "#E4405F", "Instagram", '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>'],
  ["https://www.linkedin.com/company/acquirelydm/", "#0A66C2", "LinkedIn", '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'],
  ["https://www.youtube.com/@acquirelymedia", "#FF0000", "YouTube", '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><path d="M9.75 15.02l5.75-3.27-5.75-3.27z"/>'],
];

const studies: [string, string, string][] = [
  ["retroverse.png", "Retroverse", "ROAS 2.43 to 4.68"],
  ["modish.png", "Modish", "ROAS 2.31 to 3.53"],
  ["nostrain.png", "No Strain", "ROAS 1.36 to 2.65"],
];

// [icon, category, number, title, description, badge]
const services: [string, string, string, string, string, string][] = [
  [P.dashboard, "paid", "01", "Meta Ads Management", "We run structured A/B tests across audiences, creatives, and offers — letting data pick your winners, not gut feel.", "↗ Avg. ROAS lift: 1.8-2.4x in 60 days"],
  [P.search, "paid", "02", "Google Ads Management", "Search, Shopping, and Performance Max — tuned for purchase intent, not just clicks. Every Dollar tracked to revenue.", "↗ Lower CPAs with intent-first targeting"],
  [P.zap, "scale", "03", "Ad Creative Strategy &amp; Testing", "15+ creatives tested monthly. UGC, static, motion — we find the one that scales and build more of it.", "↗ Proven creative reduces CPM by 30-40%"],
  [P.filter, "funnel", "04", "Funnel Optimisation", "Landing page, checkout, post-purchase — we audit and fix every drop-off point so your ad spend isn't leaking.", "↗ Avg. 20-35% CVR improvement"],
  [P.activity, "funnel", "05", "Conversion Improvements", "CRO, offer framing, social proof placement — the small shifts that turn a 2% converter into a 4% converter.", "↗ More revenue, same ad budget"],
  [P.trend, "scale", "06", "Scaling Frameworks", "Our A3 model: test winners feed scale campaigns. No random budget hikes — a structured path from $10K to $100K/Month.", "↗ Modish: ROAS 2.31 → 3.53 in 90 days"],
];

// [icon, colour, title, description, badge]
const results: [string, string, string, string, string][] = [
  [P.trend, "#6366F1", "Predictable ROAS", "You'll know what you're getting before we scale. No more guessing if this month will be profitable.", "Retroverse: 2.43x → 4.68x"],
  [P.zap, "#F97316", "Creatives that scale", "A constant pipeline of tested winners — UGC, static, motion — so you never run the same tired ad twice.", "15+ tested per month"],
  [P.filter, "#10B981", "A funnel that converts", "We audit every drop-off point — landing page, checkout, post-purchase — and fix the leaks before scaling spend.", "Avg. 20-35% CVR lift"],
  [P.search, "#3B82F6", "Full transparency", "Weekly reports, live dashboards, no black-box reporting. You always know exactly where your money is going.", 'Modish: "transparency is unmatched"'],
  [P.trend, "#F43F5E", "A path to $100K/Month", "Our A3 model gives you a structured, data-backed road from $10K to $100K monthly — not just ad spend, real revenue.", "Modish: ROAS 2.31x → 3.53x"],
  [P.refresh, "#14B8A6", "A system that compounds", "Every winner feeds the next test. Every test feeds the next scale. The longer you run it, the better it gets.", "NoStrain: 1.36x → 2.65x"],
];

const tickerItem = ([img, alt, roas]: [string, string, string]) =>
  `<span><img src="${IMG}/${img}" alt="${alt} logo">${roas}</span>`;

const markup = `
<!-- ============ SOCIAL RAIL ============ -->
<div class="d-social" aria-label="Acquirely on social media">${socials.map(([href, bg, label, path]) => `
  <a href="${href}" ${ext} style="background:${bg}">${icon(path, "#fff", 20)}<span>${label}</span></a>`).join("")}
</div>

<!-- ============ NAV ============ -->
${nav([["#services", "What We Do"], ["#flywheel", "A3 System"], ["#results", "Case Studies"], ["/aboutus", "About Us"]], "Book a Meeting")}

<!-- ============ HERO ============ -->
<section class="hero" id="top">
  <div class="wrap hero-grid">
    <div>
      <h1><span class="ln">Scale Profitably With A</span> <span class="ln"><span class="grad">Proven Performance Marketing</span> Agency</span></h1>
      <p class="lede">Grow from $10K to $100K+ monthly with data-driven Meta Ads</p>
      <div class="hero-cta">
        <a class="btn" href="${BOOK}" ${ext}>Book a Growth Call Here! ${ARROW}</a>
        <div class="blogos" aria-label="Founders scaling with Acquirely">${[1, 2, 3, 4, 5].map((n) => `<span class="bl face"><img src="${IMG}/founder${n}.png" alt="User ${n}"></span>`).join("")}</div>
      </div>
    </div>
    <div><img class="d-hero-img" src="${IMG}/main-hero.png" alt="Performance Dashboard Preview"></div>
  </div>
</section>

<!-- ============ CASE STUDY TICKER ============ -->
<div class="strip" aria-label="Real case studies">
  <div class="strip-in">
    <span class="lbl">Real Case Studies:</span>
    <div class="marquee">${[...studies, ...studies, ...studies, ...studies].map(tickerItem).join("")}</div>
  </div>
</div>

<!-- ============ WHAT WE ACTUALLY DO ============ -->
<section class="band white" id="services">
  <div class="wrap" data-filter-group>
    <div class="head">
      <span class="eyebrow">What we actually do</span>
      <h2>Not just ads. A system that <span class="grad">compounds.</span></h2>
      <p>Most agencies run campaigns. We build the full growth engine — from creative testing to funnel to scale.</p>
    </div>
    <div class="d-tabs" role="group" aria-label="Filter services">
      <button type="button" data-filter="all" aria-pressed="true">All services</button>
      <button type="button" data-filter="paid" aria-pressed="false">Paid ads</button>
      <button type="button" data-filter="funnel" aria-pressed="false">Funnel</button>
      <button type="button" data-filter="scale" aria-pressed="false">Scale</button>
    </div>
    <div class="hm-svcs">${services.map(([ic, cat, no, t, d, badge], i) => `
      <div class="card hm-svc" data-cat="${cat}">
        <span class="d-no" aria-hidden="true">${no}</span>
        <span class="ic${i % 2 ? " o" : ""}">${icon(ic, i % 2 ? "#F37513" : "#2B7FFF")}</span>
        <h3>${t}</h3>
        <p>${d}</p>
        <span class="d-badge">${badge}</span>
      </div>`).join("")}
    </div>
  </div>
</section>

<!-- ============ HOW WE HELP YOU GROW ============ -->
${a3Section("flywheel", "band")}

<!-- ============ NUMBERS (dark) ============ -->
<section class="band dark" id="results">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">What you actually get</span>
      <h2>Results that <span class="grad">speak for themselves.</span></h2>
      <p>Not vanity metrics. Not "brand awareness." Every outcome below is something we've delivered for real D2C brands — and can deliver for yours.</p>
    </div>
    <div class="stats">
      <div class="stat reveal"><b>5x</b><span>Peak ROAS delivered — Retroverse, 90 days</span></div>
      <div class="stat reveal"><b>50+</b><span>D2C brands scaled across fashion, gaming &amp; wellness</span></div>
      <div class="stat reveal"><b>35%</b><span>Avg. CVR improvement after funnel audit</span></div>
      <div class="stat reveal"><b>90</b><span>Days to meaningful ROAS shift — our benchmark</span></div>
    </div>
  </div>
</section>

<!-- ============ RESULTS GRID ============ -->
<section class="band">
  <div class="wrap">
    <div class="d-cards">${results.map(([ic, c, t, d, badge]) => `
      <div class="card d-card reveal"><span class="ic">${icon(ic, c)}</span><h3>${t}</h3><p>${d}</p><span class="d-badge">${badge}</span></div>`).join("")}
    </div>

    <div class="dcard" id="book" style="margin-top:48px">
      <div>
        <h2>Ready to see if this works for your brand?</h2>
        <p style="margin-top:12px">We'll audit your current funnel and ad account — no pitch, no fluff. Just an honest look at what's working and what isn't.</p>
        <ul class="ticks">
          <li>Free funnel &amp; ad account audit</li>
          <li>30-minute strategy call, no obligation</li>
          <li>Custom ROAS projection for your brand</li>
        </ul>
      </div>
      <div style="display:grid;align-content:center">
        <span class="eyebrow">Your move</span>
        <a class="btn blue" href="${BOOK}" ${ext} style="margin-top:16px;width:100%;padding:16px 22px;font-size:16px">Book a Funnel Review ${ARROW}</a>
        <p class="note"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>Usually responded to within 24 hours</p>
      </div>
    </div>
  </div>
</section>

<!-- ============ IN-HOUSE COST ============ -->
${inHouse()}

${footer([["#services", "What We Do"], ["#flywheel", "A3 System"]])}

${mcta("Book a Growth Call Here!")}
`;

export default withImgDims(markup);
