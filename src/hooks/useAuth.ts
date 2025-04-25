"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { token } = useAppSelector((state: RootState) => state.auth);
  useEffect(() => {
    const tokenCookie = Cookies.get("auth");
    setIsAuthenticated(!!token);
    // if (token) {
    //   setIsAuthenticated(true);
    // } else {
    //   setIsAuthenticated(false);
    // }
  }, [token]);

  return { isAuthenticated };
};
