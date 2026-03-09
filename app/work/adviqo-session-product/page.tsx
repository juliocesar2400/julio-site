import { serif } from "../../fonts";

export default function AdviqoSessionProductPage() {
  return (
    <main className="min-h-screen px-5 md:px-8 py-20 md:py-24 max-w-3xl mx-auto">
      <p className="text-sm text-stone-500 mb-6">Adviqo</p>

      <h1
        className={`${serif.className} text-3xl md:text-4xl font-medium tracking-tight mb-8 text-stone-900`}
      >
        Session-Based Product Launch
      </h1>

      <div className="space-y-10 text-stone-700 leading-8 max-w-2xl">
        <section>
          <h2 className="text-xl font-medium text-stone-900 mb-3">Context</h2>
          <p>
            User behavior analysis showed a meaningful group of highly engaged
            customers whose interactions were frequent but low in content depth.
            Existing product structures did not fully capture the monetization
            potential of this pattern.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-stone-900 mb-3">
            Structural Problem
          </h2>
          <p>
            The platform was serving engagement, but not fully aligning product
            design with the way part of the user base actually consumed value.
            This created a gap between engagement intensity and monetization
            efficiency.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-stone-900 mb-3">
            My Contribution
          </h2>
          <p>
            By analyzing behavioral patterns in the data, I identified the
            mismatch between high-frequency usage and low-content interaction
            size. This insight contributed to the development of a new
            session-based digital product designed around actual user behavior
            rather than inherited product logic.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-stone-900 mb-3">Outcome</h2>
          <p>
            The resulting product launch contributed to 10% growth in cash GMV
            and improved app performance signals. More importantly, it showed
            how behavioral analysis can surface product opportunities that sit
            between engagement metrics and revenue outcomes.
          </p>
        </section>
      </div>
    </main>
  );
}