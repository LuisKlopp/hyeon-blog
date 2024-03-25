"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

import BlackModeLogo from "@/public/black-mode-logo.svg";
import WhiteModeLogo from "@/public/white-mode-logo.svg";

const NavigationLogo = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  return (
    <button className="min-w-[50px]">
      <Image
        src={
          isDarkTheme
            ? BlackModeLogo
            : WhiteModeLogo
        }
        alt="logo"
      />
    </button>
  );
};

export default NavigationLogo;
