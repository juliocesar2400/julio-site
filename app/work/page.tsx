import Link from "next/link";
import { serif } from "../fonts";

export default function WorkPage() {
  return (
    <main className="min-h-screen px-5 md:px-8 py-20 md:py-24 max-w-3xl mx-auto">
      <h1
        className={`${serif.className} text-3xl md:text-4xl font-medium tracking-tight mb-6 text-stone-900`}
      >
        Selected Work
      </h1>

      <p className="text-lg text-stone-600 leading-relaxed mb-12 max-w-2xl">
        Case notes outlining structural marketing initiatives across global
        organizations.
      </p>

      <div className="space-y-10">
        <article className="border-t border-stone-200 pt-6">
          <h2 className="text-2xl font-medium mb-2 text-stone-900">
            <Link
              href="/work/delivery-hero-segmentation"
              className="hover:text-stone-500 transition-colors"
            >
              Global Value-Based Segmentation Rollout
            </Link>
          </h2>

          <p className="text-sm text-stone-500 mb-4">
            Delivery Hero — APAC, EU, MENA, LATAM
          </p>

          <p className="text-stone-700 leading-8 max-w-2xl">
            Unified fragmented local segmentation models into a shared framework
            that supported cross-market alignment and became the basis for
            group-level ROI calculations.
          </p>
        </article>

        <article className="border-t border-stone-200 pt-6">
          <h2 className="text-2xl font-medium mb-2 text-stone-900">
            <Link
              href="/work/amazon-education-segmentation"
              className="hover:text-stone-500 transition-colors"
            >
              Behavioral Segmentation for Advertiser Education
            </Link>
          </h2>

          <p className="text-sm text-stone-500 mb-4">Amazon Ads — Global</p>

          <p className="text-stone-700 leading-8 max-w-2xl">
            Built a behavioral segmentation model for webinar and educational
            communications, shifting from broad distribution to relevance-based
            targeting and improving open rate and click-through rate.
          </p>
        </article>

        <article className="border-t border-stone-200 pt-6">
          <h2 className="text-2xl font-medium mb-2 text-stone-900">
            <Link
              href="/work/adviqo-session-product"
              className="hover:text-stone-500 transition-colors"
            >
              Session-Based Product Launch
            </Link>
          </h2>

          <p className="text-sm text-stone-500 mb-4">Adviqo</p>

          <p className="text-stone-700 leading-8 max-w-2xl">
            Identified a monetization gap in high-engagement but low-depth user
            behavior, contributing to the development of a new session-based
            product that increased cash GMV by 10%.
          </p>
        </article>
      </div>
    </main>
  );
}