import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import logoIcon from "../assets/logo-icon.png";

export default function Navbar() {
  const navLinks = ["Home", "Services", "Work", "Process", "Pricing"];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between pointer-events-none">
      <div className="flex items-center pointer-events-auto">
        {/* Logo icon */}
        <img src={logoIcon} alt="Logo" className="h-16 w-16 object-contain" />
      </div>

      <div className="hidden md:flex items-center liquid-glass rounded-full px-2 py-1.5 pointer-events-auto">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="px-4 py-2.5 text-base font-medium text-foreground/90 font-body hover:text-white transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="pointer-events-auto">
        <button className="bg-white text-black rounded-full px-6 py-2.5 text-base font-medium flex items-center gap-1.5 hover:bg-white/90 transition-all">
          Get Started
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
