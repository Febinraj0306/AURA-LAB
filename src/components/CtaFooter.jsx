import HlsVideo from "./HlsVideo";

export default function CtaFooter() {
  return (
    <footer className="relative pt-32 overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <HlsVideo
          src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center max-w-4xl mx-auto mb-32">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic leading-[0.85] text-white mb-8">
          Your next website <br /> starts here.
        </h2>
        <p className="text-white/70 font-body font-light text-base md:text-lg mb-12 max-w-xl mx-auto">
          Book a free strategy call. See what AI-powered design can do. No
          commitment, no pressure. Just possibilities.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <button className="liquid-glass-strong rounded-full px-8 py-4 text-sm font-medium hover:scale-105 transition-transform">
            Book a Call
          </button>
          <button className="bg-white text-black rounded-full px-8 py-4 text-sm font-medium hover:bg-white/90 transition-colors">
            View Pricing
          </button>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="relative z-10 border-t border-white/10 py-10 px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white/40 text-xs font-body">
          © 2026 Studio. All rights reserved.
        </div>
        <div className="flex items-center gap-8">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-white/40 text-xs font-body hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
