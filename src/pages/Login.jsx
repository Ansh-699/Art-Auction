import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaFacebook, FaGoogle, FaDiscord } from "react-icons/fa";
import { useTheme } from "@/ThemeContext";
import signin from "../assets/images/signin1.png";

const AuthForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
    <div className={`flex items-center justify-center min-h-[75vh] w-full ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className={`relative pt-0 p-0 rounded-xl flex space-x-4 w-full max-w-5xl min-h-[500px] h-auto border ${darkMode ? "bg-white text-black" : "bg-white shadow-2xl"} -mt-4 overflow-visible`}>
        
        {/* Left Form Section */}
        <div className="flex flex-col justify-center w-1/2 p-4 pl-6">
          <h2 className="text-2xl font-bold mb-6 text-black text-center">Sign in</h2>
          <form className="space-y-4 ml-auto w-[80%]" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-gray-400" size={16} />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className={`w-full px-4 py-2 border rounded-md outline-none text-sm ${
                  darkMode ? "bg-white border-gray-600 text-black" : "bg-white border-gray-300"
                }`}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center space-x-3">
              <FaLock className="text-gray-400" size={16} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={`w-full px-4 py-2 border rounded-md outline-none text-sm ${
                  darkMode ? "bg-white border-gray-600 text-black" : "bg-white border-gray-300"
                }`}
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="mr-2" />
                <span>Remember me</span>
              </div>
              <a href="#" className="text-blue-600">Forgot Password?</a>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="w-full py-2 rounded-md mt-4 bg-blue-600 text-white hover:bg-blue-500 transform transition-transform duration-100 hover:scale-105 text-sm">
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-4 text-sm text-center">
            Not a member? <button onClick={() => navigate("/Signup")} className="text-blue-600">Register</button>
          </p>
          <div className="mt-4 text-center">
            <p className="text-sm">or sign in with:</p>
            <div className="flex justify-center space-x-4 mt-2">
              <FaFacebook className="text-blue-600 text-xl cursor-pointer hover:text-blue-700 transition-all duration-200 transform hover:scale-110" />
              <FaGoogle className="text-red-600 text-xl cursor-pointer hover:text-red-700 transition-all duration-200 transform hover:scale-110" />
              <FaDiscord className="text-indigo-600 text-xl cursor-pointer hover:text-indigo-700 transition-all duration-200 transform hover:scale-110" />
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="hidden md:flex items-center justify-center w-1/2 p-4">
          <div className="w-full h-full flex items-center justify-center rounded-lg overflow-hidden">
            <img src={signin} alt="Authentication" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>
    <div className={`h-[4vh] ${darkMode ? 'bg-black' : 'bg-white'}`}></div>
    </>
  );
};

export default AuthForm;
