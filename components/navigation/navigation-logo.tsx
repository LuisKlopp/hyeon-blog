"use client";

import Image from "next/image";

import BlackModeLogo from "@/public/black-mode-logo.svg";
import WhiteModeLogo from "@/public/white-mode-logo.svg";

export const NavigationLogo = () => {
  return (
    <button>
      <Image
        src={BlackModeLogo}
        alt="logo"
        className="hidden dark:block"
        priority
      />
      <Image
        src={WhiteModeLogo}
        alt="logo"
        className="dark:hidden"
        priority
      />
    </button>
  );
};
