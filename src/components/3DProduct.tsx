import React from 'react';
import { motion } from 'framer-motion';

interface ProductProps {
  name: string;
  image: string;
}

const Product3D: React.FC<ProductProps> = ({ name, image }) => {
    return (
      <motion.div
        className="relative w-40 h-40 bg-white shadow-lg rounded-full"
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9, rotate: -15 }}
      >
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover "
          style={{ perspective: 1000 }}
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
    );
  };
  
  export default Product3D;
  
