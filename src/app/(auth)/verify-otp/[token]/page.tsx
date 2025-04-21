import { InputOTPForm } from "../_components/verify-otp-form";

export default function VerifyToken({params}) {
    console.log(params)
  return (
    <div className="min-h-screen w-full sm:w-1/2 flex justify-center items-center">
      <InputOTPForm />
    </div>
  );
}
