"use client";

import { useEffect, useRef } from "react";
import { HERO_VIDEO_PLAYBACK_RATE, HERO_VIDEO_SRC } from "@/lib/constants";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const applyRate = () => {
      video.playbackRate = HERO_VIDEO_PLAYBACK_RATE;
    };

    applyRate();
    video.addEventListener("loadedmetadata", applyRate);
    return () => video.removeEventListener("loadedmetadata", applyRate);
  }, []);

  return (
    <video
      ref={ref}
      className="msa-hero-video absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      tabIndex={-1}
      aria-hidden
    >
      <source src={HERO_VIDEO_SRC} type="video/mp4" />
    </video>
  );
}
