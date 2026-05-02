import feature1 from "../assets/feature-1.gif";
import feature2 from "../assets/feature-2.gif";

export default function FeaturesChess() {
  return (
    <section className="bg-black py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-block liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white mb-6">
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Pro features. <br /> Zero complexity.
          </h2>
        </div>

        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="flex-1 space-y-8">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-tight">
              Designed to convert. <br /> Built to perform.
            </h3>
            <p className="text-white/60 font-body font-light text-base md:text-lg max-w-lg">
              Every pixel is intentional. Our AI studies what works across
              thousands of top sites—then builds yours to outperform them all.
            </p>
            <button className="liquid-glass-strong rounded-full px-8 py-3.5 text-sm font-medium hover:scale-105 transition-transform">
              Learn more
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="liquid-glass rounded-2xl overflow-hidden p-1 shadow-2xl">
              <img
                src={feature1}
                alt="Feature 1"
                className="w-full h-auto rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-8">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-tight">
              It gets smarter. <br /> Automatically.
            </h3>
            <p className="text-white/60 font-body font-light text-base md:text-lg max-w-lg">
              Your site evolves on its own. AI monitors every click, scroll, and
              conversion—then optimizes in real time. No manual updates. Ever.
            </p>
            <button className="liquid-glass-strong rounded-full px-8 py-3.5 text-sm font-medium hover:scale-105 transition-transform">
              See how it works
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="liquid-glass rounded-2xl overflow-hidden p-1 shadow-2xl">
              <img
                src={feature2}
                alt="Feature 2"
                className="w-full h-auto rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
