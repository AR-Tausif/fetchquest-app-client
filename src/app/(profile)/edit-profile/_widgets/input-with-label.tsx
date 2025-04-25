import { forwardRef } from "react";

interface InputWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <input
          ref={ref}
          type="text"
          className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          {...props}
        />
      </div>
    );
  }
);

InputWithLabel.displayName = "InputWithLabel";
