// All editable site content lives here.
import chocolateShot from "@/assets/client-chocolate.webp";
import dashboardShot from "@/assets/excel-dashboard.jpg";
import kelvinShot from "@/assets/kelvin-packaging-line.jpg";
import laundryShot from "@/assets/client-laundry.webp";

export const profile = {
  name: "Bhaskar Rao Sunkari",
  shortName: "Bhaskar",
  location: "London, UK",
  tagline: "Leading with strategy. Building with technology.",
  email: "sunkaribhaskar4856@gmail.com",
  linkedin: "https://www.linkedin.com/in/bhaskar-rao-sunkari",
  instagram: "https://www.instagram.com/bhaskar485/",
  cvPath: "/cv/bhaskar-rao-sunkari-cv.pdf",
};

// Landing page headline — rendered as four alternating display / serif-italic lines.
export const heroHeadline = {
  line1: "Co-Founder",
  line2: "by experience,",
  line3: "entrepreneur",
  line4: "by blood",
};

export const siteCopy = {
  home: {
    introduction: "Entrepreneurship & Innovation student and agency co-founder, focused on organising people, improving operations and turning ideas into action.",
    location: "Based in London, UK",
    selectedWorkLabel: "Selected projects",
    overviewLead: "I work where ideas meet reality — ",
    overviewLeadAccent: "processes, people and decisions.",
    overviewBody:
      "I co-founded a small web agency and grew up around a family manufacturing business. I use technology where it helps, not as a headline.",
    approachTitle: "Business first.",
    approachSubtitle: "Technology where it earns its place.",
    approach: [
      { title: "Understand", body: "Start with the problem, the people involved and what success actually looks like." },
      { title: "Organise", body: "Turn the idea into steps, owners and decisions that a small team can execute." },
      { title: "Build", body: "Put the plan into practice. Use technology only where it makes the work simpler or the solution better." },
    ],
    disciplines: ["People", "Operations", "Strategy", "Execution"],
  },
  about: {
    introduction: "I'm Bhaskar — interested in organising people and work, making practical decisions, and understanding how businesses grow. Technology is one tool I use along the way.",
    closing: ["Leading with strategy.", "Turning ideas into action."],
  },
  projects: {
    introduction: "Client delivery, operational planning and ongoing tools — the problem, the decisions and what followed.",
    context: "The business problem",
    approach: "Decisions & execution",
    deliverables: "What I helped deliver",
    outcome: "What followed",
    tools: "Supporting tools & methods",
    next: "Next case study",
    back: "← All projects",
  },
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  kind: string;
  summary: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Co-Founder & Operations Lead",
    org: "Web Development Agency",
    period: "April 2025 – Present",
    kind: "Venture",
    summary:
      "Co-founded a small agency, developed a team and organised client delivery. AI-assisted, no-code website development supported the team's work; my focus was people, coordination and the business.",
    points: [
      "Taught and coordinated a small team, turning a shared skill into a delivery process.",
      "Secured clients and delivered real projects, including e-commerce and service-business websites.",
      "Now studying in the UK while staying involved in strategy, mentoring and key business decisions.",
    ],
  },
  {
    role: "Automation Project Lead",
    org: "Kelvin Industries",
    period: "April 2025 – June 2025",
    kind: "Operations",
    summary:
      "Led early planning for packaging automation in a family manufacturing business, preparing operations for future expansion.",
    points: [
      "Researched automation options suited to the existing packaging process.",
      "Evaluated vendors, gathered quotations and compared feasibility.",
      "Coordinated planning and procurement discussions with stakeholders.",
    ],
  },
  {
    role: "Committee Member, Client Acquisition",
    org: "Greenwich Consulting Club",
    period: "2026 – Present",
    kind: "Leadership",
    summary:
      "Part of the committee responsible for finding and approaching organisations for student consulting projects.",
    points: [
      "Supports outreach to potential client organisations.",
      "Helps shape how projects are scoped before student teams take them on.",
    ],
  },
  {
    role: "BA (Hons) Entrepreneurship & Innovation",
    org: "University of Greenwich",
    period: "2025 – 2028",
    kind: "Education",
    summary:
      "Studying how ventures are started, operated and grown — with a focus on strategy, operations and innovation.",
    points: [
      "Coursework across strategy, venture creation and business operations.",
    ],
  },
  {
    role: "International Business Simulation",
    org: "Edumundo",
    period: "First year",
    kind: "Simulation",
    summary:
      "Ran a simulated company with a team, making connected decisions across production, marketing, finance and strategy.",
    points: [
      "Practised trade-offs between departments under time pressure.",
      "Worked in a team to align decisions with an overall strategy.",
    ],
  },
];

