import HlsVideo from "./HlsVideo";

export default function Stats() {
  const stats = [
    { value: "200+", label: "Sites launched" },
    { value: "98%", label: "Client satisfaction" },
    { value: "3.2x", label: "More conversions" },
    { value: "5 days", label: "Average delivery" },
  ];

  return (
    <section className="relative py-24 overflow-hidden min-h-[500px] flex items-center justify-center">
      {/* Background Video */}
      <HlsVideo
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
        desaturated={true}
      />

      {/* Overlays */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Stats Card */}
      <div className="relative z-10 w-full max-w-5xl px-6">
        <div className="liquid-glass rounded-3xl p-12 md:p-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white leading-none">
                  {stat.value}
                </div>
                <div className="text-white/60 font-body font-light text-xs md:text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
