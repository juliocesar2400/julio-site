import { serif } from "../../fonts";

export default function DeliveryHeroSegmentationPage() {
  return (
    <main className="min-h-screen px-5 md:px-8 py-20 md:py-24 max-w-3xl mx-auto">
      <p className="text-sm text-stone-500 mb-6">Delivery Hero</p>

      <h1
        className={`${serif.className} text-3xl md:text-4xl font-medium tracking-tight mb-8 text-stone-900`}
      >
        Global Value-Based Segmentation Rollout
      </h1>

      <div className="space-y-10 text-stone-700 leading-8 max-w-2xl">
        <section>
          <h2 className="text-xl font-medium text-stone-900 mb-3">Context</h2>
          <p>
            Regional markets operated with heterogeneous segmentation
            frameworks, ranging from simple local models to more complex
            in-house approaches. This fragmentation limited comparability,
            strategic alignment, and consistent ROI evaluation across markets.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-stone-900 mb-3">My Role</h2>
          <p>
            I acted as a structural integrator between central strategy,
            analysts, leadership, and regional stakeholders. My work focused on
            translating analytical logic into business-consumable frameworks,
            supporting rollout governance, and driving adoption across regions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-stone-900 mb-3">
            Structural Challenge
          </h2>
          <p>
            Regions used different KPIs and segmentation philosophies, data
            maturity varied significantly, and some local teams resisted central
            guidance in favor of established in-house know-how. The challenge
            was to create a framework simple enough to be adopted widely while
            still being economically meaningful.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-stone-900 mb-3">Outcome</h2>
          <p>
            The segmentation was rolled out across APAC, EU, MENA, and LATAM
            and became the basis for group-level ROI calculations. APAC and EU
            fully adopted the new model after validation, while other regions
            used it alongside local structures to improve alignment with
            central.
          </p>
        </section>
      </div>
    </main>
  );
}