import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1536px] mx-auto">
      {children}
    </div>
  );
};


// minsm:max-w-[640px] minmd:max-w-[768px] minlg:max-w-[1024px] minxl:max-w-[1280px] min2xl:max-w-[1536px] mx-auto