/* ===================================================================
   Roamgrounds — shared content data
   Add a new country, provider, or guide by adding one object below.
   All three pages (index, esim, guides) read from this file.
=================================================================== */

const VISA_PROGRAMS = [
  {
    country: "Thailand", name: "Destination Thailand Visa (DTV)", color: "coral",
    stickerLabel: "5 YR VALID", type: "dedicated",
    income: "No monthly income req.", funds: "฿500,000 (~US$14,000) balance",
    duration: "5 years, 180 days per entry", cost: "~$220 application fee",
    tax: "Territorial — foreign income generally untaxed if remitted rules met",
    note: "Renewal terms not yet fully established since 2024 launch — most flexible entry point in the region right now.",
    sortKeys: { longStay: 5, income: 14000 }
  },
  {
    country: "Malaysia", name: "DE Rantau Nomad Pass", color: "teal",
    stickerLabel: "12 MO RENEW", type: "dedicated",
    income: "$24,000/yr (tech) · $60,000/yr (non-tech)", funds: "No separate bank deposit",
    duration: "12 months, renewable", cost: "~MYR 1,000 (~$215)",
    tax: "Non-resident territorial system for short stays",
    note: "Most predictable paperwork in the region — but 'tech work' is interpreted narrowly, generalist freelancers sometimes declined.",
    sortKeys: { longStay: 1, income: 24000 }
  },
  {
    country: "Indonesia", name: "Second Home Visa (Bali route)", color: "sun",
    stickerLabel: "5–10 YR", type: "dedicated",
    income: "No monthly income req.", funds: "$130,000 bank deposit",
    duration: "5–10 years", cost: "Deposit-based, agent fees vary",
    tax: "Complex — consult a local tax advisor before staying past 183 days",
    note: "High capital bar but by far the longest runway. A separate lower-threshold E33G remote-worker route ($60k/yr income) also exists but rollout has been inconsistent.",
    sortKeys: { longStay: 10, income: 0 }
  },
  {
    country: "Japan", name: "Digital Nomad Visa", color: "grape",
    stickerLabel: "6 MO ONLY", type: "dedicated",
    income: "¥10,000,000/yr (~$65,000)", funds: "Private health insurance required",
    duration: "6 months, not renewable", cost: "Standard visa fee",
    tax: "Short-stay, generally outside local tax residency",
    note: "Best for a high-earning short cultural stint, not a long-term base — you'll need to leave and can't simply extend.",
    sortKeys: { longStay: 0.5, income: 65000 }
  },
  {
    country: "Vietnam", name: "90-day e-visa (workaround)", color: "pink",
    stickerLabel: "GRAY ZONE", type: "workaround",
    income: "None specified", funds: "None specified",
    duration: "90 days, limited extension", cost: "~$25–50 e-visa fee",
    tax: "Undefined for remote workers — legal gray area",
    note: "No dedicated nomad visa exists. Widely used anyway, but you're technically on a tourist visa while working — treat as short-term only.",
    sortKeys: { longStay: 0.25, income: 0 }
  },
  {
    country: "Philippines", name: "Tourist extension / SRRV route", color: "pink",
    stickerLabel: "IN PROGRESS", type: "workaround",
    income: "Varies by route", funds: "SRRV requires a retirement-linked deposit",
    duration: "Extendable tourist visa, capped renewals", cost: "Extension fees vary",
    tax: "Undefined for tourist-route remote work",
    note: "A dedicated digital nomad visa is reportedly in development — worth checking current status before committing long-term plans here.",
    sortKeys: { longStay: 0.25, income: 0 }
  }
];

const ESIM_PROVIDERS = [
  {
    provider: "Airalo", name: "Asialink Regional Plan", color: "coral",
    stickerLabel: "30+ COUNTRIES", type: "core",
    coverage: "30+ Asian countries incl. India", data: "2GB/15d to 20GB/30d", price: "~$6 to ~$24",
    tethering: "Allowed",
    note: "The safest default recommendation — broadest coverage and the only major regional plan that reliably includes India.",
    sortKeys: { india: true, unlimited: false }
  },
  {
    provider: "Holafly", name: "Asia Unlimited", color: "teal",
    stickerLabel: "17 COUNTRIES", type: "core",
    coverage: "17 countries across Asia", data: "Unlimited", price: "~$45 / 14 days",
    tethering: "Limited on unlimited plans",
    note: "Best for heavy data users who don't want to track GB usage — trade-off is restricted hotspot sharing.",
    sortKeys: { india: false, unlimited: true }
  },
  {
    provider: "Nomad eSIM", name: "SEA + Japan/Korea Regional", color: "sun",
    stickerLabel: "AUTO-SWITCH", type: "core",
    coverage: "Japan, Korea, and Southeast Asia circuit", data: "20GB/30d", price: "~$43.50",
    tethering: "Allowed — key selling point",
    note: "Automatically switches carriers as you cross borders — the top pick for multi-country circuits like Japan+Korea or a Thailand-Vietnam-Cambodia loop.",
    sortKeys: { india: false, unlimited: false }
  },
  {
    provider: "Saily", name: "Asia Value Plan", color: "grape",
    stickerLabel: "LOWEST $/GB", type: "core",
    coverage: "Major Asia destinations", data: "Fixed tiers", price: "Lowest per-GB in the region",
    tethering: "Allowed",
    note: "The budget pick when a traveler just wants the cheapest reliable data, not brand recognition.",
    sortKeys: { india: false, unlimited: false }
  },
  {
    provider: "GigSky", name: "Global + In-Flight/Cruise", color: "pink",
    stickerLabel: "190+ CTRY", type: "specialist",
    coverage: "190+ countries, 400 network partners", data: "Flexible tiers", price: "Competitive, varies",
    tethering: "Allowed",
    note: "The only major provider with in-flight and cruise/maritime connectivity — a genuinely distinct use case worth its own guide.",
    sortKeys: { india: false, unlimited: false }
  },
  {
    provider: "BNESIM", name: "Single-Country Plans", color: "teal",
    stickerLabel: "BUILT-IN VPN", type: "specialist",
    coverage: "Single-country focus, cheaper than regional bundles", data: "Fixed tiers",
    price: "Often 50% less than regional plans for 1-2 country trips", tethering: "Allowed",
    note: "Best when a traveler is staying in just one or two countries — regional bundles overpay for coverage they won't use.",
    sortKeys: { india: false, unlimited: false }
  }
];

