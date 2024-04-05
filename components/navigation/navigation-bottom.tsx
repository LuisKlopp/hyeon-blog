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
      className="flex items-center gap-2 md:text-sm"
    >
      <Image
        alt="icon-image"
        src={src}
        className="h-auto w-auto sm:h-4 sm:w-4"
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
        className="font-light text-white md:text-sm"
        target="_blank"
      >
        {title}
      </Link>
      <Image
        alt="arrow-icon"
        src={src}
        className="h-auto w-auto sm:h-4 sm:w-4"
      />
    </div>
  );
};

export const NavigationBottom = () => {
  return (
    <div className="bg-blogAbsoluteBlack">
      <div className="m-auto flex h-20 max-w-2xl justify-between px-4 sm:h-15 md:px-[100px]">
        <div className="flex flex-col justify-evenly sm:flex-row sm:items-center sm:gap-4 md:gap-8">
          {NAVIGATION_LEFT_BOTTOM_ITEMS.map(
            LeftBottomItems,
          )}
        </div>
        <div className="flex flex-col items-center justify-evenly sm:flex-row sm:gap-4 md:gap-8">
          {NAVIGATION_RIGHT_BOTTOM_ITEMS.map(
            RightBottomItems,
          )}
        </div>
      </div>
    </div>
  );
};
