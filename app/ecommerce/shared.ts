// Markup pieces shared by the landing pages (home, /ecommerce, /lead-gen). Styles: ecommerce.css + d2c.css.
export const BOOK = "https://booknow.acquirely.in/#/FRCNA";
export const IMG = "/ecommerce/img";
export const ext = `target="_blank" rel="noopener"`;
export const ARROW = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
export const TICK = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`;
export const LINKEDIN = `<svg width="14" height="14" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.2 21 14.5V21h-4v-5.8c0-1.4 0-3.2-1.95-3.2S12.8 13.5 12.8 15.1V21H9z"/></svg>`;
export const SHIELD = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A5B4FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>`;

export const icon = (path: string, stroke = "#2B7FFF", size = 18) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;

// Lucide icon paths used across the pages
export const P = {
  flask: '<path d="M10 2v7.31"/><path d="M14 9.3V2"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/>',
  trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  trend: '<path d="M22 7l-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
  bars: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  dollar: '<path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  unlock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 017.5-2"/>',
  package: '<path d="M16.5 9.4 7.55 4.24"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.29 7 12 12l8.71-5"/><path d="M12 22V12"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',
  dashboard: '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
  filter: '<path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  form: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  user: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M16 11l2 2 4-4"/>',
};

const navItem = (href: string, o: boolean, ic: string, title: string, sub: string) =>
  `<a href="${href}"><span class="ic${o ? " o" : ""}">${icon(ic, o ? "#F37513" : "#2B7FFF")}</span><span><b>${title}</b><small>${sub}</small></span></a>`;

// Sticky pill nav. `links` are in-page anchors; every page also gets the Services dropdown.
export const nav = (links: [string, string][], cta = "Book a Call") => `
<div class="nav">
  <div class="nav-in">
    <a class="logo" href="/" aria-label="Acquirely home"><img src="${IMG}/01-acquirely-the-science-behind-scale.png" alt="Acquirely — The Science Behind Scale"></a>
    <nav class="nav-links" aria-label="Site">
      <details class="hm-dd">
        <summary>Services <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></summary>
        <div class="hm-dd-menu">
          ${navItem("/ecommerce", false, '<path d="M6 7h12l-1 13H7z"/><path d="M9 7a3 3 0 0 1 6 0"/>', "Ecommerce", "Meta Ads for D2C brands")}
          ${navItem("/lead-gen", true, '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 11h5"/><path d="M18.5 8.5v5"/>', "Lead Gen", "Qualified leads, not form fills")}
        </div>
      </details>
      ${links.map(([href, label]) => `<a href="${href}">${label}</a>`).join("\n      ")}
    </nav>
    <a class="btn blue" href="${BOOK}" ${ext}>${cta}</a>
  </div>
