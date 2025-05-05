import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

interface StaggerProps {
  children: ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
}

// Fade in animation for sections
export const FadeIn = ({ children, delay = 0, duration = 0.5 }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

// Slide in from left animation
export const SlideInLeft = ({ children, delay = 0}: Omit<AnimationProps, 'duration'>) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 50, 
        damping: 20, 
        delay 
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

// Slide in from right animation
export const SlideInRight = ({ children, delay = 0}: Omit<AnimationProps, 'duration'>) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 50, 
        damping: 20, 
        delay 
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

// Scale up animation for images
export const ScaleUp = ({ children, delay = 0 }: Omit<AnimationProps, 'duration'>) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 50, 
        damping: 15, 
        delay 
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

// Hover animation for images
export const HoverImage = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.03, 
        transition: { duration: 0.3 } 
      }}
    >
      {children}
    </motion.div>
  );
};

// Staggered animation for children elements
export const StaggerContainer = ({ 
  children, 
  delayChildren = 0.1, 
  staggerChildren = 0.1 
}: StaggerProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren,
            delayChildren
          }
        },
        hidden: {}
      }}
    >
      {children}
    </motion.div>
  );
};

// Child item for stagger animation
export const StaggerItem = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 }
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};