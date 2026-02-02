import { motion } from 'framer-motion';

const HoverWrapper = ({ 
  children, 
  scale = 1.05, 
  rotate = 0,
  y = -5,
  duration = 0.3,
  className = '' 
}) => {
  return (
    <motion.div
      whileHover={{ 
        scale, 
        rotate, 
        y,
        transition: { duration, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default HoverWrapper;