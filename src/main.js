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
import rasoiShotStoreSettings from './assets/img/projects/rasoi/desktop-store-settings.png';
import rasoiAboutStory from './assets/img/projects/rasoi/about-story.jpg';
import rasoiGalleryMosaic from './assets/img/projects/rasoi/gallery-mosaic.jpg';
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
    solutionPoints: ["Next.js web app + native mobile app, one backend", "Real-time staff dashboard for reservations", "Custom UPI checkout, no gateway middleman"],
    impact: "Cutting gateway fees lifted net margins by 3% on digital orders, and the new reservation and review flow turned tables faster and kept customers coming back.",
    impactPoints: ["+3% net margin on every digital order", "Faster table turnover from live reservations", "Review flow keeps customers coming back"],
    stats: [["3%", "net margin increase"]],
    tags: ["Node.js", "Reactjs", "Supabase", "PostgreSQL", "Next.js", "JavaScript"],
    quote: "Cutting out gateway fees put 3% straight back into our margins, and table turnover has never been smoother.",
    quoteRole: "Owner, Rasoi by TSN",
    reviews: [
      { name: "Priya S.", role: "Diner", text: "Booked a table for my parents' anniversary through the site, no back and forth on the phone, it was all set in two minutes." },
      { name: "Karan M.", role: "Regular customer", text: "Been ordering from here for months, paying by UPI straight from the app is just easier than typing in card details every time." },
      { name: "Ritika A.", role: "First-time visitor", text: "The menu photos actually match what you get. Small thing, but it's the reason I trusted the place before even walking in." }
    ],
    demo: { action: "Reserve a table", busy: "Checking availability…", result: "Table confirmed", sub: "no gateway fee" },
    // Ordered by importance to the case study, not by device type: reservations
    // and the fee-free checkout are the two features tied to the actual quoted
    // business outcomes (+3% margin, faster turnover), so they lead. Storefront
    // browsing and the admin utilities are real but supporting features, and
    // store settings (deepest, least differentiating) closes it out. See
    // productTourHTML's row-pairing, which preserves this order while still
    // pairing same-type screens so no tile is left beside dead space.
    screens: [
      { type: "laptop", kind: "image", src: rasoiShotReservation, caption: "Table reservations, booked online", blurb: "Real seats, real time slots, no phone call to the front desk." },
      { type: "phone", kind: "video", src: rasoiOrderVideo, poster: rasoiOrderPoster, caption: "Live order flow", blurb: "Add to cart and pay by UPI, without ever leaving the flow." },
      { type: "phone", kind: "image", src: rasoiShotAdminOverview, caption: "Real-time order sync", blurb: "Every new order lands on the kitchen screen the instant it's placed." },
      { type: "laptop", kind: "image", src: rasoiShotOurMenu, caption: "Customer-facing storefront", blurb: "Full menu, prices, and photos, browsable before a single item hits the cart." },
      { type: "laptop", kind: "image", src: rasoiShotManageMenuDesktop, caption: "Staff-side menu management", blurb: "Swap a price or pull a sold-out dish in seconds, no developer required." },
      { type: "laptop", kind: "image", src: rasoiShotStoreSettings, caption: "Store settings, owner-controlled", blurb: "GST, delivery fees, and promo codes, all editable without touching code." }
    ],
    brandMoment: {
      eyebrow: "Beyond the app",
      title: "We didn't just build software. We built the whole table.",
      lead: "Rasoi by TSN isn't just an ordering system, it's a full brand presence: the story, the photography, the voice, all shipped alongside the checkout flow.",
      shots: [
        { src: rasoiAboutStory, tag: "The story", caption: "The \"About\" page, written to sound like the restaurant, not a template." },
        { src: rasoiGalleryMosaic, tag: "The gallery", caption: "Built for appetite: real dishes, real plating, zero stock photography." }
      ],
      detail: "Open the real admin panel and you'll find a live promo code sitting next to their own launch offers.",
      detailChip: { icon: "%", code: "QYROXIS", sub: "not a demo account, a real, running discount" }
    }
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
    solutionPoints: ["React + TypeScript frontend, Node.js backend", "Lazy-loaded media for instant high-res playback", "Custom animation framework, cinematic feel"],
    impact: "Average session duration is up 150%, and the elevated brand perception has translated into a measurable rise in high-tier commercial inquiries.",
    impactPoints: ["+150% average session duration", "Elevated brand perception", "More high-tier commercial inquiries"],
    stats: [["150%", "longer session duration"]],
    tags: ["Node.js", "Reactjs", "JavaScript", "TypeScript"],
    quote: "Session times are up 150%, visitors finally experience our work the way it deserves to be seen.",
    quoteRole: "Studio Director, Raj Films Studio",
    reviews: [
      { name: "Sunita R.", role: "Parent", text: "My daughter's recital videos are up within days and they actually look cinematic, not like a shaky phone clip someone forwarded on WhatsApp." },
      { name: "Aman T.", role: "Student", text: "Signed up for the vocal course from my phone during a lunch break, seat confirmed before I'd even finished eating." },
      { name: "Divya K.", role: "Student", text: "The gallery loads instantly even on hostel wifi, which is honestly rare for a site with this much video." }
    ],
    demo: { action: "Enroll in a course", busy: "Reserving your seat…", result: "Enrollment confirmed", sub: "instant, no stutter" },
    // Ordered by importance: the gallery is the literal differentiator behind
    // the quoted +150% session duration ("experience our work the way it
    // deserves to be seen"), so it leads; course enrollment is a real but
    // secondary conversion feature.
    screens: [
      { type: "laptop", kind: "image", src: rajfilmsShotGalleryDesktop, caption: "Student performance gallery", blurb: "High-resolution stills and reels, lazy-loaded so nothing stutters." },
      { type: "phone", kind: "image", src: rajfilmsShotGalleryMobile, caption: "Cinematic gallery, anywhere", blurb: "The same fluid animation framework, tuned for a small screen." },
      { type: "laptop", kind: "image", src: rajfilmsShotCoursesDesktop, caption: "Structured course programs", blurb: "Every course laid out with schedule, level, and seats left, at a glance." },
      { type: "phone", kind: "image", src: rajfilmsShotCoursesMobile, caption: "Course enrollment, on mobile", blurb: "Browse programs and reserve a seat from a phone, in a few taps." }
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
    solutionPoints: ["Flutter + Dart, one codebase for web & mobile", "Node.js + Supabase backend", "Custom OTP routing tuned for instant delivery"],
    impact: "99.99% uptime from launch, and onboarding times cut by 60%: GardenRich now scales to a growing user base with zero compromises on security.",
    impactPoints: ["99.99% uptime since launch", "60% faster onboarding", "Scales with zero security compromises"],
    stats: [["99.99%", "platform uptime"], ["60%", "faster onboarding"]],
    tags: ["Flutter", "Dart", "Supabase", "Node.js", "Reactjs", "PostgreSQL"],
    quote: "99.99% uptime from day one, and onboarding that's 60% faster. The platform just works, at scale.",
    quoteRole: "Product Lead, GardenRich",
    reviews: [
      { name: "Nikhil B.", role: "Shopper", text: "Logging in used to be the most annoying part of shopping online. Here the OTP actually shows up in like two seconds." },
      { name: "Farah I.", role: "Customer", text: "Ordered from abroad and the code still landed instantly, honestly didn't expect that to work so smoothly." },
      { name: "Rohan D.", role: "Mobile user", text: "Browsing the catalog on my phone doesn't feel like a squeezed-down desktop site, it's actually built for it." }
    ],
    demo: { action: "Send OTP", busy: "Delivering worldwide…", result: "Verified", sub: "near-instant, anywhere" },
    // Ordered by importance: the OTP sign-in is the actual quoted differentiator
    // (near-instant delivery, 60% faster onboarding), so it leads over the
    // catalog browsing, which is real but table-stakes for any storefront.
    screens: [
      { type: "phone", kind: "image", src: gardenrichShotLoginMobile, caption: "Secure OTP sign-in", blurb: "One code, delivered in seconds, anywhere in the world." },
      { type: "laptop", kind: "image", src: gardenrichShotHomeDesktop, caption: "Fresh product catalog", blurb: "Search and filter the full catalog without a single loading spinner." },
      { type: "phone", kind: "image", src: gardenrichShotHomeMobile, caption: "Shopping on the go", blurb: "The full catalog, resized for one-handed browsing." }
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
    solutionPoints: ["Flutter codebase, web + mobile from one build", "Supabase with Row Level Security", "Digital QR check-in & Hevy-style workout log"],
    impact: "200+ members went fully paperless, check-in dropped to under a second, and the owner now runs the whole gym from one dashboard.",
    impactPoints: ["200+ members, zero paper", "Check-in time under 1 second", "Owner runs the gym from one dashboard"],
    stats: [["200+", "members, zero paper"], ["<1s", "check-in time"]],
    tags: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Edge Functions", "Vercel"],
    quote: "200+ members, zero paper, sub-second check-ins. I run the whole gym from one dashboard now.",
    quoteRole: "Owner, Vishal Fitness",
    reviews: [
      { name: "Manoj Y.", role: "Member", text: "Check-in is just scan and go now, I used to stand around while they found my name in a register." },
      { name: "Sneha P.", role: "Member", text: "I can see my own payment history in the app now instead of asking the front desk every time I forget when I paid." },
      { name: "Aditya G.", role: "Member", text: "The QR pass sounds gimmicky until you actually use it, then you forget gyms used to work any other way." }
    ],
    demo: { action: "Scan to check in", busy: "Scanning…", result: "Checked in", sub: "under 1 second" },
    mediaSplit: 3,
    // Ordered by importance: the owner's dashboard is a near-literal match to
    // the quote ("I run the whole gym from one dashboard now"), so it leads,
    // followed by the operational wins (sign-in ties to going paperless,
    // ledger ties to payment tracking, reports to efficiency). The marketing
    // site and plans page are real but table-stakes acquisition pages, not
    // the operational differentiator this case study is actually about.
    screens: [
      { type: "laptop", kind: "image", src: pulseShotAdminOverview, caption: "Owner's dashboard, dark mode", blurb: "Revenue, attendance, and activity, all on one screen." },
      { type: "phone", kind: "image", src: pulseShotLoginMobile, caption: "Member sign-in", blurb: "Members log in once and their whole membership follows them." },
      { type: "laptop", kind: "image", src: pulseShotAdminLedger, caption: "Every member's ledger, searchable", blurb: "Search any member's payment history in under a second." },
      { type: "laptop", kind: "image", src: pulseShotAdminReports, caption: "One-click reports and CSV exports", blurb: "Month-end numbers ready to export, no spreadsheet required." },
      { type: "laptop", kind: "image", src: pulseShotPlansDesktop, caption: "Flexible membership plans", blurb: "Every plan, price, and perk laid out for a quick decision." },
      { type: "laptop", kind: "image", src: pulseShotHomeDesktop, caption: "One pass, every workout", blurb: "The marketing site that turns visitors into sign-ups." }
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
    solutionPoints: ["Next.js + TypeScript storefront on Supabase", "WhatsApp checkout, no payment gateway", "Full admin panel for products & discounts"],
    impact: "Charm Avenue runs its own catalog and sales end to end, live in production, with zero gateway fees and no developer needed to launch a drop.",
    impactPoints: ["Zero gateway fees on every sale", "Team updates the catalog, no developer needed", "Running live in production, day to day"],
    stats: [["0%", "payment gateway fees, checkout runs through WhatsApp"]],
    tags: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    quote: "We can launch a new collection or run a sale ourselves, same day, no waiting on anyone.",
    quoteRole: "Founder, Charm Avenue by Nandini",
    reviews: [
      { name: "Meenal S.", role: "Customer", text: "Ordered a gift set and checkout just opened WhatsApp, paid the seller directly, didn't have to enter my card anywhere." },
      { name: "Tanvi J.", role: "Customer", text: "Found exactly what I wanted in the catalog in under a minute, the filters actually work instead of just being there for show." },
      { name: "Ishaan V.", role: "Repeat buyer", text: "Small brand, but the site doesn't feel small at all." }
    ],
    demo: { action: "Checkout via WhatsApp", busy: "Opening chat…", result: "Order confirmed", sub: "zero gateway fee" },
    // Ordered by importance: the mobile shop screen is the literal match to
    // the headline stat (WhatsApp checkout, 0% gateway fee), so it leads;
    // the storefront homepage is real but the most generic/table-stakes page.
    screens: [
      { type: "phone", kind: "image", src: charmShotShopMobile, caption: "Browse & shop on mobile", blurb: "Checkout opens straight into WhatsApp, no card entry, no gateway fee." },
      { type: "phone", kind: "image", src: charmShotProductMobile, caption: "Product page, mobile-first", blurb: "Every product page designed for a thumb, not a mouse." },
      { type: "laptop", kind: "image", src: charmShotShopDesktop, caption: "Full catalog, 90+ products", blurb: "90-plus products, organized so browsing never feels endless." },
      { type: "laptop", kind: "image", src: charmShotHomeDesktop, caption: "Storefront, styled for the brand", blurb: "A storefront that looks hand-built for the brand, because it was." }
    ]
  }
];

const SERVICES = [
  {
    slug: "ai-automation", icon: "i-bot", title: "AI & Automation Agents", desc: "Autonomous systems that take on the manual work: lead generation, data extraction, qualification.",
    detail: "We build autonomous agents that handle the repetitive, high-volume work your team shouldn't have to do by hand: browsing, extracting, qualifying, and acting on data at a scale manual research can't match.",
    examples: [], flow: ["i-doc", "i-bot", "i-check"],
    included: [
      "One agent, scoped to a real workflow you already run",
      "Explicit rules and guardrails, not a black-box model score",
      "Full decision log for every action it takes",
      "Results delivered where your team already works, not a new dashboard"
    ],
    faq: [
      { q: "Will this replace people on my team?", a: "No. It takes over the repetitive research and qualification work so your team spends time on the calls and decisions that actually need a person." },
      { q: "What happens when it gets something wrong?", a: "Every decision is logged and inspectable, so you can see exactly why it scored a lead the way it did and adjust the rule, not just trust a black box." },
      { q: "How long before it's live?", a: "Depends on how messy the source data is. We scope a realistic timeline after seeing your actual systems in the first call, not before." }
    ],
    pipeline: {
      proof: "400% faster",
      paragraph: "We build agents that run unattended against your real systems   scraping and structuring sources, qualifying inbound against your criteria, writing results back where your team already works. Every decision the agent makes is logged and inspectable, so you can audit why a lead scored the way it did instead of trusting a score.",
      steps: [
        { title: "Map the manual work", sub: "Shadow the process, find the repeatable decisions." },
        { title: "Build the agent with guardrails", sub: "Scoped tools, explicit rules, full decision logs." },
        { title: "Measure, then widen scope", sub: "Accuracy tracked against human baseline before we hand over more." }
      ],
      stats: [
        { to: 400, suffix: "%", caption: "faster lead generation" },
        { to: 92, suffix: "%", caption: "qualification accuracy" },
        { label: "Zero manual entry", caption: "data lands structured, first time" },
        { label: "Scales flat", caption: "more volume, no extra headcount" }
      ],
      cases: []
    }
  },
  {
    slug: "web-mobile", icon: "i-layers", title: "Web & Mobile Platforms", desc: "Cross-platform products built once, shipped everywhere: Flutter, React, Next.js.",
    detail: "One codebase, every screen. We ship web and native mobile from a shared foundation, so your product feels consistent everywhere without doubling the build effort.",
    examples: ["gardenrich"], flow: ["i-code", "i-layers", "i-check"],
    included: [
      "One codebase covering web, iOS, and Android",
      "Shared design system, so every surface looks and behaves the same",
      "Auth, database, and API from a single backend",
      "CI pipeline: one release ships to every platform at once"
    ],
    faq: [
      { q: "Do I need separate iOS and Android developers?", a: "No. Flutter ships both from one codebase; a native rewrite is only worth it if you hit a real platform-specific limitation." },
      { q: "What if I only need web for now?", a: "We build the shared core (auth, data, design tokens) first, so mobile becomes an addition later, not a rebuild." },
      { q: "Who maintains it after launch?", a: "You own it outright. We set up monitoring before handover and can stay on for support, but there's no vendor lock-in." }
    ],
    pipeline: {
      proof: "99.99% uptime",
      paragraph: "One codebase, one design language, every surface your customers use. We build the web app and the native apps from shared foundations so a change ships everywhere in the same release   and we keep the deployment, monitoring and rollback story boring on purpose.",
      steps: [
        { title: "Define the shared core", sub: "Data model, auth, design tokens   agreed before UI." },
        { title: "Ship platform by platform", sub: "Weekly builds in your hands, not a big reveal." },
        { title: "Harden and hand over", sub: "Monitoring, CI, and docs your team can run." }
      ],
      stats: [
        { to: 99.99, suffix: "%", caption: "uptime in production" },
        { to: 1, caption: "codebase, every platform" },
        { label: "Consistent UX", caption: "phone, tablet, desktop behave alike" },
        { label: "Faster iteration", caption: "one change, one release, all surfaces" }
      ],
      cases: [{ id: "gardenrich", blurb: "Storefront, ordering and admin, web and mobile, from one shared core." }]
    }
  },
  {
    slug: "ecommerce-payments", icon: "i-cart", title: "E-Commerce & Payments", desc: "Ordering, reservations, and custom payment flows that cut out unnecessary fees.",
    detail: "From checkout to reservations to custom payment routing, we build commerce systems tuned to how the business actually operates, including cutting out fees that don't need to exist.",
    examples: ["rasoi", "charm-avenue"], flow: ["i-cart", "i-diag", "i-check"],
    included: [
      "Storefront and admin panel your team can update without a developer",
      "Payment flow tuned to your volume, not a generic gateway",
      "Live reservation or order dashboard for staff",
      "Built to handle real multi-location traffic, not a demo load"
    ],
    faq: [
      { q: "Why not just use a marketplace or Shopify?", a: "Those take a cut of every order and rent you the customer relationship. We build the layer you own outright, direct processing included." },
      { q: "Can my team change prices and promos without calling you?", a: "Yes, that's built into the admin panel from day one." },
      { q: "Does this work across more than one location?", a: "Yes. Rasoi and Charm Avenue both run multi-location off the same system." }
    ],
    pipeline: {
      proof: "+3% net margin",
      paragraph: "Marketplace platforms take a cut of every order and give you a rented relationship with your customer. We build the ordering, reservation and payment layer you own   direct processing, your own data, and operations tooling that holds up across multiple locations on a Friday night.",
      steps: [
        { title: "Model the real order flow", sub: "Kitchen, floor, delivery   as it actually runs." },
        { title: "Build direct payments", sub: "Own the processor relationship, drop the middle fee." },
        { title: "Roll out location by location", sub: "Staff trained, margin tracked per site." }
      ],
      stats: [
        { to: 3, prefix: "+", suffix: "%", caption: "net margin recovered on digital orders" },
        { label: "Custom payment flows", caption: "lower fees than marketplace rails" },
        { label: "Real-time reservations", caption: "tables and slots managed live" },
        { label: "Multi-location", caption: "built for scale from day one" }
      ],
      cases: [
        { id: "rasoi", blurb: "Direct ordering across locations; +3% net margin." },
        { id: "charm-avenue", blurb: "Reservations and payments for a multi-site venue." }
      ]
    }
  },
  {
    slug: "healthcare-enterprise", icon: "i-heart", title: "Healthcare & Enterprise Software", desc: "Secure, compliant systems for handling sensitive data at scale.",
    detail: "Enterprise and healthcare software has to be fast for staff and airtight for data. We build systems that handle sensitive records securely without slowing down the people who rely on them.",
    examples: [], flow: ["i-heart", "i-shield", "i-check"],
    included: [
      "Role-based access control built at the database layer",
      "Full audit trail on every record touch: who, when, what changed",
      "Encryption at rest and in transit as the default",
      "Parallel rollout beside your existing system until the numbers match"
    ],
    faq: [
      { q: "Do you handle compliance certification?", a: "We build to the access-control and audit-trail requirements your compliance team defines. We're not a certification body ourselves." },
      { q: "Can we run this alongside our current system first?", a: "Yes, we roll out in parallel until the numbers agree before anyone fully switches over." },
      { q: "What happens to our existing data?", a: "It's migrated in during rollout and validated against the old system before that system is retired." }
    ],
    pipeline: {
      proof: "45% faster retrieval",
      paragraph: "Clinical and enterprise teams lose hours to systems that were never designed around their workflow. We build records, intake and reporting tools with access control at the data layer, audit trails by default, and interfaces shaped by watching the people who use them all day.",
      steps: [
        { title: "Audit data and access", sub: "Who touches what, and under which rule." },
        { title: "Build to the compliance line", sub: "Encryption, roles and audit logs from the first commit." },
        { title: "Roll out beside the old system", sub: "Parallel running until the numbers agree." }
      ],
      stats: [
        { to: 45, suffix: "%", caption: "faster record retrieval" },
        { label: "Enterprise-grade security", caption: "encryption and audit trails as standard" },
        { label: "Web + mobile", caption: "same record, ward or desk" },
        { label: "Fewer entry errors", caption: "validation where clinicians type" }
      ],
      cases: []
    }
  },
  {
    slug: "full-stack", icon: "i-code", title: "Custom Full-Stack Development", desc: "End-to-end builds, database to deployment, tailored to how the business runs.",
    detail: "When nothing off-the-shelf fits, we build the whole thing, schema to server to interface, shaped around your actual workflow instead of forcing your workflow to fit a template.",
    examples: ["pulse"], flow: ["i-doc", "i-code", "i-layers"],
    included: [
      "Schema designed around your real workflow, not a generic template",
      "Row-level security applied at the database from the first commit",
      "Weekly demos on a shared board, no surprise scope",
      "Support and iteration after go-live, not a handoff"
    ],
    faq: [
      { q: "What if we don't know exactly what we need yet?", a: "We start by modeling your actual workflow on-site, so the schema comes from how the business runs, not a guess." },
      { q: "Do you disappear after launch?", a: "No. Ongoing support and iteration is part of the engagement, not a separate contract you have to negotiate later." },
      { q: "Who owns the code?", a: "You do, entirely. There's no proprietary lock-in." }
    ],
    pipeline: {
      proof: "DB → deploy",
      paragraph: "When off-the-shelf software forces the business to work backwards, we build the thing that fits. Schema, API, interface, deployment and the support after launch   one team accountable for the whole stack, with row-level security applied from the database up rather than patched at the edge.",
      steps: [
        { title: "Model the business, not the app", sub: "Schema first, drawn from real workflow." },
        { title: "Build in the open", sub: "Shared board, weekly demo, no surprise invoices." },
        { title: "Deploy and keep improving", sub: "Support and iteration after go-live, not a handoff." }
      ],
      stats: [
        { label: "Schema → deployment", caption: "one team, whole stack" },
        { label: "Row-level security", caption: "by default, not bolted on" },
        { label: "Built around workflow", caption: "the real one, observed on site" },
        { label: "Supported after launch", caption: "continuous iteration, not a handover" }
      ],
      cases: [{ id: "pulse", blurb: "Membership, scheduling and billing built around how the gym floor actually runs." }]
    }
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

const CONTACT_STEPS = [
  { year: "Step 1", title: "Message received", desc: "Your project details land directly in our inbox, no ticket queue, no chatbot in between." },
  { year: "Step 2", title: "Reviewed within 24h", desc: "A real person reads it and checks it against what we've actually shipped before." },
  { year: "Step 3", title: "We reply with next steps", desc: "A scoped starting point for your project, not a generic sales pitch." }
];

const FOOTER_SERVICES = ["AI Agents", "Web Platforms", "Mobile Apps", "E-Commerce", "Healthcare Software", "Full-Stack Dev"];
const TOOLS = ["Python", "Node.js", "React", "Flutter", "Next.js", "Supabase", "LangChain", "PostgreSQL"];

// 4th field is the PROJECTS id backing this stat (labels above don't reliably
// match p.id/p.title  e.g. "Vishal Fitness" vs the real id "pulse" / title
// "Vishal Fitness Gym") so renderStatBand can attach that project's mark.
const HOME_STATS = [
  ["99.99%", "platform uptime", "GardenRich", "gardenrich"],
  ["150%", "longer session duration", "Raj Films Studio", "rajfilms"],
  ["200+", "members onboarded, zero paper", "Vishal Fitness", "pulse"],
  ["0%", "payment gateway fees on WhatsApp checkout", "Charm Avenue", "charm-avenue"]
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
function deviceFrameHTML(s, domain) {
  return `<div class="device-frame ${s.type}">
    ${s.type === 'laptop'
      ? `<div class="device-bar"><span class="db-dot"></span><span class="db-dot"></span><span class="db-dot"></span><span class="device-url">${domain || ''}</span></div>`
      : `<span class="device-notch"></span>`}
    <div class="device-screen">${s.kind === 'video'
      ? `<video autoplay muted loop playsinline poster="${s.poster}"><source src="${s.src}" type="video/mp4" /></video>`
      : `<img src="${s.src}" alt="${s.caption || ''}" loading="lazy" />`}</div>
  </div>`;
}

// One full-width editorial row per screen, alternating sides, instead of
// small boxed cards in a grid, each screen gets real room to breathe like an
// Apple/Stripe feature page. Order follows the project's own importance
// ranking (see the screens array), not device type, since every row is full
// width on its own, there's no "dead space beside a shorter tile" problem
// left to solve.
function featureRowHTML(s, num, domain, index) {
  const isPhone = s.type === 'phone';
  return `<div class="feature-row${isPhone ? ' is-phone' : ''}${index % 2 === 1 ? ' is-reverse' : ''}">
    <div class="fr-media">${deviceFrameHTML(s, domain)}</div>
    <div class="fr-copy">
      <span class="fr-num">0${num}</span>
      <h3>${s.caption || ''}</h3>
      <p>${s.blurb || ''}</p>
    </div>
  </div>`;
}

function productTourHTML(p) {
  const screens = p.screens || [];
  if (!screens.length) return '';
  return `<div class="wrap">
    <section class="product-tour">
      <div class="pt-head reveal">
        <span class="eyebrow">( Inside the product )</span>
        <h2>A closer look.</h2>
        <p class="pt-sub">Every screen below shipped to production, not a mockup.</p>
      </div>
      <div class="feature-rows">${screens.map((s, i) => featureRowHTML(s, i + 1, p.domain, i)).join('')}</div>
    </section>
  </div>`;
}

const CURSOR_SVG = `<svg viewBox="0 0 24 24" fill="none"><path d="M4 2L4 19L8.5 15L11 21L14 19.5L11.5 13.5L18 13.5L4 2Z" fill="white" stroke="#1A1A1A" stroke-width="1.2" stroke-linejoin="round"/></svg>`;

// brand-cinema: an opt-in, per-project closing beat for case studies that have
// real brand photography to show, not just app UI. A pinned, scroll-scrubbed
// horizontal sequence (title -> each photo full-bleed -> a closing detail),
// see bindBrandCinema for the ScrollTrigger driving it. Absent unless a
// project defines p.brandMoment, so it never forces generic content onto
// projects that don't have this material yet. Without JS (or under
// prefers-reduced-motion, which never calls bindBrandCinema) the frames just
// stack in normal document flow via the base CSS, so every image and caption
// is still reachable.
function brandCinemaHTML(p) {
  const bm = p.brandMoment;
  if (!bm) return '';
  const frames = [
    `<div class="cf cf-dark">
      <div class="cf-title-inner">
        <span class="eyebrow">${bm.eyebrow}</span>
        <h2>${bm.title}</h2>
        <p>${bm.lead}</p>
      </div>
    </div>`,
    ...bm.shots.map((s, i) => `<div class="cf cf-media">
      <img src="${s.src}" alt="" loading="lazy" />
      <div class="cf-scrim"></div>
      <div class="cf-copy">
        <span class="cf-num">0${i + 1} &mdash; ${s.tag}</span>
        <p class="cf-cap">${s.caption}</p>
      </div>
    </div>`),
    bm.detail ? `<div class="cf cf-dark">
      <div class="cf-detail-inner">
        <span class="eyebrow">A detail we're proud of</span>
        <p class="lede">${bm.detail}</p>
        ${bm.detailChip ? `<div class="promo-chip">
          <div class="pc-icon">${bm.detailChip.icon}</div>
          <div class="pc-text"><span class="pc-code">${bm.detailChip.code}</span><br /><span class="pc-sub">${bm.detailChip.sub}</span></div>
        </div>` : ''}
      </div>
    </div>` : ''
  ].filter(Boolean);
  return `<section class="brand-cinema" id="brandCinemaWrap">
    <div class="cinema-track" id="cinemaTrack">${frames.join('')}</div>
    <div class="cf-dots" id="cfDots">${frames.map((_, i) => `<i class="${i === 0 ? 'active' : ''}"></i>`).join('')}</div>
  </section>`;
}

// opt-in per-project customer reviews, distinct from the single owner/founder
// pull-quote in .detail-quote-band: this is what the people who actually use
// the finished product (diners, members, shoppers, students) have to say.
function reviewsHTML(p) {
  const reviews = p.reviews || [];
  if (!reviews.length) return '';
  return `<div class="wrap">
    <section class="reviews-block">
      <div class="pt-head reveal">
        <span class="eyebrow">( What people are saying )</span>
        <h2>Real users, real words.</h2>
      </div>
      <div class="reviews-grid">
        ${reviews.map(r => `<div class="review-card reveal">
          <div class="review-stars" aria-hidden="true">★★★★★</div>
          <p class="review-text">"${r.text}"</p>
          <div class="review-author">
            <span class="review-avatar">${r.name.charAt(0)}</span>
            <div>
              <span class="review-name">${r.name}</span>
              ${r.role ? `<span class="review-role">${r.role}</span>` : ''}
            </div>
          </div>
        </div>`).join('')}
      </div>
    </section>
  </div>`;
}

function chapterPinHTML(p) {
  const chapters = [
    { tag: "Challenge", title: p.title.split(' ')[0] + "'s starting problem", text: p.challenge, points: null },
    { tag: "Solution", title: "What we built", text: p.solution, points: p.solutionPoints },
    { tag: "Impact", title: "What changed", text: p.impact, points: p.impactPoints }
  ];
  const firstScreen = (p.screens || [])[0];
  return `<div class="wrap">
    <div class="chapter-pin-wrap" id="chapterPinWrap">
      <div class="chapter-text-col">
        ${chapters.map((c, i) => `<div class="chapter-step" data-chapter="${i}">
          <span class="chapter-tag">${c.tag}</span>
          <h3>${c.title}</h3>
          <p>${c.text}</p>
          ${c.points ? `<div class="chapter-points">${c.points.map(pt => `<div class="benefit-item">${icon('i-check')}<span>${pt}</span></div>`).join('')}</div>` : ''}
        </div>`).join('')}
      </div>
      <div class="chapter-visual-col" id="chapterVisualCol">
        <div class="chapter-visual-inner">
          <div class="chapter-panel active chapter-panel-dark" data-panel="0">
            ${icon(p.icon, 'chapter-panel-icon')}
          </div>
          <div class="chapter-panel" data-panel="1">
            ${firstScreen ? `<img src="${firstScreen.src}" alt="" loading="lazy" />` : icon(p.icon, 'chapter-panel-icon')}
          </div>
          <div class="chapter-panel chapter-panel-dark" data-panel="2">
            ${statNum(p.stats[0][0])}
            <div class="chapter-panel-cap">${p.stats[0][1]}</div>
          </div>
          <div class="chapter-dots"><span class="active"></span><span></span><span></span></div>
        </div>
      </div>
    </div>
  </div>`;
}

function liveDemoHTML(p) {
  if (!p.demo) return '';
  return `<div class="wrap">
    <section class="live-demo-block reveal">
      <span class="eyebrow">( See it live )</span>
      <h2>Watch it work.</h2>
      <div class="demo-stage" id="demoStage" data-busy="${p.demo.busy}" data-result="${p.demo.result}">
        <div class="demo-card">
          <span class="demo-card-cat">${p.category}</span>
          <button class="demo-btn" id="demoBtn">${p.demo.action}</button>
          <div class="demo-status" id="demoStatus">Ready</div>
          <div class="demo-sub">${p.demo.sub}</div>
        </div>
        <div class="demo-cursor" id="demoCursor">${CURSOR_SVG}</div>
      </div>
    </section>
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

function renderTrustLogos() {
  return `<div class="trust-logos reveal">
    ${PROJECTS.map(p => `<span class="trust-logo" style="background:${p.themeColor || 'var(--bg-deep)'}">${p.logoHTML || icon(p.icon)}</span>`).join('')}
  </div>`;
}

// Image-based logos (Rasoi/Raj Films/Pulse) shrink fine into a tiny swatch;
// GardenRich/Charm Avenue's logoHTML is a rem-sized text wordmark that would
// clip at that size, so those fall back to a plain theme-color dot instead.
function statSrcMarkHTML(p) {
  if (!p) return '';
  if (p.logoHTML && p.logoHTML.includes('<img')) {
    return `<span class="stat-src-mark">${p.logoHTML}</span>`;
  }
  return `<span class="stat-src-dot" style="background:${p.themeColor || 'var(--accent-strong)'}"></span>`;
}

function renderStatBand() {
  return `<section class="stat-grid">
      ${HOME_STATS.map(([n, c, s, pid]) => {
    const p = PROJECTS.find(x => x.id === pid);
    return `<div class="stat-cell reveal">${statNum(n)}<div class="stat-cap">${c}</div><div class="stat-src">${statSrcMarkHTML(p)}${s}</div></div>`;
  }).join('')}
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

function serviceCard(s, i) {
  const exs = (s.examples || []).map(id => PROJECTS.find(p => p.id === id)).filter(Boolean);
  return `<a class="project-card card-settle" href="#/services/${s.slug}" data-nav>
    <div class="pc-media">
      <div class="pc-pattern">${icon(s.icon)}</div>
      <div class="pc-overlay">
        <div class="pc-top">
          <span class="pc-badge">Service 0${i + 1}</span>
        </div>
        <div class="pc-bottom">
          <div class="pc-title-wrap">
            <h3>${s.title}</h3>
            <p class="pc-desc">${s.desc}</p>
            ${exs.length ? `<span class="pc-proof-mini">Built for ${exs.map(e => e.title).join(' & ')}</span>` : ''}
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
            <a class="foot-btn outline" href="mailto:contact@qyroxis.com?subject=Let%27s%20schedule%20a%20call">Book a call</a>
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
      if (r.ok) {
        btn.classList.add('btn-success');
        label.innerHTML = `${icon('i-check', 'btn-icon')} Sent, we'll be in touch`;
        e.target.reset();
      } else {
        label.textContent = 'Could not send, email us directly';
      }
    })
    .catch(() => { label.textContent = 'Could not send, email us directly'; })
    .finally(() => {
      setTimeout(() => { label.textContent = original; btn.classList.remove('btn-pulse', 'btn-success'); delete btn.dataset.busy; }, 2600);
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
      ${Array(3).fill(PROJECTS.map(p => `<div class="marquee-card">
        <div class="svc-logo-face" style="background:${p.themeColor || 'var(--bg-deep)'}">${p.logoHTML || icon(p.icon)}</div>
        <span class="mc-label">${p.title}</span>
      </div>`).join('')).join('')}
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
      ${renderTrustLogos()}
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
      <div class="project-grid">${SERVICES.map((s, i) => serviceCard(s, i)).join('')}</div>
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
      <div class="block-head-center">
        <span class="eyebrow">( What clients say )</span>
        <h2>Real clients,<br/>real results.</h2>
      </div>
      <div class="reviews-grid">
        ${['rasoi', 'gardenrich', 'pulse'].map(id => PROJECTS.find(p => p.id === id)).filter(Boolean).map(p => `<div class="review-card reveal">
          <p class="review-text">"${p.quote}"</p>
          <div class="review-author">
            <span class="review-avatar testi-badge" style="background:${p.themeColor || 'var(--bg-deep)'}">${p.logoHTML || ''}</span>
            <div><span class="review-name">${p.title}</span><span class="review-role">${p.quoteRole || ''}</span></div>
          </div>
        </div>`).join('')}
      </div>
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

function rowListHTML(projects) {
  const rows = projects.map((p, i) => `<a class="row-list-item reveal" href="#/work/${p.id}" data-nav
      data-cursor-label="View" data-preview-color="${p.themeColor || '#111'}">
    <span class="rli-num">0${i + 1}</span>
    <span class="rli-title">${p.title}</span>
    <span class="rli-meta">
      <span class="rli-stat">${p.stats[0][0]}</span>
      <span class="rli-cat">${p.category}</span>
      <span class="rli-year">${p.year}</span>
    </span>
    <span class="rli-arrow">${icon('i-arrow')}</span>
    <span class="rli-logo-src" hidden>${p.logoHTML || icon(p.icon)}</span>
  </a>`).join('');
  return `<div class="row-list" id="workRowList">
    ${rows}
    <div class="giant-preview" id="wlGiantPreview" aria-hidden="true"><div class="gp-logo" id="gpLogo"></div></div>
    <div class="wl-cursor" id="wlCursor" aria-hidden="true"></div>
  </div>`;
}

function pageWork() {
  return `
  ${pageHeaderHTML("Work", "Results we're proud to put our name on.",
    "A look at how we've helped ambitious teams turn software into measurable, compounding outcomes.")}
  <section class="block" style="padding-top:0;">
    <div class="wrap">
      ${rowListHTML(PROJECTS)}
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

  ${chapterPinHTML(p)}
  ${liveDemoHTML(p)}

  ${brandCinemaHTML(p)}
  ${productTourHTML(p)}
  ${reviewsHTML(p)}

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

// Services page: the five services presented as a build pipeline, a sticky rail
// tracks scroll progress through them and each one "compiles" as it enters view.
// See Services pipeline demo/design_handoff_services_page/README.md for the source spec.
const SVC_RAIL_LABELS = ["AI Agents", "Platforms", "Commerce", "Healthcare", "Full-Stack"];

function svcRailHTML() {
  const nodes = SERVICES.map((s, i) => `<a class="svc-rail-node" href="#svc-${i + 1}" data-svc-jump data-rail="${i + 1}">
      <span class="svc-rail-dot"><span class="svc-rail-fill" aria-hidden="true"></span></span>
      <span class="svc-rail-text">0${i + 1} ${SVC_RAIL_LABELS[i]}</span>
    </a>`).join('');
  return `<nav class="svc-rail" aria-label="Services pipeline">
    <span class="svc-rail-label">Pipeline</span>
    ${nodes}
    <a class="svc-rail-node svc-rail-end" href="#svc-cta" data-svc-jump>
      <span class="svc-rail-dot svc-rail-square"></span>
      <span class="svc-rail-text">Start</span>
    </a>
    <span class="svc-rail-progress" aria-hidden="true"></span>
  </nav>`;
}

function svcManifestHTML() {
  const rows = SERVICES.map((s, i) => `<a class="svc-manifest-row reveal" href="#svc-${i + 1}" data-svc-jump>
      <span class="smr-title">0${i + 1}&nbsp; ${s.title}</span>
      <span class="smr-proof">${s.pipeline.proof}</span>
    </a>`).join('');
  return `<div class="svc-manifest reveal">
    <div class="svc-manifest-head"><span>Service</span><span>Proof</span></div>
    ${rows}
  </div>`;
}

function svcFlowHTML(steps) {
  return `<div class="svc-flow">
    <span class="svc-flow-line"></span>
    ${steps.map((st, i) => `<div class="svc-flow-step reveal">
      <span class="svc-flow-num">${i + 1}</span>
      <div class="svc-flow-title">${st.title}</div>
      <div class="svc-flow-sub">${st.sub}</div>
    </div>`).join('')}
  </div>`;
}

// Not individually .reveal: .svc-stats' hairline dividers are a background
// showing through a 1px grid gap (needed since the grid is auto-fit, so a
// fixed column count for nth-child border tricks isn't available), and fading
// each cell in on its own would leave that background exposed as a plain grey
// block mid-transition. The whole grid fades in as one unit instead (reveal is
// on .svc-stats itself, see svcPipelineSectionHTML).
function svcStatCellHTML(st) {
  if (st.to != null) {
    const finalStr = `${st.to}${st.suffix || ''}`;
    return `<div class="svc-stat">
      <div class="svc-stat-num-row">${st.prefix ? `<span class="svc-stat-prefix">${st.prefix}</span>` : ''}${statNum(finalStr)}</div>
      <div class="svc-stat-cap">${st.caption}</div>
    </div>`;
  }
  return `<div class="svc-stat">
    <div class="svc-stat-word">${st.label}</div>
    <div class="svc-stat-cap">${st.caption}</div>
  </div>`;
}

// stacked=true: logo panel on top, no "read the build" link (used when a service
// links two case studies side by side); stacked=false: text beside the logo panel
// with the link (the single-case-study layout). Logo panel reuses the same
// themed logo-on-brand-color treatment as the project/service cards (pc-logo-face).
function svcCaseCardHTML(ref, stacked) {
  const p = PROJECTS.find(x => x.id === ref.id);
  if (!p) return '';
  const shot = `<div class="svc-shot"><div class="svc-logo-face" style="background:${p.themeColor || 'var(--bg-deep)'}">${p.logoHTML || icon(p.icon)}</div></div>`;
  const body = `<div class="svc-case-body">
    <span class="svc-case-tag">Case study</span>
    <h3 class="svc-case-title">${p.title}</h3>
    <p class="svc-case-blurb">${ref.blurb}</p>
    ${stacked ? '' : `<span class="svc-case-link">Read the build ${icon('i-arrow', 'btn-icon')}</span>`}
  </div>`;
  return `<a class="project-card svc-case${stacked ? ' svc-case-stacked' : ''} reveal" href="#/work/${p.id}" data-nav>
    ${stacked ? shot + body : body + shot}
  </a>`;
}

function svcCasesHTML(cases) {
  if (!cases.length) return '';
  const stacked = cases.length > 1;
  return `<div class="svc-cases${stacked ? ' svc-cases-multi' : ''}">${cases.map(c => svcCaseCardHTML(c, stacked)).join('')}</div>`;
}

function svcPipelineSectionHTML(s, i) {
  const n = i + 1;
  const num = String(n).padStart(2, '0');
  return `<section class="svc-block" id="svc-${n}" data-svc="${n}">
    <div class="svc-block-grid">
      <div class="svc-block-sticky">
        <div class="svc-num reveal">${num}</div>
        <div class="svc-tile reveal">${icon(s.icon, 'svc-tile-icon')}</div>
        <h2 class="svc-block-h2 split-text reveal">${s.title}</h2>
        <p class="svc-block-lede reveal">${s.desc}</p>
        <a class="svc-detail-link reveal" href="#/services/${s.slug}" data-nav>Service detail ${icon('i-arrow', 'btn-icon')}</a>
      </div>
      <div class="svc-block-body">
        <p class="svc-para reveal">${s.pipeline.paragraph}</p>
        ${svcFlowHTML(s.pipeline.steps)}
        <div class="svc-stats reveal">${s.pipeline.stats.map(svcStatCellHTML).join('')}</div>
        ${svcCasesHTML(s.pipeline.cases)}
      </div>
    </div>
  </section>`;
}

function pageServices() {
  return `
  <div class="svc-pipe">
    ${svcRailHTML()}
    <section class="svc-hero">
      <div class="svc-hero-grid">
        <div class="svc-hero-copy">
          <div class="svc-eyebrow-row"><span class="svc-eyebrow-dash" aria-hidden="true"></span><span class="eyebrow" id="svcEyebrowWord">Services</span></div>
          <h1 class="svc-hero-h1 split-text">Five ways we ship working software.</h1>
          <p class="svc-hero-body reveal">No black boxes. Every engagement runs the same way: scope the real problem, build in the open, measure the outcome. Below is what we build and what it has actually done.</p>
          <div class="hero-ctas reveal">
            <a class="btn btn-primary" href="#svc-cta" data-svc-jump>Start a project ${icon('i-arrow', 'btn-icon')}</a>
            <a class="btn btn-ghost" href="#svc-1" data-svc-jump>See the five</a>
          </div>
        </div>
        ${svcManifestHTML()}
      </div>
    </section>

    ${SERVICES.map((s, i) => svcPipelineSectionHTML(s, i)).join('')}

    <section class="svc-pipe-cta" id="svc-cta">
      <div class="svc-cta-grid">
        <h2 class="split-text">Tell us what is slow, manual, or breaking.</h2>
        <div>
          <p class="reveal">We will tell you whether software fixes it, what it would take, and what it would cost   before either of us commits.</p>
          <a class="btn btn-primary" href="#/contact" data-nav>Book a scoping call ${icon('i-arrow', 'btn-icon')}</a>
        </div>
      </div>
    </section>
  </div>`;
}

function pageServiceDetail(slug) {
  const idx = SERVICES.findIndex(s => s.slug === slug);
  const s = SERVICES[idx] || SERVICES[0];
  const exs = (s.examples || []).map(id => PROJECTS.find(p => p.id === id)).filter(Boolean);
  const proof = exs[0];
  const others = SERVICES.filter(x => x.slug !== s.slug);
  return `
  ${pageHeaderHTML("Services", s.title, s.desc)}
  <div class="wrap">
    <div class="svc-tile reveal">${icon(s.icon, 'svc-tile-icon')}</div>
    <div class="detail-hero-thumb reveal">
      <div class="svc-hero-flow">${flowDiagramHTML(s.flow)}</div>
      <span class="domain-tag svc-proof-tag">${s.pipeline.proof}</span>
      ${proof ? `<a class="visit-btn" href="#/work/${proof.id}" data-nav>See case study ${icon('i-diag', 'btn-icon')}</a>` : ''}
    </div>
  </div>

  <section class="block" style="padding-bottom:0;">
    <div class="wrap"><p class="svc-para reveal">${s.detail}</p></div>
  </section>

  <section class="block">
    <div class="wrap">
      <span class="eyebrow">( How it works )</span>
      <div style="margin-top:24px;">${svcFlowHTML(s.pipeline.steps)}</div>
    </div>
  </section>

  <section class="block" style="padding-top:0;">
    <div class="wrap">
      <span class="eyebrow">( What's included )</span>
      <ul class="svc-included reveal" style="margin-top:24px;">${s.included.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>
  </section>

  <section class="block" style="background:var(--bg-deep); border-top:1px solid var(--border); border-bottom:1px solid var(--border);">
    <div class="wrap">
      <span class="eyebrow">( The numbers )</span>
      <div class="svc-stats reveal" style="margin-top:24px;">${s.pipeline.stats.map(svcStatCellHTML).join('')}</div>
    </div>
  </section>

  ${s.pipeline.cases.length ? `<section class="block">
    <div class="wrap">
      <span class="eyebrow">( Proof )</span>
      <h2 style="margin-top:14px;">Where this shipped</h2>
      <div style="margin-top:28px;">${svcCasesHTML(s.pipeline.cases)}</div>
    </div>
  </section>` : ''}

  <section class="block">
    <div class="wrap">
      <span class="eyebrow">( Questions )</span>
      <div class="svc-faq reveal" style="margin-top:24px;">
        ${s.faq.map(f => `<details class="svc-faq-item"><summary>${f.q}</summary><p>${f.a}</p></details>`).join('')}
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
        ${VALUES.map(v => `<div class="value-card reveal">
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
      <span class="eyebrow">( Changelog )</span>
      <h2 style="margin-top:14px;">What shipped, when</h2>
      <div class="timeline" id="aboutTimeline">
        <div class="timeline-track"></div>
        <div class="timeline-fill" id="timelineFill"></div>
        <div class="timeline-list">
          ${TIMELINE.map(t => `<div class="timeline-item reveal">
            <span class="timeline-year">${t.year}</span>
            <div class="timeline-body">
              <h3>${t.title}</h3>
              <p>${t.desc}</p>
            </div>
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
    <div class="wrap">
      <div class="contact-atmosphere">
        <div class="hero-wash" aria-hidden="true"></div>
        <canvas class="rb-aurora" id="contactAurora" aria-hidden="true"></canvas>
        <canvas class="rb-three-hero" id="contactThree" aria-hidden="true"></canvas>
        <div class="hero-fade-top" aria-hidden="true"></div>

        <div class="glass-panel contact-glass reveal">
          <div class="cg-grid">
            <div class="cg-info">
              <span class="eyebrow">( Get in touch )</span>
              <h2>Let's build what's next.</h2>
              <div class="gp-rows">
                <a class="gp-row" href="mailto:contact@qyroxis.com">
                  <span class="gp-label">Email</span><span class="gp-value">contact@qyroxis.com</span>
                </a>
                <div class="gp-row"><span class="gp-label">Location</span><span class="gp-value">Bangalore, India</span></div>
                <div class="gp-row"><span class="gp-label">Local time</span><span class="gp-value" id="clockValue">&nbsp;</span></div>
                <div class="gp-row"><span class="gp-label">Reply time</span><span class="gp-value">Usually within 24h</span></div>
              </div>
            </div>

            <div class="cg-form">
              <form id="contactForm" onsubmit="sendDemo(event)">
                <div class="gp-field"><label for="cf-name">Name *</label><input id="cf-name" type="text" required autocomplete="name" placeholder="Jane Doe" /></div>
                <div class="gp-field"><label for="cf-email">Email *</label><input id="cf-email" type="email" required autocomplete="email" placeholder="jane@company.com" /></div>
                <div class="gp-field-row">
                  <div class="gp-field"><label for="cf-phone">Phone</label><input id="cf-phone" type="tel" autocomplete="tel" placeholder="+91 98765 43210" /></div>
                  <div class="gp-field"><label for="cf-company">Company</label><input id="cf-company" type="text" autocomplete="organization" placeholder="Company name" /></div>
                </div>
                <div class="gp-field"><label for="cf-msg">Project details *</label><textarea id="cf-msg" rows="3" required placeholder="Tell us about your goals, timeline and budget…"></textarea></div>
              </form>
              <div class="cg-send-row">
                <button class="btn btn-primary gp-send" type="submit" form="contactForm" id="contactSubmit"><span class="btn-label">Send message</span></button>
                <p class="cf-privacy">By submitting you agree to our privacy policy. We never share your data.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block" style="background:var(--bg-deep); border-top:1px solid var(--border); border-bottom:1px solid var(--border);">
    <div class="wrap" style="text-align:center;">
      <span class="eyebrow">( What happens after you hit send )</span>
      <h2 style="margin-top:14px;">From message to first call</h2>
      <div class="cf-steps">
        ${CONTACT_STEPS.map(t => `<div class="cf-step reveal"><span class="n">${t.year}</span><h4>${t.title}</h4><p>${t.desc}</p></div>`).join('')}
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
    bindFlowDraw('.flow-diagram');
    bindSplitTextReveal('.split-text');
    bindStatCounts();
    bindScrollFills();
    bindChapterPin();
    bindLiveDemo();
    bindProductTourReveal();
    bindBrandCinema();
    if (active === 'home') heroTimeline();
  });
  mm.add('(prefers-reduced-motion: reduce)', () => {
    gsap.set('.fade-in, .reveal', { opacity: 1, y: 0, filter: 'none' });
    gsap.set('.card-settle', { opacity: 1, y: 0, scale: 1, rotate: 0 });
    gsap.set('.flow-diagram .flow-node', { scale: 1, opacity: 1 });
    gsap.set('.flow-diagram .flow-connector', { scaleX: 1 });
    document.querySelectorAll('.stat-num[data-final]').forEach(el => el.textContent = el.getAttribute('data-final'));
    document.querySelectorAll('#heroTitle .word').forEach(w => gsap.set(w, { opacity: 1, y: 0, filter: 'none' }));
    ['timelineFill', 'processFlowFill'].forEach(id => { const f = document.getElementById(id); if (f) f.style.height = '100%'; });
    gsap.set('.fr-media', { opacity: 1, y: 0, scale: 1 });
    gsap.set('.feature-row .device-frame', { clipPath: 'inset(0% 0% 0% 0%)' });
    gsap.set('.fr-num', { opacity: 1, x: 0 });
    gsap.set('.fr-copy h3, .fr-copy p', { opacity: 1, y: 0 });
    bindLiveDemo();
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

const cursorState = { raf: null };
function bindCustomCursor(containerId) {
  if (cursorState.raf) { cancelAnimationFrame(cursorState.raf); cursorState.raf = null; }
  const container = document.getElementById(containerId);
  if (!container) return;
  if (!window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cursor = container.querySelector('.wl-cursor');
  const preview = container.querySelector('.giant-preview');
  const gpLogo = preview ? preview.querySelector('.gp-logo') : null;
  if (!cursor || !preview || !gpLogo) return;
  container.classList.add('cursor-scoped');

  let mouseX = 0, mouseY = 0, curX = 0, curY = 0;
  container.addEventListener('mousemove', e => {
    const rect = container.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  function tick() {
    if (!document.body.contains(container)) { cursorState.raf = null; return; }
    curX += (mouseX - curX) * 0.18;
    curY += (mouseY - curY) * 0.18;
    preview.style.left = curX + 'px';
    preview.style.top = curY + 'px';
    // when labeled, offset toward the preview's corner so the pill doesn't sit
    // dead-center on top of a centered logo
    const offset = cursor.classList.contains('label');
    cursor.style.left = (curX + (offset ? 85 : 0)) + 'px';
    cursor.style.top = (curY + (offset ? 50 : 0)) + 'px';
    cursorState.raf = requestAnimationFrame(tick);
  }
  cursorState.raf = requestAnimationFrame(tick);

  container.querySelectorAll('.row-list-item').forEach(row => {
    row.addEventListener('mouseenter', () => {
      cursor.classList.add('label');
      cursor.textContent = row.dataset.cursorLabel || 'View';
      preview.classList.add('show');
      const logoSrc = row.querySelector('.rli-logo-src');
      gpLogo.innerHTML = logoSrc ? logoSrc.innerHTML : '';
      gpLogo.style.background = row.dataset.previewColor || '#111';
    });
    row.addEventListener('mouseleave', () => {
      cursor.classList.remove('label');
      cursor.textContent = '';
      preview.classList.remove('show');
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

// Services pipeline page: in-page "#svc-n" jumps must scroll, never write
// location.hash, since this app's router treats any hashchange as a route
// (see window.addEventListener('hashchange', render) at the bottom of this
// file) and would otherwise tear the whole page down and redirect home.
let svcJumpBound = false;
function bindSvcJump() {
  if (svcJumpBound) return;
  svcJumpBound = true;
  document.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('a[data-svc-jump]');
    if (!a) return;
    const target = document.getElementById(a.getAttribute('href').slice(1));
    if (!target) return;
    e.preventDefault();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const top = target.getBoundingClientRect().top + window.scrollY - 132;
    window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
  });
}

// Contact form's phone field: cap the mobile number itself to 10 digits (the
// real length of an Indian mobile number) without capping the +91 country
// code in front of it. Delegated on document since #cf-phone is recreated
// every time the Contact page renders.
let phoneLimitBound = false;
function bindPhoneLimit() {
  if (phoneLimitBound) return;
  phoneLimitBound = true;
  document.addEventListener('input', e => {
    if (e.target.id !== 'cf-phone') return;
    const el = e.target;
    // mid-way through typing "+91" itself  leave it alone rather than let the
    // no-code branch below strip the "+" before the code is even finished
    if (/^\+9?1?$/.test(el.value)) return;
    const withCode = el.value.match(/^(\+91)\s*/);
    if (withCode) {
      const rest = el.value.slice(withCode[0].length).replace(/\D/g, '').slice(0, 10);
      el.value = rest ? `${withCode[1]} ${rest}` : withCode[1];
    } else {
      el.value = el.value.replace(/\D/g, '').slice(0, 10);
    }
  });
}

// The services page's signature motion: a sticky rail that tracks which
// service section is in view, a rail-length progress fill, and each
// section's process connector drawing in on scrub. See
// svcPipelineSectionHTML/svcRailHTML.
function bindPipelineNav() {
  bindSvcJump();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Process-connector draw-in applies wherever a `.svc-flow-line` appears  the
  // pipeline page's five sections, or a single service's own detail page  so
  // it isn't gated behind the pipeline-only `.svc-pipe` root below.
  if (!reduce) {
    gsap.utils.toArray('.svc-flow-line').forEach(line => {
      gsap.fromTo(line, { scaleY: 0 }, {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: line, start: 'top 80%', end: 'bottom 62%', scrub: 0.6 }
      });
    });
  }

  const root = document.querySelector('.svc-pipe');
  if (!root) return;

  const eyebrow = document.getElementById('svcEyebrowWord');
  if (eyebrow) gsap.delayedCall(0.3, () => triggerDecrypt(eyebrow));

  if (reduce) return;

  gsap.utils.toArray('.svc-block', root).forEach(sec => {
    const rail = root.querySelector(`.svc-rail-node[data-rail="${sec.dataset.svc}"]`);
    if (rail) {
      ScrollTrigger.create({
        trigger: sec, start: 'top 55%', end: 'bottom 45%',
        onToggle: self => rail.classList.toggle('active', self.isActive)
      });
    }
  });

  const progress = root.querySelector('.svc-rail-progress');
  const first = document.getElementById('svc-1');
  const last = document.getElementById('svc-5');
  if (progress && first && last) {
    ScrollTrigger.create({
      trigger: first, start: 'top 70%', endTrigger: last, end: 'bottom 55%', scrub: 0.5,
      onUpdate: self => { progress.style.transform = `scaleX(${self.progress})`; }
    });
  }
}

function bindMotionLayer(active) {
  bindSpotlight('.project-card, .glass-panel, .related-card');
  bindTilt('.pc-media, .detail-hero-thumb, .device-frame, .glass-panel');
  bindContactClock();
  bindPhoneLimit();
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
  } else if (active === 'contact') {
    initAurora(document.getElementById('contactAurora'));
    getThreeHeroModule().then(m => m.initHeroScene(document.getElementById('contactThree')));
    if (processThreeModule) processThreeModule.then(m => m.disposeProcessScene());
  } else {
    initAurora(null);
    if (threeHeroModule) threeHeroModule.then(m => m.disposeHeroScene());
    if (processThreeModule) processThreeModule.then(m => m.disposeProcessScene());
  }
  if (active === 'work') {
    bindCustomCursor('workRowList');
  } else if (cursorState.raf) {
    cancelAnimationFrame(cursorState.raf);
    cursorState.raf = null;
  }
  if (active === 'services') bindPipelineNav();
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

function bindChapterPin() {
  const wrap = document.getElementById('chapterPinWrap');
  const visualCol = document.getElementById('chapterVisualCol');
  if (!wrap || !visualCol) return;
  // Only pin on the 2-column desktop layout (matches the min-width:900px
  // breakpoint in CSS). On the single-column mobile layout the visual panel
  // sits in normal flow below ~180vh of stacked chapter text, so pinning it
  // from the top of the wrap fixes it at an off-screen position below the
  // viewport for the whole section instead of visible beside the text.
  if (!window.matchMedia('(min-width: 900px)').matches) return;
  const panels = wrap.querySelectorAll('.chapter-panel');
  const dots = wrap.querySelectorAll('.chapter-dots span');
  ScrollTrigger.create({
    trigger: wrap,
    pin: visualCol,
    start: 'top top',
    end: 'bottom bottom',
    anticipatePin: 1,
    invalidateOnRefresh: true,
    onUpdate: self => {
      const idx = Math.min(panels.length - 1, Math.floor(self.progress * panels.length));
      panels.forEach((el, i) => el.classList.toggle('active', i === idx));
      dots.forEach((el, i) => el.classList.toggle('active', i === idx));
    }
  });
}

// Pins #brandCinemaWrap for the width of its track, then scrubs the track
// horizontally in lockstep with vertical scroll (the classic "fake horizontal
// scroll" ScrollTrigger pattern: ease:none, function-based end/x so a resize
// recomputes correctly via invalidateOnRefresh). The .is-cinema class is only
// added here, in the no-preference matchMedia branch, so reduced-motion visits
// keep the plain stacked layout from the base CSS and never see the pin.
function bindBrandCinema() {
  const wrap = document.getElementById('brandCinemaWrap');
  const track = document.getElementById('cinemaTrack');
  if (!wrap || !track) return;
  const frames = track.querySelectorAll('.cf');
  const dots = wrap.querySelectorAll('.cf-dots i');
  if (frames.length < 2) return;
  wrap.classList.add('is-cinema');
  gsap.to(track, {
    x: () => -(frames.length - 1) * window.innerWidth,
    ease: 'none',
    scrollTrigger: {
      trigger: wrap,
      pin: true,
      start: 'top top',
      end: () => '+=' + (frames.length - 1) * window.innerHeight,
      scrub: true,
      snap: 1 / (frames.length - 1),
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: self => {
        const idx = Math.min(frames.length - 1, Math.round(self.progress * (frames.length - 1)));
        dots.forEach((d, i) => d.classList.toggle('active', i === idx));
      },
      onToggle: self => wrap.classList.toggle('cinema-active', self.isActive)
    }
  });
}

// Each feature row powers on as its own moment instead of fading up like
// every other ".reveal" card: the media tilts/scales in while its device
// clip-path wipes open top-to-bottom (screen switching on), the ghost numeral
// draws in, then the heading/blurb settle. CSS sets the hidden starting state
// (see .fr-media / .feature-row .device-frame / .fr-num / .fr-copy h3,p) so
// reduced-motion visits (which never call this) need the mm.add reduce
// branch to force everything visible instead.
function bindProductTourReveal() {
  ScrollTrigger.batch('.feature-row', {
    start: 'top 82%',
    once: true,
    onEnter: batch => batch.forEach(row => {
      const media = row.querySelector('.fr-media');
      const frame = row.querySelector('.device-frame');
      const num = row.querySelector('.fr-num');
      const copyEls = row.querySelectorAll('.fr-copy h3, .fr-copy p');
      const tl = gsap.timeline();
      if (media) tl.to(media, { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }, 0);
      if (frame) tl.to(frame, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1, ease: 'power3.out' }, 0);
      if (num) tl.to(num, { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }, 0.25);
      if (copyEls.length) tl.to(copyEls, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out' }, 0.35);
    })
  });
}

// Real, ticking local time for the studio's location, not a static string.
// Cleared and re-created on every route render so it never keeps ticking, or
// duplicates itself, once the visitor navigates away.
let contactClockInterval = null;
function bindContactClock() {
  if (contactClockInterval) { clearInterval(contactClockInterval); contactClockInterval = null; }
  const el = document.getElementById('clockValue');
  if (!el) return;
  const fmt = () => new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  el.textContent = fmt();
  contactClockInterval = setInterval(() => { el.textContent = fmt(); }, 1000);
}

function bindLiveDemo() {
  const stage = document.getElementById('demoStage');
  const btn = document.getElementById('demoBtn');
  const status = document.getElementById('demoStatus');
  const cursor = document.getElementById('demoCursor');
  if (!stage || !btn || !status || !cursor) return;
  const busyText = stage.dataset.busy;
  const resultText = stage.dataset.result;
  let timers = [];
  function clearTimers() { timers.forEach(clearTimeout); timers = []; }
  function run() {
    clearTimers();
    btn.classList.remove('pressed');
    status.classList.remove('success');
    status.textContent = 'Ready';
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      status.classList.add('success');
      status.textContent = resultText;
      return;
    }
    cursor.style.transition = 'none';
    cursor.style.opacity = '0';
    cursor.style.left = '10px';
    cursor.style.top = '10px';
    const stageRect = stage.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const targetX = btnRect.left - stageRect.left + btnRect.width / 2 - 4;
    const targetY = btnRect.top - stageRect.top + btnRect.height / 2 - 4;
    requestAnimationFrame(() => {
      cursor.style.opacity = '1';
      requestAnimationFrame(() => {
        cursor.style.transition = 'left 900ms cubic-bezier(.45,0,.55,1), top 900ms cubic-bezier(.45,0,.55,1)';
        cursor.style.left = targetX + 'px';
        cursor.style.top = targetY + 'px';
      });
    });
    timers.push(setTimeout(() => { btn.classList.add('pressed'); status.textContent = busyText; }, 950));
    timers.push(setTimeout(() => { btn.classList.remove('pressed'); }, 1070));
    timers.push(setTimeout(() => {
      status.classList.add('success');
      status.textContent = resultText;
      cursor.style.opacity = '0';
    }, 1300));
  }
  btn.addEventListener('click', run);
  ScrollTrigger.create({ trigger: stage, start: 'top 80%', once: true, onEnter: run });
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
