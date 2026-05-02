import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "motion/react";
import BlurText from "./BlurText";

export default function Hero() {
  const partners = ["Stripe", "Vercel", "Linear", "Notion", "Figma"];

  return (
    <section className="relative h-[1000px] overflow-hidden flex flex-col items-center pt-[150px] bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
        className="absolute top-[20%] left-0 w-full h-auto object-contain z-0 opacity-60"
        preload="auto"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/5 z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-full px-1 py-1 mb-8 flex items-center gap-3 pr-4"
        >
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">
            New
          </span>
          <span className="text-xs font-medium text-white/90">
            Introducing AI-powered web design.
          </span>
        </motion.div>

        <BlurText
          text="The Website Your Brand Deserves"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] tracking-[-4px] mb-8 justify-center"
          delay={100}
        />

        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-sm md:text-base text-white/70 font-body font-light leading-tight max-w-lg mb-10"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts.
          This is web design, wildly reimagined.
        </motion.p>

        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <button className="liquid-glass-strong rounded-full px-8 py-3.5 flex items-center gap-2 text-sm font-medium hover:scale-105 transition-transform">
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Play className="w-3 h-3 fill-white" />
            </div>
            Watch the Film
          </button>
        </motion.div>
      </div>

      {/* Partners Bar */}
      <div className="mt-auto pb-12 pt-16 w-full flex flex-col items-center z-10 px-6">
        <div className="liquid-glass rounded-full px-4 py-2 text-[10px] uppercase tracking-widest text-white/40 mb-10">
          Trusted by the teams behind
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {partners.map((partner) => (
            <span
              key={partner}
              className="text-2xl md:text-3xl font-heading italic text-white/50 hover:text-white transition-colors cursor-default"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
