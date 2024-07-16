import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const NavigationBar = () => {
  const linkVariants = {
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <nav className="flex justify-center items-center bg-transparent bg-gray-900 p-2">
      <ul className="flex items-center space-x-28 text-xs">
        <li>
          <motion.div
            whileHover="hover"
            variants={linkVariants}
            className="text-white uppercase font-merriweather font-semibold text-xl tracking-widest"
          >
            <Link to="/">Home</Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            whileHover="hover"
            variants={linkVariants}
            className="text-white uppercase font-merriweather font-semibold text-xl tracking-widest"
          >
            <Link to="/projects">Projects</Link>
          </motion.div>
        </li>
        <li>
          <Link to="/" className="text-white text-3xl font-greatvibes">
            <img src={logo} alt="Logo" className="h-40" />
          </Link>
        </li>
        <li>
          <motion.div
            whileHover="hover"
            variants={linkVariants}
            className="text-white  uppercase font-merriweather font-semibold text-xl tracking-widest"
          >
            <Link to="/contact">Contact</Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            whileHover="hover"
            variants={linkVariants}
            className="text-white uppercase font-merriweather font-semibold text-xl tracking-widest"
          >
            <Link to="/about">About</Link>
          </motion.div>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
