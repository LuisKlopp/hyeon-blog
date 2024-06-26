"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useParams } from "next/navigation";

import { ThemeChanger } from "@/components/navigation/theme-changer";
import { NavigationItem } from "@/components/navigation/navigation-item";
import { NAVIGATION_TOP_ITEMS } from "./constants/navigation.constants";
import { NavigationMobile } from "./navigation-mobile";
import { NavigationLogo } from "@/components/navigation/navigation-logo";
import { ProgressBar } from "@/components/progress-bar";

import Hamburger from "@/public/icon/hamburger.svg";
import HamburgerBlack from "@/public/icon/hamburger-black.svg";

export const NavigationHeader = () => {
  const { slug } = useParams();
  const [isToggle, setIsToggle] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  useEffect(() => setIsLoaded(true), []);

  return (
    <header className="sticky top-0 z-10 flex h-20 w-full items-center justify-between bg-blogBackground px-4 text-center dark:bg-blogBackgroundBlack sm:px-10">
      <Link
        href="/"
        className="h-5 w-28 min-w-28 sm:w-[160px]"
      >
        <NavigationLogo />
      </Link>
      <div>
        <nav className="flex h-[19px] items-center justify-between gap-5 md:gap-10">
          {NAVIGATION_TOP_ITEMS.map((item) => (
            <NavigationItem
              key={item.title}
              href={item.href}
              title={item.title}
            />
          ))}
          <ThemeChanger />
          <Image
            alt="hamburger"
            src={
              isLoaded && isDarkTheme
                ? Hamburger
                : HamburgerBlack
            }
            className="h-auto w-auto cursor-pointer sm:hidden"
            onClick={() =>
              setIsToggle((prev) => !prev)
            }
          />
        </nav>
      </div>
      {slug && (
        <div className="absolute bottom-0 left-0 w-full bg-gray04">
          <ProgressBar />
        </div>
      )}
      {isToggle && (
        <NavigationMobile
          setIsToggle={setIsToggle}
        />
      )}
    </header>
  );
};
