import { formatMinor } from "./money.ts";
import type { SectionId } from "./section-anchors.ts";
import { PLAN_PRICING, type PlanKey } from "./plans.ts";

export type NavLink = {
  label: string;
  href: string;
};

export type SectionLink = {
  label: string;
  /** Checked against SECTION_IDS at compile time, so a renamed section id
   *  breaks the build rather than the link. */
  to: SectionId;
};

export type Step = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
};

// "check" = included · "star" = the headline value this tier unlocks over the
// one below · "excluded" = deliberately shown as missing, to make the gap to the
// next tier legible.
export type PricingFeatureMarker = "check" | "star" | "excluded";

export type PricingFeature = {
  label: string;
  marker: PricingFeatureMarker;
};

export type PricingPlan = {
  key: PlanKey;
  name: string;
  price: string;
  badge?: string;
  responsesNote: string;
  summary: string;
  featuresPrefix?: string;
  features: PricingFeature[];
  tagline: {
    heading: string;
    body: string;
  };
  cta: string;
};

export type Faq = {
  question: string;
  answer: string;
  cta?: {
    label: string;
    to: SectionId;
  };
};

export type FooterContact = {
  label: string;
  href: string;
  icon: "mail" | "phone" | "social";
};

export type ConfirmationCard = {
  icon: "report" | "secure" | "help";
  title: string;
  body: string;
};

export const navLinks: SectionLink[] = [
  { label: "How it works", to: "how-it-works" },
  { label: "Plans", to: "plans" },
  { label: "FAQs", to: "faqs" },
];

export const navCta: SectionLink = { label: "Get the free study", to: "email-gate" };

export const hero = {
  /** 2000 × 1021 WebP (3120 × 1593 ratio). Subject sits right of centre; the
   *  left ~45% stays near-black so the copy reads over it. Specs and prompts:
   *  docs/nutraceuticals/image-prompts.md. */
  image: "/images/hero/athlete.webp",
  imageWidth: 2000,
  imageHeight: 1021,
  imageAlt:
    "An Indian athlete after a training session, drinking a protein shake from an Altilos shaker, lit by a warm orange glow",
  eyebrow: "Consumer intelligence for Indian nutraceutical brands",
  headline: {
    before: "Know why they",
    accent: "reorder",
    after: ", and why they switch.",
  },
  body: "Verified supplement buyers across India tell you what they actually take, what they paid, and what made them trust a label. Analyst-edited reports in under 7 days, from ₹8,000.",
  cta: "Get the free study",
  note: "Free. No pitch. No card details.",
} as const;

export const studyQuestions: string[] = [
  "Which brand’s protein or multivitamin buyers will switch to you, and what proof moves them? (Competitive)",
  "Does your new flavour, format or pack size hold up against what they take today? (Validation)",
  "What price per serving will your buyer accept before trading down, by city tier? (Pricing)",
  "Which supplements are actually on their shelf, verified by photo? (Shelf proof)",
  "Which claim, certification or trial pack turns a first purchase into a monthly reorder? (Retention)",
];

export const stepsIntro = {
  title: "Your question in. Verified buyer answers out.",
  intro:
    "Whether it is a new protein SKU, a gummy format or a competitor taking share, this is how we answer it for your brand.",
};

