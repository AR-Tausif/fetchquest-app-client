"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("auth");
    setIsAuthenticated(!!token);
  }, []);

  return { isAuthenticated };
};