import { serif } from "../../fonts";

export default function AmazonEducationSegmentationPage() {
  return (
    <main className="min-h-screen px-5 md:px-8 py-20 md:py-24 max-w-3xl mx-auto">
      <p className="text-sm text-stone-500 mb-6">Amazon Ads</p>

      <h1
        className={`${serif.className} text-3xl md:text-4xl font-medium tracking-tight mb-8 text-stone-900`}
      >
        Behavioral Segmentation for Advertiser Education
      </h1>

      <div className="space-y-10 text-stone-700 leading-8 max-w-2xl">
        <section>
          <h2 className="text-xl font-medium text-stone-900 mb-3">Context</h2>
          <p>
            Educational programs for Sellers and Vendors relied on broad email
            and banner distribution to maximize webinar participation. The
            dominant logic was volume: reach as many advertisers as possible and
            hope attendance followed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-stone-900 mb-3">
            Structural Problem
          </h2>
          <p>
            This approach burned high-value advertisers with repeated generic
            invites, wasted resources on low-propensity segments, and ignored
            differences in HVA completion, engagement depth, and format
            preference. The system optimized for gross reach rather than
            behavioral relevance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-stone-900 mb-3">My Role</h2>
          <p>
            I designed the segmentation approach, partnered with a senior
            analyst on experimentation, collaborated with channel owners on
            rollout, and wrote SQL to operationalize the audiences. The
            objective was to redesign the education distribution model around
            advertiser behavior, not just improve campaign metrics.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-stone-900 mb-3">Outcome</h2>
          <p>
            The new model increased open rate from 35% to 40–45% and CTR from
            1.3% to 2%. It was reviewed, approved, and rolled out across all
            regions offering webinars at Amazon. The work later expanded into a
            broader multimodality strategy based on format fit and structured
            learning progression.
          </p>
        </section>
      </div>
    </main>
  );
}