"use client";

import { siteConfig } from "@/config/site.config";
import { useEffect, useRef } from "react";

// Per-brand height overrides to ensure visual consistency
const brandHeights: Record<string, number> = {
  BYD: 18,
  Zeekr: 18,
  Geely: 18,
  GWM: 18,
  Mercedes: 22,
  Porsche: 22,
};

const DEFAULT_HEIGHT = 24;

export function BrandMarquee() {
  const { eyebrow, brands } = siteConfig.brandMarquee;
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const positionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Wait for images to load to get correct width
    const startAnimation = () => {
      const totalWidth = scrollContainer.scrollWidth / 3; // We have 3 copies
      let lastTime = performance.now();

      const animate = (time: number) => {
        const delta = time - lastTime;
        lastTime = time;

        // Speed: pixels per millisecond
        positionRef.current -= delta * 0.04;

        // Reset when one set has scrolled past
        if (Math.abs(positionRef.current) >= totalWidth) {
          positionRef.current += totalWidth;
        }

        scrollContainer.style.transform = `translateX(${positionRef.current}px)`;
        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    // Small delay to ensure images are rendered
    const timer = setTimeout(startAnimation, 100);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Triple for seamless loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="relative w-full py-8 md:py-12">
      <div className="text-center mb-6 md:mb-10 px-8">
        <p className="text-[9px] md:text-[10px] text-white/25 tracking-[2.5px] uppercase font-mono">
          {eyebrow}
        </p>
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
      >
        <div
          ref={scrollRef}
          className="flex gap-8 whitespace-nowrap items-center will-change-transform"
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ minWidth: "90px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.url}
                alt={brand.name}
                className="w-auto object-contain"
                style={{
                  height: `${brandHeights[brand.name] || DEFAULT_HEIGHT}px`,
                  opacity: 0.5,
                  filter: brand.invert ? "brightness(0) invert(1)" : "none",
                }}
                onError={(e) => {
                  const target = e.currentTarget;
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-white/50 tracking-wider uppercase text-lg font-light">${brand.name}</span>`;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
