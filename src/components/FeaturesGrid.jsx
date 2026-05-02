import { Zap, Palette, BarChart3, Shield } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: Zap,
      title: "Days, Not Months",
      description: "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy.",
    },
    {
      icon: Palette,
      title: "Obsessively Crafted",
      description: "Every detail considered. Every element refined. Design so precise, it feels inevitable.",
    },
    {
      icon: BarChart3,
      title: "Built to Convert",
      description: "Layouts informed by data. Decisions backed by performance. Results you can measure.",
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included.",
    },
  ];

  return (
    <section className="bg-black py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white mb-6">
            Why Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            The difference is everything.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="liquid-glass rounded-2xl p-8 space-y-6 hover:scale-[1.02] transition-transform cursor-default"
            >
              <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-heading italic text-white">
                {feature.title}
              </h3>
              <p className="text-white/60 font-body font-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