</div>`;

// Hero "before → after" board.
export type HubRow = [label: string, before: string, after: string, change: string];
export const hub = (title: string, sub: string, rows: HubRow[], note = "") => `
    <div class="card hub">
      <div class="hub-top"><h3>${title}<small>${sub}</small></h3><span class="pill-live"><i></i>Before → After</span></div>
      <div class="hub-rows${rows.length === 3 ? " three" : ""}">${rows.map(([l, b, a, t]) => `
        <div class="hub-row"><div class="who">${l}</div><div class="mv"><s>${b} →</s><b class="grad">${a}</b></div><span class="t">${t}</span></div>`).join("")}
      </div>${note}
    </div>`;

// A3 phases, shared by every page. Clicking a phase shows its campaign structure below (data-filter-group).
const phases: [string, string, string, string, string][] = [
  ["1", P.flask, "Test", "Run 15+ creative variants across audiences. Let data pick — not opinions.", "15+ creatives/month"],
  ["2", P.trophy, "Winners", "Proven creatives graduate to dedicated scale campaigns. Zero guesswork.", "Top 20% move forward"],
  ["3", P.trend, "Scale", "Budget flows to what's working. Interests stacked, spend compounded.", "ROAS 2x-4x in 90 days"],
];
const phaseDetails: [string, string, [string, string, string][]][] = [
  ["Phase 1 — Test campaign structure", "Campaign 1 is our structured testing ground. Multiple creative packs, one mission: find your winners.", [
    ["Campaign structure", "Broad audience targeting", "We start wide — no interest stacking. Let Meta find who converts first."],
    ["Creative packs", "3–4 packs, 3–5 ads each", "Each pack tests a different angle — UGC, static, motion. 15+ ads minimum per month."],
    ["Budget logic", "$5k–$30k/day test budget", "Enough data to reach statistical significance in 7–10 days per creative."],
    ["Decision rule", "CPA + ROAS threshold", "Any creative hitting our ROAS floor and CPM target moves to Phase 2."],
  ]],
  ["Phase 2 — Winners campaign structure", "Proven creatives get their own campaign with controlled budgets. No more competing with fresh tests.", [
    ["Campaign structure", "Isolated winner campaigns", "Each proven creative runs in its own ad set — no cannibalisation from testing."],
    ["Audience layer", "Interest stacking begins", "Winners get interest-stacked audiences added progressively to expand reach."],
    ["Budget logic", "Budget follows performance", "We increase spend 20–30% every 3 days if ROAS holds. No random hikes."],
    ["Creative refresh", "Iteration on winners", "Top performers get 2–3 angle variations tested alongside to extend their life."],
  ]],
  ["Phase 3 — Scale campaign structure", "Maximum budget on maximum proof. Broad + interest stacked + lookalikes — all feeding from the same winner pool.", [
    ["Campaign structure", "Aggressive scaling mode", "Scale campaigns run CBO with proven creatives only. No experiments here."],
    ["Audience layer", "Lookalike + broad + interest", "Three audience types running simultaneously — we find the cheapest converts."],
    ["Budget logic", "$300+/day when ready", "Scale triggers only when ROAS is predictable across 14+ days of data."],
    ["Loop back", "Phase 1 keeps running", "Testing never stops. New creatives constantly refresh the winner pool below."],
  ]],
];

export const a3Section = (id = "flywheel", band = "band white") => `
<section class="${band}" id="${id}">
  <div class="wrap" data-filter-group>
    <div class="head">
      <span class="eyebrow">How we help you grow</span>
      <h2>The A3 system that <span class="grad">compounds.</span></h2>
      <p>Test everything → keep what wins → scale relentlessly. Three phases, one flywheel.</p>
    </div>
    <div class="d-phases">${phases.map(([n, ic, title, desc, badge], i) => `
      <button type="button" class="card d-phase" data-filter="${n}" aria-pressed="${n === "2"}">
        <span class="d-phase-n" aria-hidden="true">${n}</span>
        <span class="ic${i === 1 ? " o" : ""}">${icon(ic, i === 1 ? "#F37513" : "#2B7FFF", 20)}</span>
        <small>Phase ${n}</small>
        <h3>${title}</h3>
        <p>${desc}</p>
        <span class="d-badge">${badge}</span>
      </button>${i < 2 ? `<span class="d-phase-arrow" aria-hidden="true">${ARROW}</span>` : ""}`).join("")}
    </div>
    <p class="proof-hint" style="margin-top:14px">Tap a phase to see its campaign structure</p>${phaseDetails.map(([title, sub, cards], i) => `
    <div class="card d-panel" data-cat="${i + 1}"${i === 1 ? "" : " hidden"}>
      <h3>${title}</h3>
      <p>${sub}</p>
      <div class="d-panel-grid">${cards.map(([l, t, d]) => `<div><small>${l}</small><b>${t}</b><span>${d}</span></div>`).join("")}</div>
    </div>`).join("")}
  </div>
