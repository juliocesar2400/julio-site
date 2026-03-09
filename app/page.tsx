import Link from "next/link";
import Image from "next/image";
import { serif } from "./fonts";

export default function Home() {
  return (
    <main className="min-h-screen px-5 md:px-8 py-20 md:py-24 max-w-3xl mx-auto">

      <div className="flex flex-col md:flex-row md:items-start md:gap-12">

        <div className="flex-1">

          <h1
            className={`${serif.className} text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-8 text-stone-900`}
          >
            Marketing & Growth Systems Strategist
          </h1>

          <p className="text-xl text-stone-600 leading-relaxed mb-14 max-w-xl">
            Designing scalable marketing systems that connect segmentation,
            unit economics, and execution across international markets.
          </p>

        </div>

        <div className="mb-10 md:mb-0">
          <Image
            src="/julio-website.jpg"
            alt="Julio Ottaviano"
            width={180}
            height={180}
            className="rounded-lg"
          />
        </div>

      </div>

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
              className="underline underline-offset-4 hover:text-stone-500"
            >
              Global Value-Based Segmentation Rollout
            </Link>{" "}
            — Unified fragmented segmentation models across four regions.
          </p>

          <p>
            <Link
              href="/work/amazon-education-segmentation"
              className="underline underline-offset-4 hover:text-stone-500"
            >
              Behavioral Segmentation for Advertiser Education
            </Link>{" "}
            — Improved open rate from 35% to 40–45%.
          </p>

          <p>
            <Link
              href="/work/adviqo-session-product"
              className="underline underline-offset-4 hover:text-stone-500"
            >
              Session-Based Product Launch
            </Link>{" "}
            — Contributed to 10% GMV growth.
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
          opportunities across Western Europe.
        </p>

        <p className="mt-4">
          <Link
            href="/work"
            className="underline underline-offset-4 hover:text-stone-500"
          >
            Explore selected work →
          </Link>
        </p>
      </section>

    </main>
  );
}