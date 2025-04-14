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
import { useRegisterMutation } from "@/redux/api/auth.api";
import { IRegisterInfo } from "@/types/redux/auth";
import { decodeToken } from "@/utils/decode-token";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth.slice";
import { FormField } from "@/components/forms";

/**
 * Validation schema for Register form
 * Enforces email format and minimum password length
 */
const registerSchema = z.object({
  name: z.string().nonempty("Your name is required"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(5, "Password should be at least 5 characters")
    .nonempty("Password is required"),
  contact: z.string().min(11).max(11).optional(),
});

type RegisterFormData = z.infer<typeof registerSchema>;

/**
 * RegisterForm component
 * Handles create user account with name, mobile number, email and password
 */
export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      contact: "",
    },
  });

  const [registerMutation, { isLoading: isRegisterPending }] =
    useRegisterMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  /**
   * Handle form submission
   * Authenticates user and redirects to home page on success
   */
  const onSubmit = async (formData: RegisterFormData) => {
    try {
      const credentials: IRegisterInfo = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        contact: formData.contact,
      };

      const response = await registerMutation(credentials).unwrap();
      const { accessToken } = response.data;
      const user = decodeToken(accessToken);

      // Store user data in Redux store
      dispatch(setUser({ user, token: accessToken }));

      // If remember me is checked, could store token in localStorage here

      toast.success(response.message || "Successfully logged in");
      router.push("/");
    } catch (error: any) {
      // Handle different error types
      if (error.message) {
        toast.error(error.message);
      } else {
        toast.error("Ragistration failed. Please try again later");
      }
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 md:space-y-6"
      aria-label="Register form"
    >
      <FormField
        id="name"
        label="Full Name"
        type="text"
        placeholder="Enter your full name"
        register={register("name")}
        error={errors.name?.message}
      />

      <FormField
        id="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
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

      <FormField
        id="contact"
        label="Contact"
        type="number"
        placeholder="Enter your contact number"
        register={register("contact")}
        error={errors.contact?.message}
      />

      <div className="flex gap-1">
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
            I accept the
          </label>
        </div>
        <Link
          href="/terms"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Terms and conditions
        </Link>
      </div>

      <AppButton
        disabled={isRegisterPending}
        className="w-full rounded-3xl normal-case"
        aria-busy={isRegisterPending}
      >
        {isRegisterPending ? (
          <span className="flex items-center justify-center gap-2">
            <Loader className="h-4 w-4 animate-spin" />
            <span>Registering in...</span>
          </span>
        ) : (
          "Register"
        )}
      </AppButton>

      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          login here
        </Link>
      </p>
    </form>
  );
}
