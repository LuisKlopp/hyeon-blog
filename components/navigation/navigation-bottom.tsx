import Image from "next/image";
import Link from "next/link";

import {
  NAVIGATION_LEFT_BOTTOM_ITEMS,
  NAVIGATION_RIGHT_BOTTOM_ITEMS,
  type BottomLeftItems,
  type BottomRightItems,
} from "./constants/navigation.constants";

const LeftBottomItems = (
  item: BottomLeftItems,
) => {
  const { title, src } = item;
  return (
    <div
      key={title}
      className="flex items-center gap-2"
    >
      <Image
        alt="icon-image"
        src={src}
        className="h-4 w-4"
      />
      <span className="font-light text-white">
        {title}
      </span>
    </div>
  );
};

const RightBottomItems = (
  item: BottomRightItems,
) => {
  const { title, href, src } = item;
  return (
    <div
      key={title}
      className="flex items-center gap-2"
    >
      <Link
        href={href}
        className="font-light text-white"
      >
        {title}
      </Link>
      <Image
        alt="arrow-icon"
        src={src}
        className="h-4 w-4"
      />
    </div>
  );
};

const NavigationBottom = () => {
  return (
    <div className="bg-blogAbsoluteBlack">
      <div className="m-auto flex h-15 max-w-2xl justify-between px-[100px]">
        <div className="flex items-center gap-8">
          {NAVIGATION_LEFT_BOTTOM_ITEMS.map(
            LeftBottomItems,
          )}
        </div>
        <div className="flex items-center gap-8">
          {NAVIGATION_RIGHT_BOTTOM_ITEMS.map(
            RightBottomItems,
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBottom;
