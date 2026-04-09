"use client";

import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { motion } from 'motion/react';

interface EditorialCardProps {
  image: string;
  title: string;
  description: string;
}

export function EditorialCard({ image, title, description }: EditorialCardProps) {
  return (
    <TiltCard className="group cursor-pointer smooth-transition h-full" tiltStrength={8}>
      <div className="bg-white border border-zinc-200 rounded-[2rem] overflow-hidden h-full flex flex-col p-6 hover:border-[#334AFF]/30 transition-colors hover:shadow-xl">
        {/* Image Container */}
        <motion.div
          className="relative overflow-hidden rounded-2xl mb-6 h-[220px] w-full"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        </motion.div>

        {/* Content */}
        <div className="space-y-4 flex flex-col flex-grow">
          <h3 className="text-2xl font-light text-black group-hover:text-[#334AFF] smooth-transition leading-tight">{title}</h3>
          <p className="text-zinc-600 leading-relaxed text-sm flex-grow">{description}</p>
          <motion.div
            className="flex items-center gap-2 text-[#334AFF] pt-4 border-t border-zinc-200 mt-auto"
            initial={{ opacity: 0.8, x: 0 }}
            whileHover={{ opacity: 1, x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest">Read Article</span>
            <ArrowRight className="w-3 h-3" />
          </motion.div>
        </div>
      </div>
    </TiltCard>
  );
}
