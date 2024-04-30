"use client";

import { NAVIGATION_TOP_ITEMS } from "./constants/navigation.constants";
import DiagonalArrowIcon from "@/public/icon/diagonal-arrow-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface NavigationMobileProps {
  setIsToggle: Dispatch<SetStateAction<boolean>>;
}

export const NavigationMobile = ({
  setIsToggle,
}: NavigationMobileProps) => {
  return (
    <div className="absolute left-0 top-[80px] flex h-[600px] w-full flex-col items-start gap-16 bg-blogAbsoluteBlack pl-12 pt-20">
      {NAVIGATION_TOP_ITEMS.map((item) => {
        const { href, title } = item;
        return (
          <Link
            key={title}
            href={href}
            className="text-xl font-medium text-white"
            onClick={() =>
              setIsToggle((prev) => !prev)
            }
          >
            {title}
          </Link>
        );
      })}
      <div className="flex items-center gap-2">
        <Link
          href="https://github.com/LuisKlopp"
          target="_blank"
        >
          GitHub
        </Link>
        <Image
          src={DiagonalArrowIcon}
          alt="arrow-image"
          className="h-3 w-3"
        />
      </div>
    </div>
  );
};
