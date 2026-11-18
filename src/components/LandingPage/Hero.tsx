import Image from "next/image";

import { PrimaryButton } from "@/components/LandingPage/ui/PrimaryButton";
import { hero } from "@/lib/content";

// Copy on the left, the photo anchored bottom-right and sized by height so it
// is never clipped.
export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-10 lg:pt-0"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-[1600px] lg:flex lg:min-h-[clamp(720px,84vh,880px)] lg:items-center">
        <div className="relative z-10 px-5 text-center sm:px-8 lg:w-[58%] lg:px-0 lg:text-left">
          <div className="mx-auto max-w-[640px] lg:ml-16 xl:ml-24">
            <h1
              id="hero-title"
              className="font-inter text-[13px] uppercase tracking-[0.2em] text-[#F97316] lg:text-[15px]"
            >
              {hero.eyebrow}
            </h1>
            <p className="mt-8 font-plusJakartaSans text-3xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-4xl lg:mt-10 lg:text-[2.75rem]">
              {hero.headline.before}{" "}
              <span className="text-[#F97316]">{hero.headline.accent}</span>
              {hero.headline.after}
            </p>
            <p className="mt-6 font-inter text-base leading-[1.9] text-[#E8E8E8] lg:text-[15px] lg:leading-[2.1]">
              {hero.body}
            </p>
            <div className="mt-10 flex justify-center font-black lg:justify-start">
              <PrimaryButton to="email-gate">{hero.cta}</PrimaryButton>
            </div>
            <p className="mt-4 font-inter text-sm text-white">{hero.note}</p>
          </div>
        </div>
      </div>

      {/* Sized by height on desktop, width from the 3120/1593 ratio. On mobile
          the subject's centre (63% across the photo) is pinned to the
          container centre — update both numbers if the final image changes. */}
      <div className="relative mt-4 h-[380px] w-full overflow-hidden sm:h-[460px] lg:absolute lg:-right-20 lg:bottom-0 lg:mt-0 lg:aspect-[3120/1593] lg:h-[82%] lg:w-auto">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          width={hero.imageWidth}
          height={hero.imageHeight}
          loading="eager"
          fetchPriority="high"
          sizes="(min-width: 1024px) 1440px, 100vw"
          className="absolute left-1/2 h-full w-auto max-w-none -translate-x-[63%] lg:relative lg:left-auto lg:w-full lg:translate-x-0 lg:object-cover"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-[linear-gradient(to_top,#000_0%,rgba(0,0,0,0.97)_22%,rgba(0,0,0,0.72)_52%,rgba(0,0,0,0.28)_78%,transparent_100%)] lg:hidden"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[22%] bg-[linear-gradient(to_top,#000_0%,rgba(0,0,0,0.97)_22%,rgba(0,0,0,0.72)_52%,rgba(0,0,0,0.28)_78%,transparent_100%)] lg:block"
      />
    </section>
  );
}
