// components/Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-pink-200 text-gray-800 mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto py-6 px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center">&copy; {new Date().getFullYear()} SalonGlam. All rights reserved.</p>
        
        <div className="flex gap-4 text-pink-700 text-2xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-900">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-900">
            <FaInstagram />
          </a>
          <a href="https://wa.me/923163093120" target="_blank" rel="noopener noreferrer" className="hover:text-pink-900">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
