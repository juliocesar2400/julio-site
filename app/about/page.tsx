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
          on individual campaigns or channels, I concentrate on the structural
          systems that determine how marketing organizations perform over time.
        </p>

        <p>
          Over the past years I have worked across companies including Amazon
          Ads, Delivery Hero, and Adviqo, contributing to initiatives spanning
          segmentation architecture, education ecosystems, and product
          innovation driven by behavioral data.
        </p>

        <p>
          Much of my work has involved translating analytical insights into
          operational frameworks that teams across markets and functions can
          realistically adopt.
        </p>

      </div>

      <section className="mt-16">
        <h2
          className={`${serif.className} text-2xl font-medium mb-6 text-stone-900`}
        >
          Capabilities
        </h2>

        <ul className="space-y-2 text-stone-700 leading-7 max-w-2xl">
          <li>Marketing segmentation and lifecycle systems</li>
          <li>Growth experimentation and measurement</li>
          <li>International marketing operations</li>
          <li>Marketing analytics and SQL</li>
          <li>Cross-functional program leadership</li>
        </ul>
      </section>

      <section className="mt-16">
        <h2
          className={`${serif.className} text-2xl font-medium mb-6 text-stone-900`}
        >
          Languages
        </h2>

        <ul className="space-y-2 text-stone-700 leading-7">
          <li>Spanish — Native</li>
          <li>French — Fluent</li>
          <li>English — Fluent</li>
          <li>German — Intermidiate</li>
        </ul>
      </section>

      <section className="mt-16">
        <h2
          className={`${serif.className} text-2xl font-medium mb-6 text-stone-900`}
        >
          Contact
        </h2>

        <div className="space-y-2 text-stone-700">
          <p><a href="mailto:juliocottaviano@gmail.com" className="underline hover:text-stone-500">
  juliocottaviano@gmail.com
</a></p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/juliocottaviano"
              className="underline hover:text-stone-500"
            >
              linkedin.com/in/juliocottaviano
            </a>
          </p>
          <p>
  GitHub:{" "}
  <a
    href="https://github.com/juliocesar2400"
    className="underline hover:text-stone-500"
  >
    github.com/juliocesar2400
  </a>
</p>
        </div>
      </section>
    </main>
  );
}