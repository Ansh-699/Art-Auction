import React from "react";
import { useTheme } from "../ThemeContext"; 
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import mudimg from "../assets/images/mud-picture.png";

const Contact = () => {
  const { darkMode } = useTheme(); 
  const containerBg = darkMode ? "bg-black text-white" : "bg-white text-black";
  const cardBg = "bg-white text-black"; 
  const inputBg = darkMode ? "bg-black text-white border border-white" : "bg-white border border-black text-black";
  const buttonBg = darkMode ? "bg-blue-700 hover:bg-blue-500" : "bg-blue-500 hover:bg-blue-400";
  const cardBorder = darkMode ? "border-gray-600" : "border-gray-300";

  return (
    <div className={`flex flex-col items-center ${containerBg} min-h-[50vh]`}>
      <h2 className="text-3xl font-bold">Quick Contact Address</h2>
      <p className={`text-center max-w-lg ${darkMode ? "text-gray-500" : "text-gray-600"}`}>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <div className={`${cardBg} ${cardBorder} p-6 rounded-2xl shadow-lg w-60 flex flex-col items-center transform transition-transform duration-100 hover:scale-105`}>
          <PhoneIcon className="text-blue-500 w-10 h-10" />
          <h3 className="font-bold mt-2">Our Phone Numbers</h3>
          <p>+444 555 666 777</p>
          <p>+222 222 222 333</p>
        </div>

        <div className={`${cardBg} ${cardBorder} p-6 rounded-2xl shadow-lg w-60 flex flex-col items-center transform transition-transform duration-100 hover:scale-105`}>
          <EnvelopeIcon className="text-blue-500 w-10 h-10" />
          <h3 className="font-bold mt-2">Our Email Address</h3>
          <p>Sale@gmail.com</p>
          <p>Support@gmail.com</p>
        </div>

        <div className={`${cardBg} ${cardBorder} p-6 rounded-2xl shadow-lg w-55 flex flex-col items-center transform transition-transform duration-100 hover:scale-105`}>
          <MapPinIcon className="text-blue-500 w-10 h-10" />
          <h3 className="font-bold mt-2">Our Location</h3>
          <p>5678 Elephant Street, Cities 580</p>
          <p>Goland, Example 54786</p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-10 w-full max-w-5xl mt-10">
        <div className="hidden md:flex w-1/3 h-1/2 justify-center ml-10">
          <img src={mudimg} alt="mud-image" className="max-w-full h-auto rounded-lg" />
        </div>

        <div className="w-full max-w-md">
          <h3 className="text-xl font-bold text-center">Sign up</h3>
          <form className="flex flex-col gap-2">
            <input className={`p-1 rounded-lg ${inputBg}`} type="text" placeholder="Your Name" />
            <input className={`p-1 rounded-lg ${inputBg}`} type="email" placeholder="Your Email" />
            <input className={`p-1 rounded-lg ${inputBg}`} type="text" placeholder="Subject" />
            <textarea className={`p-1 rounded-lg ${inputBg}`} placeholder="Write Message"></textarea>
            <div className="flex justify-center">
              <button className={`w-full py-1 rounded-md mt-6 transform transition-transform duration-100 hover:scale-105 ${buttonBg}`}>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
