import Link from "next/link";
import { serif } from "./fonts";

export default function Home() {
  return (
    <main className="min-h-screen px-5 md:px-8 py-20 md:py-24 max-w-3xl mx-auto">
      <h1
        className={`${serif.className} text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-8 text-stone-900`}
      >
        Marketing & Growth Systems Strategist
      </h1>

      <p className="text-xl text-stone-600 leading-relaxed mb-14 max-w-2xl">
        Designing scalable marketing systems that connect segmentation, unit
        economics, and execution across international markets.
      </p>

      <section className="space-y-6 mb-16 max-w-2xl text-stone-700 leading-8">
        <p>
          I work at the intersection of analytics, experimentation, and
          cross-market adoption. My focus is building structural marketing
          systems that enable organizations to scale growth with economic
          clarity.
        </p>

        <p>
          Across companies including Amazon Ads, Delivery Hero, and Adviqo, I
          have designed segmentation frameworks, lifecycle systems, and product
          insights deployed across multiple international markets.
        </p>
      </section>

      <section className="mb-16">
        <h2
          className={`${serif.className} text-2xl font-medium mb-6 text-stone-900`}
        >
          Selected Impact
        </h2>

        <div className="space-y-6 max-w-2xl text-stone-700 leading-8">
          <p>
            <Link
              href="/work/delivery-hero-segmentation"
              className="underline underline-offset-4 hover:text-stone-500 transition-colors"
            >
              Global Value-Based Segmentation Rollout
            </Link>{" "}
            — Unified fragmented segmentation models across four regions at
            Delivery Hero, forming the basis for group-level ROI calculations.
          </p>

          <p>
            <Link
              href="/work/amazon-education-segmentation"
              className="underline underline-offset-4 hover:text-stone-500 transition-colors"
            >
              Behavioral Segmentation for Advertiser Education
            </Link>{" "}
            — Designed the segmentation model that improved open rate from 35%
            to 40–45% and increased CTR to 2%.
          </p>

          <p>
            <Link
              href="/work/adviqo-session-product"
              className="underline underline-offset-4 hover:text-stone-500 transition-colors"
            >
              Session-Based Product Launch
            </Link>{" "}
            — Identified behavioral patterns that contributed to the creation of
            a new product model leading to 10% GMV growth.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2
          className={`${serif.className} text-2xl font-medium mb-6 text-stone-900`}
        >
          How I Operate
        </h2>

        <ul className="space-y-3 text-stone-700 leading-8 max-w-2xl">
          <li>Translate analytics into decision frameworks</li>
          <li>Align stakeholders across regions and functions</li>
          <li>Design experiments tied to economic outcomes</li>
          <li>Operationalize models technically when needed</li>
        </ul>
      </section>

      <section className="max-w-2xl">
        <p className="text-stone-700 leading-8">
          Based in Spain and open to strategic marketing and growth leadership
          opportunities across Europe.
        </p>

        <p className="mt-4">
          <Link
            href="/work"
            className="underline underline-offset-4 hover:text-stone-500 transition-colors"
          >
            Explore selected work →
          </Link>
        </p>
      </section>
    </main>
  );
}