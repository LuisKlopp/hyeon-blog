import Link from "next/link";

import ThemeChanger from "./theme-changer";
import NavigationItem from "./navigation-item";
import { NAVIGATION_TOP_ITEMS } from "./constants/navigation.constants";
import NavigationLogo from "./navigation-logo";

const NavigationHeader = () => {
  return (
    <header className="w-full h-16 flex justify-between items-center px-8">
      <Link href="/">
        <NavigationLogo />
      </Link>
      <div>
        <nav className="flex w-[300px] h-full items-center justify-between text-center space-x-2">
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
