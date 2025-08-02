// // components/Navbar.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="bg-pink-100 shadow-md sticky top-0 z-50"
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
//         <Link to="/" className="text-2xl font-bold text-pink-700">SalonGlam</Link>
//         <div className="space-x-4 text-lg">
//           <Link to="/" className="hover:text-pink-600">Home</Link>
//           <Link to="/services" className="hover:text-pink-600">Services</Link>
//           <Link to="/gallery" className="hover:text-pink-600">Gallery</Link>
//           <Link to="/contact" className="hover:text-pink-600">Contact</Link>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;










import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-pink-200 text-white p-4 shadow-lg">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-pink-700">SalonGlam</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/" className="hover:text-gray-300 hover:transition-all duration-200 transform hover:font-bold">Home</Link></li>
          <li><Link to="/services" className="hover:text-gray-300 hover:transition-all duration-200 transform hover:font-bold">Services</Link></li>
          <li><Link to="/gallery" className="hover:text-gray-300 hover:transition-all duration-200 transform hover:font-bold">Gallery</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300 hover:transition-all duration-200 transform hover:font-bold">Contact</Link></li>
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-3 mt-3 text-center">
          <Link to="/" onClick={toggleMenu} className="hover:text-gray-300 hover:font-bold">Home</Link>
          <Link to="/services" onClick={toggleMenu} className="hover:text-gray-300 hover:font-bold">Services</Link>
          <Link to="/gallery" onClick={toggleMenu} className="hover:text-gray-300 hover:font-bold">Gallery</Link>
          <Link to="/contact" onClick={toggleMenu} className="hover:text-gray-300 hover:scale-105 hover:font-bold ">Contact</Link>
        </div>
      )}
    </nav>
  );
}