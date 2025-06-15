import React, { createContext, useContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";
import authService from "@/api/services/authService";
const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedUser = jwtDecode(token);
      setUser(decodedUser);
    }
  }, []);

  const getUser = () => {
    if (user) return user
    const token = localStorage.getItem("token");
    if (token) {
      const decodedUser = jwtDecode(token);
      return (decodedUser);
    } else {
      return null
    }
  }

  const signIn = async (userData) => {
    const resposne = await authService.login(userData);
    if (resposne) {
      setUser(jwtDecode(resposne?.token));
      toast.success("Login Successfully");
      return true;
    } else {
      toast.error("Your email or password is not correct.");
      return false;
    }
  };

  const register = async (userData) => {
    const resposne = await authService.register(userData);
    console.log(resposne);
    if (resposne) {
      setUser(jwtDecode(resposne?.token));
      toast.success("Register Successfully");
      return true;
    } else {
      return false;
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setUser(null); // Clear user data on sign out
  };

  return (
    <AuthContext.Provider value={{ user, signIn, register, signOut, getUser }}>
      <ToastContainer />
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
