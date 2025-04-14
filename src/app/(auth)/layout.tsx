import { SectionHeading } from "@/components/top-headings/SectionHeading";
import { ReactNode } from "react";

export default function AuthLayout ({ children }: { children: ReactNode }) {
  return (
    <div className="roboto-fonts flex relative">
      <div className="hidden md:flex w-1/2 rounded-md rounded-r-[2rem] shadow-lg bg-no-repeat bg-cover bg-center bg-[url(/images/blog-photos/giant-monkey.png)]">
        <div className="">
          <SectionHeading
            title="Marvel’s Wolverine Set for an Epic 2025 Launch on PS5"
            className="text-4xl w-2/3 mx-20 font-semibold mt-20 text-gray-100 leading-tight"
          />
        </div>
      </div>
      {children}
    </div>
  );
}
