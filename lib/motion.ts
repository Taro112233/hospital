import { Variants } from "framer-motion";
type AnimationType = "tween" | "spring" | "inertia" | undefined;
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const fadeIn = (
  direction: 'up' | 'down' | 'left' | 'right',
  type: AnimationType,
  delay: number,
  duration: number
): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
    x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const slideIn = (
  direction: 'up' | 'down' | 'left' | 'right',
  type: AnimationType,
  delay: number,
  duration: number
): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    x: direction === 'left' ? '100%' : direction === 'right' ? '-100%' : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});