"use client";

import Image from "next/image";

import BlackModeLogo from "@/public/icon/black-mode-logo.svg";
import WhiteModeLogo from "@/public/icon/white-mode-logo.svg";

export const NavigationLogo = () => {
  return (
    <button>
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
