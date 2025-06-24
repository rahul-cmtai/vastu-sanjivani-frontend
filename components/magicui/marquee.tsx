"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
}

export const Marquee = ({
  children,
  direction = "left",
  pauseOnHover = false,
  reverse = false,
  className = "",
}: MarqueeProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollerRef}
      className={cn(
        "scroller marquee-wrapper group relative flex w-full overflow-hidden",
        pauseOnHover && "hover:[&>*]:[animation-play-state:paused]",
        className
      )}
    >
      <div
        ref={itemsRef}
        className={cn(
          "marquee-content flex min-w-full shrink-0 gap-4 py-4",
          direction === "left" && !reverse && "animate-marquee",
          direction === "left" && reverse && "animate-marquee-reverse",
          direction === "right" && !reverse && "animate-marquee-reverse",
          direction === "right" && reverse && "animate-marquee"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "marquee-content flex min-w-full shrink-0 gap-4 py-4",
          direction === "left" && !reverse && "animate-marquee",
          direction === "left" && reverse && "animate-marquee-reverse",
          direction === "right" && !reverse && "animate-marquee-reverse",
          direction === "right" && reverse && "animate-marquee"
        )}
      >
        {children}
      </div>
    </div>
  );
}; 