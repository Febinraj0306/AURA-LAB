export default function Testimonials() {
  const reviews = [
    {
      quote:
        "A complete rebuild in five days. The result outperformed everything we'd spent months building before.",
      name: "Sarah Chen",
      role: "CEO, Luminary",
    },
    {
      quote:
        "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data.",
      name: "Marcus Webb",
      role: "Head of Growth, Arcline",
    },
    {
      quote:
        "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it.",
      name: "Elena Voss",
      role: "Brand Director, Helix",
    },
  ];

  return (
    <section className="bg-black py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-block liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white mb-6">
            What They Say
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Don't take our word for it.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="liquid-glass rounded-2xl p-10 space-y-8 flex flex-col">
              <p className="text-white/80 font-body font-light text-base md:text-lg italic leading-relaxed flex-1">
                "{review.quote}"
              </p>
              <div>
                <div className="text-white font-body font-medium text-sm">
                  {review.name}
                </div>
                <div className="text-white/50 font-body font-light text-xs">
                  {review.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
