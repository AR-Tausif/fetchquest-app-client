"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isToken, setIsToken] = useState(true);

  useEffect(() => {
    const token = Cookies.get("auth");
    console.log("token", token);
    if (!token) {
      setIsToken(false);
    }
    if (token) {
      setIsToken(true);
      setIsAuthenticated(false);
    }
  }, []);

  return { isAuthenticated, setIsAuthenticated, isToken };
};
