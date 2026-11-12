export const PROFILE = {
  name: 'Muzammil Shabbir',
  role: 'Computer Science Student & Software Developer',
  headline: 'Engineering full-stack applications, local-first analytics tools, and defensive security utilities.',
  location: 'Pakistan',
  email: 'muzammilw10@gmail.com',
  github: 'https://github.com/Muzammil-s',
  linkedin: 'https://www.linkedin.com/in/muzammil-shabbir-7368a7382',
  whatsapp: 'https://wa.me/923105522970',
  portrait: 'assets/images/muzammil-portrait.jpg'
};

export const HERO_PILLARS = {
  fullstack: {
    file: 'system.fullstack.json',
    badge: '6 WEB & API PLATFORMS',
    command: '$ node --test projects/socialsphere/tests/*.test.mjs',
    lines: [
      { k: 'architecture', v: '"Dual-mode Node.js/Express + Static Browser Fallback"' },
      { k: 'auth_security', v: '"Salted scrypt hashes + timing-safe HS256 JWT"' },
      { k: 'dom_safety', v: '"Strict createElement/textContent sanitization"' },
      { k: 'flagships', v: '["SocialSphere", "CommerceHub", "StockFlow", "Fresh Basket"]' }
    ]
  },
  analytics: {
    file: 'pipeline.analytics.py',
    badge: '3 DATA & DECISION ENGINES',
    command: '$ python -m pytest && node --test tests/csvEngine.test.mjs',
    lines: [
      { k: 'datalens', v: '"RFC-4180 CSV parser, IQR outliers, Pearson r matrix"' },
      { k: 'studyroute', v: '"Weighted TCO scoring & illustrative multi-currency compare"' },
      { k: 'careeros', v: '"Kanban conversion funnel + resume callback analytics"' },
      { k: 'privacy', v: '"100% browser-local file processing — zero uploads"' }
    ]
  },
  security: {
    file: 'defense.monitor.py',
    badge: '2 DEFENSIVE SECURITY LABS',
    command: '$ python sniffer.py --demo --report reports/audit.json',
    lines: [
      { k: 'networkscope', v: '"Scapy capture + .pcap replay + SYN/port-scan rules"' },
      { k: 'linklens', v: '"Punycode IDN, @-userinfo trap & Shannon entropy audit"' },
      { k: 'telemetry', v: '"Protocol breakdown, severity alerts & JSON export"' },
      { k: 'ethics', v: '"Strictly defensive & authorized diagnostics"' }
    ]
  }
};

