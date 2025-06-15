import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_API_SOCKET_BASE_URL, {
  path: "/socket.io",
  transports: ["websocket"],
});

import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./AuthProvider";
import notificationStore from "@/store/notification";
const SocketContext = createContext();

export default function SocketProvider({ children }) {
  const { user, getUser } = useAuth();
  const pushNotification = notificationStore((state) => state.push);
  useEffect(() => {
    socket.emit("join_notifications", getUser()?.user?.id);

    socket.on("error_message", (data) => {
      toast.error(data);
    });
    return () => {
      socket.off("error_message");
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}

export const useSocket = () => {
  return useContext(SocketContext);
};
