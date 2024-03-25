import Image from "next/image";
import Link from "next/link";

import {
  NAVIGATION_LEFT_BOTTOM_ITEMS,
  NAVIGATION_RIGHT_BOTTOM_ITEMS,
} from "./constants/navigation.constants";

const NavigationBottom = () => {
  return (
    <div>
      {NAVIGATION_LEFT_BOTTOM_ITEMS.map(
        (item) => {
          const { title, src } = item;
          return (
            <div key={title}>
              <Image alt="icon-image" src={src} />
              <span>{title}</span>
            </div>
          );
        },
      )}
      {NAVIGATION_RIGHT_BOTTOM_ITEMS.map(
        (item) => {
          const { title, href, src } = item;
          return (
            <div key={title}>
              <Link href={href}>{title}</Link>
              <Image alt="arrow-icon" src={src} />
            </div>
          );
        },
      )}
    </div>
  );
};

export default NavigationBottom;
