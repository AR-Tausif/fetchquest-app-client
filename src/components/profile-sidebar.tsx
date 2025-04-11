"use client";
import { UserRound } from "lucide-react";
import React, { useState } from "react";

// react icons

export const ProfileSidebar = () => {
  const [isCollapse, setIsCollapse] = useState(true);

  return (
    <aside
      className={`${
        isCollapse ? "py-[20px] px-[30px]" : "py-[15px] px-[10px]"
      } bg-white boxShadow rounded-md transition-all duration-300 dark:bg-slate-900 ease`}
    >
      {isCollapse ? (
        <img
          src="https://i.ibb.co/ZHYQ04D/footer-logo.png"
          alt="logo"
          className="w-[130px] cursor-pointer"
          onClick={() => setIsCollapse(!isCollapse)}
        />
      ) : (
        <img
          src="https://i.ibb.co/0BZfPq6/darklogo.png"
          alt="logo"
          className="w-[50px] mx-auto cursor-pointer"
          onClick={() => setIsCollapse(!isCollapse)}
        />
      )}

      {/* general section */}
      <div className="mt-6">
        <p
          className={`${
            isCollapse ? "text-[1rem]" : "text-[0.9rem] text-center"
          } dark:text-[#abc2d3] text-gray-500 font-[400]`}
        >
          General
        </p>

        <div className="mt-3 flex flex-col gap-[5px]">
          <div
            className={`${
              isCollapse ? "justify-between" : "justify-center"
            } flex items-center w-full hover:bg-gray-50 p-[5px] dark:hover:bg-slate-800/50 rounded-md cursor-pointer transition-all duration-200 relative group`}
          >
            <div className="flex items-center gap-[8px]">
              <UserRound className="text-[1.3rem] dark:text-[#abc2d3] text-gray-800" />
              <p
                className={`${
                  isCollapse ? "inline" : "hidden"
                } text-[1.1rem] font-[400] text-gray-800 dark:text-[#abc2d3]`}
              >
                Recruitment
              </p>
            </div>

            {/* tooltip */}
            <div
              className={`${
                isCollapse ? "hidden" : "inline"
              } absolute top-0 right-[-118px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}
            >
              <p className="text-[0.9rem] w-max dark:bg-slate-800 dark:text-[#abc2d3] bg-gray-600 text-secondary rounded px-3 py-[5px]">
                Recruitment
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