export const steps: Step[] = [
  {
    eyebrow: "Step 01",
    title: "Tell us what you need to know",
    body: "A price-per-serving call. A new flavour or format you aren’t sure about. A competitor winning repeat buyers and you don’t know why. Bring it in plain language.",
    image: "/steps/1.webp",
  },
  {
    eyebrow: "Step 02",
    title: "We build your buyer audience",
    body: "We configure the exact audience: gym-goers, first-time protein buyers, wellness-led parents or ageing adults, in the cities and pin-codes you sell in. Configuration begins within 24 hours.",
    image: "/steps/2.webp",
  },
  {
    eyebrow: "Step 03",
    title: "Verified buyers answer",
    body: "Real supplement buyers share what is actually on their shelf, what they paid and why they switched. Zero-party signals, backed by photos of the products they use.",
    image: "/steps/3.webp",
  },
  {
    eyebrow: "Step 04",
    title: "Experts and AI refine it",
    body: "Every signal runs through Altilos’s Decision Intelligence system and is reviewed by a market expert. Patterns surface. Noise is removed.",
    image: "/steps/4.webp",
  },
  {
    eyebrow: "Step 05",
    title: "You act",
    body: "Your report arrives in 3 to 7 days: analyst-edited, specific to your question, with clear recommendations for product, pricing and positioning.",
    image: "/steps/5.webp",
  },
];

// Prices are derived from PLAN_PRICING so the cards, the JSON-LD offers and the
// amount written to the Order row can never drift apart.
function planPrice(key: PlanKey): string {
  return formatMinor(PLAN_PRICING[key].amountMinor, PLAN_PRICING[key].currency);
}

export const pricingPlans: PricingPlan[] = [
  {
    key: "pulse",
    name: "Pulse",
    price: planPrice("pulse"),
    responsesNote: "50 consumers",
    summary: "A fast read on one question before you commit spend.",
    features: [
      { label: "50 verified responses", marker: "check" },
      { label: "Single city", marker: "check" },
      { label: "Age & gender targeting", marker: "check" },
      { label: "Up to 5 questions", marker: "check" },
      { label: "1 competitor mapped", marker: "check" },
      { label: "AI 1-page summary", marker: "check" },
      { label: "Analyst report", marker: "excluded" },
      { label: "Expert call", marker: "excluded" },
      { label: "Under 7-day delivery", marker: "check" },
    ],
    tagline: {
      heading: "AI reads your consumers",
      body: "A fast, self-serve gut-check on one question.",
    },
    cta: "Start With Pulse →",
  },
  {
    key: "core",
    name: "Core",
    price: planPrice("core"),
    badge: "Most popular",
    responsesNote: "200 consumers",
    summary: "Validate a collection, claim or price point with your target buyer.",
    features: [
      { label: "200 verified responses", marker: "check" },
      { label: "Up to 2 cities", marker: "check" },
      { label: "+ income & family targeting", marker: "check" },
      { label: "Up to 7 questions", marker: "check" },
      { label: "Up to 2 competitors mapped", marker: "check" },
      { label: "Analyst-edited report", marker: "star" },
      { label: "Email Q&A with an analyst", marker: "star" },
      { label: "Under 7-day delivery", marker: "check" },
    ],
    tagline: {
      heading: "+ A human analyst",
      body: "The jump from a data point to a decision.",
    },
    cta: "Select Core →",
  },
  {
    key: "core+",
    name: "Core+",
    price: planPrice("core+"),
    badge: "Best value",
    responsesNote: "350 consumers",
    summary: "A competitive read across cities and segments.",
    featuresPrefix: "Everything in Core, plus:",
    features: [
      { label: "350 verified responses", marker: "check" },
      { label: "Advanced segmentation", marker: "check" },
      { label: "Receipts & product images", marker: "star" },
      { label: "Up to 4 competitors mapped", marker: "check" },
      { label: "Action-plan template", marker: "check" },
      { label: "45-min expert call", marker: "star" },
      { label: "Under 7-day delivery", marker: "check" },
    ],
    tagline: {
      heading: "+ Proof & a strategy call",
      body: "Real consumption evidence, turned into a plan.",
    },
    cta: "Choose Core+ →",
  },
  {
    key: "expert",
    name: "Expert",
    price: planPrice("expert"),
    badge: "Full depth",
    responsesNote: "750 consumers",
    summary: "The full landscape plus targeted offers to competitor users.",
    featuresPrefix: "Everything in Core+, plus:",
    features: [
      { label: "750 verified responses", marker: "check" },
      { label: "Up to 4 cities", marker: "check" },
      { label: "Expanded profiling", marker: "check" },
      { label: "High-cap competitor mapping", marker: "check" },
      { label: "Two 1-hour expert sessions", marker: "star" },
      { label: "SmartOffers activation", marker: "star" },
      { label: "Priority delivery", marker: "check" },
    ],
    tagline: {
      heading: "+ The power to act",
      body: "Influence behaviour with SmartOffers, at scale.",
    },
    cta: "Go Expert →",
  },
];

