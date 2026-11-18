import type { Metadata } from "next";

import { EmailGate } from "@/components/LandingPage/EmailGate";
import { FAQ } from "@/components/LandingPage/FAQ";
import { Footer } from "@/components/LandingPage/Footer";
import { Hero } from "@/components/LandingPage/Hero";
import { Nav } from "@/components/LandingPage/Nav";
import { Pricing } from "@/components/LandingPage/Pricing";
import { Steps } from "@/components/LandingPage/Steps/Steps";
import { JsonLd } from "@/components/JsonLd";
import { keywords } from "@/lib/content";
import { buildHomeGraph } from "@/lib/structured-data";

// No `title` here. app/page.tsx and app/layout.tsx are the same route segment,
// and a layout's title.template never applies to a title in its own segment —
// a bare title would render unwrapped. The site default already describes the
// home page exactly, so only the canonical needs declaring. If home ever needs
// a distinct title, it has to use `title: { absolute: "..." }`.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
  // Zero Google ranking value since 2009. Included only because it is one line
  // and some answer-engine scrapers still read it. Do not grow this list.
  keywords,
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <JsonLd graph={buildHomeGraph()} />
        {/* A <div>, not a <section>: an unnamed sectioning element is not
            exposed as a region, so it only added noise to the outline. */}
        <div className="relative isolate overflow-hidden bg-black">
          <div className="relative z-10">
            <Nav />
            <Hero />
          </div>
        </div>
        <Steps />
        <EmailGate />
        <Pricing />
        <FAQ />
      </main>
      {/* Outside <main> so it is exposed as a `contentinfo` landmark rather
          than a generic element nested inside the main content. */}
      <Footer />
    </>
  );
}