export const PROJECTS = [
  {
    slug: 'socialsphere',
    title: 'SocialSphere',
    subtitle: 'Full-Stack Community & Publishing Platform',
    primaryCategory: 'web',
    categories: ['web'],
    featured: true,
    origin: 'Upgraded from codealpha-socialmedia',
    screenshot: 'assets/images/socialsphere.png',
    gallery: [{ src: 'assets/images/socialsphere.png', caption: 'Community feed, topic filters & post composer' }],
    repoUrl: 'https://github.com/Muzammil-s/codealpha-socialmedia',
    liveUrl: 'https://socialsphere-demo.vercel.app/',
    liveLabel: 'Live Demo',
    stack: ['JavaScript', 'Node.js', 'Express', 'MongoDB / JSON Store', 'scrypt', 'HS256 JWT'],
    summary: 'Responsive social community platform featuring authentication, author-owned posts, threaded comments, bookmarking, follow relationships, and dark-mode polish.',
    problem: 'Transformed an early internship repository with unsafe token checks and minimal UI into a structured multi-user application.',
    architecture: 'Express REST API using salted crypto.scrypt password hashing, timing-safe HS256 JWT verification, atomic ownership checks, and an automatic browser-local demo adapter for static previews.',
    testing: 'Covered auth registration/login, post mutation authorization, and XSS-safe DOM rendering with Node integration tests.'
  },
  {
    slug: 'commercehub',
    title: 'CommerceHub',
    subtitle: 'Full-Stack E-Commerce Store & Admin Catalog',
    primaryCategory: 'web',
    categories: ['web'],
    featured: true,
    origin: 'Upgraded from CodeAlpha-Ecommerence-store',
    screenshot: 'assets/images/commercehub.png',
    gallery: [{ src: 'assets/images/commercehub.png', caption: 'Product catalog, category filters & interactive cart drawer' }],
    repoUrl: 'https://github.com/Muzammil-s/CodeAlpha-Ecommerence-store',
    liveUrl: 'https://commercehub-demo.vercel.app/',
    liveLabel: 'Live Demo',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express', 'REST API'],
    summary: 'Full-stack e-commerce storefront and merchant inventory workflow with category search, persistent cart state, authentication, and validated checkout.',
    problem: 'Resolved unvalidated cart pricing and disconnected backend endpoints in the legacy storefront codebase.',
    architecture: 'Server-authoritative subtotal and stock validation during order placement paired with a stateful client storefront that seamlessly supports static Vercel hosting.',
    testing: 'Verified cart state synchronization, checkout validation errors, and clean HTTP 200 static fallback rendering.'
  },
  {
    slug: 'datalens',
    title: 'DataLens Analytics Studio',
    subtitle: 'Local-First CSV Profiling & Statistical Workbench',
    primaryCategory: 'data',
    categories: ['data'],
    featured: true,
    origin: 'Built from scratch in Phase 3',
    screenshot: 'assets/images/datalens.png',
    gallery: [{ src: 'assets/images/datalens.png', caption: 'Schema profiling, IQR outliers, scatter plot & correlation matrix' }],
    repoUrl: 'https://github.com/Muzammil-s/datalens-analytics-studio',
    liveUrl: 'https://datalens-analytics-studio.vercel.app/',
    liveLabel: 'Live App',
    stack: ['JavaScript ES6', 'RFC-4180 CSV', 'SVG Charts', 'Descriptive Stats', 'Markdown Export'],
    summary: 'Zero-upload interactive CSV studio offering automatic type inference, deterministic cleaning pipelines, IQR outlier detection, Pearson correlation matrices, and report downloads.',
    problem: 'Spreadsheet users often upload sensitive datasets to third-party sites just to inspect missing values or check correlations.',
    architecture: 'Pure modular ES6 calculation engine (`csvEngine.js`) executing RFC-4180 parsing, median/mean imputation, deduplication, and SVG visualization strictly inside browser memory.',
    testing: 'Unit-tested CSV edge cases (quoted commas, BOM headers), Pearson coefficients, quantile math, and live cleaning workflows.'
  },
  {
    slug: 'networkscope',
    title: 'NetworkScope',
    subtitle: 'Defensive Packet Analysis & Anomaly Monitor',
    primaryCategory: 'security',
    categories: ['security', 'data'],
    featured: true,
    origin: 'Upgraded from CodeAlpha_Basic_Network_Sniffer',
    screenshot: 'assets/images/networkscope.png',
    gallery: [{ src: 'assets/images/networkscope.png', caption: 'Telemetry KPIs, protocol chart & heuristic alert feed' }],
    repoUrl: 'https://github.com/Muzammil-s/CodeAlpha_Basic_Network_Sniffer',
    liveUrl: 'https://networkscope-web.vercel.app/',
    liveLabel: 'Live Simulator',
    stack: ['Python', 'Scapy', 'Heuristics Engine', 'JSON Telemetry', 'JavaScript'],
    summary: 'Combines a Python Scapy CLI sniffer and `.pcap` replay parser with an interactive web dashboard detecting SYN bursts, cleartext ports, and anomalous traffic patterns.',
    problem: 'Raw terminal sniffer scripts give students packet hex dumps without protocol summaries, severity heuristics, or shareable audit logs.',
    architecture: 'Separated packet capture (`sniffer.py`) and rule heuristics from the web monitor (`web/`), allowing safe offline telemetry replay in any browser without elevated privileges.',
    testing: 'Tested Python packet analysis rules with `unittest` and verified all 3 simulated attack scenarios in headless Chromium.'
  },
  {
    slug: 'linklens',
    title: 'LinkLens Safety Lab',
    subtitle: 'Client-Side URL Anatomy & Phishing Auditor',
    primaryCategory: 'security',
    categories: ['security'],
    featured: true,
    origin: 'Audited & hardened',
    screenshot: 'assets/images/linklens.png',
    gallery: [{ src: 'assets/images/linklens.png', caption: 'URL risk scoring breakdown, Punycode checks & sanitized link export' }],
    repoUrl: 'https://github.com/Muzammil-s/LinkLens-URL-Safety-Lab',
    liveUrl: 'https://linklens-safety-lab.vercel.app/',
    liveLabel: 'Live Tool',
    stack: ['JavaScript', 'URL API', 'Security Heuristics', 'XSS-Safe DOM', 'CSS3'],
    summary: 'Educational cybersecurity analyzer dissecting suspicious URLs for `@`-userinfo deception, Punycode IDNs, IP-literal hosts, high-entropy subdomains, and hidden tracking parameters.',
    problem: 'Everyday users click masked links without understanding how `@` redirects, lookalike Unicode domains, and tracking query params work.',
    architecture: 'Zero-network static app executing deterministic structural checks and tracking-parameter scrubbing purely via native browser APIs.',
    testing: 'Verified detection across benign, tracking-heavy, and phishing-pattern test presets with zero console errors.'
  },
  {
    slug: 'stockflow',
    title: 'StockFlow POS',
    subtitle: 'Inventory Control, Billing & Margin Analytics',
    primaryCategory: 'web',
    categories: ['web', 'data'],
    featured: true,
    origin: 'Built from scratch in Phase 3',
    screenshot: 'assets/images/stockflow.png',
    gallery: [{ src: 'assets/images/stockflow.png', caption: 'POS billing register, low-stock alerts & margin breakdown' }],
    repoUrl: 'https://github.com/Muzammil-s/stockflow-pos',
    liveUrl: 'https://stockflow-pos-demo.vercel.app/',
    liveLabel: 'Live Demo',
    stack: ['Node.js', 'Express', 'JavaScript', 'POS Math', 'CSV Export'],
    summary: 'Point-of-Sale and retail stock system supporting SKU lookup, automatic tax/discount checkout, low-stock threshold alerts, restock receiving, and category profit margins.',
    problem: 'Small shops need real-time stock decrements and clear profit-margin visibility without complex ERP overhead.',
    architecture: 'Modular REST endpoints validating SKU quantities atomically before order commit, paired with a standalone static simulation layer on Vercel.',
    testing: 'Tested POS ticket billing, stock guardrails against overselling, and live tab switching between POS and Inventory views.'
  },
  {
    slug: 'studyroute',
    title: 'StudyRoute Intelligence',
    subtitle: 'Global University & Cost-of-Living Comparator',
    primaryCategory: 'data',
    categories: ['data'],
    featured: false,
    origin: 'Built from scratch in Phase 3',
    screenshot: 'assets/images/studyroute.png',
    gallery: [{ src: 'assets/images/studyroute.png', caption: 'Country & degree filter, multi-currency TCO & sample provenance' }],
    repoUrl: 'https://github.com/Muzammil-s/studyroute-intelligence',
    liveUrl: 'https://studyroute-intelligence.vercel.app/',
    liveLabel: 'Live App',
    stack: ['JavaScript ES6', 'Multi-Currency Logic', 'Comparison Matrix', 'CSS Grid'],
    summary: 'Decision-support comparator helping CS students evaluate tuition, estimated living expenses, scholarship options, and IELTS/GPA requirements across destinations.',
    problem: 'Prospective applicants struggle to compare total annual cost (tuition + living minus scholarship) across countries consistently.',
    architecture: 'Pure weighted-scoring and currency-conversion module (`studyLogic.js`) driving side-by-side comparison cards with explicit illustrative-sample provenance notices.',
    testing: 'Verified country/tuition filtering, currency conversions (`USD`/`EUR`/`GBP`/`PKR`), and comparison drawer state.'
  },
  {
    slug: 'careeros',
    title: 'CareerOS',
    subtitle: 'Kanban Job Pipeline & Resume Analytics',
    primaryCategory: 'data',
    categories: ['data', 'web'],
    featured: false,
    origin: 'Built from scratch in Phase 3',
    screenshot: 'assets/images/careeros.png',
    gallery: [
      { src: 'assets/images/careeros-kanban.png', caption: 'Drag-and-drop Kanban pipeline across 5 hiring stages' },
      { src: 'assets/images/careeros.png', caption: 'Conversion funnel & resume-version callback analytics' }
    ],
    repoUrl: 'https://github.com/Muzammil-s/careeros-tracker',
    liveUrl: 'https://careeros-tracker-one.vercel.app/',
    liveLabel: 'Live App',
    stack: ['Node.js', 'Express', 'HTML5 Drag & Drop', 'Funnel Analytics', 'JSON Export'],
    summary: 'Structured job search workspace combining a 5-stage Kanban board, deadline alerts, resume A/B callback metrics, and full JSON state portability.',
    problem: 'Scattered spreadsheets fail to reveal which resume version actually converts applications into technical interviews.',
    architecture: 'REST backend with stage transition validation and pure analytics aggregators, backed by localStorage synchronization for live browser demos.',
    testing: 'Verified drag-and-drop stage transitions, funnel metrics computation, and view toggling in Chromium.'
  },
  {
    slug: 'freshbasket',
    title: 'Fresh Basket',
    subtitle: 'Express Grocery & Recipe-Bundle Storefront',
    primaryCategory: 'web',
    categories: ['web'],
    featured: false,
    origin: 'Upgraded from velora-commerce',
    screenshot: 'assets/images/freshbasket.png',
    gallery: [{ src: 'assets/images/freshbasket.png', caption: 'Category storefront, PKR pricing, badges & express cart' }],
    repoUrl: 'https://github.com/Muzammil-s/velora-commerce',
    liveUrl: 'https://velora-commerce-xi.vercel.app/',
    liveLabel: 'Live Site',
    stack: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Responsive UI'],
    summary: 'Pakistani express grocery experience featuring category filters, real-time search, nutrition previews, 1-click recipe bundles, printable receipts, and rider simulation.',
    problem: 'Polished card badge collisions and improved mobile layout rhythm inside an existing grocery commerce repository.',
    architecture: 'Componentized vanilla JavaScript storefront backed by structured catalog data and persistent browser cart storage.',
    testing: 'Audited badge layout spacing across desktop and mobile viewports and verified live Vercel HTTP 200 delivery.'
  },
  {
    slug: 'devkit',
    title: 'DevKit Workbench',
    subtitle: '7-in-1 Client-Side Developer Utilities',
    primaryCategory: 'web',
    categories: ['web', 'security'],
    featured: false,
    origin: 'Upgraded DevKit-Developer-Toolbox',
    screenshot: 'assets/images/devkit.png',
    gallery: [{ src: 'assets/images/devkit.png', caption: 'JSON formatter, Base64/URL codec, JWT inspector & SHA-256 generator' }],
    repoUrl: 'https://github.com/Muzammil-s/DevKit-Developer-Toolbox',
    liveUrl: 'https://devkit-toolbox.vercel.app/',
    liveLabel: 'Live App',
    stack: ['JavaScript', 'Web Crypto API', 'TextEncoder', 'RegEx / JSON'],
    summary: 'Lightweight developer workbench offering JSON formatting, Base64/URL codecs, offline JWT payload inspection, timestamp conversion, regex testing, and SHA-256 hashing.',
    problem: 'Pasting tokens or JSON payloads into random web utilities risks leaking internal data to third-party servers.',
    architecture: 'Offline-capable single-page utility suite powered solely by native browser cryptography (`crypto.subtle`) and parsing APIs.',
    testing: 'Smoke-tested JSON formatter error handling, Base64 codec round-trips, and clean static hosting.'
  },
  {
    slug: 'marketplace',
    title: 'Marketplace UI',
    subtitle: 'Responsive Multi-Category E-Commerce Frontend',
    primaryCategory: 'web',
    categories: ['web'],
    featured: false,
    origin: 'Upgraded from Daraz-Clone',
    screenshot: 'assets/images/marketplace.png',
    gallery: [{ src: 'assets/images/marketplace.png', caption: 'Responsive marketplace grid, promo banners & drawer cart' }],
    repoUrl: 'https://github.com/Muzammil-s/Daraz-Clone',
    liveUrl: 'https://muzammil-s.github.io/Daraz-Clone/',
    liveLabel: 'GitHub Pages',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    summary: 'Marketplace storefront UI inspired by Daraz featuring promotional carousels, category filtering, interactive product drawers, and responsive breakpoints.',
    problem: 'Elevated a static HTML/CSS clone into an interactive multi-category shopping interface with real cart calculations.',
    architecture: 'Semantic HTML5 and custom responsive CSS grid paired with modular JavaScript catalog filtering and cart drawer state.',
    testing: 'Verified live GitHub Pages serving HTTP 200 and clean widescreen/mobile responsiveness.'
  }
];

