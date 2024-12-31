import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export const ParallaxImage = ({ src, alt, className = '' }: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover"
      />
    </div>
  );
};