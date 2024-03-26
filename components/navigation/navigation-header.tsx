import Link from "next/link";

import ThemeChanger from "./theme-changer";
import NavigationItem from "./navigation-item";
import { NAVIGATION_TOP_ITEMS } from "./constants/navigation.constants";
import NavigationLogo from "./navigation-logo";

const NavigationHeader = () => {
  return (
    <header className="flex h-20 w-full items-center justify-between">
      <Link href="/">
        <NavigationLogo />
      </Link>
      <div>
        <nav className="flex h-full w-[300px] items-center justify-between space-x-2 text-center">
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
