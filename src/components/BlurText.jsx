import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function BlurText({
  text,
  delay = 200,
  className = "",
  animateBy = "words", // 'words' or 'letters'
  direction = "bottom",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  return (
    <div ref={containerRef} className={`${className} flex flex-wrap`}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(10px)", opacity: 0, y: direction === "bottom" ? 50 : -50 }}
          animate={
            isVisible
              ? {
                  filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
                  opacity: [0, 0.5, 1],
                  y: [direction === "bottom" ? 50 : -50, -5, 0],
                }
              : {}
          }
          transition={{
            duration: 0.7, // total duration (0.35s per step as requested for 2 steps)
            delay: (i * delay) / 1000,
            times: [0, 0.5, 1],
            ease: "easeOut",
          }}
          className="inline-block"
          style={{ marginRight: animateBy === "words" ? "0.3em" : "0" }}
        >
          {el === " " ? "\u00A0" : el}
        </motion.span>
      ))}
    </div>
  );
}
