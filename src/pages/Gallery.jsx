// pages/Gallery.jsx
import React from 'react';
import { motion } from 'framer-motion';

const images = [
   '/HairCut/Basir_haircut.jpeg',
   '/Ficial/Classic_Facial.jpeg',
   '/Makeup/Bridal_Makeup.jpeg',
   '/Pedicure/Gel_Polish.jpeg',
   '/HairCut/Layered_Cut.jpeg',
   '/Ficial/Gold_Facial.jpeg',
   '/Makeup/Party_Makeup.jpeg',
   '/Pedicure/Manicure.jpeg',
   '/HairCut/Hair_Blow_Dry.jpeg',
   '/Ficial/Whitening_Facial.jpeg',
   '/Makeup/Engagement_Look.jpeg',
   '/Pedicure/Pedicure.jpeg'
    
];

const Gallery = () => {
  return (
    <div className="min-h-screen py-12 px-4 bg-pink-100">
      <motion.h2
        className="text-4xl font-bold text-center text-pink-700 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Salon Gallery
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <img
              src={src}
              alt={`Salon ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
