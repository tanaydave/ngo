import React from 'react';
import { motion } from 'framer-motion';

const Counter = ({ value ,limit }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{  y: 0 }}
      whileInView={{opacity:1}}
      transition={{ duration: 0.001 }}
    >
        {value <= limit ? value : limit}
      
    </motion.span>
  );
};

export default Counter;
