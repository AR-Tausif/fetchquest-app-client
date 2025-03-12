"use client";
import { APP_ROUTES } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <div className="h-screen w-screen flex justify-center items-center">{isClient && <LottieAnimation />}</div>;
}

function LottieAnimation() {



;

  return (
    <div className="h-screen">
 
      <div className="flex justify-center items-center mb-16 ">
        <Link href={`/${APP_ROUTES.DASHBOARD}`}>
          <button className=" bg-blue-500">
            <ArrowLeftIcon/>
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
