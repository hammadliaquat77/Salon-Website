import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'haircut',
    title: 'Haircut & Styling',
    desc: 'Trendy haircuts and styles by professional stylists.',
    icon: '💇‍♀️'
  },
  {
    id: 'facial',
    title: 'Facial & Skincare',
    desc: 'Glowing skin treatments and relaxing facials.',
    icon: '🌸'
  },
  {
    id: 'makeup',
    title: 'Makeup Services',
    desc: 'Glamorous makeup for parties, weddings, and events.',
    icon: '💄'
  },
  {
    id: 'nails',
    title: 'Manicure & Pedicure',
    desc: 'Nail care with a touch of luxury and relaxation.',
    icon: '💅'
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-pink-50">
      <motion.h2
        className="text-4xl font-bold text-center text-pink-700 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg cursor-pointer transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            onClick={() => handleClick(service.id)}
          >
            <div className="text-5xl text-pink-500 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-pink-700 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
