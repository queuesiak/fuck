import React from "react";
import mainImage from "../assets/aboutbg.jpg"; // replace with your actual image path
import image1 from "../assets/home1.jpg"; // replace with your actual image paths
import image2 from "../assets/home2.jpg"; // replace with your actual image paths
import image3 from "../assets/home3.jpg"; // replace with your actual image paths
import image4 from "../assets/home4.jpg"; // replace with your actual image paths
import Navbar from "./Navbar.jsx";

function About() {
  return (
    <div className="flex flex-col items-center p-1 bg-gray-100">
      <div className="flex max-w-full">
        {/* Navbar */}
        <div className="absolute inset-x-0 top-0 z-10">
          <Navbar />
        </div>
        {/* Main Image */}
        <img
          src={mainImage}
          alt="Main"
          className="w-[1800px] h-[1300px] object-cover"
        />
      </div>
      <div className="mt-8 mx-auto max-w-3xl">
        {/* <p className="text-xs text-gray-600 font-merriweather text-center mb-1 tracking-[0.2rem]">
          REAL & NATURAL
        </p> */}
        <p className="text-2xl mt-10 text-gray-600 text-center font-merriweather mb-6 tracking-[0.3rem]">
          HONEY BHARDWAJ PHOTOGRAPHY
        </p>
      </div>
      <hr className="my-8 w-3/4 mx-auto border-t-1 mt-15 mb-10 border-gray-400" />

      {/* Text Section */}
      <div className="mt-8 text-center">
        <p className="text-xl text-black-700 font-merriweather">
          <span className="text-3xl">D</span>iscover the power of creativity
          with our cutting-edge photo and video editing services. Whether you're
          a seasoned professional or just starting out, our platform offers
          intuitive tools and expert guidance to bring your vision to life. From
          enhancing photos with precision to crafting captivating videos, our
          robust suite of features ensures every detail is perfect. Join a
          community of passionate creators and elevate your projects with ease.
          Unleash your creativity today and transform your moments into
          unforgettable masterpieces.
        </p>
      </div>
      <hr className="my-8 w-3/4 mx-auto border-t-1 mt-20 mb-10 border-gray-400" />

      {/* Image Row */}
      <div className="mt-8 grid grid-cols-4 gap-4">
        <img
          src={image1}
          alt="Image 1"
          className="w-full h-auto border-4 border-gray-700"
        />
        <img
          src={image2}
          alt="Image 2"
          className="w-full h-auto border-4 border-gray-700"
        />
        <img
          src={image3}
          alt="Image 3"
          className="w-full h-auto border-4 border-gray-700"
        />
        <img
          src={image4}
          alt="Image 4"
          className="w-full h-auto border-4 border-gray-700"
        />
      </div>
    </div>
  );
}

export default About;
