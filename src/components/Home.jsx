import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRightLong,
  FaArrowLeftLong,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import Navbar from "../components/Navbar.jsx";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/home4.jpg";
import home5 from "../assets/home5.jpg";
import video from "../assets/video.mp4"; // Replace with your video clip source
import videoClip from "../assets/video1.mp4"; // Replace with your video clip source

const images = [home1, home2, home3];

const Home = () => {
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
      <div className="flex w-full  mx-auto">
        <div className="absolute left-0 w-full z-10">
          <Navbar />
        </div>
        <div className="w-1/3 relative h-[45rem] border-r-4 border-gray-200">
          <div className="relative h-full">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={videoClip}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
        <div className="w-2/3 relative h-[45rem]">
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
          <div
            className="absolute top-1/2 left-8 transform -translate-y-1/2 text-3xl text-white cursor-pointer z-10"
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            <FaArrowLeftLong fill="#fff" />
          </div>
          <div
            className="absolute top-1/2 right-8 transform -translate-y-1/2 text-3xl text-white cursor-pointer z-10"
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            <FaArrowRightLong fill="#fff" />
          </div>
        </div>
      </div>
      <hr className="my-8 w-3/4 mx-auto border-t-1 mt-20 mb-10 border-gray-400" />
      <div className="mt-8 mx-auto max-w-3xl">
        <p className="text-xs text-gray-600 font-merriweather text-center mb-1 tracking-[0.2rem]">
          REAL & NATURAL
        </p>
        <p className="text-2xl text-gray-600 text-center font-merriweather mb-6 tracking-[0.3rem]">
          MOMENTS YOU WANT TO REMEMBER.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 px-4">
        <div className="grid grid-rows-3 gap-4">
          <div className="relative group row-span-2">
            <div className="w-full h-full flex justify-center items-center overflow-hidden max-h-32">
              <img
                src={home1}
                alt="About me"
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
                alt="Family"
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
                  alt="Newborn"
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
                  alt="Blog"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-2xl font-merriweather transition-opacity duration-300 group-hover:opacity-10">
                Blog
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8 w-3/4 mx-auto border-t-1 mt-20 mb-20 border-gray-400" />
      <div className="w-full px-4 flex justify-center items-center bg-gray-50">
        <div className="relative w-full max-w-lg h-72">
          <iframe
            className="absolute inset-0 w-full h-full object-cover"
            src={video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="ml-4">
          <p className="text-xs text-gray-600 font-merriweather ml-16 tracking-widest">
            Best of 2024
          </p>
          <h2 className="mt-3 text-2xl text-gray-600 ml-5 font-merriweather">
            PRE-WEDDING
          </h2>
        </div>
      </div>
      <hr className="my-8 w-3/4 mx-auto border-t-1 mt-20 mb-20 border-gray-400" />
      <div className="w-full px-4 flex justify-center items-center bg-gray-50">
        <div className="relative w-full max-w-screen-md overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={video}
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Home;
