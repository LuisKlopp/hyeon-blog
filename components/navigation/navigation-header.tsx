import Link from "next/link";

import ThemeChanger from "./theme-changer";
import NavigationItem from "./navigation-item";
import { NAVIGATION_TOP_ITEMS } from "./constants/navigation.constants";
import NavigationLogo from "./navigation-logo";

const NavigationHeader = () => {
  return (
    <header className="flex h-20 w-full items-center justify-between px-15">
      <Link href="/" className="h-[30px]">
        <NavigationLogo />
      </Link>
      <div>
        <nav className="flex h-[19px] items-center justify-between gap-10">
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

export default NavigationHeader;
