export type Project = {
  slug: string; name: string; category: string; status: string; year: string;
  summary: string; challenge: string; approach: string; result: string;
  features: string[]; stack: string[]; accent: string; symbol: string;
  audience?: string; contribution?: string; nextStep?: string; value?: string;
  screenshots?: {src:string;alt:string;caption:string}[];
};

// Add a new object here to place a future project on the Projects page and give it a detail page.
// Keep descriptions factual; add a live URL only after that project is actually public.
export const projects: Project[] = [
  {
    slug: "clipvexa", name: "ClipVexa", category: "Video workflow", status: "Working prototype", year: "2026",
    summary: "A metadata-first video workflow prototype with a clear, responsive interface and a Python service behind it.",
    challenge: "Media information may arrive slowly or fail. The user needs a simple flow that explains progress and errors without hiding the technical limits.",
    approach: "I explored a Vue frontend and FastAPI backend for retrieving metadata before processing, with request limits and a queue-oriented architecture for longer jobs. Platform terms and content rights shape supported use.",
    result: "The site and technical prototype run in development. Production reliability and supported sources still need validation before a public release.",
    features: ["Metadata-first experience", "FastAPI prototype", "Responsive input and results", "Loading and error handling", "Queue architecture plan"],
    stack: ["Vue", "Python", "FastAPI", "Redis"], accent: "pink", symbol: "CV"
    ,audience:"People exploring a simple, rights-aware media workflow",contribution:"Product flow, frontend exploration and Python API prototype",nextStep:"Validate supported sources, usage rights and reliability before any public release.",value:"A clearer journey from a link to metadata, progress and a useful result.",screenshots:[
      {src:"/projects/clipvexa/home.png",alt:"ClipVexa working site preview homepage with video workflow options",caption:"Working site preview · homepage. Supported sources and release reliability are still being validated."},
      {src:"/projects/clipvexa/downloader.png",alt:"ClipVexa video workflow page with URL field and action",caption:"Working site preview · video workflow interface. Source support still needs release testing."},
      {src:"/projects/clipvexa/overview.png",alt:"ClipVexa working site preview describing workflow options",caption:"Working site preview · product explanation and navigation."},
      {src:"/projects/clipvexa/audience.png",alt:"ClipVexa audience cards for students, creators and travelers",caption:"Working site preview · use cases and responsive card layout."}
    ]
  },
  {
    slug: "universal-fetch", name: "UniversalFetch", category: "Tools platform", status: "In development", year: "2026",
    summary: "A multilingual home for useful PDF, image, developer, SEO, and writing tools with consistent discovery and guidance.",
    challenge: "As a tools platform grows, finding the right tool and maintaining helpful instructions in many languages becomes an information architecture problem.",
    approach: "I designed category-led discovery, reusable tool pages, responsive UI patterns, and localization and SEO structure in Nuxt.",
    result: "The website runs as a development build; individual tools, catalog coverage and translations are still being improved. No traffic or customer results are claimed here.",
    features: ["Tool and category discovery", "Reusable tool pages", "Multilingual page architecture", "Structured help content", "Responsive layouts"],
    stack: ["Nuxt", "Vue", "Tailwind", "SEO"], accent: "blue", symbol: "UF"
    ,audience:"People who need everyday document, image and developer utilities",contribution:"Product structure, interface and reusable tool-page direction",nextStep:"Finish individual tools, check localization quality and test the full catalog.",value:"A more consistent place to find the right tool and understand how to use it.",screenshots:[
      {src:"/projects/universal-fetch/home.png",alt:"UniversalFetch working site preview homepage with tool search",caption:"Working site preview · homepage and tool discovery. The catalog is still in development."},
      {src:"/projects/universal-fetch/tools.png",alt:"UniversalFetch working site preview showing PDF, developer and image tools",caption:"Working site preview · category-led tool browsing."},
      {src:"/projects/universal-fetch/popular.png",alt:"UniversalFetch grid of popular utility tools",caption:"Working site preview · popular tool cards."},
      {src:"/projects/universal-fetch/categories.png",alt:"UniversalFetch category cards for PDF, image, developer and SEO tools",caption:"Working site preview · tools organized by category."},
      {src:"/projects/universal-fetch/how-it-works.png",alt:"UniversalFetch guide showing how to find a tool and get a result",caption:"Working site preview · the three-step user journey."}
    ]
  },
  {
    slug: "pharmacy-desk", name: "PharmacyDesk", category: "Desktop software", status: "In development", year: "2026",
    summary: "Offline-first medical billing software designed around daily pharmacy work: stock, batches, sales, and invoices.",
    challenge: "A pharmacy needs to bill quickly while knowing exactly which batch was sold, what remains in stock, and which medicine expires first. The application also needs to keep working without internet access.",
    approach: "An earlier desktop demo explored the dashboard, sale and inventory screens shown below. The current product direction is a Windows application with local SQLite storage, first-run admin setup and a transactional FEFO billing flow that selects the earliest eligible expiry first.",
    result: "Screenshots document an earlier demo, not the final C#/.NET release. Batch allocation, backup, installer packaging and real-shop acceptance testing must be verified before rollout.",
    features: ["Batch-level stock and expiry dates", "FEFO sale allocation", "Low-stock and expiry alerts", "Invoice and billing history", "Local backup and restore", "Offline-first Windows workflow"],
    stack: ["C#", ".NET", "WPF", "SQLite", "MVVM"], accent: "violet", symbol: "Rx"
    ,audience:"Pharmacy owners and counter staff",contribution:"Workflow planning, demo UI and desktop product architecture",nextStep:"Complete and test the current Windows build, installer, backup and counter workflows with the shop.",value:"A structured way to bill, see stock by batch and notice medicines nearing expiry.",screenshots:[
      {src:"/projects/pharmacy-desk/dashboard.png",alt:"Earlier Sunny Medical Pharmacy desktop demo dashboard",caption:"Earlier desktop demo · dashboard. This is not a screenshot of the current C#/.NET build."},
      {src:"/projects/pharmacy-desk/sale.png",alt:"Earlier pharmacy demo showing a blank new-sale form",caption:"Earlier desktop demo · new-sale workflow, with blank customer fields."},
      {src:"/projects/pharmacy-desk/inventory.png",alt:"Earlier pharmacy demo showing medicine stock and batch counts",caption:"Earlier desktop demo · medicines and stock entry."}
    ]
  },
  {
    slug: "trustlens", name: "TrustLens", category: "Intelligence platform", status: "UI prototype", year: "2026",
    summary: "A working website prototype exploring evidence-first website and company intelligence, backed by a detailed product blueprint.",
    challenge: "A single opaque score can hide uncertainty. A useful assessment needs sources, timestamps, coverage, and a clear distinction between an observation and a conclusion.",
    approach: "I defined a pipeline from source to observation, signal, evidence, finding, and assessment, with risk, confidence, and coverage kept separate.",
    result: "The website prototype and product blueprint exist. The assessment pipeline and source coverage need validation before the service can be offered as a live product.",
    features: ["Evidence-linked findings", "Risk, confidence, and coverage", "Website signal pipeline", "Research-oriented report UX", "Worker and API architecture"],
    stack: ["React", "FastAPI", "PostgreSQL", "Redis"], accent: "teal", symbol: "TL"
    ,audience:"People assessing an unfamiliar website or company",contribution:"Research, evidence model and working interface prototype",nextStep:"Validate the signal pipeline and source coverage before describing this as a live assessment service.",value:"A way to explain findings with sources and uncertainty rather than an opaque score.",screenshots:[
      {src:"/projects/trustlens/home.png",alt:"TrustLens working website prototype homepage",caption:"Working website prototype · the assessment service shown in this interface has not been validated for a public release."},
      {src:"/projects/trustlens/checks.png",alt:"TrustLens website interface listing DNS, TLS and other planned checks",caption:"Website prototype · six planned evidence checks, not a claim that every provider is connected."},
      {src:"/projects/trustlens/example-report.png",alt:"TrustLens illustrative example report with findings and source context",caption:"Illustrative example report in the prototype · sample findings, not a real scan."},
      {src:"/projects/trustlens/evidence.png",alt:"TrustLens comparison of opaque scores and source-linked evidence",caption:"Website prototype · design explanation of risk, confidence and coverage."}
    ]
  },
  {
    slug: "dog-walk", name: "Dog Walk", category: "Marketplace idea", status: "Concept", year: "Future",
    summary: "A local service concept to help dog owners find suitable walkers, with clear availability and booking information.",
    challenge: "Owners need confidence in who will care for their dog, while walkers need an easy way to present availability and experience.",
    approach: "The early concept maps owner and walker profiles, service areas, booking requests, and a trust and review flow. Market demand and operating details need validation.",
    result: "An early product idea, not an operating marketplace or a launched service.",
    features: ["Owner and walker profiles", "Local discovery", "Availability and requests", "Trust and review concept"],
    stack: ["Product research", "UX", "Marketplace"], accent: "cyan", symbol: "DW"
  },
  {
    slug: "before-you-buy", name: "Before You Buy", category: "Decision tool idea", status: "Concept", year: "Future",
    summary: "An early concept for helping people compare key product details and questions before making a purchase.",
    challenge: "Product information is scattered across pages, reviews, and specifications, making a confident decision harder than it should be.",
    approach: "I am exploring a compact comparison flow that separates specifications, practical tradeoffs, and source-backed information. Scope and data sources are still being defined.",
    result: "A future concept, with no live product or verified comparison database yet.",
    features: ["Structured comparison concept", "Source-aware information", "Clear decision criteria", "Mobile-first research flow"],
    stack: ["Product discovery", "UX", "Research"], accent: "violet", symbol: "BB"
  }
];
export const services = [
  {number:"01",title:"SaaS & web applications",bestFor:"Customer portals, internal dashboards and new web products.",description:"Turn a workflow into a clear product people can use on desktop and mobile.",deliverables:["Page and workflow planning","React, Vue or Nuxt interface","Responsive states and handoff"]},
  {number:"02",title:"Business software",bestFor:"Billing, inventory, reporting and team operations.",description:"Build practical software around the day-to-day work rather than making staff adapt to a template.",deliverables:["Workflow and data design","Offline-first desktop or web flows","Testing, backup and deployment planning"]},
  {number:"03",title:"Python APIs & integrations",bestFor:"Products that need reliable business logic and connected systems.",description:"FastAPI services that connect users, data and external services with sensible contracts and permissions.",deliverables:["REST API endpoints","SQL models and authentication","Integration and background-job design"]},
  {number:"04",title:"AI-assisted workflows",bestFor:"Document search, structured extraction and internal productivity.",description:"Integrate AI where it removes a clear manual step, while considering data, cost and human review.",deliverables:["AI API integration","Search and retrieval workflows","Structured extraction and automation"]}
];
export const skillGroups = [
  {name:"Python & APIs",icon:"{ }",description:"Business logic and services behind the interface.",items:["Python","FastAPI","Django","REST APIs","Pydantic","Async I/O"]},
  {name:"Frontend",icon:"◇",description:"Interfaces that feel polished across devices.",items:["React","Vue","Nuxt","TypeScript","Tailwind CSS","Responsive UI"]},
  {name:"Data & systems",icon:"◫",description:"Storage, queues, and practical infrastructure.",items:["PostgreSQL","MySQL","SQLite","Redis","Docker","Linux"]},
  {name:"Product & delivery",icon:"✦",description:"The work that helps a build reach users.",items:["SEO","CI/CD","Git","Nginx","AI integrations","Testing"]}
];
