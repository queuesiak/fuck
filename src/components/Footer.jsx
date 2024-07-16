import React from "react";
import { FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-20 w-full py-5 bg-gray-200 text-gray-800 flex justify-center items-center">
      <div className="text-center text-sm">
        <p className="font-merriweather opacity-80">
          &copy; 2024 Honey Bhardwaj Photography. All rights reserved.
        </p>
        <p className="font-sans opacity-80">Follow us on:</p>
        <div className="flex justify-center items-center space-x-4 mt-2">
          <a
            href="https://www.youtube.com/@honeybhardwajproduction3939"
            className="text-gray-800"
            target="_blank" // Open link in new tab
            rel="noopener noreferrer" // Recommended for security
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://www.instagram.com/honeybhardwajphotography/"
            className="text-gray-800"
            target="_blank" // Open link in new tab
            rel="noopener noreferrer" // Recommended for security
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com/"
            className="text-gray-800"
            target="_blank" // Open link in new tab
            rel="noopener noreferrer" // Recommended for security
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
