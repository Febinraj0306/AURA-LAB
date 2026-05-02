import HlsVideo from "./HlsVideo";
import { motion } from "motion/react";

export default function StartSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden py-24">
      {/* Background Video */}
      <HlsVideo
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlays */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <div className="inline-block liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white mb-8">
          How It Works
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-white mb-6">
          You dream it. <br /> We ship it.
        </h2>
        <p className="text-white/60 font-body font-light text-sm md:text-base mb-10 max-w-xl mx-auto">
          Share your vision. Our AI handles the rest—wireframes, design, code,
          launch. All in days, not quarters.
        </p>
        <button className="liquid-glass-strong rounded-full px-8 py-3.5 text-sm font-medium hover:scale-105 transition-transform">
          Get Started
        </button>
      </div>
    </section>
  );
}
