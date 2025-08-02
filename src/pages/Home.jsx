// pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-pink-100 to-pink-200">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold text-pink-700 mb-6"
      >
        Welcome to SalonGlam
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-lg max-w-xl text-gray-700 mb-8"
      >
        Discover luxury beauty and hair care services to transform your look. Book your appointment now and glow like never before!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          to="/services"
          className="bg-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-700 transition"
        >
          Explore Services
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