const GUIDES = [
  {
    title: "Thailand's Destination Thailand Visa: full application walkthrough",
    category: "Visa", color: "coral", readTime: "9 min",
    tags: ["thailand", "dtv", "visa", "southeast asia", "bank balance"],
    summary: "Step-by-step on the ฿500,000 balance requirement, the online application, 180-day entry stamps, and what changed since the 2024 launch."
  },
  {
    title: "Malaysia DE Rantau: is your work 'tech' enough to qualify?",
    category: "Visa", color: "teal", readTime: "7 min",
    tags: ["malaysia", "de rantau", "visa", "tech", "income"],
    summary: "How immigration actually interprets the tech vs non-tech income tiers, real rejection patterns for generalist freelancers, and how to frame your application."
  },
  {
    title: "Indonesia Second Home Visa vs the E33G route: which one fits Bali plans",
    category: "Visa", color: "sun", readTime: "8 min",
    tags: ["indonesia", "bali", "second home visa", "e33g", "visa"],
    summary: "Comparing the $130,000 deposit route against the lower-threshold income-based route, and why rollout consistency matters before you commit capital."
  },
  {
    title: "Japan's 6-month Digital Nomad Visa: worth it for a single season",
    category: "Visa", color: "grape", readTime: "6 min",
    tags: ["japan", "digital nomad visa", "visa", "income"],
    summary: "Who this actually suits, the ¥10M income bar, insurance requirements, and why it's a poor fit as a long-term base."
  },
  {
    title: "Vietnam and the Philippines: working the tourist-visa gray zone safely",
    category: "Visa", color: "pink", readTime: "10 min",
    tags: ["vietnam", "philippines", "e-visa", "srrv", "gray zone", "visa"],
    summary: "What 'gray zone' actually means in practice, border-run patterns people use, and the upcoming Philippines nomad visa to watch for."
  },
  {
    title: "Choosing nomad health insurance: what actually matters beyond price",
    category: "Insurance", color: "teal", readTime: "8 min",
    tags: ["insurance", "safetywing", "genki", "health", "money"],
    summary: "Evacuation coverage, pre-existing condition handling, and claim speed — the three things that separate a good nomad policy from a cheap one."
  },
  {
    title: "The 183-day rule, explained without the jargon",
    category: "Tax", color: "grape", readTime: "9 min",
    tags: ["tax", "residency", "183 day rule", "money"],
    summary: "How tax residency actually gets triggered across Thailand, Malaysia, and Indonesia, and why 'territorial tax system' doesn't mean tax-free."
  },
  {
    title: "How to actually choose an eSIM plan (not just the cheapest one)",
    category: "eSIM", color: "coral", readTime: "6 min",
    tags: ["esim", "airalo", "holafly", "data", "connectivity"],
    summary: "Fixed vs unlimited, tethering restrictions, and why the provider with the lowest headline price isn't always the cheapest for your actual trip."
  },
  {
    title: "Best cities for a first year as a nomad in Southeast Asia",
    category: "Lifestyle", color: "sun", readTime: "11 min",
    tags: ["bali", "chiang mai", "da nang", "lifestyle", "cities"],
    summary: "Cost of living, internet reliability, and community density compared across the four cities most first-timers end up choosing between."
  },
  {
    title: "Multi-currency cards and banking setup before you leave",
    category: "Money", color: "pink", readTime: "7 min",
    tags: ["money", "banking", "wise", "cards", "remittance"],
    summary: "Setting up the account stack most long-term nomads actually use, and the fee traps that quietly cost more than a bad flight booking."
  },
  {
    title: "Visa agents in Thailand and Indonesia: when they're worth the fee",
    category: "Visa", color: "coral", readTime: "6 min",
    tags: ["visa agent", "thailand", "indonesia", "fees"],
    summary: "What a legitimate agent actually does for the DTV and Second Home Visa processes, and the red flags that mean you should walk away."
  },
  {
    title: "China and India: the two exceptions to every 'best eSIM for Asia' list",
    category: "eSIM", color: "grape", readTime: "7 min",
    tags: ["china", "india", "esim", "vpn", "connectivity"],
    summary: "Why China needs a completely different setup and why India gets quietly excluded from most 'Asia regional' eSIM plans."
  }
];
