import { AppButton } from "@/components/buttons/app-button";
import { SectionHeading } from "@/components/top-headings/SectionHeading";
import Link from "next/link";
import RegisterForm from "./_components/register-form";

const SignUp = () => {
  return (
    <section className="w-full md:w-1/2 bg-gray-50 dark:bg-gray-900 py-32">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <SectionHeading
          title="Create an account"
          className="text-[3rem] w-full mb-6 text-center tracking-tighter"
        />
        <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create account
            </h1>
            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
