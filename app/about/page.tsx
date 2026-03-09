import { serif } from "../fonts";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-5 md:px-8 py-20 md:py-24 max-w-3xl mx-auto">
      <h1
        className={`${serif.className} text-3xl md:text-4xl font-medium tracking-tight mb-10 text-stone-900`}
      >
        About
      </h1>

      <div className="space-y-6 text-stone-700 leading-8 max-w-2xl">
        <p>
          I am a marketing and growth strategist focused on building scalable
          systems across complex, international organizations.
        </p>

        <p>
          My work sits at the intersection of segmentation, experimentation,
          lifecycle design, and cross-functional execution. Rather than focusing
          on individual campaigns or channels, I concentrate on the underlying
          structures that determine how marketing systems perform over time.
        </p>

        <p>
          Over the past years I have worked across companies including Amazon
          Ads, Delivery Hero, and Adviqo, contributing to initiatives spanning
          segmentation architecture, education ecosystems, and product
          innovation driven by behavioral data.
        </p>

        <p>
          Much of my work has involved translating analytical insights into
          operational frameworks that teams across different markets and
          functions can actually adopt. This often means bridging analytics,
          product, marketing, and leadership perspectives to turn models into
          working systems.
        </p>

        <p>
          I am particularly interested in environments where marketing must
          operate across multiple markets, stakeholder groups, and data maturity
          levels. These contexts reward structural thinking and careful
          alignment between economic signals and execution.
        </p>

        <p>
          I am currently based in Spain and open to strategic marketing and
          growth leadership opportunities across Europe, including remote roles.
        </p>
      </div>
    </main>
  );
}