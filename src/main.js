import './styles/main.css';
import logoLightUrl from './assets/img/logo_light.png';
import logoDarkUrl from './assets/img/logo_dark.png';
import logoIconUrl from './assets/img/logo_icon.png';
import thumbGardenrich from './assets/img/projects/gardenrich.jpg';
import thumbRasoi from './assets/img/projects/rasoi.jpg';
import thumbCharmAvenue from './assets/img/projects/charm-avenue.jpg';
import thumbRajfilms from './assets/img/projects/rajfilms.jpg';
import thumbPulse from './assets/img/projects/pulse.jpg';
import logoRasoi from './assets/img/logos/rasoi-logo.png';
import logoRajfilms from './assets/img/logos/rajfilms-logo.jpg';
import logoPulse from './assets/img/logos/pulse-logo.jpg';
import rasoiShotOurMenu from './assets/img/projects/rasoi/desktop-our-menu.png';
import rasoiShotReservation from './assets/img/projects/rasoi/desktop-reservation.png';
import rasoiShotManageMenuDesktop from './assets/img/projects/rasoi/desktop-manage-menu.png';
import rasoiShotAdminOverview from './assets/img/projects/rasoi/mobile-admin-overview.png';
import rasoiOrderVideo from './assets/img/projects/rasoi/order-menu.mp4';
import rasoiOrderPoster from './assets/img/projects/rasoi/order-menu-poster.jpg';
import rajfilmsShotGalleryDesktop from './assets/img/projects/rajfilms/desktop-gallery.jpg';
import rajfilmsShotCoursesMobile from './assets/img/projects/rajfilms/mobile-courses.png';
import rajfilmsShotCoursesDesktop from './assets/img/projects/rajfilms/desktop-courses.png';
import rajfilmsShotGalleryMobile from './assets/img/projects/rajfilms/mobile-gallery.jpg';
import gardenrichShotHomeDesktop from './assets/img/projects/gardenrich/desktop-home.jpg';
import gardenrichShotLoginMobile from './assets/img/projects/gardenrich/mobile-login.png';
import gardenrichShotHomeMobile from './assets/img/projects/gardenrich/mobile-home.jpg';
import pulseShotHomeDesktop from './assets/img/projects/pulse/desktop-home.png';
import pulseShotLoginMobile from './assets/img/projects/pulse/mobile-login.png';
import pulseShotPlansDesktop from './assets/img/projects/pulse/desktop-plans.jpg';
import pulseShotHomeMobile from './assets/img/projects/pulse/mobile-home.png';
import pulseShotAdminOverview from './assets/img/projects/pulse/admin-overview.png';
import pulseShotAdminLedger from './assets/img/projects/pulse/admin-ledger.png';
import pulseShotAdminReports from './assets/img/projects/pulse/admin-reports.png';
import charmShotHomeDesktop from './assets/img/projects/charm-avenue/desktop-home.jpg';
import charmShotProductMobile from './assets/img/projects/charm-avenue/mobile-product.jpg';
import charmShotShopDesktop from './assets/img/projects/charm-avenue/desktop-shop.jpg';
import charmShotShopMobile from './assets/img/projects/charm-avenue/mobile-shop.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const LOGO_LIGHT = logoLightUrl; /* white wordmark, use on dark bg */
const LOGO_DARK = logoDarkUrl;  /* black wordmark, use on light bg */
const LOGO_ICON = logoIconUrl;  /* Q mark only */

const PROJECTS = [
  {
    id: "rasoi", icon: "i-utensils", domain: "rasoibytsn.com", thumb: thumbRasoi, year: "2026",
    themeColor: "#171512",
    logoHTML: `<img src="${logoRasoi}" alt="" style="max-width:62%; max-height:72%; object-fit:contain;" />`,
    title: "Rasoi by TSN", category: "E-Commerce & Management",
    description: "A comprehensive web platform, mobile app, and digital presence: live payments, order management, and multi-location support. Built end to end.",
    fullDescription: "Rasoi by TSN (rasoibytsn.com) is a comprehensive digital ecosystem featuring a web platform and a dedicated mobile application, developed for a forward-thinking restaurant client. It seamlessly integrates customer-facing features with powerful backend operational tools to elevate both the dining experience and business management.",
    challenge: "Legacy tools for reservations, reviews, and payments were fragmented, and standard gateway fees were quietly eating into every digital order's margin.",
    solution: "We built a Next.js web app and a native mobile app on a Node.js and Supabase backend, with a real-time staff reservation dashboard and a custom UPI checkout that bypasses third-party gateway fees entirely.",
    impact: "Cutting gateway fees lifted net margins by 3% on digital orders, and the new reservation and review flow turned tables faster and kept customers coming back.",
    stats: [["3%", "net margin increase"]],
    tags: ["Node.js", "Reactjs", "Supabase", "PostgreSQL", "Next.js", "JavaScript"],
    quote: "Cutting out gateway fees put 3% straight back into our margins, and table turnover has never been smoother.",
    quoteRole: "Owner, Rasoi by TSN",
    screens: [
      { type: "laptop", kind: "image", src: rasoiShotOurMenu, caption: "Customer-facing storefront" },
      { type: "phone", kind: "video", src: rasoiOrderVideo, poster: rasoiOrderPoster, caption: "Live order flow" },
      { type: "laptop", kind: "image", src: rasoiShotReservation, caption: "Table reservations, booked online" },
      { type: "phone", kind: "image", src: rasoiShotAdminOverview, caption: "Real-time order sync" },
      { type: "laptop", kind: "image", src: rasoiShotManageMenuDesktop, caption: "Staff-side menu management" }
    ]
  },
  {
    id: "rajfilms", icon: "i-camera", domain: "rajfilmsstudio.in", thumb: thumbRajfilms, year: "2026",
    themeColor: "#0D0D0D",
    logoHTML: `<img src="${logoRajfilms}" alt="" style="max-width:78%; max-height:82%; object-fit:contain; border-radius:8px; box-shadow:0 0 0 1px rgba(255,255,255,0.08);" />`,
    title: "Raj Films Studio", category: "Custom Client Project",
    description: "A full-stack custom platform engineered around the client's operational workflow. Designed for scale from day one.",
    fullDescription: "Raj Films Studio is a bespoke digital experience crafted for a premier client in the creative industry. This project reflects the perfect synthesis of striking visual aesthetics and robust underlying web technology.",
    challenge: "The client needed a digital presence that matched the production value of their cinematic work: serving high-res video and imagery instantly, with zero stutter.",
    solution: "We built a Reactjs and TypeScript frontend on a Node.js backend, using lazy loading and a custom animation framework for a fluid, cinematic browsing experience on any device.",
    impact: "Average session duration is up 150%, and the elevated brand perception has translated into a measurable rise in high-tier commercial inquiries.",
    stats: [["150%", "longer session duration"]],
    tags: ["Node.js", "Reactjs", "JavaScript", "TypeScript"],
    quote: "Session times are up 150%    visitors finally experience our work the way it deserves to be seen.",
    quoteRole: "Studio Director, Raj Films Studio",
    screens: [
      { type: "laptop", kind: "image", src: rajfilmsShotGalleryDesktop, caption: "Student performance gallery" },
      { type: "phone", kind: "image", src: rajfilmsShotCoursesMobile, caption: "Course enrollment, on mobile" },
      { type: "laptop", kind: "image", src: rajfilmsShotCoursesDesktop, caption: "Structured course programs" },
      { type: "phone", kind: "image", src: rajfilmsShotGalleryMobile, caption: "Cinematic gallery, anywhere" }
    ]
  },
  {
    id: "gardenrich", icon: "i-shield", domain: "gardenrich.online", thumb: thumbGardenrich, year: "2026",
    themeColor: "#16A34A",
    logoHTML: `<div style="font-family:var(--font-display);font-weight:800;font-size:1.7rem;color:#fff;">Garden<span style="color:#111;">Rich</span></div>`,
    title: "GardenRich Project", category: "Web & Mobile Platform",
    description: "A deployed web platform and mobile application (gardenrich.online) featuring secure user authentication and reliable OTP delivery systems.",
    fullDescription: "GardenRich (gardenrich.online) is a fully deployed, high-performance web platform and native mobile application tailored for the modern digital consumer. It offers a seamless, intuitive interface backed by enterprise-grade security and reliable authentication mechanisms.",
    challenge: "The platform needed to handle unpredictable traffic spikes while keeping a frictionless, globally reliable OTP login flow across both web and mobile.",
    solution: "We built a Flutter and Dart cross-platform app on a Node.js and Supabase backend, with custom OTP routing tuned for near-instant delivery anywhere in the world.",
    impact: "99.99% uptime from launch, and onboarding times cut by 60%: GardenRich now scales to a growing user base with zero compromises on security.",
    stats: [["99.99%", "platform uptime"], ["60%", "faster onboarding"]],
    tags: ["Flutter", "Dart", "Supabase", "Node.js", "Reactjs", "PostgreSQL"],
    quote: "99.99% uptime from day one, and onboarding that's 60% faster. The platform just works, at scale.",
    quoteRole: "Product Lead, GardenRich",
    screens: [
      { type: "laptop", kind: "image", src: gardenrichShotHomeDesktop, caption: "Fresh product catalog" },
      { type: "phone", kind: "image", src: gardenrichShotLoginMobile, caption: "Secure OTP sign-in" },
      { type: "phone", kind: "image", src: gardenrichShotHomeMobile, caption: "Shopping on the go" }
    ]
  },
  {
    id: "pulse", icon: "i-dumbbell", domain: "vishal-fitness.vercel.app", thumb: thumbPulse, year: "2026",
    themeColor: "#FFFFFF",
    logoHTML: `<img src="${logoPulse}" alt="" style="max-width:42%; max-height:52%; object-fit:contain;" />`,
    title: "Vishal Fitness Gym", category: "Gym Management Platform",
    description: "A complete gym management platform with mobile app, admin portal, digital QR passes, and real-time analytics. Built for Vishal Fitness to go 100% paperless.",
    fullDescription: "Pulse is a full-stack gym management platform built for Vishal Fitness, Unnao. The system replaces paper registers and WhatsApp-based operations with a mobile member app, a web admin portal, digital QR membership passes, payment tracking, workout logging, class scheduling, and live analytics.",
    challenge: "200+ members were being managed through WhatsApp messages and handwritten registers, error-prone, and impossible to scale.",
    solution: "A single Flutter codebase for web and mobile, on Supabase with Row Level Security, adding digital QR check-in, payment tracking, and a Hevy-style workout tracker.",
    impact: "200+ members went fully paperless, check-in dropped to under a second, and the owner now runs the whole gym from one dashboard.",
    stats: [["200+", "members, zero paper"], ["<1s", "check-in time"]],
    tags: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Edge Functions", "Vercel"],
    quote: "200+ members, zero paper, sub-second check-ins. I run the whole gym from one dashboard now.",
    quoteRole: "Owner, Vishal Fitness",
    screens: [
      { type: "laptop", kind: "image", src: pulseShotHomeDesktop, caption: "One pass, every workout" },
      { type: "phone", kind: "image", src: pulseShotLoginMobile, caption: "Member sign-in" },
      { type: "laptop", kind: "image", src: pulseShotPlansDesktop, caption: "Flexible membership plans" },
      { type: "phone", kind: "image", src: pulseShotHomeMobile, caption: "Book classes from your phone" },
      { type: "laptop", kind: "image", src: pulseShotAdminOverview, caption: "Owner's dashboard, dark mode" },
      { type: "laptop", kind: "image", src: pulseShotAdminLedger, caption: "Every member's ledger, searchable" },
      { type: "laptop", kind: "image", src: pulseShotAdminReports, caption: "One-click reports and CSV exports" }
    ]
  },
  {
    id: "charm-avenue", icon: "i-cart", domain: "www.charmavenue.in", thumb: thumbCharmAvenue, year: "2026",
    themeColor: "#F7E3E1",
    logoHTML: `<div style="font-family:Georgia,serif;font-style:italic;font-weight:700;font-size:1.7rem;color:#8C2A3A;">Charm <span style="color:#C62439;">Avenue</span></div>`,
    title: "Charm Avenue by Nandini", category: "D2C E-Commerce Platform",
    description: "A full storefront and admin platform for a growing accessories brand, with WhatsApp-first checkout instead of a payment gateway, built to move fast without transaction fees.",
    fullDescription: "Charm Avenue by Nandini is a direct-to-consumer accessories and gifting brand. We built its storefront and back office as a single system: product catalog, cart, and a WhatsApp-based checkout flow, backed by a full admin panel for running the business day to day.",
    challenge: "As a small, fast-moving D2C brand, Charm Avenue needed a storefront without payment-gateway overhead, and a catalog the team could update themselves, without a developer.",
    solution: "A Next.js and TypeScript storefront on Supabase, with WhatsApp-based checkout instead of a payment gateway, plus a full admin panel for products, discounts, and orders.",
    impact: "Charm Avenue runs its own catalog and sales end to end, live in production, with zero gateway fees and no developer needed to launch a drop.",
    stats: [["0%", "payment gateway fees, checkout runs through WhatsApp"]],
    tags: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    quote: "We can launch a new collection or run a sale ourselves, same day, no waiting on anyone.",
    quoteRole: "Founder, Charm Avenue by Nandini",
    screens: [
      { type: "laptop", kind: "image", src: charmShotHomeDesktop, caption: "Storefront, styled for the brand" },
      { type: "phone", kind: "image", src: charmShotProductMobile, caption: "Product page, mobile-first" },
      { type: "laptop", kind: "image", src: charmShotShopDesktop, caption: "Full catalog, 90+ products" },
      { type: "phone", kind: "image", src: charmShotShopMobile, caption: "Browse & shop on mobile" }
    ]
  }
];