export const faqTitle =
  "Frequently asked questions about nutraceutical consumer research";


// Plan prices and sizes must match PLAN_PRICING (src/lib/plans.ts);
// tests/content-pricing.test.mjs checks the figures quoted here.
export const faqs: Faq[] = [
  {
    question: "What does Altilos do for a nutraceutical brand?",
    answer:
      "We put your question to verified supplement buyers in the cities you sell in, and return an analyst-edited report with clear recommendations. Protein, multivitamins, gummies, ayurvedic and herbal, sports nutrition, kids\u2019 and women\u2019s health: if Indians buy it, we can find its buyers.",
  },
  {
    question: "Who answers the questions?",
    answer:
      "Real consumers who buy in your category, matched to the audience you set: age, gender, city and tier, income, and behaviour such as gym frequency, diet or how often they reorder. Every respondent is verified before they answer.",
  },
  {
    question: "How do you know they actually use the products?",
    answer:
      "On Core+ and Expert, buyers share photos of the supplements on their shelf and receipts of what they paid. You see the brands, pack sizes and formats they actually use, not what they say they use.",
  },
  {
    question: "What does \u201Czero-party\u201D mean?",
    answer:
      "Every finding comes first-hand from the consumer who answered. Nothing is scraped, scored from reviews or modelled.",
  },
  {
    question: "Can you map a specific competitor\u2019s buyers?",
    answer:
      "Yes. Every plan maps at least one competitor, up to high-cap mapping on Expert. You learn why their buyers chose them, what they pay per serving, and what would make them switch. Expert adds SmartOffers to reach those buyers directly.",
  },
  {
    question: "What does a study cost and how long does it take?",
    answer:
      "Pulse starts at \u20B98,000 for 50 consumers. Core is \u20B940,000 (200), Core+ is \u20B91,00,000 (350), Expert is \u20B92,00,000 (750). Configuration starts within 24 hours and reports arrive in 3 to 7 days.",
    cta: {
      label: "See the plans",
      to: "plans",
    },
  },
  {
    question: "Are there contracts or lock-ins?",
    answer:
      "No. Each study is a one-off purchase. Run one, act on it, and come back when you have the next question.",
  },
];

export const confirmationCards: ConfirmationCard[] = [
  {
    icon: "report",
    title: "Your Study Is Being Configured",
    body: "Once you complete your brief, we build your consumer audience and begin collecting zero-party signals from buyers in your target market.",
  },
  {
    icon: "secure",
    title: "Delivered in Under 7 Days",
    body: "Your analyst-verified report arrives within the week. Clear findings, real consumer behaviour, and recommendations you can act on immediately.",
  },
  {
    icon: "help",
    title: "A Human on the Other Side",
    body: "Every study is reviewed by a market expert before it reaches you. Questions along the way go to a real person, not a ticket queue.",
  },
];

export const footerLinks: NavLink[] = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Security", href: "/security" },
  { label: "Contact", href: "mailto:info@altilos.com" },
];

export const footerContacts: FooterContact[] = [
  { label: "info@altilos.com", href: "mailto:info@altilos.com", icon: "mail" },
  { label: "+1-909-243-4942", href: "tel:+19092434942", icon: "phone" },
];

export const keywords: string[] = [
  "nutraceutical consumer research India",
  "supplement buyer insights India",
  "protein powder consumer study India",
  "zero-party data India",
  "D2C wellness brand consumer research",
  "Tier 2 Tier 3 city consumer insights",
];