export const SKILL_GROUPS = [
  {
    id: 'frontend',
    label: 'Frontend & UI Engineering',
    skills: [
      { name: 'HTML5 & Semantic A11y', projects: ['freshbasket', 'marketplace', 'datalens', 'socialsphere'] },
      { name: 'Modern CSS3 & Responsive Grid', projects: ['freshbasket', 'marketplace', 'commercehub', 'studyroute'] },
      { name: 'Modular ES6 JavaScript', projects: ['datalens', 'linklens', 'devkit', 'studyroute', 'careeros'] },
      { name: 'SVG Data Visualizations', projects: ['datalens', 'networkscope', 'careeros'] }
    ]
  },
  {
    id: 'backend',
    label: 'Backend, APIs & Persistence',
    skills: [
      { name: 'Node.js & Express REST APIs', projects: ['socialsphere', 'commercehub', 'stockflow', 'careeros'] },
      { name: 'MongoDB & Structured JSON Stores', projects: ['socialsphere', 'commercehub', 'stockflow'] },
      { name: 'Dual-Mode Static Resilience', projects: ['socialsphere', 'commercehub', 'stockflow', 'careeros'] },
      { name: 'SQL & Relational Schema Design', projects: ['stockflow', 'careeros'] }
    ]
  },
  {
    id: 'data',
    label: 'Python & Data Analytics',
    skills: [
      { name: 'Python & Pandas Fundamentals', projects: ['networkscope', 'datalens'] },
      { name: 'Descriptive Stats & Correlation', projects: ['datalens', 'careeros', 'stockflow'] },
      { name: 'CSV Parsing & Cleaning Pipelines', projects: ['datalens', 'stockflow'] },
      { name: 'Multi-Criteria Scoring Models', projects: ['studyroute', 'careeros'] }
    ]
  },
  {
    id: 'security',
    label: 'Cybersecurity & Quality',
    skills: [
      { name: 'Scapy Packet & Traffic Analysis', projects: ['networkscope'] },
      { name: 'Salted scrypt & HS256 JWT Auth', projects: ['socialsphere', 'commercehub', 'devkit'] },
      { name: 'Phishing & URL Heuristic Auditing', projects: ['linklens', 'networkscope'] },
      { name: 'Automated Testing (node --test / unittest)', projects: ['datalens', 'networkscope', 'socialsphere', 'stockflow'] }
    ]
  }
];

