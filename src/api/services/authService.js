import { toast } from "react-toastify";
import axiosInstance from "../axiosInstance";
import endpoints from "../endpoints";

const authService = {
    login: async (credentials) => {
        try {
            const response = await axiosInstance.post(endpoints.auth.login, credentials);
            localStorage.setItem("token", response.data.token);
            return response.data;
        } catch (error) {
            console.error("Login error:", error);
            if (error.status === 400) {
                console.log("Email or Password is not correct.");
                return;
            }
            throw error;
        }
    },

    register: async (userData) => {
        try {
            const response = await axiosInstance.post(endpoints.auth.register, userData);
            localStorage.setItem("token", response.data.token);
            return response.data;
        } catch (error) {
            if (error.status === 400) {
                toast.warn("User already exist.")
                return;
            }
            console.error("Registration error:", error);
            throw error;
        }
    },
};

export default authService;