</section>`;

// Metric table used in case studies.
export const metricTable = (afterLabel: string, rows: [string, string, string][]) => `
          <table class="d-mt"><thead><tr><th>Metric</th><th>Before</th><th>${afterLabel}</th></tr></thead><tbody>${rows
            .map(([m, b, a]) => `<tr><td>${m}</td><td>${b}</td><td><b>${a}</b></td></tr>`)
            .join("")}</tbody></table>`;

export const quote = (text: string, who: string) =>
  `<blockquote class="d-quote"><span class="d-stars" aria-label="5 stars">★★★★★</span><p>${text}</p><cite>${who}</cite></blockquote>`;

// In-house hiring cost comparison (same USD figures on every page).
export const inHouse = (inner = false) => {
  const card = `
      <div class="card inhouse">
        <h3>Compare That to Hiring In-House</h3>
        <table>
          <tr><td><b>Role</b></td><td><b>Monthly Cost</b></td></tr>
          <tr><td>A Standard Meta Ads Specialist</td><td>$6.5K</td></tr>
          <tr><td>A Conventional Creative Strategist</td><td>$5K</td></tr>
          <tr><td>A Junior Video Editor</td><td>$3.5K</td></tr>
          <tr><td>A Basic Graphic Designer</td><td>$3.5K</td></tr>
          <tr class="total"><td>Total In-House Cost</td><td>$18.5K+ <small>per month</small></td></tr>
        </table>
      </div>`;
  return inner ? card : `
<section class="band white">
  <div class="wrap d-narrow">${card}
  </div>
</section>`;
};

export const faqList = (items: [string, string][]) =>
  `<div class="faq">${items.map(([q, a], i) => `
      <details${i === 0 ? " open" : ""}><summary>${q}</summary><p>${a}</p></details>`).join("")}
    </div>`;

export const person = (img: string, name: string, role: string, tag: string, body: string, bullets: string[], linkedin: string) => `
      <div class="card person">
        <div class="avatar"><img src="${IMG}/${img}" alt="${name}"></div>
        <div>
          <h3>${name}</h3>
          <p class="role">${role} · ${tag}</p>
          <p>${body}</p>
          <ul class="d-checks">${bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
          <a href="${linkedin}" ${ext}>${LINKEDIN}LinkedIn</a>
        </div>
      </div>`;

export const DISCLAIMER =
  "This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, This site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc.";

export const footer = (onPage: [string, string][]) => `
<footer>
  <div class="wrap">
    <div class="foot">
      <div>
        <div class="brand"><img src="${IMG}/28-acquirely-the-science-behind-scale.png" alt="Acquirely — The Science Behind Scale" style="height:52px;width:auto"></div>
        <p style="margin-top:10px;max-width:32ch">Building growth systems that compound. Performance marketing for modern brands.</p>
        <p class="d-socials"><a href="https://www.instagram.com/acquirely.in" ${ext}>Instagram</a><a href="https://www.linkedin.com/company/acquirelydm/" ${ext}>LinkedIn</a><a href="https://www.facebook.com/profile.php?id=61578312825291#" ${ext}>Facebook</a></p>
      </div>
      <div><p class="fh">Quick Links</p><ul>${onPage.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}<li><a href="/ecommerce">Ecommerce</a></li><li><a href="/lead-gen">Lead Generation</a></li><li><a href="/aboutus">About us</a></li></ul></div>
      <div><p class="fh">Legal</p><ul><li><a href="/term-and-services">Terms &amp; Conditions</a></li><li><a href="/privacy-policy">Privacy Policy</a></li></ul></div>
      <div><p class="fh">Contact</p><ul><li><a href="tel:+12368779035">+1 236 877 9035</a></li><li><a href="https://acquirely.ca">https://acquirely.ca/</a></li><li>Vancouver, Canada</li></ul></div>
    </div>
    <div class="fine">
      <p>© 2025 Acquirely. All rights reserved. Built for Growth.</p>
      <p>${DISCLAIMER}</p>
    </div>
  </div>
</footer>`;

export const mcta = (label: string) => `<div class="mcta"><a class="btn" href="${BOOK}" ${ext}>${label}</a></div>`;
