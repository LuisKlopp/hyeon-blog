"use client";

import Image from "next/image";
// import { useTheme } from "next-themes";

import BlackModeLogo from "@/public/black-mode-logo.svg";
import WhiteModeLogo from "@/public/white-mode-logo.svg";

const NavigationLogo = () => {
  return (
    <button className="min-w-[50px]">
      <Image
        src={BlackModeLogo}
        alt="logo"
        className="hidden dark:block"
      />
      <Image
        src={WhiteModeLogo}
        alt="logo"
        className="dark:hidden"
      />
    </button>
  );
};

export default NavigationLogo;