export const INNOVATION_LAB = [
  {
    title: 'AI Research Assistant',
    status: 'Exploring',
    domain: 'AI & Knowledge Workflows',
    summary: 'Citation-grounded academic paper synthesizer that extracts methodologies, compares datasets locally, and prevents fabricated claims.',
    nextStep: 'Experimenting with structured document chunking and source-anchored summarization.'
  },
  {
    title: 'Data Engineering and ETL Pipeline',
    status: 'Prototype',
    domain: 'Data Engineering',
    summary: 'Automated Extract-Transform-Load runner extending DataLens cleaning rules into scheduled Python batch validation and schema drift reports.',
    nextStep: 'Expanding prototype CLI rules into reproducible CSV/Parquet validation logs.'
  },
  {
    title: 'Machine Learning and Predictive Analytics',
    status: 'Exploring',
    domain: 'Applied ML',
    summary: 'Interpretable scikit-learn forecasting notebooks evaluating baseline regression and classification performance cleanly without overclaiming accuracy.',
    nextStep: 'Building transparent train/test split evaluation templates and error-analysis charts.'
  },
  {
    title: 'Global Skills and Employment Intelligence',
    status: 'Planned',
    domain: 'Labor Market Data',
    summary: 'Data explorer combining verified public developer survey trends and regional curriculum gaps alongside StudyRoute.',
    nextStep: 'Curating reputable open labor-statistics datasets with strict source attribution.'
  },
  {
    title: 'Defensive Security Operations Dashboard',
    status: 'In Progress',
    domain: 'Blue-Team Security',
    summary: 'Evolution of NetworkScope + LinkLens unifying `.pcap` anomaly timelines, IOC enrichment, and firewall rule recommendations.',
    nextStep: 'Integrating alert correlation rules between packet telemetry and URL threat indicators.'
  },
  {
    title: 'Cloud and DevOps Lab',
    status: 'Planned',
    domain: 'Infrastructure & CI/CD',
    summary: 'Containerized Node + Python deployment blueprints with automated health checks, least-privilege secrets, and GitHub Actions verification.',
    nextStep: 'Documenting reproducible Docker Compose environments for multi-service student apps.'
  },
  {
    title: 'Personal Finance Intelligence',
    status: 'Planned',
    domain: 'Decision Support',
    summary: 'Privacy-preserving expense categorization and savings runway simulator processing bank CSV exports strictly inside the browser.',
    nextStep: 'Reusing DataLens RFC-4180 CSV rules for multi-currency student budget projections.'
  },
  {
    title: 'Mobile Application Development',
    status: 'Planned',
    domain: 'Cross-Platform Apps',
    summary: 'Responsive mobile-first companion experiences for StockFlow POS barcode scanning and CareerOS deadline reminders.',
    nextStep: 'Prototyping offline-capable Progressive Web App (PWA) sync patterns first.'
  }
];

