import React, { createContext, useContext, useState } from "react";
import { getCookie } from "../utils/cookie";

const AuthContext = createContext({});

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [authRouter, setAuthRouter] = useState(!!getCookie("token") ? false : true);

  return (
    <AuthContext.Provider
      value={{
        authRouter,
        setAuthRouter,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
