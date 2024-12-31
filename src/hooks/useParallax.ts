import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

export function useParallax(distance: number = 50) {
  const [elementTop, setElementTop] = useState(0);
  const { scrollY } = useScroll();

  const y = useTransform(
    scrollY,
    [elementTop - 500, elementTop + 500],
    [-distance, distance]
  );

  const setElement = (element: HTMLElement) => {
    if (element) {
      setElementTop(element.offsetTop);
    }
  };

  return { y, setElement };
}