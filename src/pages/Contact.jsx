// pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen py-12 px-4 bg-pink-50">
      <motion.h2
        className="text-4xl font-bold text-center text-pink-700 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Info Section */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="flex items-center text-lg text-pink-700">
            <FaMapMarkerAlt className="mr-2" /> Karachi, Pakistan
          </p>
          <p className="flex items-center text-lg text-pink-700">
            <FaPhone className="mr-2" /> +92 316 3093120
          </p>
          <a
            href="https://wa.me/923163093120"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full hover:bg-green-600 transition"
          >
            <FaWhatsapp className="text-xl" />
            Book on WhatsApp
          </a>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            title="Salon Location"
            src="https://maps.google.com/maps?q=karachi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-64 rounded-xl border"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
