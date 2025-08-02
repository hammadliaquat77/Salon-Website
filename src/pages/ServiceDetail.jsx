
import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const serviceDetails = {
  haircut: {
    title: 'Haircut & Styling',
    subServices: [
      { name: 'Basic Haircut', price: 1000, img: 'https://source.unsplash.com/400x300/?haircut' },
      { name: 'Layered Cut', price: 1500, img: 'https://source.unsplash.com/400x300/?layered-haircut' },
      { name: 'Hair Blow Dry', price: 1200, img: 'https://source.unsplash.com/400x300/?blow-dry' }
    ]
  },
  facial: {
    title: 'Facial & Skincare',
    subServices: [
      { name: 'Classic Facial', price: 1800, img: 'https://source.unsplash.com/400x300/?facial' },
      { name: 'Gold Facial', price: 2500, img: 'https://source.unsplash.com/400x300/?gold-facial' },
      { name: 'Whitening Facial', price: 2000, img: 'https://source.unsplash.com/400x300/?whitening-facial' }
    ]
  },
  makeup: {
    title: 'Makeup Services',
    subServices: [
      { name: 'Bridal Makeup', price: 8000, img: 'https://source.unsplash.com/400x300/?bridal-makeup' },
      { name: 'Party Makeup', price: 3500, img: 'https://source.unsplash.com/400x300/?party-makeup' },
      { name: 'Engagement Look', price: 5000, img: 'https://source.unsplash.com/400x300/?engagement-makeup' }
    ]
  },
  nails: {
    title: 'Manicure & Pedicure',
    subServices: [
      { name: 'Manicure', price: 1200, img: 'https://source.unsplash.com/400x300/?manicure' },
      { name: 'Pedicure', price: 1400, img: 'https://source.unsplash.com/400x300/?pedicure' },
      { name: 'Gel Polish', price: 1000, img: 'https://source.unsplash.com/400x300/?nail-polish' }
    ]
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceDetails[id];

  if (!service) return <p className="text-center mt-20">Service not found.</p>;

  const sendWhatsApp = (sub) => {
    const message = `Hi! I want to book: ${sub.name} (${service.title}) for Rs.${sub.price}`;
    const url = `https://wa.me/923163093120?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-pink-50">
      <motion.h2
        className="text-3xl font-bold text-center text-pink-700 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {service.title}
      </motion.h2>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
        {service.subServices.map((sub, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <img
              src={sub.img}
              alt={sub.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-pink-700 mb-2">{sub.name}</h3>
            <p className="text-gray-600 mb-4">Price: Rs.{sub.price}</p>
            <button
              onClick={() => sendWhatsApp(sub)}
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            >
              <FaWhatsapp /> Book on WhatsApp
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
