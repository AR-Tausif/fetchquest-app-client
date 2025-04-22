"use client";

import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { logOut } from "@/redux/features/auth.slice";
import { useRouter } from "next/navigation";

export const AuthNav = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logOut());
    router.push("/login");
  };

  return (
    <ul className="flex items-center gap-4">
      <li>
        <Link href="/profile" className="hover:text-primary-600">
          Profile
        </Link>
      </li>
      <li>
        <Link href="/dashboard" className="hover:text-primary-600">
          Dashboard
        </Link>
      </li>
      <li>
        <button
          onClick={handleLogout}
          className="hover:text-primary-600"
        >
          Logout
        </button>
      </li>
    </ul>
  );
};