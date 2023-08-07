import React from "react";
import { useTheme } from "Hooks";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full h-[54px] flex justify-between items-center md:h-70  md:flex-col md:gap-6">
      <div className="md:w-full md:pb-6 md:border-b border-[#848BAB] dark:border-[#333A55]">
        <h1 className="text-primaryLight text-[28px] sm:text-[24px] font-bold dark:text-primaryDark">
          Social Media Dashboard
        </h1>
        <h2 className="text-secondaryLight dark:text-secondaryDark text-[14px] font-bold">
          Total Followers: 23,004
        </h2>
      </div>

      <div className="flex gap-[13px] md:w-full justify-between ">
        <p className="text-secondaryDark dark:text-secondaryDark font-bold capitalize">
          Dark Mode
        </p>
        <button
          onClick={toggleTheme}
          className={`h-6 w-12 rounded-[12px] dark:bg-darkToggle bg-lightToggle px-1 transition-all duration-400 ease-in dark:pl-[28px] dark:pr-0 pr-[28px]
          ${theme === "dark" ? "bg-darkToggle" : "bg-lightToggle"}
          `}
        >
          <div
            className={"h-4 w-4 rounded-full bg-[#F1F3FA] dark:bg-[#333A55] "}
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
