"use client";
import Image from "next/image";

import { useTheme } from "next-themes";
import Moon from "@/public/moon-icon.svg";
import Sun from "@/public/sun-icon.svg";

const ThemeChanger = () => {
  const { setTheme, theme } = useTheme();
  const isDarkTheme = theme === "dark";

  const handleThemeToggle = () =>
    setTheme(isDarkTheme ? "light" : "dark");

  return (
    <button
      className=""
      type="button"
      onClick={handleThemeToggle}
    >
      <Image
        src={Moon}
        alt="moon-icon"
        className="h-5 w-5 dark:hidden"
      />
      <Image
        src={Sun}
        alt="sun-icon"
        className="hidden h-5 w-5 dark:block"
      />
    </button>
  );
};

export default ThemeChanger;
