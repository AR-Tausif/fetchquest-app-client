import { ReactNode } from "react";

export const AppButton = ({
  children,
  className = "",
  variant = "primary",
  ...props
}: {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "secondary" | "gradient-border";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}) => {
  let buttonStyles = "";

  switch (variant) {
    case "primary":
      buttonStyles = "bg-gradient-to-t from-purple-500 to-pink-500 text-white";
      break;
    case "outline":
      buttonStyles =
        "bg-transparent border-2 border-[#FF9CDE] text-gray-900 hover:bg-gray-100";
      break;
    case "secondary":
      buttonStyles = "bg-blue-500 text-white hover:bg-blue-600";
      break;
    case "gradient-border":
      buttonStyles =
        "border-2 border-transparent bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text hover:bg-gradient-to-l hover:from-blue-500 hover:to-green-400";
      break;
    default:
      buttonStyles = "bg-gradient-to-r from-purple-500 to-pink-500 text-white";
      break;
  }

  return (
    <button
      className={`px-10 py-2 rounded-md font-medium uppercase ${buttonStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
