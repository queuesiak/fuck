// src/components/NavigationBar.js
import React from "react";
import logobl from "../assets/logoblack.png";

const NavigationBar = () => {
  return (
    <nav className="flex justify-center items-center bg-opacity-20 bg-gray-900 p-2">
      <ul className="flex items-center space-x-28 text-xs">
        <li>
          <a
            href="#"
            className="text-black uppercase font-merriweather tracking-widest"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black uppercase font-merriweather tracking-widest"
          >
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="text-white text-3xl font-greatvibes">
            <img src={logobl} alt="Logo" className="h-40" />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black uppercase font-merriweather tracking-widest"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black uppercase font-merriweather tracking-widest"
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
