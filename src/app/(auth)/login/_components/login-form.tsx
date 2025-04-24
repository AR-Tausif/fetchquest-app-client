"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import { toast } from "sonner";

import { AppButton } from "@/components/buttons/app-button";
import { useLoginMutation } from "@/redux/api/auth.api";
import { ILoginInfo } from "@/types/redux/auth";
import { decodeToken } from "@/utils/decode-token";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth.slice";
import { FormField } from "@/components/forms";
import Cookies from "js-cookie";

/**
 * Validation schema for login form
 * Enforces email format and minimum password length
 */
const loginSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(5, "Password should be at least 5 characters")
    .nonempty("Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

/**
 * LoginForm component
 * Handles user authentication with email and password
 */
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [login, { isLoading: isLoginPending }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  /**
   * Handle form submission
   * Authenticates user and redirects to home page on success
   */
  const onSubmit = async (formData: LoginFormData) => {
    try {
      const credentials: ILoginInfo = {
        email: formData.email,
        password: formData.password,
      };

      const response = await login(credentials).unwrap();
      const { accessToken } = response.data;
      const user = decodeToken(accessToken);

      // Store user data in Redux store (which will also set the cookie)
      dispatch(setUser({ user, token: accessToken }));
      

      toast.success(response.message || "Successfully logged in");
      router.push("/"); // Will be handled by middleware if needed
    } catch (error: any) {
      // Handle different error types
      if (error.status === 401) {
        toast.error("Invalid email or password");
      } else if (error.status === 403) {
        toast.error("Your account has been disabled");
      } else {
        toast.error("Login failed. Please try again later");
      }
    }
  };

  

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 md:space-y-6"
      aria-label="Login form"
    >
      <FormField
        id="email"
        label="Email address"
        type="email"
        placeholder="name@company.com"
        register={register("email")}
        error={errors.email?.message}
      />

      <FormField
        id="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        placeholder="••••••••"
        register={register("password")}
        error={errors.password?.message}
        showPasswordToggle={true}
        showPassword={showPassword}
        onTogglePassword={togglePasswordVisibility}
      />

      {/* <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 text-sm text-gray-500 dark:text-gray-400"
          >
            Remember me
          </label>
        </div>
        <Link
          href="/forgot-password"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Forgot password?
        </Link>
      </div> */}

      <AppButton
        disabled={isLoginPending}
        className="w-full rounded-3xl normal-case"
        aria-busy={isLoginPending}
      >
        {isLoginPending ? (
          <span className="flex items-center justify-center gap-2">
            <Loader className="h-4 w-4 animate-spin" />
            <span>Signing in...</span>
          </span>
        ) : (
          "Sign in"
        )}
      </AppButton>

      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don&apos;t have an account?{" "}
        <Link
          href="/sign-up"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Register here
        </Link>
      </p>
    </form>
  );
}