export type Project = {
  slug: string;
  index: string;
  title: string;
  short: string;
  category: string;
  client: string;
  role: string;
  year: string;
  tools: string[];
  image?: string;
  imageAlt?: string;
  context: string;
  approach: string[];
  deliverables: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "chocolate-brand-ecommerce",
    index: "01",
    title: "An online shop for a small chocolate brand",
    short: "Turning a need to sell online into a manageable storefront, from business requirements to owner handover.",
    category: "E-commerce",
    client: "PureNature's Chocolate",
    role: "Project lead",
    year: "Year to confirm",
    tools: ["Shopify", "AI-assisted design tools"],
    image: chocolateShot,
    imageAlt: "Homepage of the PureNature's Chocolate online store, a handcrafted chocolate shop in Raipur",
    context:
      "A small chocolate brand had products customers wanted but no way to reach or sell to them online.",
    approach: [
      "Clarified what the business actually needed: a credible storefront, simple product management and a smooth checkout.",
      "Structured the catalogue and pages around how customers browse and buy.",
      "Built and configured the store on Shopify so the owner could run it day to day.",
    ],
    deliverables: ["Live Shopify store", "Product catalogue structure", "Handover to the owner"],
    outcome:
      "The brand gained a working online store it can manage itself. Detailed results to be added once confirmed.",
  },
  {
    slug: "commercial-laundry-website",
    index: "02",
    title: "A clear website for a commercial laundry",
    short: "Clarifying a B2B service offer and organising it into a professional presence for business customers.",
    category: "Service website",
    client: "Nirmala Co.",
    role: "Project lead",
    year: "Year to confirm",
    tools: ["AI-assisted no-code builder"],
    image: laundryShot,
    imageAlt: "Homepage of the Nirmala Co. website, a commercial laundry service for hospitals, hotels and restaurants",
    context:
      "A commercial laundry business needed a standalone website that explained its services and looked professional to business customers.",
    approach: [
      "Translated the business's services into clear, scannable sections.",
      "Prioritised a professional presentation and easy routes to get in touch.",
      "Delivered the agreed service-page structure using AI-assisted, no-code tools.",
    ],
    deliverables: ["Standalone informational website", "Service page structure"],
    outcome:
      "The business now has a professional website presenting its services. Detailed results to be added once confirmed.",
  },
  {
    slug: "kelvin-packaging-automation",
    index: "03",
    title: "Planning packaging automation at Kelvin Industries",
    short: "Researching, comparing and coordinating automation options for future expansion.",
    category: "Operations",
    client: "Kelvin Industries",
    role: "Automation Project Lead",
    year: "2025",
    tools: ["Vendor research", "Quotation comparison", "Stakeholder coordination"],
    image: kelvinShot,
    imageAlt:
      "Rotary indexing table on a packaging line at Kelvin Industries, with components held upright in circular stations and a feeder chute in the foreground",
    context:
      "The family manufacturing business wanted to prepare for future expansion and reduce its dependence on manual packaging.",
    approach: [
      "Mapped the current packaging process to understand where automation could fit.",
      "Researched automation options and shortlisted suitable vendors.",
      "Gathered and compared quotations, weighing cost, fit and feasibility.",
      "Coordinated planning and procurement discussions with decision-makers.",
    ],
    deliverables: ["Vendor shortlist", "Quotation comparison", "Groundwork for a future implementation"],
    outcome:
      "This was a planning and vendor-coordination project. It prepared the business for a future decision; no installation or production results are claimed.",
  },
  {
    slug: "automation-and-operational-tools",
    index: "04",
    title: "Small automations and operational dashboards",
    short: "Workflows and Excel dashboards built to solve everyday operational problems.",
    category: "Operational tools",
    client: "Various",
    role: "Builder",
    year: "Ongoing",
    tools: ["Excel", "Automation tools", "AI assistants"],
    image: dashboardShot,
    imageAlt:
      "Two dashboard panels built in a spreadsheet: a technical skills bar chart and a skill category donut chart",
    context:
      "Repetitive tasks and scattered information slow small teams down. These are small tools built to address specific, practical problems.",
    approach: [
      "Start with the problem and who it affects, not with the tool.",
      "Build the simplest thing that works — often a dashboard or a short workflow.",
      "Examples and screenshots will be added here as they are documented.",
    ],
    deliverables: ["Excel dashboards", "Automation workflows"],
    outcome: "Project examples to be added with supporting evidence.",
  },
];
