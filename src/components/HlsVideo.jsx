import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function HlsVideo({ src, className = "", poster = "", desaturated = false }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((e) => console.log("Auto-play blocked", e));
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch((e) => console.log("Auto-play blocked", e));
      });
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={`${className} ${desaturated ? "saturate-0" : ""}`}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
    />
  );
}
