import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const directionMap = {
  up: { y: 20 },
  down: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
  none: {},
};

export const FadeIn = ({ children, className, delay = 0, direction = "up" }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, filter: "blur(4px)", ...directionMap[direction] }}
    whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);
