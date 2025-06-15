import React from "react";

import { useAuth } from "@/providers/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  // if (!user) {
  //   return <Navigate to="/login" />;
  // }

  return children;
};

export default ProtectedRoute;
