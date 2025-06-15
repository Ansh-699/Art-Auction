import { toast } from "react-toastify";
import axiosInstance from "../axiosInstance";
import endpoints from "../endpoints";

const userService = {
  getUserProfile: async (username) => {
    try {
      const response = await axiosInstance.get(
        `${endpoints.users.get}/${username}`
      );
      return response.data;
    } catch (error) {
      toast.error("get profile of user error:", error);
      throw error;
    }
  },

  changeUserInformation: async (username, website, bio) => {
    try {
      const response = await axiosInstance.post(endpoints.users.update, {
        name: username,
        website,
        bio,
      });
      console.log(response);
      return response.data;
    } catch (error) {
      toast.error(error);
      throw error;
    }
  },
  
  changeUserPassword: async (username, currentPassword, newPassword) => {
    try {
      const response = await axiosInstance.post(endpoints.users.password, {
        name: username,
        currentPassword,
        newPassword,
      });
      return response.data;
    } catch (error) {
      toast.error(error);
      throw error;
    }
  },
};

export default userService;
