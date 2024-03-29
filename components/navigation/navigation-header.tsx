import Link from "next/link";

import { ThemeChanger } from "@/components/navigation/theme-changer";
import { NavigationItem } from "@/components/navigation/navigation-item";
import { NAVIGATION_TOP_ITEMS } from "./constants/navigation.constants";
import { NavigationLogo } from "@/components/navigation/navigation-logo";

export const NavigationHeader = () => {
  return (
    <header className="flex h-20 w-full items-center justify-between px-4 text-center sm:px-10">
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
        </nav>
      </div>
    </header>
  );
};
