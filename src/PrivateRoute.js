import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./firebase/AuthProvider";

export default function PrivateOutlet() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}
