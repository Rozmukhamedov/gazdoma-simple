import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/AuthProvider";

function PrivateRouter() {
  const location = useLocation();
  const { authRouter }: any = useAuthContext();

  if (authRouter) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
  return <Outlet />;
}

export default PrivateRouter;