export const DATA_SPOTLIGHTS = {
  datalens: {
    badge: 'LOCAL CSV ENGINE · VERIFIED UNIT TESTS',
    title: 'DataLens Statistical Pipeline',
    description: 'Computes quartiles, IQR outlier fences (Q1 - 1.5·IQR, Q3 + 1.5·IQR), Pearson r correlations, and automated cleaning logs locally without network calls.',
    sampleNote: 'Metrics illustrated below reflect the built-in E-Commerce Orders sample CSV inspected in DataLens.',
    metrics: [
      { label: 'Raw Rows -> Cleaned', value: '16 -> 15', sub: '1 exact duplicate removed' },
      { label: 'Missing Cells', value: '2 cells', sub: 'Median / mode imputable' },
      { label: 'Pearson r (Price vs Total)', value: '0.742', sub: 'Computed live in JS' }
    ],
    bars: [
      { label: 'Electronics', pct: 86, val: 'Rs 190.6k' },
      { label: 'Home & Kitchen', pct: 42, val: 'Rs 25.1k' },
      { label: 'Apparel', pct: 35, val: 'Rs 23.2k' },
      { label: 'Groceries', pct: 28, val: 'Rs 23.5k' }
    ]
  },
  studyroute: {
    badge: 'SAMPLE DATASET · ILLUSTRATIVE ESTIMATES',
    title: 'StudyRoute Weighted TCO Model',
    description: 'Ranks international CS programs by total net annual expenditure (tuition + regional living estimate - average merit scholarship) converted across USD, EUR, GBP, and PKR.',
    sampleNote: 'Important: Tuition and living figures in StudyRoute are clearly labeled illustrative sample estimates for comparison modeling.',
    metrics: [
      { label: 'Indexed Destinations', value: '10 Programs', sub: '6 countries compared' },
      { label: 'Budget Modes', value: '4 Currencies', sub: 'USD / EUR / GBP / PKR' },
      { label: 'Compare Capacity', value: 'Up to 3', sub: 'Side-by-side matrix' }
    ],
    bars: [
      { label: 'Germany Public Track (Est.)', pct: 26, val: '~$12.2k/yr net' },
      { label: 'Malaysia Tech Campus (Est.)', pct: 44, val: '~$18.4k/yr net' },
      { label: 'Canada Co-op Stream (Est.)', pct: 68, val: '~$29.5k/yr net' },
      { label: 'UK Russell Group (Est.)', pct: 88, val: '~$38.1k/yr net' }
    ]
  },
  careeros: {
    badge: 'PIPELINE ANALYTICS · A/B RESUME TRACKING',
    title: 'CareerOS Funnel & Resume Telemetry',
    description: 'Aggregates stage velocity from Wishlist through Interview and Offer while measuring callback conversion per tailored resume version.',
    sampleNote: 'Demo uses editable sample applications; real exports support portable JSON backup.',
    metrics: [
      { label: 'Pipeline Stages', value: '5 Columns', sub: 'Drag & drop Kanban' },
      { label: 'A/B Resume Tags', value: 'Tracked', sub: 'Callback % by variant' },
      { label: 'Deadline Guard', value: '<= 5 Days', sub: 'Due-soon alerts' }
    ],
    bars: [
      { label: 'Applied', pct: 100, val: '100% base' },
      { label: 'Screening', pct: 58, val: 'Stage 2' },
      { label: 'Technical Interview', pct: 34, val: 'Stage 3' },
      { label: 'Offer / Final', pct: 14, val: 'Stage 4' }
    ]
  }
};
