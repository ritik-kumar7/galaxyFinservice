import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const LineDrawWrapper = ({ 
  width = '100%', 
  height = '2px', 
  color = '#f8c35b',
  duration = 1,
  delay = 0,
  className = '' 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <div ref={ref} className={className} style={{ width, height, overflow: 'hidden' }}>
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration, delay, ease: "easeInOut" }}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: color,
          transformOrigin: 'left'
        }}
      />
    </div>
  );
};

export default LineDrawWrapper;