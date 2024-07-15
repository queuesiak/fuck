import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const images = [
  "https://www.lieben.no/wp-content/uploads/2018/03/insta_lieben1-2048x1366.jpg",
  "https://www.lieben.no/wp-content/uploads/2018/03/iwpoty_lieben9-scaled-2048x1366.jpg",
  "https://www.lieben.no/wp-content/uploads/2018/03/lieben_cover22-2048x1366.jpg",
  "https://www.lieben.no/wp-content/uploads/2018/03/skarbo_cover-2048x1366.jpg",
  "https://www.lieben.no/wp-content/uploads/2018/03/lieben_sannecover-2048x1366.jpg",
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-gray-800 flex justify-center items-center">
      <div className="relative h-[45rem] w-full">
        <div className="absolute top-10 left-0 w-full z-10">
          <nav className="bg-black bg-opacity-50 p-4 flex justify-center items-center">
            <div className="space-x-8 w-full flex items-center justify-center  gap-[10rem] libre-baskerville-regular uppercase text-xs">
              <a href="#" className="text-white">
                Home
              </a>
              <a href="#" className="text-white">
                Projects
              </a>
              <a href="#" className="text-white">
                Services
              </a>
              <a href="#" className="text-white">
                Contact
              </a>
            </div>
          </nav>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex justify-center items-center"
          >
            <img
              src={images[currentIndex]}
              alt="Slider Image"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/* Left Arrow */}
        <div
          className="absolute top-1/2 left-8 transform -translate-y-1/2 text-3xl text-white cursor-pointer z-10"
          onClick={prevSlide}
        >
          <FaArrowLeftLong fill="#fff" />
        </div>
        {/* Right Arrow */}
        <div
          className="absolute top-1/2 right-8 transform -translate-y-1/2 text-3xl text-white cursor-pointer z-10"
          onClick={nextSlide}
        >
          <FaArrowRightLong fill="#fff" />
        </div>
      </div>
    </div>
  );
};

export default App;
