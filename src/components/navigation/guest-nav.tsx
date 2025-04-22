import Link from "next/link";

export const GuestNav = () => {
  return (
    <ul className="flex items-center gap-4">
      <li>
        <Link href="/login" className="hover:text-primary-600">
          Login
        </Link>
      </li>
      <li>
        <Link href="/sign-up" className="hover:text-primary-600">
          Sign Up
        </Link>
      </li>
    </ul>
  );
};