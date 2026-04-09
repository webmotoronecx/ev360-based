"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/config/site.config";

export function BrandMarquee() {
  const { eyebrow, brands } = siteConfig.brandMarquee;
  // Triple for seamless infinite scroll
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
        <motion.div
          className="flex gap-6 whitespace-nowrap items-center"
          animate={{ x: [0, "-33.333%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 18,
              ease: "linear",
            },
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ minWidth: "80px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.url}
                alt={brand.name}
                className="w-auto object-contain"
                style={{
                  height: (brand.name === 'Zeekr' || brand.name === 'Geely' || brand.name === 'GWM')
                    ? '20px'
                    : '28px',
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
        </motion.div>
      </div>
    </div>
  );
}