const SERVICES = [
  {
    slug: "ai-automation", icon: "i-bot", title: "AI & Automation Agents", desc: "Autonomous systems that take on the manual work: lead generation, data extraction, qualification.",
    detail: "We build autonomous agents that handle the repetitive, high-volume work your team shouldn't have to do by hand: browsing, extracting, qualifying, and acting on data at a scale manual research can't match.",
    examples: [], flow: ["i-doc", "i-bot", "i-check"],
    benefits: ["400% faster lead generation", "92% qualification accuracy", "No manual data entry", "Scales without extra headcount"]
  },
  {
    slug: "web-mobile", icon: "i-layers", title: "Web & Mobile Platforms", desc: "Cross-platform products built once, shipped everywhere: Flutter, React, Next.js.",
    detail: "One codebase, every screen. We ship web and native mobile from a shared foundation, so your product feels consistent everywhere without doubling the build effort.",
    examples: ["gardenrich"], flow: ["i-code", "i-layers", "i-check"],
    benefits: ["One codebase, every platform", "99.99% uptime in production", "Consistent UX across devices", "Faster iteration cycles"]
  },
  {
    slug: "ecommerce-payments", icon: "i-cart", title: "E-Commerce & Payments", desc: "Ordering, reservations, and custom payment flows that cut out unnecessary fees.",
    detail: "From checkout to reservations to custom payment routing, we build commerce systems tuned to how the business actually operates, including cutting out fees that don't need to exist.",
    examples: ["rasoi", "charm-avenue"], flow: ["i-cart", "i-diag", "i-check"],
    benefits: ["Custom payment flows, lower fees", "Real-time reservation management", "Built for multi-location scale", "3% margin recovered on digital orders"]
  },
  {
    slug: "healthcare-enterprise", icon: "i-heart", title: "Healthcare & Enterprise Software", desc: "Secure, compliant systems for handling sensitive data at scale.",
    detail: "Enterprise and healthcare software has to be fast for staff and airtight for data. We build systems that handle sensitive records securely without slowing down the people who rely on them.",
    examples: [], flow: ["i-heart", "i-shield", "i-check"],
    benefits: ["45% faster record retrieval", "Enterprise-grade data security", "Cross-platform: web + mobile", "Fewer clinical data-entry errors"]
  },
  {
    slug: "full-stack", icon: "i-code", title: "Custom Full-Stack Development", desc: "End-to-end builds, database to deployment, tailored to how the business runs.",
    detail: "When nothing off-the-shelf fits, we build the whole thing, schema to server to interface, shaped around your actual workflow instead of forcing your workflow to fit a template.",
    examples: ["pulse"], flow: ["i-doc", "i-code", "i-layers"],
    benefits: ["Schema to deployment, end to end", "Row-level security by default", "Built around your real workflow", "Supported after launch"]
  }
];

const VALUE_PROPS_HOME = [
  { icon: "i-shield", title: "Production-ready from day one", desc: "What we build is stable and secure from the start: no rebuild, no scramble before it goes live." },
  { icon: "i-layers", title: "One system, not a pile of point tools", desc: "We design for how the pieces connect: data, automation, interface, so nothing is glued together after the fact." },
  { icon: "i-code", title: "Built to scale with you", desc: "Architecture decisions are made for where you're headed, not just where you are today." }
];

const PROCESS = [
  { icon: "i-search", title: "Scope, not guesswork", desc: "We start from real constraints: data, users, deadlines, not a generic template." },
  { icon: "i-code", title: "Built for production", desc: "Every system is engineered to run under real load, not just demo well in a meeting." },
  { icon: "i-rocket", title: "Shipped, then supported", desc: "Launch is the midpoint. We stay on to fix, extend, and scale what we built." },
  { icon: "i-check", title: "Measured by outcomes", desc: "Success is a number that moved: leads, uptime, retrieval time, not a screenshot." }
];

const VALUES = [
  { title: "Engineering rigor", desc: "We don't cut corners. From secure backend architectures to seamless mobile interfaces, we write clean, scalable code built to perform under pressure." },
  { title: "Transparency", desc: "No black boxes, especially when it comes to AI. We maintain clear, open communication regarding technical decisions, project scopes, and deployments." },
  { title: "Outcomes over vanity metrics", desc: "We don't chase tech buzzwords. We build practical, automated solutions that solve real problems and directly impact the bottom line." },
  { title: "Partnership", desc: "We operate as a dedicated extension of your team, aligning our technical roadmap directly with your long-term business objectives." },
  { title: "Continuous iteration", desc: "The technological landscape moves fast, and so do we. We are constantly refining our models, optimizing our codebases, and adapting to the cutting edge of the industry." }
];

const TIMELINE = [
  { year: "2026", title: "Studio founded", desc: "Founded in Bengaluru, then based out of Kanpur, built to engineer full-stack, cross-platform, and AI-driven software from day one." },
  { year: "2026", title: "First AI agent shipped", desc: "Our first proprietary AI lead-generation agent goes live, autonomously analyzing target companies and drafting personalized outbound campaigns." },
  { year: "2026", title: "Expanded into new industries", desc: "The same year of iteration carried us into fitness (gym management ecosystems), healthcare, and e-commerce, adapting our architecture to each vertical." },
  { year: "2026", title: "Today", desc: "Building smarter web platforms and autonomous digital agents; deeper LLM integrations and new AI-driven products are next." }
];

const FOOTER_SERVICES = ["AI Agents", "Web Platforms", "Mobile Apps", "E-Commerce", "Healthcare Software", "Full-Stack Dev"];
const TOOLS = ["Python", "Node.js", "React", "Flutter", "Next.js", "Supabase", "LangChain", "PostgreSQL"];

