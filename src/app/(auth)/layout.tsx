import { SectionHeading } from "@/components/top-headings/SectionHeading";
import { ReactNode } from "react";

export default function AuthLayout ({ children }: { children: ReactNode }) {
  return (
    <div className="roboto-fonts flex justify-between relative">
      <div className="hidden md:flex w-1/2 rounded-md rounded-r-[2rem] shadow-lg bg-no-repeat bg-cover bg-center bg-[url(https://s3-alpha-sig.figma.com/img/9506/57ac/da9e59e0a3a94114b5d584f121091a2c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iTF~OiQfC4VQXJmoa30eefZzKtkHSZHnGmqiYobGzFyyZMbnRQHm-Fvcw1dlNkUVI~IW4d7rOrBE3WT4e1sVT7nsen1JYwsm7PKes4k5Io-S5~8SJeCM73s7KzZxGsN6AxVmliyGerdCsNn70tM4YhKeQoPbyTEmFnwOX1XXWNL0KVJxvnAWRGxD9EPekPfZ9Yy~AeQ4NYoCRKxWn1xRg~RotCZ60211YnSw9kQC2DHZYPW7AtgvT45tMgtLwXKOyfUNtPWaXVDHahN2SmK52ud15azgP-Kvh4iHk0Qm7SgMx0wZg54gAX2P9RcwESJF79D6AJypWbfsOzqGiumyKg__)]">
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
