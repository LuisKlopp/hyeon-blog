"use client";

import ArrowUpButton from "@/public/arrow-up-button.svg";
import ArrowUpButtonRed from "@/public/arrow-up-button-red.svg";
import Image from "next/image";

export const ScrollToTop = () => {
  const isBrowser = () =>
    typeof window !== "undefined"; //The approach recommended by Next.js

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className={`shadow-custom fixed bottom-0 right-0 z-50 mb-[40px] mr-[60px] h-16 w-16 rounded-lg bg-white dark:bg-blogThickRed`}
      onClick={scrollToTop}
    >
      <Image
        src={ArrowUpButton}
        alt="arrow-up"
        className="m-auto hidden dark:block"
      />
      <Image
        src={ArrowUpButtonRed}
        alt="arrow-up"
        className="m-auto dark:hidden"
      />
    </button>
  );
};