const HOME_STATS = [
  ["99.99%", "platform uptime", "   GardenRich"],
  ["150%", "longer session duration", "   Raj Films Studio"],
  ["200+", "members onboarded, zero paper", "   Vishal Fitness"],
  ["0%", "payment gateway fees on WhatsApp checkout", "   Charm Avenue"]
];

function icon(name, cls) { return `<svg class="${cls || 'icon-default'}" aria-hidden="true"><use href="#${name}"></use></svg>`; }

// Inlines the sprite symbol's real shapes (instead of <use>, whose shadow-cloned
// content isn't queryable from the light DOM) so bindIconDraw() can getTotalLength()
// on each path/circle/rect individually.
function iconInline(name, cls) {
  const sym = document.getElementById(name);
  const inner = sym ? sym.innerHTML : '';
  const viewBox = sym ? sym.getAttribute('viewBox') : '0 0 24 24';
  return `<svg class="${cls || 'icon-default'} js-draw-icon" viewBox="${viewBox}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
}

function flowDiagramHTML(icons) {
  return `<div class="flow-diagram">${icons.map((ic, i) =>
    `${i > 0 ? '<span class="flow-connector"><span class="flow-dot"></span></span>' : ''}<span class="flow-node">${icon(ic)}</span>`
  ).join('')}</div>`;
}

// a single device-framed mockup: "laptop" or "phone" chrome around a still image
// or an autoplaying muted video, instead of a flat screenshot.
function galleryItemHTML(s, domain) {
  return `<div class="gallery-item gi-${s.type} card-settle">
    <div class="device-frame ${s.type}">
      ${s.type === 'laptop'
      ? `<div class="device-bar"><span class="db-dot"></span><span class="db-dot"></span><span class="db-dot"></span><span class="device-url">${domain || ''}</span></div>`
      : `<span class="device-notch"></span>`}
      <div class="device-screen">${s.kind === 'video'
      ? `<video autoplay muted loop playsinline poster="${s.poster}"><source src="${s.src}" type="video/mp4" /></video>`
      : `<img src="${s.src}" alt="${s.caption || ''}" loading="lazy" />`}</div>
    </div>
    ${s.caption ? `<p class="gallery-cap">${s.caption}</p>` : ''}
  </div>`;
}

// a narrative beat: an eyebrow + short paragraph beside a small cluster of device
// mockups, alternating sides down the page instead of dumping every screenshot in
// one block up top. mediaSide picks which side the media sits on at desktop widths.
// num renders as a giant outlined watermark, echoing the "01/02" chapter numbering
// already used on the services page.
function storyRowHTML({ num, eyebrow, text, screens, domain, mediaSide }) {
  const copy = `<div class="story-text${screens && screens.length ? ` story-slide from-${mediaSide === 'left' ? 'right' : 'left'}` : ' reveal'}">
    <span class="eyebrow">${eyebrow}</span>
    <p>${text}</p>
  </div>`;
  const numHTML = `<span class="story-num" aria-hidden="true">0${num}</span>`;
  if (!screens || !screens.length) {
    return `<div class="wrap"><div class="story-row no-media media-${mediaSide}">${numHTML}${copy}</div></div>`;
  }
  const media = `<div class="story-media${screens.length > 1 ? ' cluster' : ''} story-slide from-${mediaSide}">
    ${screens.map(s => galleryItemHTML(s, domain)).join('')}
  </div>`;
  const thread = `<span class="story-thread" aria-hidden="true"></span>`;
  return `<div class="wrap">
    <div class="story-row media-${mediaSide}">
      ${numHTML}
      ${mediaSide === 'left' ? media + thread + copy : copy + thread + media}
    </div>
  </div>`;
}

function tagRow(tags) {
  const shown = tags.slice(0, 4);
  const rest = tags.length - shown.length;
  return `<div class="tag-row">${shown.map(t => `<span class="tag-chip">${t}</span>`).join('')}${rest > 0 ? `<span class="tag-chip more">+${rest} more</span>` : ''}</div>`;
}
function tagRowFull(tags) { return `<div class="tag-row">${tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}</div>`; }

// Used only by the hero heading, which keeps manually-split .word spans (see
// heroTimeline in bindEntranceAnimations) so the accent word can carry its own
// id/decrypt behavior    every other heading is split by the real GSAP SplitText
// plugin instead (see bindSplitTextReveal).
function splitWords(text) {
  return text.split(' ').map(w => `<span class="word">${w}</span>`).join(' ');
}

function statNum(finalStr) {
  const m = String(finalStr).match(/^([\d.]+)(.*)$/);
  const zero = m ? (m[1].includes('.') ? '0.00' : '0') + m[2] : finalStr;
  return `<div class="stat-num" data-final="${finalStr}">${zero}</div>`;
}

function renderProcessBlock() {
  return `<section class="block">
    <div class="wrap">
      <div class="block-head">
        <div><span class="eyebrow">( How we work )</span><h2>Process, not<br/>promises</h2></div>
      </div>
      <div class="process-flow-layout">
        <div class="process-flow" id="processFlow">
          <div class="process-flow-track"></div>
          <div class="process-flow-fill" id="processFlowFill"></div>
          <div class="process-flow-list">
            ${PROCESS.map((s, i) => `<div class="process-flow-row reveal">
              <span class="process-flow-icon">${iconInline(s.icon)}</span>
              <div class="process-flow-body"><span class="process-flow-num">0${i + 1}</span><h3>${s.title}</h3><p>${s.desc}</p></div>
            </div>`).join('')}
          </div>
        </div>
        <div class="process-visual" aria-hidden="true"><canvas class="rb-three-process" id="processThree"></canvas></div>
      </div>
    </div>
  </section>`;
}

function renderStatBand() {
  return `<section class="stat-grid">
      ${HOME_STATS.map(([n, c, s]) => `<div class="stat-cell reveal">${statNum(n)}<div class="stat-cap">${c}</div><div class="stat-src">${s}</div></div>`).join('')}
  </section>`;
}

function projectCard(p, featured) {
  return `<a class="project-card${featured ? ' featured' : ''} card-settle" href="#/work/${p.id}" data-nav>
    <div class="pc-media">
      <div class="pc-pattern">${p.thumb ? `
        <div class="pc-logo-face" style="background:${p.themeColor || 'var(--bg-deep)'}">${p.logoHTML || icon(p.icon)}</div>
        <div class="pc-photo"><img src="${p.thumb}" alt="" loading="lazy" /><span class="thumb-tint"></span></div>
      ` : icon(p.icon)}</div>
      <div class="pc-overlay">
        <div class="pc-top">
          <span class="pc-badge">${p.category}</span>
          <span class="pc-year">${p.year || '[Year]'}</span>
        </div>
        <div class="pc-bottom">
          <div class="pc-title-wrap">
            <h3>${p.title}</h3>
            <p class="pc-domain">${p.domain || '[domain placeholder]'}</p>
          </div>
          <span class="pc-arrow">${icon('i-arrow')}</span>
        </div>
      </div>
    </div>
  </a>`;
}

function header(active) {
  const items = [["services", "Services"], ["work", "Work"], ["about", "About"], ["contact", "Contact"]];
  return `<header class="site-head">
    <nav class="top-nav" id="topNav">
      <a class="logo-link" href="#/home" data-nav>
        <img class="logo-dark-img" src="${LOGO_LIGHT}" alt="Qyroxis" />
        <img class="logo-light-img" src="${LOGO_DARK}" alt="Qyroxis" />
      </a>
      <div class="nav-links">${items.map(([k, l]) => `<a href="#/${k}" data-nav class="${active === k ? 'active' : ''}">${l}</a>`).join('')}</div>
      <div style="display:flex;align-items:center;gap:10px;">
        <button class="theme-toggle" id="themeToggle" aria-label="Switch to dark theme">${icon('i-moon')}</button>
        <a class="btn btn-primary head-cta" href="#/contact" data-nav>Start a project</a>
        <button class="mobile-toggle" id="mobileToggle" aria-label="Menu" aria-expanded="false">
          <span class="burger"><span></span><span></span><span></span></span>
        </button>
      </div>
    </nav>
  </header>
  <div class="mobile-menu" id="mobileMenu">
    ${items.map(([k, l]) => `<a href="#/${k}" data-nav>${l}</a>`).join('')}
  </div>`;
}

function footerLink(href, label) {
  return `<li><a href="${href}" data-nav>${label}</a></li>`;
}

function footer() {
  return `<footer class="site-foot">
    <div class="wrap">
      <div class="foot-grid">
        <div class="foot-col reveal">
          <h4>Services</h4>
          <ul>
            ${SERVICES.map(s => footerLink(`#/services/${s.slug}`, s.title.replace(' & ', ' &amp; '))).join('')}
          </ul>
        </div>
        <div class="foot-col reveal">
          <h4>Work</h4>
          <ul>
            ${PROJECTS.map(p => footerLink(`#/work/${p.id}`, p.title)).join('')}
          </ul>
        </div>
        <div class="foot-col reveal">
          <h4>Site</h4>
          <ul>
            ${footerLink('#/home', 'Home')}
            ${footerLink('#/services', 'Services')}
            ${footerLink('#/work', 'Work')}
            ${footerLink('#/about', 'About')}
            ${footerLink('#/contact', 'Contact')}
          </ul>
        </div>
        <div class="foot-col reveal">
          <h4>Company</h4>
          <ul>
            ${footerLink('#/about', 'About')}
            ${footerLink('#/contact', 'Contact')}
          </ul>
          <div class="foot-company-ctas">
            <a class="foot-btn light" href="#/contact" data-nav>Start a project</a>
            <a class="foot-btn outline" href="javascript:void(0)">Book a call</a>
          </div>
          <div class="foot-social">
            <a href="https://www.instagram.com/qyroxis?igsh=eDF1aGdncjJzdG1z" target="_blank" rel="noopener" aria-label="Instagram">${icon('i-instagram')}</a>
            <a href="https://www.linkedin.com/company/qyroxiss/" target="_blank" rel="noopener" aria-label="LinkedIn">${icon('i-linkedin')}</a>
            <a href="https://youtube.com/@qyroxis?si=1CRmfZaItyzs-LW1" target="_blank" rel="noopener" aria-label="YouTube">${icon('i-youtube')}</a>
            <a href="https://x.com/qyroxis" target="_blank" rel="noopener" aria-label="X">${icon('i-x')}</a>
            <a href="https://www.facebook.com/share/1L7J3fyA9J/" target="_blank" rel="noopener" aria-label="Facebook">${icon('i-facebook')}</a>
            <a href="https://www.reddit.com/u/qyroxis/s/JigemdTxXH" target="_blank" rel="noopener" aria-label="Reddit">${icon('i-reddit')}</a>
          </div>
          <div class="foot-legal">
            <a href="#/privacy" data-nav>Privacy Policy</a>
            <a href="#/terms" data-nav>Terms of Service</a>
          </div>
          <p class="foot-copyright">&copy; QYROXIS 2026</p>
        </div>
      </div>
      <div class="foot-wordmark" aria-hidden="true">
        <p class="foot-wordmark-text"><span class="dot">Q</span>yroxis</p>
      </div>
    </div>
  </footer>`;
}

window.sendDemo = sendDemo;
function sendDemo(e) {
  e.preventDefault();
  const btn = document.getElementById('contactSubmit');
  if (!btn || btn.dataset.busy) return;
  const label = btn.querySelector('.btn-label');
  const original = label.textContent;
  btn.dataset.busy = '1';
  btn.classList.add('btn-pulse');
  label.textContent = 'Sending…';

  const name = document.getElementById('cf-name')?.value.trim() || '';
  const email = document.getElementById('cf-email')?.value.trim() || '';
  const phone = document.getElementById('cf-phone')?.value.trim() || '';
  const company = document.getElementById('cf-company')?.value.trim() || '';
  const msg = document.getElementById('cf-msg')?.value.trim() || '';

  const formData = new FormData();
  formData.append('access_key', 'c06edbd5-f335-4bd8-8351-7d22f2da8a17');
  formData.append('subject', 'New project inquiry from qyroxis.com');
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('company', company);
  formData.append('message', msg);

  fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
    .then(r => {
      label.textContent = r.ok ? "Sent, we'll be in touch" : 'Could not send, email us directly';
      if (r.ok) e.target.reset();
    })
    .catch(() => { label.textContent = 'Could not send, email us directly'; })
    .finally(() => {
      setTimeout(() => { label.textContent = original; btn.classList.remove('btn-pulse'); delete btn.dataset.busy; }, 2600);
    });
}

function pageHeaderHTML(eyebrowText, titleText, sub, decryptWord) {
  return `<header class="page-header">
    <div class="wrap">
      <span class="eyebrow">( ${eyebrowText} )</span>
      <h1 id="pageHeaderTitle" class="split-text"${decryptWord ? ` data-decrypt="${decryptWord}"` : ''} style="margin-top:16px;">${titleText}</h1>
      ${sub ? `<p class="page-header-sub fade-in" style="transition-delay:0.1s;">${sub}</p>` : ''}
    </div>
  </header>`;
}

function pageHome() {
  return `
  <div class="hero-shell">
    <section class="hero">
      <div class="hero-wash" aria-hidden="true"><canvas class="rb-aurora" id="heroAurora" aria-hidden="true"></canvas><canvas class="rb-three-hero" id="heroThree" aria-hidden="true"></canvas></div>
      <div class="hero-fade-top" aria-hidden="true"></div>
      <div class="hero-inner">
        <span class="hero-badge"><span class="badge-tag">Studio</span><span class="label">Software & AI, built to ship</span></span>
        <h1 id="heroTitle" class="hero-split">${splitWords('We build the')} <span class="word accent" id="heroAccentWord">software</span> ${splitWords('your business runs on.')}</h1>
        <p class="lede">Qyroxis designs and ships AI agents, web and mobile platforms, and full-stack systems for teams who need something that actually works in production.</p>
        <div class="hero-ctas">
          <span class="star-border-wrap"><a class="btn btn-primary" href="#/contact" data-nav>Start a project</a></span>
          <a class="btn btn-ghost" href="#/work" data-nav>See our work ${icon('i-arrow', 'btn-icon')}</a>
        </div>
        <div class="hero-flow" aria-hidden="true">
          <div class="hero-flow-step"><span class="flow-node">${icon('i-doc')}</span><span class="hf-label">Manual work</span></div>
          <span class="flow-connector"><span class="flow-dot"></span></span>
          <div class="hero-flow-step"><span class="flow-node accent-node">${icon('i-bot')}</span><span class="hf-label">Qyroxis builds it</span></div>
          <span class="flow-connector"><span class="flow-dot"></span></span>
          <div class="hero-flow-step"><span class="flow-node">${icon('i-check')}</span><span class="hf-label">Running system</span></div>
        </div>
      </div>
    </section>
  </div>

  <div class="marquee-strip">
    <div class="marquee-track">
      ${Array(3).fill(PROJECTS.map(p => `<div class="marquee-card">${icon(p.icon)}<span class="mc-label">${p.title}</span></div>`).join('')).join('')}
    </div>
  </div>

  <section class="block" style="padding-bottom:0;">
    <div class="wrap block-head-center">
      <span class="eyebrow">( What we build )</span>
      <h2>Software that means business</h2>
    </div>
  </section>

  <section class="trust-strip">
    <div class="wrap trust-inner">
      <p>Trusted to design and ship production software across automation, healthcare, e-commerce, and fitness.</p>
    </div>
    ${renderStatBand()}
  </section>

  <div class="marquee-text-strip">
    <div class="marquee-track" style="animation-duration:38s;">
      ${Array(4).fill(TOOLS.map(t => `<span class="marquee-text-item"><span class="dot"></span>${t}</span>`).join('')).join('')}
    </div>
  </div>

  <section class="block">
    <div class="wrap">
      <div class="block-head">
        <div><span class="eyebrow">( Why Qyroxis )</span><h2>Why teams<br/>choose us</h2></div>
      </div>
      <div class="value-prop-grid">
        ${VALUE_PROPS_HOME.map(v => `<div class="value-prop reveal">${iconInline(v.icon)}<h3>${v.title}</h3><p>${v.desc}</p></div>`).join('')}
      </div>
    </div>
  </section>

  <section class="block" style="padding-top:0;">
    <div class="wrap">
      <div class="block-head">
        <div><span class="eyebrow">( What we build )</span><h2>Full-stack<br/>digital products</h2></div>
        <a class="btn btn-ghost" href="#/services" data-nav>All services ${icon('i-arrow', 'btn-icon')}</a>
      </div>
      <div class="service-visual-grid">
        ${SERVICES.map((s, i) => `<a href="#/services/${s.slug}" data-nav class="service-vcard reveal">
          <span class="sv-num">0${i + 1}</span>
          ${icon('i-diag', 'sv-arrow')}
          ${flowDiagramHTML(s.flow)}
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
        </a>`).join('')}
      </div>
    </div>
  </section>

  ${renderProcessBlock()}

  <section class="block">
    <div class="wrap">
      <div class="block-head">
        <div><span class="eyebrow">( Selected work )</span><h2>Proof, not<br/>a portfolio</h2></div>
        <a class="btn btn-ghost" href="#/work" data-nav>View all work ${icon('i-arrow', 'btn-icon')}</a>
      </div>
      <div class="project-grid">${PROJECTS.map(p => projectCard(p)).join('')}</div>
    </div>
  </section>

  <section class="block testi-band">
    <div class="wrap">
      <span class="eyebrow">( What clients say )</span>
      <p class="testi-quote-big" id="testiQuote">"Qyroxis felt like an extension of our own team: clear communication, shipped fast, and the systems haven't needed a single fire drill since launch."</p>
      <p class="testi-who-big">Founder, early-stage SaaS client</p>
    </div>
  </section>

  <section class="cta-band accent-fill">
    <img class="cta-mark" src="${LOGO_ICON}" alt="" aria-hidden="true" />
    <div class="wrap inner">
      <span class="eyebrow">( Let's talk )</span>
      <h2>Have a project in mind?</h2>
      <p class="sub">Tell us what you're building, we'll tell you how to ship it.</p>
      <div class="hero-ctas"><a class="btn btn-primary" href="#/contact" data-nav>Start a project</a></div>
    </div>
  </section>`;
}

function pageWork() {
  return `
  ${pageHeaderHTML("Work", "Results we're proud to put our name on.",
    "A look at how we've helped ambitious teams turn software into measurable, compounding outcomes.")}
  <section class="block" style="padding-top:0;">
    <div class="wrap">
      <div class="work-grid">${PROJECTS.map((p, i) => projectCard(p, i === 0)).join('')}</div>
    </div>
  </section>
  <section class="cta-band accent-fill">
    <img class="cta-mark" src="${LOGO_ICON}" alt="" aria-hidden="true" />
    <div class="wrap inner">
      <span class="eyebrow">( Let's talk )</span>
      <h2>Let's create your success story.</h2>
      <p class="sub">Tell us what you're building, we'll tell you how to ship it.</p>
      <div class="hero-ctas"><a class="btn btn-primary" href="#/contact" data-nav>Start a project</a></div>
    </div>
  </section>`;
}

function pageDetail(id) {
  const idx = PROJECTS.findIndex(p => p.id === id);
  const p = PROJECTS[idx] || PROJECTS[0];
  const related = PROJECTS.filter(x => x.id !== p.id);
  const liveHref = p.domain ? `https://${p.domain}` : null;
  return `
  <div class="wrap">
    <a class="detail-back" href="#/work" data-nav>${icon('i-arrow', 'btn-icon')} All work</a>
    <div class="detail-head">
      <span class="project-cat">${p.category}</span>
      <h1 class="split-text">${p.title}</h1>
      ${tagRowFull(p.tags)}
    </div>
  </div>
  <div class="wrap">
    <div class="detail-hero-thumb${p.thumb ? ' has-image' : ''} reveal">
      ${p.thumb ? `<img src="${p.thumb}" alt="" loading="lazy" /><span class="thumb-tint"></span>` : icon(p.icon, 'thumb-icon')}
      <span class="domain-tag">${p.domain || '[domain placeholder]'}</span>
      ${liveHref
      ? `<a class="visit-btn" href="${liveHref}" target="_blank" rel="noopener noreferrer">Visit live site ${icon('i-diag', 'btn-icon')}</a>`
      : `<span class="visit-btn" style="opacity:0.5; cursor:default;">Live site [placeholder]</span>`}
    </div>
  </div>
  <section class="detail-stats-band">
    <div class="wrap stat-grid-3">
      ${p.stats.map(([n, c]) => `<div class="reveal">${statNum(n)}<div class="stat-cap">${c}</div></div>`).join('')}
    </div>
  </section>

  <div class="wrap">
    <p class="story-lead reveal"><span class="eyebrow">The challenge</span>${p.challenge}</p>
  </div>

  ${storyRowHTML({
    num: 1, eyebrow: "Our solution", text: p.solution, domain: p.domain, mediaSide: "left",
    screens: (p.screens || []).slice(0, 2)
  })}
  ${storyRowHTML({
    num: 2, eyebrow: "The impact", text: p.impact, domain: p.domain, mediaSide: "right",
    screens: (p.screens || []).slice(2)
  })}

  <section class="detail-quote-band">
    <div class="wrap">
      ${icon('i-quote')}
      <blockquote>"${p.quote}"</blockquote>
      <div class="attribution">
        <p class="role">${p.quoteRole}</p>
      </div>
    </div>
  </section>

  <div class="wrap">
    <section class="block">
      <div class="block-head">
        <div><span class="eyebrow">( More work )</span><h2>Keep exploring</h2></div>
      </div>
      <div class="related-grid">
        ${related.map(r => `<a class="related-card reveal" href="#/work/${r.id}" data-nav>
          <div class="related-thumb">${icon(r.icon)}</div>
          <div class="related-body"><span class="rc-cat">${r.category}</span><h3>${r.title}</h3></div>
          ${icon('i-arrow', 'related-arrow')}
        </a>`).join('')}
      </div>
    </section>
  </div>

  <section class="cta-band accent-fill">
    <img class="cta-mark" src="${LOGO_ICON}" alt="" aria-hidden="true" />
    <div class="wrap inner">
      <span class="eyebrow">( Let's talk )</span>
      <h2>Ready to build?</h2>
      <p class="sub">Tell us what you're building, we'll tell you how to ship it.</p>
      <div class="hero-ctas"><a class="btn btn-primary" href="#/contact" data-nav>Start a project</a></div>
    </div>
  </section>`;
}

function pageServices() {
  return `
  ${pageHeaderHTML("Services", "Everything you need to ship software.",
    "Five practice areas, one delivery process, from first commit to production, and supported after launch. Pick one to see it in depth.", "software.")}
  <section class="block" style="padding-top:0;">
    <div class="wrap">
      <div class="service-visual-grid">
        ${SERVICES.map((s, i) => `<a href="#/services/${s.slug}" data-nav class="service-vcard reveal">
          <span class="sv-num">0${i + 1}</span>
          ${icon('i-diag', 'sv-arrow')}
          ${flowDiagramHTML(s.flow)}
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
        </a>`).join('')}
      </div>
    </div>
  </section>
  <section class="cta-band accent-fill">
    <img class="cta-mark" src="${LOGO_ICON}" alt="" aria-hidden="true" />
    <div class="wrap inner">
      <span class="eyebrow">( Let's talk )</span>
      <h2>Not sure which of these fits?</h2>
      <p class="sub">Tell us the problem, not the service name, we'll figure out the right shape for it.</p>
      <div class="hero-ctas"><a class="btn btn-primary" href="#/contact" data-nav>Start a project</a></div>
    </div>
  </section>`;
}

function pageServiceDetail(slug) {
  const idx = SERVICES.findIndex(s => s.slug === slug);
  const s = SERVICES[idx] || SERVICES[0];
  const i = idx < 0 ? 0 : idx;
  const exs = (s.examples || []).map(id => PROJECTS.find(p => p.id === id)).filter(Boolean);
  const others = SERVICES.filter(x => x.slug !== s.slug);
  return `
  ${pageHeaderHTML("Services", s.title, s.desc)}
  <section class="service-section" style="border-top:none;">
    <div class="wrap service-section-inner">
      <div class="service-visual reveal">
        <div class="service-visual-inner">
          <div class="service-visual-face front">
            <span class="service-visual-tag">0${i + 1} / SERVICE</span>
            <span class="service-visual-name">${s.title}</span>
          </div>
          <div class="service-visual-face back">
            <img class="service-visual-mark" src="${LOGO_ICON}" alt="" aria-hidden="true" />
            <span class="service-visual-tag">0${i + 1} / SERVICE</span>
            <span class="service-visual-name" style="color:#fff;">${s.title}</span>
          </div>
        </div>
      </div>
      <div class="service-body">
        <div class="reveal">
          <h2>${s.title}</h2>
          <p>${s.detail}</p>
        </div>
        <div class="service-benefits-label reveal">
          <span class="eyebrow">Key benefits</span>
          <div class="benefit-grid">
            ${s.benefits.map(b => `<div class="benefit-item reveal">${icon('i-arrow')}<span>${b}</span></div>`).join('')}
          </div>
        </div>
        ${exs.length ? `<div class="service-examples reveal" style="display:flex; flex-wrap:wrap; gap:12px;">
          ${exs.map(ex => `<a class="service-example" href="#/work/${ex.id}" data-nav>See it in action: ${ex.title} ${icon('i-arrow', 'btn-icon')}</a>`).join('')}
        </div>` : ''}
      </div>
    </div>
  </section>

  <div class="wrap">
    <section class="block">
      <div class="block-head">
        <div><span class="eyebrow">( More services )</span><h2>Other things<br/>we build</h2></div>
      </div>
      <div class="related-grid">
        ${others.map(o => `<a class="related-card reveal" href="#/services/${o.slug}" data-nav>
          <div class="related-thumb">${icon(o.icon)}</div>
          <div class="related-body"><span class="rc-cat">Service</span><h3>${o.title}</h3></div>
          ${icon('i-arrow', 'related-arrow')}
        </a>`).join('')}
      </div>
    </section>
  </div>

  <section class="cta-band accent-fill">
    <img class="cta-mark" src="${LOGO_ICON}" alt="" aria-hidden="true" />
    <div class="wrap inner">
      <span class="eyebrow">( Let's talk )</span>
      <h2>Ready to start?</h2>
      <p class="sub">Tell us what you're building, we'll tell you how to ship it.</p>
      <div class="hero-ctas"><a class="btn btn-primary" href="#/contact" data-nav>Start a project</a></div>
    </div>
  </section>`;
}

function pageAbout() {
  return `
  ${pageHeaderHTML("About", "Building the software ambitious teams run on.",
    "We're a software and AI studio obsessed with one thing: shipping systems that actually work in production.", "ambitious")}

  <section class="mission-band">
    <div class="wrap">
      <p class="reveal" style="margin:0 auto; text-align:center; max-width:52ch; font-family:var(--font-display); font-size:clamp(1.3rem,2.4rem,1.9rem); font-weight:700; line-height:1.35;">
        Qyroxis exists to engineer intelligent systems. We bridge the gap between complex AI capabilities and real-world software, delivering scalable mobile and web architectures that actively drive business growth.
      </p>
    </div>
  </section>
  ${renderStatBand()}

  <section class="block">
    <div class="wrap">
      <div class="block-head">
        <div><span class="eyebrow">( Core values )</span><h2>What we<br/>stand for</h2></div>
      </div>
      <div class="values-grid">
        ${VALUES.map((v, i) => `<div class="value-card reveal">
          <span class="value-num">0${i + 1}</span>
          <h3>${v.title}</h3>
          <p>${v.desc}</p>
        </div>`).join('')}
        <div class="value-card capstone reveal">
          <p>Five principles.<span class="accent"> One promise:</span> software that works.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="block" style="background:var(--bg-deep); border-top:1px solid var(--border); border-bottom:1px solid var(--border);">
    <div class="wrap" style="text-align:center;">
      <span class="eyebrow">( Our journey )</span>
      <h2 style="margin-top:14px;">The road so far</h2>
      <div class="timeline" id="aboutTimeline">
        <div class="timeline-track"></div>
        <div class="timeline-fill" id="timelineFill"></div>
        <div class="timeline-list">
          ${TIMELINE.map(t => `<div class="timeline-item reveal">
            <span class="timeline-dot"></span>
            <span class="timeline-year">${t.year}</span>
            <h3>${t.title}</h3>
            <p>${t.desc}</p>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <section class="cta-band accent-fill">
    <img class="cta-mark" src="${LOGO_ICON}" alt="" aria-hidden="true" />
    <div class="wrap inner">
      <span class="eyebrow">( Let's talk )</span>
      <h2>Let's write the next chapter together.</h2>
      <p class="sub">Tell us what you're building, we'll tell you how to ship it.</p>
      <div class="hero-ctas"><a class="btn btn-primary" href="#/contact" data-nav>Start a project</a></div>
    </div>
  </section>`;
}

function pagePrivacy() {
  return `
  ${pageHeaderHTML("Legal", "Privacy Policy")}
  <section class="block" style="padding-top:0;">
    <div class="wrap">
      <div class="legal-content">
        <p class="legal-updated">Last updated: 5 August 2026</p>

        <h2>Overview</h2>
        <p>Qyroxis ("we", "us", "our") is a software and AI engineering studio based in Bangalore, India. This policy explains what information we collect through qyroxis.com, how we use it, and the choices you have.</p>

        <h2>Information we collect</h2>
        <p>When you reach out through our contact form or by email, we collect what you choose to share, typically your name, email address, company, and details about your project. If you provide a phone number, we collect that too. We don't require any of this information to browse the site.</p>
        <p>We also store one small piece of data locally in your browser: your light/dark theme preference. This is saved via <code>localStorage</code> on your device, is never transmitted to us, and contains no personal information.</p>

        <h2>Cookies and tracking</h2>
        <p>We do not currently use analytics, advertising, or third-party tracking cookies on this site. If that changes, we'll update this policy to reflect it.</p>

        <h2>How we use your information</h2>
        <ul>
          <li>To respond to your inquiry and discuss your project</li>
          <li>To keep a record of client and prospect communications</li>
          <li>To improve how we present our work and services</li>
        </ul>
        <p>We do not sell, rent, or use your information for advertising, and we don't send marketing emails without your consent.</p>

        <h2>Sharing your information</h2>
        <p>We don't share your personal information with third parties, except with service providers who help us operate our business (such as hosting or email infrastructure) and only to the extent needed to provide that service, under a duty of confidentiality.</p>

        <h2>Data retention</h2>
        <p>We keep inquiry and project information for as long as it's relevant to our relationship with you, or as needed for legitimate business and legal record-keeping, after which we delete it.</p>

        <h2>Your rights</h2>
        <p>You can ask us to access, correct, or delete the personal information we hold about you at any time by emailing <a href="mailto:contact@qyroxis.com">contact@qyroxis.com</a>.</p>

        <h2>Security</h2>
        <p>We take reasonable technical and organizational measures to protect your information, but no method of transmission or storage is completely secure, and we can't guarantee absolute security.</p>

        <h2>Children's privacy</h2>
        <p>Our site and services are intended for businesses and professionals, not children, and we don't knowingly collect information from anyone under 18.</p>

        <h2>Changes to this policy</h2>
        <p>We may update this policy as our practices evolve. Material changes will be reflected by updating the date at the top of this page.</p>

        <h2>Contact us</h2>
        <p>Questions about this policy? Reach us at <a href="mailto:contact@qyroxis.com">contact@qyroxis.com</a>, or find us in Bangalore, India.</p>
      </div>
    </div>
  </section>`;
}

function pageTerms() {
  return `
  ${pageHeaderHTML("Legal", "Terms of Service")}
  <section class="block" style="padding-top:0;">
    <div class="wrap">
      <div class="legal-content">
        <p class="legal-updated">Last updated: 5 August 2026</p>

        <h2>Acceptance of terms</h2>
        <p>By using qyroxis.com, you agree to these terms. If you don't agree, please don't use the site.</p>

        <h2>Use of this website</h2>
        <p>This site is provided for informational purposes, to showcase Qyroxis's services, portfolio, and process. Project write-ups describe real engagements and their outcomes to the best of our knowledge; figures are provided in good faith by us or our clients and are not audited third-party statistics.</p>

        <h2>Intellectual property</h2>
        <p>The design, code, copy, and branding of this website belong to Qyroxis unless otherwise noted. Case studies reference client products and trademarks, which remain the property of their respective owners. Nothing on this site grants you a license to reuse our branding, code, or content without permission.</p>

        <h2>Client engagements</h2>
        <p>This website is not itself a contract for services. Any paid engagement with Qyroxis, covering scope, pricing, timelines, IP ownership, and confidentiality, is governed by a separate written agreement signed by both parties, which takes precedence over anything described here.</p>

        <h2>No warranty</h2>
        <p>This site and its content are provided "as is," without warranties of any kind, express or implied. We don't guarantee the site will be uninterrupted, error-free, or continuously available.</p>

        <h2>Limitation of liability</h2>
        <p>To the fullest extent permitted by law, Qyroxis is not liable for any indirect, incidental, or consequential damages arising from your use of this website.</p>

        <h2>Third-party links</h2>
        <p>Where we link to client sites or other third-party destinations, we aren't responsible for their content, availability, or practices.</p>

        <h2>Governing law</h2>
        <p>These terms are governed by the laws of India, and any disputes are subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.</p>

        <h2>Changes to these terms</h2>
        <p>We may update these terms from time to time. Continued use of the site after changes means you accept the updated terms.</p>

        <h2>Contact us</h2>
        <p>Questions about these terms? Reach us at <a href="mailto:contact@qyroxis.com">contact@qyroxis.com</a>.</p>
      </div>
    </div>
  </section>`;
}

function pageContact() {
  return `
  ${pageHeaderHTML("Contact", "Let's build something amazing together.",
    "Tell us where you want to go and we'll show you how to get there. Every great project starts with a conversation.")}
  <section class="block" style="padding-top:0;">
    <div class="wrap contact-layout">
      <div class="contact-side">
        <a class="contact-card reveal" href="mailto:contact@qyroxis.com">
          <span class="contact-card-icon">${icon('i-mail')}</span>
          <div><div class="cc-label">EMAIL</div><div class="cc-value">contact@qyroxis.com</div></div>
        </a>
        <div class="contact-card reveal">
          <span class="contact-card-icon">${icon('i-pin')}</span>
          <div><div class="cc-label">LOCATION</div><div class="cc-value">Bangalore, India</div></div>
        </div>
      </div>
      <div class="contact-form-card reveal">
        <form onsubmit="sendDemo(event)">
          <div class="cf-grid">
            <div class="form-field"><label for="cf-name">Name *</label><input id="cf-name" type="text" required placeholder="Name" /></div>
            <div class="form-field"><label for="cf-email">Email *</label><input id="cf-email" type="email" required placeholder="Email" /></div>
            <div class="form-field"><label for="cf-phone">Phone</label><input id="cf-phone" type="tel" placeholder="Phone" /></div>
            <div class="form-field"><label for="cf-company">Company</label><input id="cf-company" type="text" placeholder="Company" /></div>
            <div class="form-field full"><label for="cf-msg">Project details *</label><textarea id="cf-msg" rows="5" required placeholder="Tell us about your goals, timeline and budget…"></textarea></div>
          </div>
          <button class="btn btn-primary" type="submit" id="contactSubmit" style="width:100%; margin-top:22px; justify-content:center;"><span class="btn-label">Send message</span></button>
          <p class="cf-privacy">By submitting you agree to our privacy policy. We never share your data.</p>
        </form>
      </div>
    </div>
  </section>`;
}

const routes = { home: pageHome, work: pageWork, services: pageServices, about: pageAbout, contact: pageContact, privacy: pagePrivacy, terms: pageTerms };

function performSwap() {
  const hash = location.hash.replace(/^#\//, '') || 'home';
  const parts = hash.split('/');
  const app = document.getElementById('app');
  let body, active;
  if (parts[0] === 'work' && parts[1]) { body = pageDetail(parts[1]); active = 'work'; }
  else if (parts[0] === 'services' && parts[1]) { body = pageServiceDetail(parts[1]); active = 'services'; }
  else { active = routes[parts[0]] ? parts[0] : 'home'; body = routes[active](); }
  app.innerHTML = header(active) + `<main>${body}</main>` + footer();

  document.querySelectorAll('[data-nav]').forEach(a => a.addEventListener('click', () => {
    document.getElementById('mobileMenu')?.classList.remove('open');
    document.getElementById('mobileToggle')?.classList.remove('open');
  }));
  window.scrollTo(0, 0);
  bindHeaderScroll();
  bindEntranceAnimations(active);
  bindMotionLayer(active);
  return active;
}

let isTransitioning = false;
let pendingTransition = false;

// Route transition thesis: old page fades+drifts out (0.25s) while a 3px accent
// bar sweeps the top of the viewport (0.5s); the new page swaps in and starts its
// own entrance choreography at 65% of the sweep, which then fades out (validated
// via the "Accent sweep" variant in the transition-variants comparison artifact).
function render() {
  const app = document.getElementById('app');
  const oldMain = app.querySelector('main');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isTransitioning) { pendingTransition = true; return; }
  if (!oldMain || reduced) { performSwap(); return; }

  const sweepBar = document.getElementById('routeSweep');
  isTransitioning = true;
  const tl = gsap.timeline({
    onComplete: () => {
      isTransitioning = false;
      if (pendingTransition) { pendingTransition = false; render(); }
    }
  });

  tl.to(oldMain, { opacity: 0, y: -8, duration: 0.25, ease: 'power2.out' }, 0);
  if (sweepBar) tl.to(sweepBar, { width: '100%', duration: 0.5, ease: 'power2.inOut' }, 0);
  tl.call(performSwap, null, 0.325);
  if (sweepBar) {
    tl.to(sweepBar, { opacity: 0, duration: 0.2 }, 0.52);
    tl.call(() => gsap.set(sweepBar, { width: '0%', opacity: 1 }), null, 0.75);
  }
}

let splitTextInstances = [];
let mm = gsap.matchMedia();

function resetGsapAnimations() {
  ScrollTrigger.getAll().forEach(t => t.kill());
  splitTextInstances.forEach(s => s.revert());
  splitTextInstances = [];
  mm.revert();
}

function bindFadeIn() {
  gsap.utils.toArray('.fade-in').forEach((el, i) => {
    gsap.fromTo(el, { opacity: 0, filter: 'blur(6px)' }, { opacity: 1, filter: 'blur(0px)', duration: 0.9, delay: 0.06 + i * 0.09, ease: 'power2.out' });
  });
}

function bindReveal() {
  ScrollTrigger.batch('.reveal', {
    start: 'top 88%',
    once: true,
    onEnter: batch => gsap.to(batch, {
      opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.06, overwrite: true,
      onComplete: () => batch.forEach(el => { el.classList.remove('reveal'); gsap.set(el, { clearProps: 'transform' }); })
    })
  });
}

// Process-step / value-prop icons draw their own stroke in on scroll, instead of
// just fading with the rest of the card. No DrawSVG plugin: each shape's own
// getTotalLength() drives its dasharray/dashoffset by hand.
// Shimmer skeleton on image containers until their <img> actually finishes loading
// (or fails), instead of a blank flash for the heavier scroll-preview screenshots.
function bindImageSkeletons(selector) {
  document.querySelectorAll(selector).forEach(container => {
    const img = container.querySelector('img');
    if (!img) return;
    if (img.complete) { container.classList.add('img-loaded'); return; }
    const done = () => container.classList.add('img-loaded');
    img.addEventListener('load', done, { once: true });
    img.addEventListener('error', done, { once: true });
  });
}

// A second, independent depth layer on top of the hero's existing Three.js
// camera dolly (see three-hero.js onScroll): the heading drifts at its own
// rate so text and canvas visibly separate as the page scrolls.
function bindHeroParallax() {
  const title = document.getElementById('heroTitle');
  const hero = document.querySelector('.hero');
  if (!title || !hero) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  gsap.to(title, {
    y: 40, ease: 'none',
    scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
  });
}

function bindIconDraw(selector) {
  const icons = gsap.utils.toArray(selector);
  if (!icons.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    icons.forEach(svg => svg.querySelectorAll('path, circle, rect').forEach(s => { s.style.strokeDasharray = 'none'; }));
    return;
  }
  icons.forEach(svg => {
    const shapes = Array.from(svg.querySelectorAll('path, circle, rect'));
    shapes.forEach(s => {
      const len = s.getTotalLength ? s.getTotalLength() : 40;
      gsap.set(s, { strokeDasharray: len, strokeDashoffset: len });
    });
    ScrollTrigger.create({
      trigger: svg, start: 'top 90%', once: true,
      onEnter: () => {
        gsap.to(shapes, { strokeDashoffset: 0, duration: 0.8, ease: 'power2.out', stagger: 0.08 });
        gsap.fromTo(svg, { scale: 1 }, { scale: 1.08, duration: 0.3, delay: 0.75, ease: 'back.out(3)', yoyo: true, repeat: 1 });
      }
    });
  });
}

// Services: each flow-diagram "assembles" itself    nodes pop in, connector lines draw
// left-to-right between them    instead of appearing as one flat, pre-built graphic.
function bindFlowDraw(selector) {
  gsap.utils.toArray(selector).forEach(diagram => {
    const kids = Array.from(diagram.children);
    if (!kids.length) return;
    gsap.set(kids.filter(k => k.classList.contains('flow-node')), { scale: 0.5, opacity: 0 });
    gsap.set(kids.filter(k => k.classList.contains('flow-connector')), { scaleX: 0, transformOrigin: 'left center' });
    ScrollTrigger.create({
      trigger: diagram, start: 'top 88%', once: true,
      onEnter: () => {
        const tl = gsap.timeline();
        kids.forEach(k => {
          if (k.classList.contains('flow-node')) tl.to(k, { scale: 1, opacity: 1, duration: 0.35, ease: 'back.out(2)' });
          else tl.to(k, { scaleX: 1, duration: 0.3, ease: 'power2.out' });
        });
      }
    });
  });
}

// Work / project cards: a slightly more physical settle (scale + tiny rotation)
// than the site-wide .reveal fade, since these are the "proof" the page exists to show.
function bindCardSettle() {
  ScrollTrigger.batch('.card-settle', {
    start: 'top 90%',
    once: true,
    onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, scale: 1, rotate: 0, duration: 0.7, ease: 'back.out(1.4)', stagger: 0.08, overwrite: true })
  });
}

// case-study story rows: text and its paired media cluster slide in from opposite
// sides and meet in the middle, instead of just fading up like the rest of the page.
function bindStorySlide() {
  ScrollTrigger.batch('.story-slide', {
    start: 'top 85%',
    once: true,
    onEnter: batch => gsap.to(batch, {
      opacity: 1, x: 0, scale: 1, duration: 0.85, ease: 'power3.out', stagger: 0.12, overwrite: true,
      onComplete: () => batch.forEach(el => { el.classList.remove('story-slide', 'from-left', 'from-right'); gsap.set(el, { clearProps: 'transform' }); })
    })
  });
}

function bindSplitTextReveal(selector) {
  gsap.utils.toArray(selector).forEach(el => {
    const split = new SplitText(el, { type: 'words', wordsClass: 'word' });
    splitTextInstances.push(split);
    // one headline per page may mark a word to scramble in via decryptReveal
    // instead of the normal blur/fade  reuses the exact hero accent-word treatment.
    const decryptWord = el.dataset.decrypt
      ? split.words.find(w => w.textContent.trim() === el.dataset.decrypt)
      : null;
    const fadeWords = decryptWord ? split.words.filter(w => w !== decryptWord) : split.words;
    gsap.set(fadeWords, { opacity: 0, y: '0.4em', filter: 'blur(6px)' });
    if (decryptWord) {
      decryptWord.dataset.rbFinal = decryptWord.textContent;
      decryptWord.addEventListener('mouseenter', () => triggerDecrypt(decryptWord));
    }
    ScrollTrigger.create({
      trigger: el, start: 'top 85%', once: true,
      onEnter: () => {
        gsap.to(fadeWords, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.6, stagger: 0.035, ease: 'power2.out' });
        if (decryptWord) triggerDecrypt(decryptWord);
      }
    });
  });
}

function heroTimeline() {
  const h1 = document.getElementById('heroTitle');
  if (!h1) return null;
  const badge = document.querySelector('.hero-badge');
  const lede = document.querySelector('.hero .lede');
  const ctas = document.querySelector('.hero .hero-ctas');
  const flow = document.querySelector('.hero-flow');
  const words = h1.querySelectorAll('.word');
  const tl = gsap.timeline({ delay: 0.15 });
  gsap.set([badge, lede, ctas, flow].filter(Boolean), { opacity: 0, y: 16 });
  gsap.set(words, { opacity: 0, y: '0.4em', filter: 'blur(6px)' });
  if (badge) tl.to(badge, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
  tl.to(words, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.6, stagger: 0.035, ease: 'power2.out' }, badge ? '-=0.25' : 0);
  if (lede) tl.to(lede, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.25');
  if (ctas) tl.to(ctas, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3');
  if (flow) tl.to(flow, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3');
  tl.add(() => triggerDecrypt(document.getElementById('heroAccentWord')));
  return tl;
}

function bindEntranceAnimations(active) {
  resetGsapAnimations();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    bindFadeIn();
    bindReveal();
    bindCardSettle();
    bindStorySlide();
    bindFlowDraw('.flow-diagram');
    bindSplitTextReveal('.split-text, #testiQuote');
    bindStatCounts();
    bindScrollFills();
    if (active === 'home') heroTimeline();
  });
  mm.add('(prefers-reduced-motion: reduce)', () => {
    gsap.set('.fade-in, .reveal', { opacity: 1, y: 0, filter: 'none' });
    gsap.set('.card-settle', { opacity: 1, y: 0, scale: 1, rotate: 0 });
    gsap.set('.story-slide', { opacity: 1, x: 0, scale: 1 });
    gsap.set('.flow-diagram .flow-node', { scale: 1, opacity: 1 });
    gsap.set('.flow-diagram .flow-connector', { scaleX: 1 });
    document.querySelectorAll('.stat-num[data-final]').forEach(el => el.textContent = el.getAttribute('data-final'));
    document.querySelectorAll('#heroTitle .word').forEach(w => gsap.set(w, { opacity: 1, y: 0, filter: 'none' }));
    ['timelineFill', 'processFlowFill'].forEach(id => { const f = document.getElementById(id); if (f) f.style.height = '100%'; });
  });
}

function decryptReveal(el, finalText, onDone) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = finalText; onDone?.(); return; }
  const chars = '!<>-_\\/[]{}" "=+*^?#$%&';
  const duration = 650, fps = 24, totalFrames = Math.round(duration / (1000 / fps));
  let frame = 0;
  const id = setInterval(() => {
    frame++;
    const revealCount = Math.floor((frame / totalFrames) * finalText.length);
    el.textContent = finalText.split('').map((c, i) => c === ' ' ? ' ' : (i < revealCount ? c : chars[Math.floor(Math.random() * chars.length)])).join('');
    if (frame >= totalFrames) { clearInterval(id); el.textContent = finalText; onDone?.(); }
  }, 1000 / fps);
}

function triggerDecrypt(el) {
  if (!el || el.dataset.decrypting) return;
  el.dataset.decrypting = '1';
  decryptReveal(el, el.dataset.rbFinal || el.textContent, () => delete el.dataset.decrypting);
}

function bindDecrypt(selector) {
  document.querySelectorAll(selector).forEach(el => {
    el.dataset.rbFinal = el.textContent;
    el.addEventListener('mouseenter', () => triggerDecrypt(el));
  });
}

function bindSpotlight(selector) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });
}

function bindTilt(selector, strength) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;
  const max = strength || 7;
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--tilt-x', (py * -max) + 'deg');
      el.style.setProperty('--tilt-y', (px * max) + 'deg');
    });
    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--tilt-x', '0deg');
      el.style.setProperty('--tilt-y', '0deg');
    });
  });
}

function measureScrollPreview(photo) {
  const img = photo.querySelector('img');
  if (!img || !img.naturalWidth) return;
  const containerH = photo.clientHeight;
  const renderedH = photo.clientWidth * (img.naturalHeight / img.naturalWidth);
  photo.dataset.scrollDistance = Math.max(0, renderedH - containerH);
  photo.dataset.scrollDuration = Math.min(9, Math.max(3.5, (renderedH - containerH) / 140));
}

let scrollPreviewResizeBound = false;
function bindScrollPreview(selector) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll(selector).forEach(photo => {
    const img = photo.querySelector('img');
    const card = photo.closest('.project-card');
    if (!img || !card) return;
    if (img.complete) measureScrollPreview(photo); else img.addEventListener('load', () => measureScrollPreview(photo), { once: true });
    card.addEventListener('pointerenter', () => {
      const distance = parseFloat(photo.dataset.scrollDistance || '0');
      if (distance <= 0) return;
      img.style.transition = `transform ${photo.dataset.scrollDuration || 5}s linear`;
      img.style.transform = `translateY(-${distance}px)`;
    });
    card.addEventListener('pointerleave', () => {
      img.style.transition = 'transform 0.5s var(--ease-out-soft)';
      img.style.transform = 'translateY(0)';
    });
  });
  if (!scrollPreviewResizeBound) {
    scrollPreviewResizeBound = true;
    window.addEventListener('resize', () => {
      document.querySelectorAll('.pc-photo').forEach(measureScrollPreview);
    }, { passive: true });
  }
}

function bindMagnet(selector, strength) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;
  const max = strength || 10;
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--magnet-x', (px * max * 2) + 'px');
      el.style.setProperty('--magnet-y', (py * max) + 'px');
    });
    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--magnet-x', '0px');
      el.style.setProperty('--magnet-y', '0px');
    });
  });
}

function bindClickSpark(selector) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('click', e => {
      const n = 7;
      for (let i = 0; i < n; i++) {
        const spark = document.createElement('span');
        spark.className = 'rb-spark';
        const angle = (Math.PI * 2 * i) / n + Math.random() * 0.4;
        spark.style.setProperty('--sx', (Math.cos(angle) * 36) + 'px');
        spark.style.setProperty('--sy', (Math.sin(angle) * 36) + 'px');
        spark.style.left = e.clientX + 'px';
        spark.style.top = e.clientY + 'px';
        document.body.appendChild(spark);
        spark.addEventListener('animationend', () => spark.remove());
      }
    });
  });
}

const auroraState = { raf: null, io: null, resizeHandler: null };
function initAurora(canvas) {
  if (auroraState.raf) cancelAnimationFrame(auroraState.raf);
  if (auroraState.io) auroraState.io.disconnect();
  if (auroraState.resizeHandler) window.removeEventListener('resize', auroraState.resizeHandler);
  auroraState.raf = null; auroraState.io = null; auroraState.resizeHandler = null;
  if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let w = 0, h = 0, visible = true;
  const blobs = [
    { hue: '--accent-strong', rx: 0.35, ry: 0.55, speed: 0.00021, phase: 0, r: 0.55 },
    { hue: '--accent', rx: 0.70, ry: 0.60, speed: 0.00016, phase: 2, r: 0.50 },
    { hue: '--accent-strong', rx: 0.55, ry: 0.25, speed: 0.00027, phase: 4, r: 0.40 }
  ];
  function colorFor(varName) { return getComputedStyle(document.documentElement).getPropertyValue(varName).trim() || '#004BBA'; }
  function resize() {
    const rect = canvas.getBoundingClientRect();
    w = rect.width; h = rect.height;
    canvas.width = Math.max(1, w * dpr); canvas.height = Math.max(1, h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function frame(t) {
    if (!visible) return;
    ctx.clearRect(0, 0, w, h);
    blobs.forEach(b => {
      const cx = w * (0.5 + Math.sin(t * b.speed + b.phase) * b.rx * 0.5);
      const cy = h * (0.5 + Math.cos(t * b.speed * 1.3 + b.phase) * b.ry * 0.5);
      const radius = Math.max(w, h) * b.r;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      const c = colorFor(b.hue);
      grad.addColorStop(0, c + '4d');
      grad.addColorStop(1, c + '00');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    });
    auroraState.raf = requestAnimationFrame(frame);
  }
  resize();
  auroraState.raf = requestAnimationFrame(frame);
  auroraState.resizeHandler = resize;
  window.addEventListener('resize', resize, { passive: true });
  auroraState.io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      visible = e.isIntersecting;
      if (visible && auroraState.raf === null) auroraState.raf = requestAnimationFrame(frame);
    });
  });
  auroraState.io.observe(canvas);
}

function initDotGrid() {
  const canvas = document.getElementById('rbDotGrid');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const spacing = 26;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let w = 0, h = 0, raf = null;
  const mouse = { x: -9999, y: -9999 };
  function darkMode() {
    const t = document.documentElement.getAttribute('data-theme');
    return t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    const rgb = darkMode() ? '255,255,255' : '20,20,20';
    for (let y = spacing / 2; y < h; y += spacing) {
      for (let x = spacing / 2; x < w; x += spacing) {
        const dist = Math.hypot(x - mouse.x, y - mouse.y);
        const proximity = Math.max(0, 1 - dist / 160);
        ctx.beginPath();
        ctx.fillStyle = `rgba(${rgb},${(0.05 + proximity * 0.35).toFixed(3)})`;
        ctx.arc(x, y, 1 + proximity * 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
  function requestDraw() { if (raf) return; raf = requestAnimationFrame(() => { raf = null; draw(); }); }
  function resize() {
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  }
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; requestDraw(); }, { passive: true });
  window.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; requestDraw(); });
  new MutationObserver(requestDraw).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  resize();
}

let threeHeroModule = null;
function getThreeHeroModule() {
  if (!threeHeroModule) threeHeroModule = import('./three-hero.js');
  return threeHeroModule;
}

let processThreeModule = null;
function getProcessThreeModule() {
  if (!processThreeModule) processThreeModule = import('./process-three.js');
  return processThreeModule;
}

function bindMotionLayer(active) {
  bindSpotlight('.service-vcard, .project-card, .contact-card, .related-card');
  bindTilt('.pc-media, .service-visual, .detail-hero-thumb, .device-frame');
  bindScrollPreview('.pc-photo');
  bindImageSkeletons('.pc-photo, .detail-hero-thumb.has-image');
  bindMagnet('.btn-primary');
  bindMagnet('.btn-ghost', 6);
  bindClickSpark('.btn-primary');
  if (active === 'home') {
    initAurora(document.getElementById('heroAurora'));
    bindDecrypt('#heroAccentWord');
    bindIconDraw('.process-flow-icon .js-draw-icon, .value-prop .js-draw-icon');
    bindHeroParallax();
    getThreeHeroModule().then(m => m.initHeroScene(document.getElementById('heroThree')));
    getProcessThreeModule().then(m => m.initProcessScene(document.getElementById('processThree')));
  } else {
    initAurora(null);
    if (threeHeroModule) threeHeroModule.then(m => m.disposeHeroScene());
    if (processThreeModule) processThreeModule.then(m => m.disposeProcessScene());
  }
}

function bindStatCounts() {
  gsap.utils.toArray('.stat-num[data-final]').forEach(el => {
    const finalStr = el.getAttribute('data-final');
    const m = finalStr.match(/^([\d.]+)(.*)$/);
    if (!m) return;
    const target = parseFloat(m[1]);
    const decimals = m[1].includes('.') ? m[1].split('.')[1].length : 0;
    const suffix = m[2];
    const counter = { val: 0 };
    ScrollTrigger.create({
      trigger: el, start: 'top 85%', once: true,
      onEnter: () => gsap.to(counter, {
        val: target, duration: 1.1, ease: 'power3.out',
        onUpdate: () => { el.textContent = counter.val.toFixed(decimals) + suffix; },
        onComplete: () => { el.textContent = finalStr; }
      })
    });
  });
}

function bindScrollFills() {
  [['aboutTimeline', 'timelineFill'], ['processFlow', 'processFlowFill']].forEach(([trackId, fillId]) => {
    const track = document.getElementById(trackId), fill = document.getElementById(fillId);
    if (!track || !fill) return;
    gsap.set(fill, { height: '0%' });
    ScrollTrigger.create({
      trigger: track, start: 'top 75%', end: 'bottom 75%', scrub: true,
      onUpdate: self => { fill.style.height = (self.progress * 100) + '%'; }
    });
  });
}

function bindHeaderScroll() {
  const nav = document.getElementById('topNav');
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  toggle?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  bindThemeToggle();
}

function currentTheme() {
  return document.documentElement.getAttribute('data-theme') || 'light';
}

function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  try { localStorage.setItem('qyroxisTheme', t); } catch (e) { }
}

function bindThemeToggle() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  function paint() {
    const t = currentTheme();
    btn.innerHTML = t === 'dark' ? icon('i-sun') : icon('i-moon');
    btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }
  paint();
  btn.addEventListener('click', () => {
    applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    paint();
  });
}

try {
  const savedTheme = localStorage.getItem('qyroxisTheme');
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
} catch (e) { }

window.addEventListener('hashchange', render);
initDotGrid();
render();
