import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRightLong,
  FaArrowLeftLong,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import home1 from "./assets/home1.jpg";
import home2 from "./assets/home2.jpg";
import home3 from "./assets/home3.jpg";
import home4 from "./assets/home4.jpg";
import home5 from "./assets/home5.jpg";
import video from "./assets/video.mp4";

const images = [home1, home2, home3];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-white flex flex-col items-center">
      <div className="relative h-[45rem] w-full">
        <div className="absolute left-0 w-full z-10">
          <Navbar />
          {/* <Navbar2 /> */}
        </div>
        <AnimatePresence>
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
          aria-label="Previous Slide"
        >
          <FaArrowLeftLong fill="#fff" />
        </div>
        {/* Right Arrow */}
        <div
          className="absolute top-1/2 right-8 transform -translate-y-1/2 text-3xl text-white cursor-pointer z-10"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          <FaArrowRightLong fill="#fff" />
        </div>
      </div>
      <hr className="my-8 w-3/4 mx-auto border-t-1 mt-20 mb-10 border-gray-400" />

      {/* Text Before Image Collage Section */}
      <div className="mt-8 mx-auto max-w-3xl">
        <p className="text-xs  text-gray-600 font-merriweather text-center mb-1 tracking-[0.2rem]">
          REAL & NATURAL
        </p>
        <p className="text-2xl   text-gray-600  text-center font-merriweather mb-6 tracking-[0.3rem]">
          MOMENTS YOU WANT TO REMEMBER.
        </p>
      </div>

      {/* Image Collage Section */}
      <div className="mt-8 grid grid-cols-2 gap-4 px-4">
        <div className="grid grid-rows-3 gap-4">
          <div className="relative group row-span-2">
            <div className="w-full h-full flex justify-center items-center overflow-hidden max-h-32">
              <img
                src={home1}
                alt="Om meg"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-2xl font-merriweather transition-opacity duration-300 group-hover:opacity-10">
              About me
            </div>
          </div>
          <div className="relative group">
            <div className="w-full h-full flex justify-center items-center overflow-hidden max-h-32">
              <img
                src={home2}
                alt="Familie"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-2xl font-merriweather transition-opacity duration-300 group-hover:opacity-10">
              Family
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="relative group">
            <div className="w-full h-full flex justify-center items-center overflow-hidden max-h-32">
              <img
                src={home3}
                alt="Shop"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-2xl font-merriweather transition-opacity duration-300 group-hover:opacity-10">
              Shop
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative group">
              <div className="w-full h-full flex justify-center items-center overflow-hidden max-h-32">
                <img
                  src={home4}
                  alt="Nyfødt"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-2xl font-merriweather transition-opacity duration-300 group-hover:opacity-10">
                Newborn
              </div>
            </div>
            <div className="relative group">
              <div className="w-full h-full flex justify-center items-center overflow-hidden max-h-32">
                <img
                  src={home5}
                  alt="Blogg"
                  className="w-full h-full  transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-2xl font-merriweather transition-opacity duration-300 group-hover:opacity-10">
                Blog
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Border Line */}
      <hr className="my-8 w-3/4 mx-auto border-t-1 mt-20 mb-20 border-gray-400" />
      {/* Video Section */}
      <div className="w-full px-4 flex justify-center items-center bg-gray-50">
        <div className="relative w-full max-w-lg h-72">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="ml-4">
          <p className="text-xs text-gray-600 font-merriweather ml-16 tracking-widest">
            Best of 2024{" "}
          </p>

          <h2 className="mt-3 text-2xl text-gray-600 ml-5 font-merriweather">
            PRE-WEDDING
          </h2>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="mt-20 w-full py-5 bg-gray-200 text-gray-800 flex justify-center items-center">
        <div className="text-center text-sm">
          <p className="font-merriweather opacity-80">
            &copy; 2024 Honey Bhardwaj Photography. All rights reserved.
          </p>
          <p className="font-sans opacity-80">Follow us on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="https://www.youtube.com/@honeybhardwajproduction3939"
              className="text-gray-800"
            >
              <FaYoutube size={24} />
            </a>

            <a href="#" className="text-gray-800">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-800">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
