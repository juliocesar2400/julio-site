import Link from "next/link";
import { serif } from "../fonts";

export default function ThinkingPage() {
  return (
    <main className="min-h-screen px-5 md:px-8 py-20 md:py-24 max-w-3xl mx-auto">
      <h1
        className={`${serif.className} text-3xl md:text-4xl font-medium tracking-tight mb-10 text-stone-900`}
      >
        Thinking
      </h1>

      <div className="space-y-8 max-w-2xl">

        <article>
          <h2 className="text-xl font-medium text-stone-900 mb-2">
            <Link
              href="/thinking/segmentation-before-optimization"
              className="hover:text-stone-500 transition-colors"
            >
              Segmentation Before Optimization
            </Link>
          </h2>

          <p className="text-sm text-stone-500">
            On why marketing systems should define customer structure before
            attempting to optimize performance.
          </p>
        </article>

      </div>
    </main>
  );
}