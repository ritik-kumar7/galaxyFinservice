import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxWrapper = ({ 
  children, 
  speed = 0.5, 
  direction = 'up',
  className = '' 
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const getTransform = () => {
    const range = speed * 100;
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], [0, -range]);
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [0, range]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], [0, -range]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [0, range]);
      default:
        return useTransform(scrollYProgress, [0, 1], [0, -range]);
    }
  };

  const transform = getTransform();

  const style = direction === 'left' || direction === 'right' 
    ? { x: transform }
    : { y: transform };

  return (
    <motion.div
      ref={ref}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxWrapper;