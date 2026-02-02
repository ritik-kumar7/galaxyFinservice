import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimationWrapper = ({ 
  children, 
  variant = 'fadeUp', 
  delay = 0, 
  duration = 0.6,
  className = '',
  once = true,
  threshold = 0.1
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, threshold });

  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 }
    },
    fadeDown: {
      hidden: { opacity: 0, y: -60 },
      visible: { opacity: 1, y: 0 }
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 }
    },
    fadeRight: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 }
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    scaleDown: {
      hidden: { opacity: 0, scale: 1.2 },
      visible: { opacity: 1, scale: 1 }
    },
    rotateIn: {
      hidden: { opacity: 0, rotate: -10, scale: 0.9 },
      visible: { opacity: 1, rotate: 0, scale: 1 }
    },
    slideUp: {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 }
    },
    slideDown: {
      hidden: { opacity: 0, y: -100 },
      visible: { opacity: 1, y: 0 }
    },
    clipPath: {
      hidden: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
      visible: { opacity: 1, clipPath: 'inset(0 0% 0 0)' }
    },
    blur: {
      hidden: { opacity: 0, filter: 'blur(10px)' },
      visible: { opacity: 1, filter: 'blur(0px)' }
    },
    elastic: {
      hidden: { opacity: 0, scale: 0.3 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  const transition = {
    duration,
    delay,
    ease: variant === 'elastic' ? [0.25, 0.46, 0.45, 0.94] : [0.25, 0.46, 0.45, 0.94],
    type: variant === 'elastic' ? 'spring' : 'tween',
    ...(variant === 'elastic' && { 
      type: 'spring',
      damping: 12,
      stiffness: 100
    })
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;